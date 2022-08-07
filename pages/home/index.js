import { useState, useEffect } from 'react'
import Tweet from 'components/Tweet'
import { GithubSignOut, listenLatestTweets } from '../../firebase/client'
import useUser from 'hooks/useUser'
import Link from 'next/link'
import Create from 'components/Icons/Create'
import Search from 'components/Icons/Search'
import HomeIcon from 'components/Icons/Home'
import Head from 'next/head'
import { colors } from 'styles/theme'

export default function Home () {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    let unsubscribe
    if (user) {
      unsubscribe = listenLatestTweets(setTimeline)
    }

    return () => unsubscribe && unsubscribe()
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
        <title>Home / TwitterDev</title>
      </Head>
      <header>
        <h2>Home</h2>
        <button onClick={signOut}>
          Log out
        </button>
      </header>
      <section>
        {timeline.map(({ id, avatar, content, userName, createdAt, image }) => (
          <Tweet
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
          justify-content: space-between;
        }

        h2 {
          font-size: 20px;
          margin-left: 12px;
        }

        button {
          margin-right: 12px;
          border: none;
          background: transparent;
          color: ${colors.black};
          padding: 8px 15px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {

          text-decoration: underline;
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
