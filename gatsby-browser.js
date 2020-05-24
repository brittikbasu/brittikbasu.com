export const onRouteUpdate = () => {
    if(window.location.pathname === "/"){
        document.querySelector('.my-4').style.display = "none";
        document.querySelector('header').style.display = "none";
        document.querySelector('.refs-box').style.display = "none";

     }
}