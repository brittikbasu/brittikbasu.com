export const onRouteUpdate = () => {
    if(window.location.pathname === "/"){
        document.querySelector('header').style.display = "none";
        document.querySelector('.refs-box').style.display = "none";
        document.querySelectorAll('.title')[0].style.display = "none";
     }
     
    /*  let allNotes = document.querySelectorAll('.note-container');
     allNotes.forEach((n)=>{
        n.style.background = 'url(https://www.toptal.com/designers/subtlepatterns/patterns/paper.png)';
     });*/

    document.querySelectorAll('.note-container')[0].style.background = 'url(https://www.toptal.com/designers/subtlepatterns/patterns/paper.png)';


     if(window.location.search === '?stackedPages=%2Ftweets' || window.location.pathname === '/tweets'){
        document.querySelectorAll('.title')[1].style.display = "none";
        document.querySelector('header').style.display = "none";
        document.querySelector('.refs-box').style.display = "none";
     }
     /*let aTag = document.querySelectorAll('a');
     aTag.forEach((a)=>{
     a.innerHTML = a.innerHTML.replace(/[[\]]/gi, '');
     });*/
   // document.querySelectorAll('.note-container').style.background[1] = 'url(https://www.toptal.com/designers/subtlepatterns/patterns/paper.png)';
    document.querySelectorAll('.note-container')[0].style.background = 'url(https://www.toptal.com/designers/subtlepatterns/patterns/vintage-wallpaper.png)';
    document.querySelectorAll('.note-container, h1, p')[0].style.color = '#bde9fe';
    document.querySelectorAll('.note-container h4')[0].style.color = '#9FBCC6';
}
/*
    let aTag = document.querySelectorAll('a');
    aTag.forEach((a)=>{
    a.innerHTML = a.innerHTML.replace(/[[\]]/gi, '');
    });*/



/*
setInterval(()=>{
    if(window.location.search.match(/tweets/gi) !== null){
        if (window.location.search.match(/tweets/gi)[0] === "tweets") {
                const twitterScript = document.createElement('script');
                twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
                twitterScript.setAttribute('async', true);
                document.head.appendChild(twitterScript);
          }
    }
}, 100);
*/
/*
setInterval(()=>{
    if(window.location.search.match(/tweets/gi) !== null){
        if (window.location.search.match(/tweets/gi)[0] === "tweets") {
                const twitterLoad = document.createElement('script');
                const tweetLoadCommand = document.createTextNode('twttr.widgets.load();');
                twitterLoad.appendChild(tweetLoadCommand);
                document.head.appendChild(twitterLoad);
          }
    }
}, 100);*/
