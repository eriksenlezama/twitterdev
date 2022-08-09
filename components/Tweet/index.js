import Avatar from 'components/Avatar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Tweet ({ avatar, id, content, userName, createdAt, image }) {
  const router = useRouter()

  const handleArticleClick = e => {
    e.preventDefault()
    router.push(`/status/${id}`)
  }

  const timeTitle = new Date(createdAt).toLocaleDateString()

  return (
    <>
      <article onClick={handleArticleClick} key={id}>
        <div className='avatar'>
          <Avatar
            alt={userName}
            src={avatar}
          />
        </div>
        <section>
          <header>
            <strong>
              {userName}
            </strong>
            <span> . </span>
            <Link href={`/status/${id}`}>
              <a className='time-link'>
                <time title={timeTitle} dateTime={timeTitle}>{timeTitle}</time>
              </a>
            </Link>
          </header>
          <p>{content}</p>
          {image && <div className='image'>
            <Image src={image} alt={content} objectFit='cover' layout='fill' />
          </div>}
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 12px;
          border-bottom: 2px solid #eee;
          cursor: pointer;
          width: 100%;
        }

        article:hover {
          background-color: #0099ff0d;
        }

        .avatar {
          width: 50px;
        }

        .image {
          position: relative;
          height: 240px;
          margin-top: 10px;
        }

        section {
          margin-left: 8px;
          width: 100%;
        }

        p {
          margin: 0;
          font-size: 16px;
        }

        .time-link {
          text-decoration: none;
        }

        .time-link:hover {
          text-decoration: underline;
        }
      `}</style>

      <style jsx global>{`
        .image img {
          border-radius: 16px;
          height: auto;
        }
      `}</style>
    </>
  )
}
