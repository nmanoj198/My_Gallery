var allImages = document.images;
for(i=0;i<=allImages.length-1;i++){
    allImages[i].src=`./Gallery/${i}.jpg`;
    allImages[i].addEventListener("click", bigWindowOpen)
}
function bigWindowOpen(){
    document.getElementById("bigWindow").style.display="flex";
    document.getElementById("bigImage").style.backgroundImage=`URL(${this.src})`
}
function bigWindowClose(){
    document.getElementById("bigWindow").style.display="none";
}
