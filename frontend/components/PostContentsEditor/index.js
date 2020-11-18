import * as S from "./style";
import { useState, useEffect } from 'react'

import { Button } from 'antd'

import dynamic from 'next/dynamic'
const  MarkdownEditor = dynamic(() => import('../MarkdownEditor'), {ssr: false})

const PostTitleEditor = ({ text, onChangeTitle }) => (
  <>
    <S.PostTitleEditor
      type={"text"} 
      value={text}
      onChange={(event) => onChangeTitle(event.target.value)}
      placeholder={"제목을 입력하세요."}
    />
  </>
)

const PostEditHeader = () => (
    <S.PostEditHeaderContainer>
      <Button style={{
        fontSize: '1rem',
        fontWeight: "bold",
        padding: "0px 1.25rem"
      }}>나가기</Button>
      <Button 
        type={"primary"}
        style={{
          marginLeft: "auto", 
          fontSize: '1rem', 
          padding: "0px 1.25rem"}}
      >글쓰기</Button>
    </S.PostEditHeaderContainer>
  )

export default function PostContentsEditor({
    editorRef,
    onChangeTitle,  
    initialTitle,  
    onChangeMarkdown,
    initialMarkdown,
  }) {
    const [titleValue, setTitleValue] = useState()
    useEffect(() => {
      if(initialTitle) {
        setTitleValue(titleValue)
      }
    }, [initialTitle, setTitleValue])

    return (
      <S.PostContentsEditorContainer>
        <PostEditHeader></PostEditHeader>
        <PostTitleEditor text={titleValue} onChangeTitle={onChangeTitle} />
        <S.PostContentsEditor ref={editorRef}>
          <MarkdownEditor 
            onChangeMarkdown={onChangeMarkdown}
            initialMarkdown={initialMarkdown}
          />
        </S.PostContentsEditor>
      </S.PostContentsEditorContainer>
    )
  }