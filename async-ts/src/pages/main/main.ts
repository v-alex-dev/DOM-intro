import { sectionExo } from "./section-exo/section";

export const mainHtml = () => {
  const bodyHtml: HTMLElement = document.body;
  const mainHtml: HTMLElement = document.createElement('main');
  const section: HTMLElement = sectionExo();

  bodyHtml.appendChild(mainHtml);
  mainHtml.appendChild(section);

  return mainHtml
}