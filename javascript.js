function newWord(){
  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("wordDisplay").innerHTML = words[randomNumber];
}

var words = ["Diaper Change", "Peekaboo", "Pacifier", "Crawl", "Teething", 
             "Rocking Chair", "Tummy Time", "Baby Steps", "Rubber Ducky", "Spit-up", 
             "Potty Training", "Burp", "Giggle", "Diaper Blowout"]
