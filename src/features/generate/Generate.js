import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  generateInput,
} from './generateSlice';
import styles from './Counter.module.css';

import { marked } from 'marked';


export function Markdown() {
  //<textarea className="editor" id="editor" onKeyUp={(event) => setText(event.target.value)}></textarea>
  const dispatch = useDispatch();
  marked.setOptions({
    breaks: true
  })
  let textVal = `# Welcome to my React Markdown Previewer!`
  //document.getElementById('preview').innerHTML = marked.parse(textVal)
  return (
    <div>
      <h1>Markdown previewer</h1>
      <div className="row">
        <div className="col-6 container">
          <textarea defaultValue={textVal} className="editor" id="editor" onKeyUp={(event) => document.getElementById('preview').innerHTML = marked.parse(event.target.value)}></textarea>
        </div>
        <div  className="col-6 preview">
        <div id="preview">{marked.parse(textVal)}</div>
        </div>
      </div>
      

    </div>
  );
}


