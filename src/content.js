import { marked } from "./marked.min.js";

const content = document.getElementById("content");
const theme = document.querySelector("select");
const root = document.querySelector(":root");

const readMD = (url) => fetch(url)
    .then(async (md) => content.innerHTML = marked.parse(await md.text()));

readMD('../md/nicery.md');

const themes = {
    control: {
        "--white": "#ffffff",
        "--black": "#171717",
        "--light-gray": "#c3c3c3",
        "--gray": "#515151",
        "--dark-gray": "#303030",
        "--background-gray": "#101010",
        "--toc": "#1a1a1a",
        "--h4-gray": "#b5b5b5",
        "--h5-gray": "#8a8a8a",
        "--h6-gray": "#737373",
        "--accent": "#83d6ff"
    },
    creation: {
        "--white": "#ffffff",
        "--black": "#171717",
        "--light-gray": "#c3c3c3",
        "--gray": "#515151",
        "--dark-gray": "#303030",
        "--background-gray": "#101010",
        "--toc": "#1a1a1a",
        "--h4-gray": "#b5b5b5",
        "--h5-gray": "#8a8a8a",
        "--h6-gray": "#737373",
        "--accent": "#ff00ff"
    },
    destruction: {
        "--white": "#ffffff",
        "--black": "#171717",
        "--light-gray": "#c3c3c3",
        "--gray": "#515151",
        "--dark-gray": "#303030",
        "--background-gray": "#101010",
        "--toc": "#1a1a1a",
        "--h4-gray": "#b5b5b5",
        "--h5-gray": "#8a8a8a",
        "--h6-gray": "#737373",
        "--accent": "#ff0000"
    },
    modification: {
        "--white": "#ffffff",
        "--black": "#171717",
        "--light-gray": "#e0e0e0",
        "--gray": "#a0a0a0",
        "--dark-gray": "#888888",
        "--background-gray": "#b5b5b5",
        "--toc": "#dddddd",
        "--h4-gray": "#8cc9ff",
        "--h5-gray": "#5cb0ff",
        "--h6-gray": "#3a8ed6",
        "--accent": "#3399ff"
    },
    replacement: {
        "--white": "#ffffff",
        "--black": "#171717",
        "--light-gray": "#c3c3c3",
        "--gray": "#515151",
        "--dark-gray": "#303030",
        "--background-gray": "#101010",
        "--toc": "#1a1a1a",
        "--h4-gray": "#b5b5b5",
        "--h5-gray": "#8a8a8a",
        "--h6-gray": "#737373",
        "--accent": "#00ff00"
    },
    chaos: {
        "--white": "#ffffff",
        "--black": "#171717",
        "--light-gray": "#c3c3c3",
        "--gray": "#8b0000",
        "--dark-gray": "#303030",
        "--background-gray": "#101010",
        "--toc": "#1a1a1a",
        "--h4-gray": "#8b0000",
        "--h5-gray": "#8b0000",
        "--h6-gray": "#8b0000",
        "--accent": "#8b0000"
    },
    rebirth: {
        "--white": "#ffffff",
        "--black": "#171717",
        "--light-gray": "#c3c3c3",
        "--gray": "#515151",
        "--dark-gray": "#303030",
        "--background-gray": "#101010",
        "--toc": "#1a1a1a",
        "--h4-gray": "#b5b5b5",
        "--h5-gray": "#8a8a8a",
        "--h6-gray": "#737373",
        "--accent": "#ffffff"
    },
    eos: {
        "--white": "#171717",
        "--black": "#ffffff",
        "--light-gray": "#c3c3c3",
        "--gray": "#515151",
        "--dark-gray": "#303030",
        "--background-gray": "#ffffff",
        "--toc": "#ffffff",
        "--h4-gray": "#b5b5b5",
        "--h5-gray": "#8a8a8a",
        "--h6-gray": "#737373",
        "--accent": "#171717"
    }
};

function applyTheme(themeName) {
    const selected = themes[themeName];
    if (!selected) return;

    Object.entries(selected).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });
    localStorage.setItem("theme", themeName);
}

theme.onchange = () => {
    applyTheme(theme.value);
};

window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem("theme") || "control";
    theme.value = saved;
    applyTheme(saved);
});