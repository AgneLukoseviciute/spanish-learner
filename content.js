//makes an array of everything inside the body tag
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var currNode = element.childNodes[j];

        //if current Node is of type TEXT_NODE
        if (currNode.nodeType === 3) {
            var originalText = currNode.nodeValue;
            var replacedText = originalText;

            for (var t = 1; t < 37; t++){
              var englishWord = wordIndexes[t];
              var toSpanish = commonNouns[englishWord];
              var re = new RegExp(englishWord, "gi");
              replacedText = replacedText.replace(re, toSpanish);
            }


            if (replacedText !== originalText) {
                //replaces currNode with a newly created node which holds replacedText
                element.replaceChild(document.createTextNode(replacedText), currNode);
            }
        }
    }
}
