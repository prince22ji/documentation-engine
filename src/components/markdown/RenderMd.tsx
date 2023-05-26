import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import React from "react";

export default function RenderMd({ file }: any) {
  
  function showLog(value: any) {
    console.log(value);
  }
  return (
    <>
      <ReactMarkdown
        children={file}
        components={{
          code({ node,...props }) {
            return React.createElement(CodeSnippet,{data:props,node})
            // return <CodeSnippet data={props}  node={node} />;
            // return <code>{children}</code>
          },
          pre({node, children , ...props}){
            return <div className="d-flex">{children}</div>
          },
          h2: ({ node, ...props }) => (
            <div
              className="container-fluid"
              onClick={() => showLog({ ...props })}
              {...props}
            ></div>
          ),

          em: ({ node, ...props }) => <i style={{ color: "red" }} {...props} />,
        }}
      ></ReactMarkdown>
    </>
  );
}
