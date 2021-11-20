//  const express = require("express"); -> em javascript fica:
import express from "express";

// importa o createCourse para o server.ts
// assim, o arquivo não fica muito grande
import { createCourse } from "./routes";

const app = express();

app.get("/", createCourse);

app.listen(3333);  