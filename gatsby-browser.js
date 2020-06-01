export const onRouteUpdate = () => {
    if(window.location.pathname === "/"){
        //document.querySelector('.my-4').style.display = "none";
        document.querySelector('header').style.display = "none";
        document.querySelector('.refs-box').style.display = "none";
        document.querySelectorAll('.title')[0].style.display = "none";
     }
     if(window.location.search === '?stackedPages=%2Ftweets' || window.location.pathname === '/tweets'){
        document.querySelectorAll('.title')[1].style.display = "none";
        document.querySelector('header').style.display = "none";
        document.querySelector('.refs-box').style.display = "none";
     }