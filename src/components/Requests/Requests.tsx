import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import frontmatter from "frontmatter";
import axios from "axios";
import RenderMd from "../Markdown/RenderMd";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";

export default function Requests({ data }: any) {
  let parsedData = { path: "", body: "", headers: "", method: "GET" };

  const [method, setMethod] = useState("");
  const [path, setPath] = useState("");
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    try {
      parsedData = JSON.parse(data.children[0]);
      console.log(parsedData);
      setMethod(parsedData.method || "get");
      setPath(parsedData.path);
      setBody(parsedData.body);
      setHeaders(parsedData.headers);
    } catch (error: any) {
      setError(error.toString());
    }
  }, []);

  const setStates: any = {
    setmethod: setMethod,
    setpath: setPath,
    setbody: setBody,
    setheaders: setHeaders,
  };
  function handleChange(event: any) {
    console.log(event);
    setStates[`set${event.target.id}`](event.target.value);
    console.log(method, path, body, headers);
  }
  function handlemethodSelect(event: any) {
    setStates[`setmethod`](event.target.value);
  }

function sendReq(){
  console.log(method, path, body, headers);
axios.request({method,url:path,data:body})
}
  return (
    <>
      {error ? (
        <>
          <div className="warn">{error}</div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <Select
              id="method"
              value={method}
              label="Method"
              onChange={handlemethodSelect}
              sx={{
                width: "100px",
              }}
            >
              <MenuItem value={"get"}>GET</MenuItem>
              <MenuItem value={"post"}>POST</MenuItem>
              <MenuItem value={"put"}>PUT</MenuItem>
              <MenuItem value={"delete"}>DELETE</MenuItem>
            </Select>
            <TextField
              value={path}
              id="path"
              label="URL"
              onChange={handleChange}
              variant="outlined"
              sx={{
                width: "100%",
                margin: "0 1rem 0 1rem",
              }}
            />
            <Button
              value={path}
              variant="contained"
              sx={{
                width: "100px",
              }}
              onClick={sendReq}
            >
              Send
            </Button>
          </div>
          <div></div>
          <div className="my-2">
            <TextField
              value={body}
              id="body"
              label="Body"
              onChange={handleChange}
              variant="outlined"
              multiline
              minRows={4}
              sx={{
                width: "100%",
              }}
            />
          </div>
          <div className="my-2">
            <TextField
              value={headers}
              id="headers"
              label="Headers"
              onChange={handleChange}
              variant="outlined"
              multiline
              minRows={4}
              sx={{
                width: "100%",
              }}
            />
          </div>

          <div className="my-2">
            <TextField
              value={response}
              id="headers"
              label="Response"
              variant="outlined"
              multiline
              minRows={4}
              sx={{
                width: "100%",
              }}
            ></TextField>
          </div>
        </>
      )}
    </>
  );
}
