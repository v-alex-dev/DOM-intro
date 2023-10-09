import { Quote } from "../../data/quote";
import { sectionExo } from "./section-exo/section";

export const mainHtml = (object : Quote) => {
  const bodyHtml: HTMLElement = document.body;
  const mainHtml: HTMLElement = document.createElement('main');
  const section: HTMLElement = sectionExo(object);

 
  bodyHtml.appendChild(mainHtml);
  mainHtml.appendChild(section);

  return mainHtml
}