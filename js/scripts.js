var mode = new Boolen(false);
$(function () {
    // init feather icons
    feather.replace();
})
//social media links
function twitter() {
    window.location.href = "https://twitter.com/acdevss";
}
function github() {
    window.location.href = "https://github.com/Acdevss";
}
function behance() {
    window.location.href = "https://www.behance.net/acdevs";
}
function instagram() {
    window.location.href = "https://www.instagram.com/acdevss";
}
//rights
function rights(){
    window.location.href="https://creativecommons.org/share-your-work/public-domain/cc0/";
}
//darkmode
function darkMode() {
    var element = document.body;
    element.classList.toggle("bg-secondary");
    if(mode === false){
        document.getElementById("img_mode").src="img/dark.png";
        mode = true;
    }else{
        document.getElementById("img_mode").src="img/ligth.png";
        mode = false;
    }
}

//button animation
