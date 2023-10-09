import { getAll } from "./function/getAllApi";
import { mainHtml } from "./pages/main/main";

const body = document.body;
const main = mainHtml();
body.appendChild(main);

getAll();