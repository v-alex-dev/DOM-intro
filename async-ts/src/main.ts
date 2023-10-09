import { getAll } from "./function/getAllApi";
import { mainHtml } from "./pages/main/main";

const body = document.body;

const response = await getAll();
const main = mainHtml(response);
body.appendChild(main);
console.log(response);



