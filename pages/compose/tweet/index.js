import { useState } from 'react'
import AppLayout from 'components/AppLayout'
import Button from 'components/Button'
import useUser from 'hooks/useUser'

import { addTweet } from '../../../firebase/client'
import { useRouter } from 'next/router'
import Head from 'next/head'

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1
}

export default function Tweet () {
  const user = useUser()
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addTweet({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.userName
    }).then(() => {
      router.push('/home')
    }).catch(err => {
      console.log(err)
      setStatus(COMPOSE_STATES.ERROR)
    })
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout>
        <Head>
          <title>Crear un Tweet / TwitterDev</title>
        </Head>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder='¿Qué está pasando?'
            value={message}
            onChange={handleChange}
          ></textarea>
          <div>
            <Button
              disabled={isButtonDisabled}
            >Twittear</Button>
          </div>
        </form>
      </AppLayout>

      <style jsx>{`
        div {
          padding: 16px;
        }

        textarea {
          outline: 0;
          border: 0;
          padding: 16px;
          resize: none;
          font-size: 20px;
          width: 100%;
        }
      `}</style>
    </>
  )
}
