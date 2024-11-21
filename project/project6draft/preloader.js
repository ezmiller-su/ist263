const preload = document.getElementById("preloader")
preload.style.position = "fixed";
preload.style.width = "100%";
preload.style.height = "100%";
preload.style.zIndex = "999";
preload.style.objectFit = "contain";

preload.style.background = "#FFFFFF no-repeat center center";
preload.style.backgroundSize = "cover";
document.addEventListener("DOMContentLoaded", function(){
function hideImage(){
    document.getElementById("preloader").style.display = "none" ;
}
function showImage(){
    document.getElementById("preloader").style.display = "block" ;
}
setTimeout(function(){
    showImage();
    setInterval(hideImage, 4700);
},90);
});