var notesAudio = {
  c : document.getElementById("c-note"),
  d : document.getElementById("d-note"),
  e : document.getElementById("e-note"),
  f : document.getElementById("f-note"),
  g : document.getElementById("g-note"),
  a : document.getElementById("a-note"),
  b : document.getElementById("b-note"),
}

$(function(){
$(".box").on("click", function(e){
  var whichNote= $(this).attr("id");
    notesAudio[whichNote].currentTime = 0;
  notesAudio[whichNote].play(); // plays either notes "c-note" to "b-note"
  });

  $(document).on("keypress", function(e){
  if (e.key === "1"){
    notesAudio.c.currentTime = 0

  })}
});

function playNote(note){
  notesAudio[note].currentTime = 0;
  notesAudio[note].play();
}
