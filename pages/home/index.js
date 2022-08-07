import { useState, useEffect } from 'react'
import Twit from 'components/Twit'
import { fetchLatestTwits, GithubSignOut } from '../../firebase/client'
import useUser from 'hooks/useUser'
import Link from 'next/link'
import Create from 'components/Icons/Create'
import Search from 'components/Icons/Search'
import HomeIcon from 'components/Icons/Home'
import Head from 'next/head'

export default function Home () {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestTwits()
      .then(setTimeline)
  }, [user])

  const signOut = () => {
    GithubSignOut()
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Head>
        <title>Inicio / TwitterDev</title>
      </Head>
      <header>
        {/* <Avatar width={35} height={35} /> */}
        <h2>Inicio</h2>
        <button onClick={signOut}>
          Log out
        </button>
      </header>
      <section>
        {timeline.map(({ id, avatar, content, userName, createdAt, image }) => (
          <Twit
            key={id}
            userName={userName}
            content={content}
            avatar={avatar}
            id={id}
            image={image}
            createdAt={createdAt}
          />
        ))}
      </section>
      <nav>
        <Link href='/home'>
          <a>
            <HomeIcon width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href='/search'>
          <a>
            <Search width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href='/compose/tweet'>
          <a>
            <Create width={32} height={32} stroke="#09f" />
          </a>
        </Link>
      </nav>

      <style jsx>{`
        header {
          border-bottom: 1px solid #ccc;
          height: 49px;
          position: absolute;
          top: 0;
          width: 100%;
          display: flex;
          align-items: center;
        }

        h2 {
          font-size: 20px;
        }

        section {
          width: 100%;
          height: calc(100% - 98px);
          overflow-y: scroll;
        }

        section::-webkit-scrollbar {
          display: none;
        }

        nav {
          bottom: 0;
          border-top: 1px solid #ccc;
          height: 49px;
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
    </>
  )
}
