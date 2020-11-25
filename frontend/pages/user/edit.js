import 'next'
import UserEditContainer from '../../containers/UserEditContainer'
import axios from 'axios'

export default function UserEdit({ user }) {
  return <UserEditContainer user={user} />
}
