import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import * as S from "./style";

import PostContentsEditor from '../../components/PostContentsEditor'
import PostContentsViewer from '../../components/PostContentsViewer'

export default function PostEditContainer() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const viewerRef = useRef(null)
  const editorRef = useRef(null)
  
  useEffect(() => {
    console.log(editorRef)
    const {scrollHeight, scrollTop, clientHeight} = editorRef.current

    scrollHeight: 940
    scrollTop: 765
    clientHeight: 175

    if (
      viewerRef && 
      editorRef && 
      editorRef.current?.scrollHeight &&
      scrollHeight - clientHeight === scrollTop
    ) {
      viewerRef.current.scrollTop = viewerRef.current.scrollHeight
    }
  }, [contents]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8"></meta>
      </Head>
      <S.PostEditContainer>
        <PostContentsEditor 
          editorRef={editorRef}
          initialTitle={""} 
          initialMarkdown={""}
          onChangeTitle={setTitle} 
          onChangeMarkdown={setContents}
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

