import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL } from '../common/api'

// useRequest.js
export const useRequest = ({ url, method, body = {} }) => {
  const [fetch, setFetch] = useState(true)
  const [response, setResponse] = useState()

  useEffect(() => {
    if (fetch) {
      setFetch(false)
      axios
        .all({
          url,
          method,
          data: body,
          baseURL,
          withCredentials: true,
        })
        .then((value) => {
          console.log(value)
          setResponse(value)
        })
        .catch((value) => {
          console.log(value)
          setResponse(value)
        })
    }
  }, [fetch])

  return [response, setFetch]
}
