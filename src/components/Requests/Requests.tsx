import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import frontmatter from "frontmatter";
import axios from "axios";
import RenderMd from "../Markdown/RenderMd";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

export default function Requests({ data }: any) {
  let parsedData = { path: "", body: "", headers: "", method: "GET" };
  try {
    parsedData = JSON.parse(data.children[0]);
  } catch (error: any) {
    return (
      <>
        <div className="warn">{error.toString()}</div>
      </>
    );
  }
  console.log(JSON.parse(data.children[0]));
  function handleChange() {
    parsedData.method = parsedData.method;
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <Select
          id="method"
          value={parsedData?.method || 'get'}
          label="Method"
          onChange={() => handleChange()}
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
          value={parsedData?.path}
          id="url"
          label="URL"
          variant="outlined"
          sx={{
            width: "100%",
            margin: "0 1rem 0 1rem",
          }}
        />
        <Button
          value={parsedData?.path}
          variant="contained"
          sx={{
            width: "100px",
          }}
        >
          Send
        </Button>
      </div>
      <div></div>
      <div className="my-2">
        <TextField
          value={parsedData?.body}
          id="body"
          label="Body"
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
          value={parsedData?.headers}
          id="headers"
          label="Headers"
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
          value={parsedData?.headers}
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
  );
}
