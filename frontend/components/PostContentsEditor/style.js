import styled from "styled-components";

export const PostContentsEditorContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const PostContentsEditor = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1; /* flex: 1 1 0 */
  overflow: auto;
`

export const PostTitleEditor = styled.input`
  width: 100%;
  height: auto;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  padding: 1.5rem;
  box-shadow: 0px 0px 2px 0px gray;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕,
    "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum,
    Tahoma, Geneva, sans-serif;
  font-size: 2rem;
  margin-bottom: 2px;
`

export const PostEditHeaderContainer = styled.div`
  display: flex;
  padding: 1rem 1rem;
`