import * as S from './style'
import { Button } from 'antd'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const MarkdownEditor = dynamic(() => import('../MarkdownEditor'), {
  ssr: false,
})

const PostTitleEditor = ({ initText, onChangeTitle }) => {
  useEffect(() => {
    if (initText) {
      onChangeTitle(initText)
    }
  }, [])

  return (
    <>
      <S.PostTitleEditor
        type={'text'}
        defaultValue={initText}
        onChange={(event) => onChangeTitle(event.target.value)}
        placeholder={'제목을 입력하세요.'}
      />
    </>
  )
}

const PostEditHeader = ({ onClickSubmit, initPost }) => (
  <S.PostEditHeaderContainer>
    <Button
      href={!!initPost ? `/post/${initPost.id}` : '/'}
      style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        padding: '0px 1.25rem',
      }}
    >
      나가기
    </Button>
    <Button
      type={'primary'}
      style={{
        marginLeft: 'auto',
        fontSize: '1rem',
        padding: '0px 1.25rem',
      }}
      onClick={() => onClickSubmit(true)}
    >
      {!!initPost ? `수정하기` : `글쓰기`}
    </Button>
  </S.PostEditHeaderContainer>
)

export default function PostContentsEditor({
  initPost,
  editorRef,
  onChangeTitle,
  initialTitle,
  onChangeMarkdown,
  initialMarkdown,
  onClickSubmit,
}) {
  return (
    <S.PostContentsEditorContainer>
      <PostEditHeader onClickSubmit={onClickSubmit} initPost={initPost} />
      <S.ScrollableEditor>
        <PostTitleEditor
          initText={initialTitle}
          onChangeTitle={onChangeTitle}
        />
        <S.PostContentsEditor ref={editorRef}>
          <MarkdownEditor
            onChangeMarkdown={onChangeMarkdown}
            initialMarkdown={initialMarkdown}
          />
        </S.PostContentsEditor>
      </S.ScrollableEditor>
    </S.PostContentsEditorContainer>
  )
}
