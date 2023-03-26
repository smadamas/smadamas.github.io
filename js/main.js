window.onload = function() {
    const root = document.documentElement;
    const marqueeContent = document.querySelector("#test");
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for(let i=0; i<marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
    console.log(marqueeContent);

    randomizeQuotes();
};

window.setInterval(function() {
    randomizeQuotes();
}, 5000);

const quotes = ["\"I want to help keep the world beautiful\"", 
        "\"I want to make a good life possible for everyone\"", 
        "\"I want to use technology and science as\n a solution for sustainability\"", 
        "\"I want to help build projects that\n improve the world\"",
        "\"I want to apply natural sciences to\n complex systems and problems\"",
        "\"I want to contribute to a bright future\"",
        "\"I want to learn analytical and creative skills\"",
        "\"I want to disrupt the status quo\"",
        "\"I want to redesign outdated processes and systems\"",
        "\"I want to work with positive\n and open-minded people\"",
        "\"I want to maximize my impact on the world\"",
        "\"I want to embrace new technologies\n that make life simpler\"",
        "\"I want to work somewhere with an inspiring mission\"",
        "\"I want to work with a motivated team\""
        ];

const spacing = ["15%", "31%", "58%", "75%", "18%", "45%", "68%", "85%"];

var prevQuoteNum = [99, 99];
var prevPosition = 99;

function randomizeQuotes() {

    var whichQuote = (Math.floor(Math.random() * quotes.length))
    var whichPosition = (Math.floor(Math.random() * 8))
    while (whichQuote == prevQuoteNum[0] || whichQuote == prevQuoteNum[1]){ //No repeats from previous 2
        whichQuote = (Math.floor(Math.random() * 11))
    }
    while (whichPosition == prevPosition){ //No repeats from previous position
        whichPosition = (Math.floor(Math.random() * 8))
    }
    prevQuoteNum[1] = prevQuoteNum[0];
    prevQuoteNum[0] = whichQuote;
    prevPosition = whichPosition;

    document.getElementById("quote").innerHTML = quotes[whichQuote];

    if (whichPosition >= 4){
        document.getElementById("floated-quotes").style.right = "2%";
        document.getElementById("floated-quotes").style.textAlign = "right";
    }
    else {
        document.getElementById("floated-quotes").style.left = "2%";
        document.getElementById("floated-quotes").style.textAlign = "left";
    }

    document.getElementById("floated-quotes").style.top = spacing[whichPosition];
}