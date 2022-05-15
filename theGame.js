const artists=["The Beatles",
"Elton John",
"Led Zeppelin",
"Cliff Richard",
"Bee Gees",
"Queen",
"Pink Floyd",
"The Rolling Stones",
"Ed Sheeran",
"Genesis",
"Phil Collins",
"Shirley Bassey",
"Status Quo",
"Adele",
"Dire Straits",
"Coldplay",
"David Bowie",
"Deep Purple",
"Depeche Mode",
"Fleetwood Mac",
"George Michael",
"Iron Maiden",
"Paul McCartney",
"Pet Shop Boys",
"The Who",
"Rod Stewart",
"Spice Girls",
"Eurythmics",
"Robbie Williams",
"Oasis",
"The Police",
"Duran Duran",
"UB40",
"Def Leppard",
"Little Mix",
"T. Rex",
"Black Sabbath",
"Culture Club",
"Lizzo",
"Olivia Rodrigo",
"R Kelly",
"Basshunter",
"Daniel Beddingfield",
"Natasha Beddingfield",
"Greenday",
"Dido",
"Shaggy",
"The Killers"];

const playBtn = document.getElementById('play');

function playTheGame() {
    let randomArtistId = Math.floor(Math.random() * artists.length - 1);
    let selectedArtist = artists[randomArtistId];
    document.getElementById("theGame").innerHTML = `You have 30 seconds to sing a song by ${selectedArtist}`;
}

playBtn.addEventListener('click', playTheGame);

