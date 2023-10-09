export const cardHeader = (author: string) => {
  const header = document.createElement('div');
  const title = document.createElement('h2');

  header.classList.add('card-header');
  title.classList.add('card-title');
  title.textContent = author;
  header.appendChild(title);

  return header;
}