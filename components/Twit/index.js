import Avatar from 'components/Avatar'
import useTimeAgo from 'hooks/useTimeAgo'

export default function Twit ({ avatar, id, content, userName, createdAt }) {
  const timeago = useTimeAgo(createdAt)

  return (
    <>
      <article key={id}>
        <div>
          <Avatar
            alt={userName}
            src={avatar}
          />
        </div>
        <section>
          <p><strong>{userName}</strong> . {timeago}</p>
          <p>{content}</p>
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 12px;
          border-bottom: 2px solid #eee;
        }

        div {
          width: 60px;
        }

        section {
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
