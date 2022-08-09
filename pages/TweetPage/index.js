import Tweet from 'components/Tweet'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home ({ key, userName, content, avatar, id, image, createdAt }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{userName}: {content}</title>
      </Head>
      <div className='tweet-container'>
        <header>
          <button onClick={() => router.back()}>&#x2190;</button>
          <h3>Tweet</h3>
        </header>
        <Tweet
          userName={userName}
          content={content}
          avatar={avatar}
          id={id}
          image={image}
          createdAt={createdAt}
        />
      </div>

      <style jsx>{`
        .tweet-container {
          height: 100%;
          width: 100%;
        }

        header {
          display: flex;
        }

        header button {
          margin: 0 12px;
          font-size: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
