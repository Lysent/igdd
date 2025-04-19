import { marked } from "./marked.min.js";

const content = document.getElementById("content");

const readMD = (url) => fetch(url)
    .then(async (md) => content.innerHTML = marked.parse(await md.text()));

readMD('../md/nicery.md');