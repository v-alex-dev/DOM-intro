export async function getAll () {
  try {
    const request = fetch('https://thatsthespir.it/api');
    const response = await request.then(data => data.json())
    
    return response;
    
  } catch (e) {
  throw(console.log(e));
  
  }
}