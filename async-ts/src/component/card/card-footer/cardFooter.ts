export const cardFooter = (permaLink:string, author:string) => {
  const footer = document.createElement('div');
  footer.classList.add('card-footer');

  const link = document.createElement('a');
  
  link.href = permaLink;
  link.textContent = author;

  footer.appendChild(link);

  return footer;
}