import axios from 'axios'
import { baseURL } from '../common/api'

export const me = async (req) => {
  console.log(req.cookies)
  const data = req.cookie['record_token']

  try {
    const { data } = await axios.post(
      `${baseURL}/me`, 
      { token: data }, 
      { withCredentials: true},
    )
    return data
  } catch (error) {
    return {}
  }
}