export const btn = (id?:string, classes?:string) => {
  const btn = document.createElement('button');
  if (id) {
    btn.id = id
  }
  if (classes) {
    btn.classList.add(classes)
  }

  return btn;
}