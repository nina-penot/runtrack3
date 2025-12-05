function showhide() {
    var myarticle = document.getElementById("article");
    if (myarticle.style.display == "none") {
        myarticle.style.display = "block";
    } else {
        myarticle.style.display = "none";
    }
}