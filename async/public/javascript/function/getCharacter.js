export function fetchCaracter() {
  return fetch('../../data.json')
    .then((res) => res.json())
    .then((item) => {
      return item
    })
}