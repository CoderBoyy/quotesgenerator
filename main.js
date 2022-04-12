const quoteText=document.querySelector('.quote');
const quoteBtn = document.querySelector("button");
const authorText=document.querySelector('.author .name');
const soundBtn=document.querySelector('.sound');
const copyBtn=document.querySelector('.copy');
const twitterBtn=document.querySelector('.twitter');

//random quote function 
function randomQuote(){
    
    quoteBtn.classList.add("Loading");
    quoteBtn.innerText="Loading Quote...";
    //fetching data from api and parsing it to js object
    
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{

        quoteText.innerText=result.content;
        authorText.innerText=result.author;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("Loading");
    });

    //speechsynthesisutterance is a web speech api that represents a speech requests 
    soundBtn.addEventListener('click',()=>{
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorText.innerText}`);
        //speak meathod speaks the utterance
        speechSynthesis.speak(utterance);

    });

    //copy text
    copyBtn.addEventListener('click',()=>{
        //writeText() property writes the specified text string to the system clipboard.  
        navigator.clipboard.writeText(quoteText.innerText);
    });

    //twitter btn
    twitterBtn.addEventListener('click',()=>{
        let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`
        window.open(tweetUrl, "_blank")
    });
}

quoteBtn.addEventListener('click', randomQuote);