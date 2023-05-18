import * as React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Requests from "../Requests/Requests";
import axios from "axios";
import frontmatter from "frontmatter";

export default function RenderMd({ children }: any) {

  const [file ,setFile] = useState('')
  useEffect(() => {
    axios
      .get(
        "http://localhost/readme.md",
      )
      .then((response) => {
        setFile(response.data)
        console.log(file)
        const test = frontmatter(file,{ safeLoad: true });
        console.log(test);
      });
  }, []);
  function showLog(value:any){
console.log(value);
  }
  return (
    <>
      <ReactMarkdown children={file}   components={{
   code({node,...props}){return <Requests data={props}/>},
    h2: ({node,...props})=><div className="container-fluid" onClick={()=>showLog({...props})} {...props}></div>,

    em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />
  }}></ReactMarkdown>
    </>
  );
}
