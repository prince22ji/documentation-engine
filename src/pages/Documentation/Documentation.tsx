import { useEffect, useState } from "react";
import RenderMd from "../../components/Markdown/RenderMd";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Documentation.css"

export default function Documentation() {
  const [file, setFile] = useState("");
  useEffect(() => {
    axios.get("http://localhost/readme.md").then((response) => {
      setFile(response.data);
    });
  }, []);
  const navs = [
    { label: "Link 1", code: "link1", url: "link", title: "Link 1" },
    { label: "Link 2", code: "link2", url: "link", title: "Link 2" },
    { label: "Link 3", code: "link3", url: "link", title: "Link 3" },
    { label: "Link 4", code: "link4", url: "link", title: "Link 4" },
    { label: "Link 5", code: "link5", url: "link", title: "Link 5" },
    { label: "Link 6", code: "link6", url: "link", title: "Link 6" },
    { label: "Link 7", code: "link7", url: "link", title: "Link 7" },
    { label: "Link 8", code: "link8", url: "link", title: "Link 8" },
    { label: "Link 9", code: "link9", url: "link", title: "Link 9" },
    { label: "Link 10", code: "link10", url: "link", title: "Link 10" },
    { label: "Link 11", code: "link11", url: "link", title: "Link 11" },
    { label: "Link 12", code: "link12", url: "link", title: "Link 12" },
    { label: "Link 13", code: "link13", url: "link", title: "Link 13" },
    { label: "Link 14", code: "link14", url: "link", title: "Link 14" },
    { label: "Link 15", code: "link15", url: "link", title: "Link 15" },
    { label: "Link 1", code: "link1", url: "link", title: "Link 1" },
    { label: "Link 2", code: "link2", url: "link", title: "Link 2" },
    { label: "Link 3", code: "link3", url: "link", title: "Link 3" },
    { label: "Link 4", code: "link4", url: "link", title: "Link 4" },
    { label: "Link 5", code: "link5", url: "link", title: "Link 5" },
    { label: "Link 6", code: "link6", url: "link", title: "Link 6" },
    { label: "Link 7", code: "link7", url: "link", title: "Link 7" },
    { label: "Link 8", code: "link8", url: "link", title: "Link 8" },
    { label: "Link 9", code: "link9", url: "link", title: "Link 9" },
    { label: "Link 10", code: "link10", url: "link", title: "Link 10" },
    { label: "Link 11", code: "link11", url: "link", title: "Link 11" },
    { label: "Link 12", code: "link12", url: "link", title: "Link 12" },
    { label: "Link 13", code: "link13", url: "link", title: "Link 13" },
    { label: "Link 14", code: "link14", url: "link", title: "Link 14" },
    { label: "Link 15", code: "link15", url: "link", title: "Link 15" },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row app-container">
          <div className="col-2 side-nav-container">
            <Sidebar navs={navs}></Sidebar>
          </div>
          <div className="col-8 data-container">
            <RenderMd file={file}></RenderMd>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}
