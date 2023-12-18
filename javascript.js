function newWord(){
  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("wordDisplay").innerHTML = words[randomNumber];
}

var words = ["poopy diaper",
"a&m",
"a&p"]
