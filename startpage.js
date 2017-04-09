var phrases = ["Make the world your plaything.",
               "Remove from yourself that which wastes your time.",
               "Destroy others by creating.",
               "Teach yourself that fear is only a drug.",
               "Care for yourself as others wouldn't.",
               "If you can draw breath, you can persevere.",
               "A shuffle on your path to greatness is still progress.",
               "Embrace your madness."];

var thief_quotes = [["I'm the highwayman. I make ends meet. Just like any man, I work with my hands.", "- The Highwayman"],
                    ["Rule number one: look after number one. That's you. Don't be crazy, or you'll get yourself killed.", "- Selina Kyle"],
                    ["In a closed society where everybody's guilty, the only crime is getting caught. In a world of thieves, the only final sin is stupidity.", "- Hunter S. Thompson"],
                    ["I hate to advocate drugs, alcohol, violence, or insanity to anyone, but they've always worked for me.", "- Hunter S. Thompson"],
                    ["Thieves respect property. They merely wish the property to become their property that they may more perfectly respect it.", "- Gilbert K. Chesterton"],
                    ["Friends are thieves of time.", "- Francis Bacon"],
                    ["I recognize in thieves, traitors and murderers, in the ruthless and the cunning, a deep beauty - a sunken beauty.", "- Jean Genet"],
                    ["Let us not forget that the greatest composers were also the greatest thieves. They stole from everyone and everywhere.", "- Pablo Casals"]];

var potd = function() {
  var thief_quote = thief_quotes[Math.floor(Math.random() * thief_quotes.length)];
  var quote_text = thief_quote[0];
  var thief = thief_quote[1];
  var phrase = document.getElementById("phrase-of-the-day").children[0].textContent = quote_text;
  document.getElementById("phrase-of-the-day").children[1].textContent = thief;
  document.title = phrase;
}

var startpage = function() {
  set_date();
  potd();
  searchFocusListener();
  searchSubmitListener();
}
