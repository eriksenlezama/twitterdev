import Avatar from 'components/Avatar'

export default function Twit ({ avatar, id, message, username }) {
  return (
    <>
      <article key={id}>
        <div>
          <Avatar
            alt={username}
            src={avatar}
          />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 12px;
          border-bottom: 2px solid #e8f4ff;
        }

        div {
          width: 60px;
        }

        section {
          width: fit-content;
        }
      `}</style>
    </>
  )
}
