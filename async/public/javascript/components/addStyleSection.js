export const styleSection = () => {
  const section = document.querySelectorAll('section');
  for (const iterator of section) {
    iterator.classList = 'rounded-lg shadow-lg m-8 bg-current ';
  }
} 


export const styleSectionId = (id) =>{
  const section = document.getElementById(id);
  section.classList = 'rounded-lg shadow-lg m-8 flex justify-center';
}