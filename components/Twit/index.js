import Avatar from 'components/Avatar'
import useTimeAgo from 'hooks/useTimeAgo'
import Image from 'next/image'

export default function Twit ({ avatar, id, content, userName, createdAt, image }) {
  const timeago = useTimeAgo(createdAt)

  return (
    <>
      <article key={id}>
        <div className='avatar'>
          <Avatar
            alt={userName}
            src={avatar}
          />
        </div>
        <section>
          <p><strong>{userName}</strong> . {timeago}</p>
          <p>{content}</p>
          {image && <div className='image'>
            <Image src={image} alt={content} layout='fill' />
          </div>}
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 12px;
          border-bottom: 2px solid #eee;
        }

        .avatar {
          width: 50px;
        }

        .image {
          position: relative;
          width: 100%;
          height: 240px;
        }

        section {
          margin-left: 8px;
          width: fit-content;
        }

        p {
          margin: 0;
          font-size: 16px;
        }
      `}</style>
    </>
  )
}
