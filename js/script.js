// CAROUSEL
$(document).ready(function () {
    $('.carousel').carousel(
        {
            dist: 0,
            padding: 0,
            fullWidth: true,
            indicators: true,
            duration: 100,
        }
    );
});


var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
    textOverImages[i].onclick = function () {
        var classes = this.classList;
        if (classes.contains("show")) {
            classes.remove("show");
        } else {
            if (previousTextOverImage != null)
                previousTextOverImage.classList.remove("show");
            previousTextOverImage = this;
            classes.add("show");
        }
    }
}

function stopPropagation(event) {
    event.stopPropagation();
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  
$(document).ready(function(){
$('.collapsible').collapsible();
});