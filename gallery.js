var picInd = 0;
flip_through();

function flip_through() {
    var i;
    var x = document.getElementsByClassName("pics");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    picInd++;
    if (picInd > x.length) {picInd = 1}
    x[picInd-1].style.display = "block";
    setTimeout(flip_through, 3000);
}
