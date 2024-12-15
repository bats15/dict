const btn = document.querySelector('#go')
const mean = document.querySelector('.lower')
async function FetchMeaning() {
    let word = document.querySelector('#inp').value;
    const Uapi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(Uapi);
    if (!response.ok) {
        return null;
    }
    const data = await response.json();
    return data;
}  
btn.addEventListener('click', async () => {
      const meaning = await FetchMeaning();
    if (meaning && meaning.length > 0) {
        const definitions = meaning[0].meanings[0].definitions[0].definition;
        mean.innerHTML = definitions
    } else {
        console.log('No definitions found.');
        mean.innerHTML = definitions
    }
})

document.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        const meaning = await FetchMeaning();
        if (meaning && meaning.length > 0) {
            const definitions = meaning[0].meanings[0].definitions[0].definition;
            mean.innerHTML = definitions;
        } else {
            console.log('No definitions found.');
            mean.innerHTML = 'No definitions found.';
        }
    }
});