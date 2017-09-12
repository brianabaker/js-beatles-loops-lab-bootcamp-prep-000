function theBeatlesPlay(musicians, instruments){
  var anotherArray= [];
  for (var i=0; i<musicians.length; i++){
    anotherArray.push(musicians[i] + " plays " + instruments[i]);
  }
return anotherArray;
}

function johnLennonFacts(){
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var stuff= [];
  var i = 0;
  while (i < facts.length) {
    stuff.push(facts[i] + '!!!');
    i++;
  }
  return stuff;
}
