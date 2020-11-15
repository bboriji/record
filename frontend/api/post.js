import axios from 'axios'
import { baseURL } from '../common/api'

export const getPosts = async () => {
  const { data: posts } = await axios.get(`${baseURL}/posts`)
  return posts
}