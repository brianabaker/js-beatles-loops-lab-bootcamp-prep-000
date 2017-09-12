function theBeatlesPlay(musicians, instruments){
  var anotherArray= [];
  for (var i=0; i<musicians.length; i++){
    anotherArray.push(musicians[i] + " plays " + instruments[i]);
  }
return anotherArray;
}

function johnLennonFacts(facts){
  var loud= [];
  var i = 0;
  while (i < facts.length) {
    loud.push(facts[i] + "!!!");
    i++;
  }
  return loud;
}
