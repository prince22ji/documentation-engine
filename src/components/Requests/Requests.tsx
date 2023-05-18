import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import frontmatter from "frontmatter";
import axios from "axios";
import RenderMd from "../markdown/RenderMd";

export default function Requests({data}:any) {
  let parsedData= {path:"",body:"",headers:"",}
  try{parsedData = JSON.parse(data.children[0])}
  catch(error){return};
  console.log(JSON.parse(data.children[0]));
  return (
    <>
      <div className="d-flex justify-content-center">
        <TextField
        value={parsedData?.path}
          id="url"
          label="URL"
          variant="outlined"
          sx={{
            width: "100%",
          }}
        />
        <Button
                value={parsedData?.path}
          variant="contained"
          sx={{
            width: "40px",
          }}
        >
          Send
        </Button>
      </div>
      <div></div>
      <div>
        <TextField
                value={parsedData?.body}

          id="body"
          label="Body"
          variant="outlined"
          multiline
          minRows={4}
        />
      </div>
      <div>
        <TextField
                value={parsedData?.headers}

          id="headers"
          label="Headers"
          variant="outlined"
          multiline
          minRows={4}
        />
      </div>
    </>
  );
}
