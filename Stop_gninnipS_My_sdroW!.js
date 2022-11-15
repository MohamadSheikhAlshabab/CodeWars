function spinWords(string){
  return (string.split(" ").map(el=>el.length>=5?[...el].reverse().join(""):el).join(" "));
}

spinWords("Welcome"); // "emocleW"
spinWords("Hey fellow warriors");; // "Hey wollef sroirraw"
spinWords("This is a test"); // "This is a test"
spinWords("This is another test"); // "This is rehtona test"
spinWords("You are almost to the last test"); // "You are tsomla to the last test"
spinWords("Just kidding there is still one more"); // "Just gniddik ereht is llits one more"
spinWords("Seriously this is the last one"); // "ylsuoireS this is the last one"
