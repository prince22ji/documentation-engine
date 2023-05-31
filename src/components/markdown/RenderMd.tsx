import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import React from "react";
import PageNavs from "../PageNavs/PageNavs";
import ReactDOM from "react-dom";
import "./RenderMd.css";
import store from "../../services/Redux/store";

export default function RenderMd({ file }: any) {
  return (
    <>
      <div className="container-fluid ">
        <ReactMarkdown
          children={file}
          components={{
            code({ node, ...props }) {
              return React.createElement(CodeSnippet, { data: props, node });
            },
            pre({ node, children }) {
              return <div className="d-flex">{children}</div>;
            },
            h2: ({ node, children }) => {
              store.dispatch({
                type: "addPageNav",
                payload: {
                  label: children,
                  title: children,
                  code: "nav" + node.position?.start.line.toString(),
                  url: "#nav" + node.position?.start.line.toString(),
                }
              })
              return (
                <>
                <h2
                  id={"nav" + node.position?.start.line.toString()}
                  className="navHeaders"
                  >
                  {children}
                </h2>
                  </>
              );
              // return <h2 id={node} name={}>{children}</h2>
            },
            em: ({ node, ...props }) => (
              <i style={{ color: "red" }} {...props} />
            ),
          }}
        ></ReactMarkdown>
      </div>
    </>
  );
}
