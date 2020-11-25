import Card from '../Card'

export default function CardList({ posts }) {
  return (
    <>
      {posts ? (
        posts.map((post) => <Card post={post} key={post.id} />)
      ) : (
        <p>포스트가 없습니다.</p>
      )}
    </>
  )
}
