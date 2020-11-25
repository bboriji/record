import styled from 'styled-components'
import { mainBlue } from '../../common/constant'
import { mediaQuery } from '../../common/media'
import { tabSize, screenSize } from '../../common/constant'

export const UserProfileContainer = styled.div`
  width: 100%;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  ${mediaQuery(screenSize.large)} {
    width: ${tabSize.middle}px;
  }
  ${mediaQuery(screenSize.middle)} {
    padding: 0 2rem;
    width: ${tabSize.small - 32}px;
  }
  ${mediaQuery(tabSize.small)} {
    padding: 0 2rem;
    width: calc(100% - 2rem);
  }
`

export const UserName = styled.p`
  margin: 3rem 0 0 0;
  font-weight: bold;
  font-size: 2rem;
  color: ${mainBlue};
  text-decoration: none;
`

export const UserProfile = styled.p`
  word-break: break-word;
  overflow-wrap: break-word;
  margin: 0.1rem 0 0 0;
  font-size: 1.1rem;
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const UserBtnContainer = styled.div`
  margin: 1.825rem 0;
  display: flex;
  flex-direction: row;
`

export const UserPostTitle = styled.p`
  margin: 1rem auto;
  font-weight: bold;
  font-size: 1.4rem;
  color: gray;
`

export const UserPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Line = styled.div`
  background: rgb(233, 236, 239);
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`

export const EditBtn = styled.a`
  margin-right: 1rem;
  color: ${mainBlue};
`
