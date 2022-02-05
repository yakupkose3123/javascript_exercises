function wordReverse(word){
    let word1="";
    for(var i= word.length-1; i >= 0; i--){
        word1 += word.charAt(i);
    }
    return console.log(word1);
}
wordReverse("Mustafa Kemal Atatürk")

function sentenceReverse(sent){
    let sentArr = sent.split(" ").reverse();
    //sentArr.reverse()
    sentence = ""
    for(var i= 0; i < sentArr.length; i++){
        sentence +=sentArr[i]+" ";
    }
    sentence.trim() 
    return console.log(sentence);
}

sentenceReverse("Belki de insan sevilmekten çok anlaşılmayı istiyordu")
 