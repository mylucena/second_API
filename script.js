document.getElementById('buscarGato').addEventListener('click', function() {
    fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
            'x-api-key': 'live_kS8zBP9OMquyTUVq6EUk8h4o1A4ut4A0D4J8Cf1ToKdrsTqoGGtYlx2uupeyqfDA'
        }
    })
    .then(response => response.json())
    .then(data => {
        const imgContainer = document.getElementById('imagemGato');
        imgContainer.innerHTML = `<img src="${data[0].url}" alt="Gato fofo">`;
    })
    .catch(error => console.error('Erro ao buscar imagem:', error));
});
