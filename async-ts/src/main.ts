
import { mainHtml } from "./pages/main/main";
import { btnStyle } from "./style/btnStyle";

const body = document.body;
const main = mainHtml();
body.appendChild(main);
btnStyle('test');


