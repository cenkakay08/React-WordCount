function splitter(str, id) {
    var counts = {};//object for word and wuantity values
    var keys = []; //word array
    var wordsLength = 0;//Created because we dont use 1 letter words on table
    var data = []; //2d array for return to the table
    
    //Making string one sraight line
    const allwords = str.replace(/(\n)/gm,"");
    //Splitting every word with ignoring punctuation
    const words = allwords.split(/\W+/);
    
    //Check every word and their quantity
    for(var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();//Make every word to lowercase for better result
        if(word.length > 1) {
            if(counts[word] === undefined) {
                counts[word] = 1;
                keys.push(word);
            } else {
                counts[word] = counts[word] + 1;
            }
            wordsLength++;
        }
    }

    //Sort keys by compare function
    keys.sort(compare);

    //Sorting function by their quantity value - descending
    function compare(a,b) {
        var countA = counts[a];
        var countB = counts[b];
        return countB - countA;
    }

    //Push words and there quantity by sort
    for(var k = 0; k < keys.length; k++) {
        var key = keys[k];
        data.push([key,counts[key]]);
    }

    //returning string info or array for table
    if(id === "info") {        
        return "Length of all words = " + wordsLength + "\nLength of unique words = " + keys.length;
    } else {       
        return data;
    }

}

export default splitter;