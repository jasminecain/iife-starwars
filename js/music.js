var Starwars = (function(orignalStarWards){

  let thememusic = ["Imperial Attack", "Princess Leia's Theme", "Cantina Band"];

  originalStarWars.getSongs = function() {
    let songList = thememusic;
    console.log("Party Play List:" thememusic.toString());
  }

  originalStarWars.addSong = function(what) {
    thememusic.push(what);
  }

  return originalStarWars;

// })();


})(Starwars || {};)
