//import React from 'react';
import React, { useState, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {marked} from 'marked';

function App() {
  return (
    <div className="App">
      <header>
      <div>
      <h1>Markdown previewer</h1>
      <div className="row">
        <div className="col-12 container">
        <Editor/>
        </div>
      </div>
      <TextArea/>

    </div>
        
        
      </header>
    </div>
  );
}

class TextArea extends React.Component {
  render() {
      return (
        <div id="preview" dangerouslySetInnerHTML={{__html: this.props.value}} />
          
      );
  }
}

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    const renderer = new marked.Renderer();

    marked.setOptions({
      breaks: true,
      renderer: renderer,
    });

  const textIn = 
  `# This is an h1

  ## This is an h2

  [MSN](https://www.msn.com/)

  You inline code like this: \`<div></div>\`, between 2 backticks

  This is a code block using 3 backticks:
  \`\`\`
  # code block
  print '3 backticks or'
  print 'indent 4 spaces'
  \`\`\`

  * This is a list item

>Blockquote

  ![Markdown logo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

  This is **bold text**
  `;

    this.state = {
      value: textIn
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <textarea name="editor" id="editor" cols="30" rows="10"  onChange={this.handleChange} defaultValue={this.state.value}></textarea>      
        </div>
        <div className="output">
          <TextArea value={marked(this.state.value)} />      
        </div>
      </div>
    );
  }
}

export default App;

