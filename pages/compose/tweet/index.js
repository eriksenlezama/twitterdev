import { useEffect, useState } from 'react'
import Button from 'components/Button'
import useUser from 'hooks/useUser'
import Image from 'next/image'

import { addTweet, uploadImage } from '../../../firebase/client'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Avatar from 'components/Avatar'

import { getDownloadURL } from 'firebase/storage'

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1
}

const DRAG_IMAGE_STATE = {
  ERROR: -1,
  DRAG_LEAVE: 0,
  DRAG_ENTER: 1,
  DROP: 3
}

export default function Tweet () {
  const user = useUser()
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
  const [dragStatus, setDragStatus] = useState(DRAG_IMAGE_STATE.DRAG_LEAVE)
  const [image, setImage] = useState(null)
  const [message, setMessage] = useState('')
  const router = useRouter()
  const [task, setTask] = useState(null)

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  useEffect(() => {
    if (task) {
      const onProgress = (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
      }
      const onError = (err) => console.log(err)
      const onComplete = () => {
        getDownloadURL(task.snapshot.ref)
          .then(setImage)
      }
      task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addTweet({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.userName,
      image
    }).then(() => {
      router.push('/home')
    }).catch(err => {
      console.log(err)
      setStatus(COMPOSE_STATES.ERROR)
    })
  }

  const handleDragEnter = e => {
    e.preventDefault()
    setDragStatus(DRAG_IMAGE_STATE.DRAG_ENTER)
  }

  const handleDragLeave = e => {
    e.preventDefault()
    setDragStatus(DRAG_IMAGE_STATE.DRAG_LEAVE)
  }

  const handleDrop = async e => {
    e.preventDefault()
    const dataImage = e.dataTransfer.files[0]
    if (
      dataImage.type === 'image/jpeg' ||
      dataImage.type === 'image/jpg' ||
      dataImage.type === 'image/png'
    ) {
      const task = uploadImage(dataImage)

      task.then(res => {
        setTask(res.task)
      })
    }
    setDragStatus(DRAG_IMAGE_STATE.DROP)
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <Head>
        <title>Create Tweet / TwitterDev</title>
      </Head>
      <section>
        {user && (
          <div className='avatar-container'>
            <Avatar src={user.avatar} />
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder='What is happening?'
            value={message}
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          ></textarea>
          {image && (
          <div className='image-container'>
            <Image src={image} layout='fill' alt={image.name} />
          </div>
          )}
          <div>
            <Button
              disabled={isButtonDisabled}
            >Tweet</Button>
          </div>
        </form>
      </section>

      <style jsx>{`
        section {
          display: flex;
          width: 100%;
          align-items: flex-start;
          height: 100%;
        }

        div:not(.image-container, .avatar-container) {
          padding: 16px;
        }

        .avatar-container {
          padding: 10px 0 0 10px;
        }

        textarea {
          outline: 0;
          border: 0;
          resize: none;
          font-size: 20px;
          width: 100%;
          height: 200px;
          border: ${dragStatus === DRAG_IMAGE_STATE.DRAG_ENTER ? '3px dashed #09f;' : '3px solid transparent;'}
          border-radius: 10px;
        }

        form {
          width: 100%;
          height: 100vh;
          padding: 16px;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 240px;
        }
      `}</style>
    </>
  )
}
