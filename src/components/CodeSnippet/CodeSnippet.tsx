import { useEffect, useRef, useState } from "react";
import Requests from "../Requests/Requests";
import CodeViewer from "../CodeViewer/CodeViewer";
import CodeIcon from "@mui/icons-material/Code";
import { Icon } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";
import "./CodeSnippet.css";

export default function CodeSnippet({ data, node }: any) {
  const [view, setView] = useState("code");
  node = useRef(node);
  useEffect(()=>{
    console.log(node)
  })
  function handleViewChange(view: string) {
    setView(view);
  }
  const renderSnippet = () => {
    console.log(view);
    switch (view) {
      case "code": {
        return (
          <pre className="m-0 p-4 default">
            <CodeViewer data={data}></CodeViewer>
          </pre>
        );
      }
      case "request": {
        return (
          <>
          <div className="p-4">
            <Requests data={data} />
          </div>
          </>
        );
      }
    }
  };
  return (
    <>
      <div className="preview-container m-2 p-0 container-fluid w-100">
        <div className="toolbar p-2 container-fluid">
          <div className="row">
            <div className="col-8">
              <div></div>
            </div>
            <div className="col-4 toolbar-icons-container justify-content-end d-flex">
              <div className="mx-1 d-flex">
                <CodeIcon
                  className="cursor-pointer icon"
                  onClick={() => {
                    handleViewChange("code");
                  }}
                ></CodeIcon>
              </div>
              <div className="mx-1 d-flex">
                <LinkIcon
                  className="cursor-pointer icon"
                  onClick={() => {
                    handleViewChange("request");
                  }}
                >
                  RequestIcon
                </LinkIcon>
              </div>
              <div className="mx-1 d-flex">
                <EditIcon
                  className="cursor-pointer icon"
                  onClick={() => {
                    handleViewChange("edit");
                  }}
                >
                  EditIcon
                </EditIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="snippet container-fluid m-0 no-gutters">{renderSnippet()}</div>
      </div>
    </>
  );
}
