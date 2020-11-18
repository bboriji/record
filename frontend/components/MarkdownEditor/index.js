import { useEffect, useRef, useCallback } from 'react'

import styled from "styled-components";

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';

const MarkdownEditorBlock = styled.div`
  flex: 1; /* flex: 1 1 0 */
  width: 100%;

  .CodeMirror {
    padding: 0 1.5rem 0 1.5rem;
    height: 100%;
    font-size: 1.1rem;
    line-height: 1.5;
    font-family: 'Fira Mono', monospace;
    /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', */
    .cm-header {
      line-height: 2;
      /* color: ${palette.gray9}; */
    }
    .cm-header-1 {
      font-size: 1.8rem;
    }
    .cm-header-2 {
      font-size: 1.6rem;
    }
    .cm-header-3 {
      font-size: 1.4rem;
    }
    .cm-header-4,
    .cm-header-5,
    .cm-header-6 {
      font-size: 1.2rem;
    }
    .cm-strong,
    .cm-em {
      /* color: ${palette.gray9}; */
    }
    .CodeMirror-placeholder {
      color: gray;
      font-style: italic;
    }
  }
`;

export default function MarkdownEditor ({
  editorRef,
  style,
  className,
  onChangeMarkdown,
  initialMarkdown,
}) {
  const textArea = useRef(null);
  const codemirror = useRef(null);

  const onChange = useCallback(
    (cm) => {
      onChangeMarkdown(cm.getValue());
    },
    [onChangeMarkdown],
  );

  // initialize editor
  useEffect(() => {
    if (!textArea.current) return;
    const cm = CodeMirror.fromTextArea(textArea.current, {
      mode: 'markdown',
      theme: 'one-light',
      lineWrapping: true,
    });
    codemirror.current = cm;
    cm.focus();
    cm.on('change', onChange);

    if (initialMarkdown) {
      cm.setValue(initialMarkdown);
    }

    return () => {
      cm.toTextArea();
    };
  }, [initialMarkdown, onChange]);

  return (
    <MarkdownEditorBlock ref={editorRef} style={style} className={className}> 
      <textarea ref={textArea} style={{ border: 'none', display: 'none' }} />
    </MarkdownEditorBlock>
  );
};