// // elementById 
// const elementId = (id) => {
//     const elementIdName = document.getElementById(id)
//     return elementIdName.value
// }


// // searchHandler button
// const searchHandler = () => {
//     const keyword = elementId('keyword');
//     const url = (`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${keyword}`)
//     fetch(url)
//         .then(res => res.json())
//         .then(data => showArtist(data))
// }

// const showArtist = (artists) => {
//     console.log(artists)
//     artists.map((artist) => {
//         console.log(artist)
//     })
// }