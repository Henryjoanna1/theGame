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
"Daniel Bedingfield",
"Natasha Bedingfield",
"Greenday",
"Dido",
"Shaggy",
"The Killers",
"Craig David",
"Cher",
"One Direction",
"Beyonce",
"Taylor Swift",
"Britney Spears",
"Christina Aguilera",
"Jennifer Lopez",
"Weezer",
"Fall Out Boy",
"Paramore",
"Dua Lipa",
"Sam Smith",
"Lynyrd Skynyrd",
"Don McClean",
"New Order",
"The Smiths",
"Calvin Harris",
"Rihanna",
"S Club 7",
"Girls Aloud",
"Westlife",
"Blur",
"Usher",
"Eminem",
"Jimi Hendrix",
"Stevie Wonder",
"Donna Summer",
"ABBA",
"Mika",
"Whitney Houston",
"Dolly Parton",
"Johnny Cash",
"The Stone Roses",
"The Mamas & The Papas",
"The Carpenters",
"The Who",
"Shakira",
"Kanye West",
"50 Cent",
"Snoop Dogg"];

const playBtn = document.getElementById('play');


function playTheGame() {
    let count = 3;
    document.getElementById('theGame').innerHTML = 'You have 3 seconds to sing a song by:'
    let randomArtistId = Math.floor(Math.random() * artists.length);
    let selectedArtist = artists[randomArtistId];
    document.getElementById('artist').innerHTML = `${selectedArtist}`;
    const interval = setInterval(() => {
        document.getElementById('countdown').innerHTML = `${count}`;
        count--;
        if (count < 0){
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = `TIME'S UP!`;
        }
    }, 1000);
}

playBtn.addEventListener('click', playTheGame);




