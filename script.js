function upDate(previewPic){
    document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
    document.getElementById('image').textContent = previewPic.alt;
}
function unDo(){
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').textContent = "Hover over an image below to display here.";
}
