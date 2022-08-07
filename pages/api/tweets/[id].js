import { db } from '../../../firebase/admin'

export default function handler (request, response) {
  const { query } = request
  const { id } = query

  db
    .collection('twits')
    .doc(id)
    .get()
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
