const elementId = (id) => {
    const getId = document.getElementById(id)
    return getId
}

const searchHandler = () => {
    const keyword = elementId('keyword')
    // console.log(keyword)
    const url = (`https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`)
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => artistsData(data))
}

const artistsData = (data) => {
    // console.log(data)
    const artists = elementId('artists');
    // console.log(artists)
    data.artists.forEach((artist) => {
        // console.log(artist)
        const div = document.createElement('div');
        div.classList.add("artist-card");
        div.innerHTML = `
        <div class="image-container">
            <div class="image-container-inner">
                <img src="${artist.strArtistThumb}" alt=""/>
            </div>
        </div>
        <div class="info-container">
            <h1>${artist.strArtist}</h1>
            <p>Country: ${artist.strCountry}</p>
            <p>Style: ${artist.strGenre}</p>
        </div>
        <button class="album-button">
            <i class="fa-solid fa-compact-disc"></i>
            <p onclick="fetchAlbums('${artist.idArtist}')" class="button-title">Albums</p>
        </button>`;
        artists.appendChild(div)
    });
};