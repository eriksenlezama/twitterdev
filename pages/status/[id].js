import Twit from 'components/Twit'

export default function TweetPage (props) {
  return (
    <>
      <Twit {...props} />
      <style jsx>{`
        div {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps (context) {
  const { params, res } = context
  const { id } = params

  const url = `http://localhost:3000/api/tweets/${id}`

  const apiResponse = await fetch(url)

  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return { props }
  }

  if (res) {
    res.writeHead(301, { location: '/home' }).end()
  }
}
