const apikey="f934fcbb9aa84ee3bf252c6d9a766134"
const url="https://newsapi.org/v2/everything?q="
window.addEventListener('load',()=>fetchnews('india'));

async function fetchnews(query){
 const res=await   fetch(`${url}${query}&apiKey=${apikey}`)
 const data=await res.json();
 console.log(data);
 bindData(data.articles);
}
function bindData(articles){
    const cardcontainer=document.getElementById("cardcontainer");
    const ntemplate=document.getElementById("temp");
    cardcontainer.innerHTML="";

    articles.forEach((article )=> {
        if(!article.urlToImage) return;
        const cardclone=ntemplate.content.cloneNode(true);
        fillDatainCard(cardclone,article);
        cardcontainer.appendChild(cardclone);
        
    });
}
function fillDatainCard(cardclone,article){
    const newsImg=cardclone.querySelector('#newsimg');
    const newsTitle=cardclone.querySelector('#title');
    const newsSrc=cardclone.querySelector('#nsource');
    const newsDes=cardclone.querySelector('#ndescription');

    newsImg.src=article.urlToImage;
    newsTitle.innerHTML=article.title;
    newsDes.innerHTML=article.description;
 


    const date=new Date(article.publishedAt).toLocaleString("en-us",{
       timeZone:"Asia/Jakarta"
    });
    newsSrc.innerHTML=`${article.source.name}. ${date}`;
    cardclone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,'_blank');
    });
}
let curnav=null;
function onNavitemClick(id){
    fetchnews(id);
    const navItem=document.getElementById(id);
    curnav?.classList.remove('active');
    curnav=navItem;
    curnav.classList.add('active');
};
const sbtnn=document.getElementById('sbtn');
const stextt=document.getElementById('stext');

sbtnn.addEventListener("click",()=>{
    const querry=stextt.value;
    if(!querry) return;
    fetchnews(querry);
    curnav?.classList.remove('active');
    curnav=null;

})

function setText(event){
    event.preventDefault();
    leftText.innerText = textsource.value.toUpperCase();
    rightText.innerText = textsource.value.toUpperCase();
  }
  var leftText = document.querySelector("#marquee div:first-of-type span");
  var rightText = document.querySelector("#marquee div:last-of-type span");
  var textsource = document.getElementById("textsource");
  setText();


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "mainnav") {
      x.className += " responsive";
    } else {
      x.className = "mainnav";
    }
  }

  