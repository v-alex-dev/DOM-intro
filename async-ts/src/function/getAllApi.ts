export function getAll() {
  try {
    const request = fetch('https://thatsthespir.it/api');
    console.log(request);
    
  } catch (e) {
  throw(console.log(e));
  
  }
}