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
    keyword.value = '';

}

const artistsData = (data) => {
    // console.log(data)
    const artists = elementId('artists');
    artists.textContent = '';
    // console.log(artists)
    data?.artists?.forEach((artist) => {
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

const fetchAlbums = (id) => {
    // console.log(id)
    const url = (`https://theaudiodb.com/api/v1/json/2/album.php?i=${id}`)
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showAlbums(data.album))
};

const showAlbums = (albums) => {
    // console.log(albums)
    const albumContainer = elementId('albums')
    albumContainer.textContent = '';
    // console.log(albumContainer)
    albums.filter((album) => {
        const div = document.createElement('div')
        // console.log(div)
        div.classList.add("album")
        div.innerHTML = `
        <div class="album-image-container">
            <img src="${album.strAlbumThumb}" alt=""/>
        </div>
        <div class="album-name">
            <h3>${album.strAlbum}</h3>
        </div>
        `;
        albumContainer.appendChild(div)
        // album.textContent = '';
    });

}

