import { useRef, useEffect } from 'react' 

import hljs from "highlight.js";
import markdown from "markdown-it";

import * as S from "./style";

const md = new markdown({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});



export default function PostContentsViewer ({ viewerRef, contents, title }) {
  return (
    <S.PostContentsViewer ref={viewerRef}>
      { title ? <S.PostTitleViewer value={title}></S.PostTitleViewer> : <></> }
      <S.Contents dangerouslySetInnerHTML={{ __html: md.render(contents) }} />
    </S.PostContentsViewer>
  );
}