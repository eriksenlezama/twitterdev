import { fetchTweet } from '../../../firebase/client'

export default function handler (request, response) {
  const { query } = request
  const { id } = query

  fetchTweet(id)
    .then(doc => {
      const id = doc.id
      const data = doc.data()
      const { createdAt } = data

      const res = {
        ...data,
        id,
        createdAt: +createdAt.toDate()
      }

      response.json(res)
    })
    .catch(() => {
      response.status(404).end()
    })
}
