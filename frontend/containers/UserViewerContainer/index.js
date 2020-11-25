import CardList from '../../components/CardList'
import EmailBtn from '../../components/EmailBtn'
import GithubBtn from '../../components/GithubBtn'
import PageLayout from '../PageLayout'

import * as S from './style'

export default function UserViewerContainer({ posts, user }) {
  return (
    <PageLayout title={`Record - ${user.name}`}>
      <S.UserProfileContainer>
        <S.UserName>{user.name}</S.UserName>
        <S.UserProfile>{user.profile}</S.UserProfile>
        <S.UserBtnContainer>
          <EmailBtn href={`mailto:${user.email}`} />
          {user.githubLink && (
            <GithubBtn href={`https://github.com/${user.githubLink}`} />
          )}
        </S.UserBtnContainer>
      </S.UserProfileContainer>
      <S.Line />
      <S.UserPostContainer>
        <S.UserPostTitle>{user.name}의 포스트</S.UserPostTitle>
        <CardList posts={posts} />
      </S.UserPostContainer>
    </PageLayout>
  )
}
