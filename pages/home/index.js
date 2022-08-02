import { useState, useEffect } from 'react'
import AppLayout from 'components/AppLayout'
import Avatar from 'components/Avatar'
import Twit from 'components/Twit'

export default function Home () {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/statuses/home_timeline')
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <AppLayout>
        <header>
          {/* <Avatar width={35} height={35} /> */}
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, avatar, message, username }) => (
            <Twit
              key={id}
              username={username}
              message={message}
              avatar={avatar}
              id={id}
            />
          ))}
        </section>
        <nav>
        </nav>
      </AppLayout>
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
        }
      `}</style>
    </>
  )
}
