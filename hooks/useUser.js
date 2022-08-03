import { useState, useEffect } from 'react'
import { isLogedIn } from '../firebase/client'
import { useRouter } from 'next/router'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}

export default function useUser () {
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    isLogedIn(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push('/')
  }, [user, router])

  return user
}
