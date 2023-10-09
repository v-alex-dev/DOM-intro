export const cardStyle = (vie, mana ) => {
  const card = document.getElementById('card');

  card.classList = ' w-1/2 flex items-center flex-col  m-8 bg-gradient-to-br from-stone-500 via-neutral-500 to-indigo-200 rounded-lg p-4';

  const cardHeader = document.getElementById('card-header');

  cardHeader.classList = 'w-full flex flex-col items-center'

  const badges = document.getElementById('badges');

  badges.classList = 'w-full mx-5  flex justify-between';

  const cardBody = document.getElementById('card-body');

  cardBody.classList = 'grid grid-cols-3 gap-10 '

  const span = document.querySelectorAll('span');
  for (const item of span) {
    item.classList = 'bg-gradient-to-b from-neutral-500 via-yellow-900 to-pink-600 rounded-full p-2 m-3'
  }

  const carac = document.querySelectorAll('#card-body-carac');
  for (const item of carac) {
    item.classList = 'bg-gradient-to-l from-slate-900 via-rose-600 to-slate-700 m-4 rounded flex flex-col items-center p-4'
  }


  const barreMana = document.getElementById('barreMana');
  barreMana.classList = `bg-sky-500 rounded-full text-center m-2` 
  barreMana.style.width = `${mana}%`

  const barreVIe = document.getElementById('barreVie');
  barreVIe.classList = `w-${vie}  bg-rose-600 rounded-full text-center m-2` 
  barreVIe.style.width = `${vie}%`
}