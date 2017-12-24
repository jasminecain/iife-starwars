console.log('dark.js');

var Starwars = (function() {
  let location = 'The Unknown Regions';
  let keyPlayers = ['Jabba The Hutt', 'Count Dooku', 'Darth Maul', 'General Griveous', 'Greedo', 'Jango Fett', 'Darth Sidious'];

return {
  getEvil: function(){
    console.log('Evil List of Players:', keyPlayers);
    return keyPlayers;
  },
  getDarkLocation: function() {
    return location;
  },
  addEvil: function(who) {
    keyPlayers.push(who);
    console.log('evil players', keyPlayers);
  }
}

// })();
})(Starwars || {}); //envoked immediately, file order doesn't matter - put in all files
//private to this fuction, only methods know about this location
