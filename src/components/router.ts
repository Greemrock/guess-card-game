const main = document.querySelector('.mian');

const locationRsolver = (location: string) => {

  console.log(`location in locationResolver is`, location);

  if (!main) throw Error('main error')

  switch (location) {

    case "#/settings": main.innerHTML = `
        <div>Settings</div>
      `;
      break;
    case "#/Score": main.innerHTML = `
        <div>Score</div>
      `;
      break;
    case "#/About": main.innerHTML = `
        <div>About</div>
      `;
    break;
  }
}

window.addEventListener('load', () => {
  const location = window.location.hash;

  console.log(`location is`, location);

  if (location) {
    locationRsolver(location);
  }
})
