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

//awkwardfish

position: fixed;
width: 100%;
height: 100%;
z-index: 999;
object-fit: contain;
background: rgb(255, 255, 255) url("https://cdn.shopify.com/s/files/1/0762/7102/6477/files/loader.gif") center center / cover no-repeat;
display: none;