import styled from 'styled-components'
import { mainBlue } from '../../common/constant'

export const PostViewerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Title = styled.p`
  margin: 2rem 1rem;
  font-size: 2.75rem;
`

export const UserName = styled.a`
  color: ${mainBlue};
`

export const Date = styled.p`
  padding: 0 1rem;
  color: rgb(134, 142, 150);
`

export const BtnContainer = styled.div`
  margin-left: auto;
  margin-right: 1rem;
`

export const EditBtn = styled.a`
  margin-left: 1rem;
  color: ${mainBlue};
`

export const UserContentsContainer = styled.div`
  margin: 1rem;
  font-size: 1.12rem;
  display: flex;
  flex-direction: row;
  width: 100%;
`
