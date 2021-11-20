//  const express = require("express"); -> em javascript fica:
import express from "express";
import { createCourse } from "./routes";

const app = express();

app.get("/", createCourse);

app.listen(3333);  