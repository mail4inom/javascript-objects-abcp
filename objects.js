var playlist ={ladyGaga: "Pocker Face", selenaGomez: "Who says", frankSinatra: "New York"};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}