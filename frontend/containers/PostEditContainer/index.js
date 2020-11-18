import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

import * as S from "./style";
import PostContentsEditor from '../../components/PostContentsEditor'
import PostContentsViewer from '../../components/PostContentsViewer'

export default function PostEditContainer({ initPost }) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [submit, setSubmit] = useState(false);

  const viewerRef = useRef(null)
  const editorRef = useRef(null)
  
  useEffect(() => {
    const {scrollHeight, scrollTop, clientHeight} = editorRef.current

    if (
      viewerRef && 
      editorRef && 
      editorRef.current?.scrollHeight &&
      scrollHeight - clientHeight === scrollTop
    ) {
      viewerRef.current.scrollTop = viewerRef.current.scrollHeight
    }
  }, [contents]);

  useEffect(() => {
    if (!submit) return;

    axios.post('')
    alert('글쓰기')
    setSubmit(false)
  
  }, [submit, setSubmit])

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8"></meta>
      </Head>
      <S.PostEditContainer>
        <PostContentsEditor 
          initPost={initPost}
          editorRef={editorRef}
          initialTitle={initPost?.title ? initPost.title : ""} 
          initialMarkdown={initPost?.contents ? initPost.contents : ""}
          onChangeTitle={setTitle} 
          onChangeMarkdown={setContents}
          onClickSubmit={setSubmit}
        />
        <PostContentsViewer 
          viewerRef={viewerRef}
          contents={contents}
          title={title}
        />
      </S.PostEditContainer>
    </>
  )
}

