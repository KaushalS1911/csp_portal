import{j as s,B as l,p as o,C as i,S as p,D as t,H as h}from"./index-cs8KH1Gj.js";import{M as e}from"./markdown-vVk34PJL.js";import{C as c}from"./custom-breadcrumbs-xf4gSwnQ.js";import{C as d}from"./component-hero-dZ0JuJQy.js";import{C as a}from"./Card-M8rezznV.js";import{C as r}from"./CardHeader-QV_NYi3u.js";import{C as n}from"./CardContent-V2Xejzlg.js";import"./highlight-3QAqHvw2.js";import"./image--etRdOrW.js";import"./index-q81m-9gd.js";const m=`

<h1>h1</h1>

<br/>

<h2>h2</h2>

<br/>

<p> <strong>Paragraph</strong> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>

<br/>

<p>
  <a href='https://www.google.com/'>Link (https://www.google.com/)</a>
</p>

<br/>

<h6>Lists</h6>

<br/>

<ul>
  <li>
    <input type="checkbox" disabled="" checked=""> Write the press release
  </li>
  <li>
    <input type="checkbox" disabled=""> Update the website
  </li>
  <li>
    <input type="checkbox" disabled=""> Contact the media
  </li>
</ul>

<br/>

<hr/>

<br/>

<h6>A table:</h6>

<br/>

<table>
  <thead>
    <tr>
      <th style="text-align: left;">Syntax</th>
      <th style="text-align: center;">Description</th>
      <th style="text-align: right;">Test Text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">Header</td>
      <td style="text-align: center;">Title</td>
      <td style="text-align: right;">Here's this</td>
    </tr>
    <tr>
      <td style="text-align: left;">Paragraph</td>
      <td style="text-align: center;">Text</td>
      <td style="text-align: right;">And more</td>
    </tr>
  </tbody>
</table>

<br/>

<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ReactDOM</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react-dom'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ReactMarkdown</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react-markdown'</span>;
<span class="hljs-keyword">import</span> rehypeHighlight <span class="hljs-keyword">from</span> <span class="hljs-string">'rehype-highlight'</span>;

<span class="hljs-title class_">ReactDOM</span>.<span class="hljs-title function_">render</span>(
  <span class="hljs-tag">&lt;<span class="hljs-name">ReactMarkdown</span> <span class="hljs-attr">rehypePlugins</span>=<span class="hljs-string">{[rehypeHighlight]}</span>&gt;</span>{'# Your markdown here'}<span class="hljs-tag">&lt;/<span class="hljs-name">ReactMarkdown</span>&gt;</span>,
  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">'#content'</span>)
);
</pre>

<br/>

<img alt='cover' src='https://res.cloudinary.com/trinhmai/image/upload/v1660897321/_minimal_mock/_Cover/cover_19.jpg'>

<blockquote> <p>A block quote with <s>strikethrough</s> and a URL: <a href='https://reactjs.org'>https://reactjs.org</a>.</p> </blockquote>
`,g=`
# h1

<br/>

## h2

<br/>

**Paragraph** Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

<br/>

[Link (https://www.google.com/)](https://www.google.com/)

<br/>

###### Lists

<br/>

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

<br/>

---

<br/>

###### A table:

<br/>

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

<br/>

\`\`\`tsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
);
\`\`\`

<br/>

![cover](https://res.cloudinary.com/trinhmai/image/upload/v1660897321/_minimal_mock/_Cover/cover_19.jpg)

> A block quote with ~~strikethrough~~ and a URL: [https://reactjs.org](https://reactjs.org).
`;function j(){return s.jsxs(s.Fragment,{children:[s.jsx(l,{children:s.jsx(d,{children:s.jsx(c,{heading:"Markdown",links:[{name:"Components",href:o.components},{name:"Markdown"}],moreLink:["https://www.npmjs.com/package/react-markdown"]})})}),s.jsx(i,{sx:{my:10},children:s.jsxs(p,{spacing:3,direction:{xs:"column",md:"row"},children:[s.jsxs(a,{children:[s.jsx(r,{title:"Html content",sx:{pb:3}}),s.jsx(t,{sx:{borderStyle:"dashed"}}),s.jsx(n,{children:s.jsx(e,{children:m})})]}),s.jsxs(a,{children:[s.jsx(r,{title:"Mardown content",sx:{pb:3}}),s.jsx(t,{sx:{borderStyle:"dashed"}}),s.jsx(n,{children:s.jsx(e,{children:g})})]})]})})]})}function _(){return s.jsxs(s.Fragment,{children:[s.jsx(h,{children:s.jsx("title",{children:" Components: Markdown"})}),s.jsx(j,{})]})}export{_ as default};
