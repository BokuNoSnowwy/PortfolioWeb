

var carouselOn = true;

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


$(function() {
    $('#gif-hover').hide();
    $('#hover').on("mouseover", function() {
      $('#hover').hide();
      $('#gif-hover').show();
      $('#pic-hover').hide();
    });
  
    $('#gif-hover').on("mouseout", function() {
      $('#hover').show();
      $('#gif-hover').hide();
      $('#pic-hover').show();
    });
  
    $('#gif-click').hide();
    $('#click').click(function() {
      $('#click').hide();
      $('#gif-click').show();
      $('#pic-click').hide();
    });
  
    if ($('#click').data("clicked", true)) {
      $('#gif-click').click(function() {
        $('#click').show();
        $('#gif-click').hide();
        $('#pic-click').show();
      });
    }
  
  });



function stopPropagation(event) {
    event.stopPropagation();
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(document).ready(function(){
    $('')
});

$(document).ready(function(){
    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
      
      $('.collapsible .collapsible-header').on('click', function(event) {
          var target = $(this);
          setTimeout(function() {
            if( target.length ) {
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 500);
            }
          }, 300);
      });
});

function doSomethingOnClick (id){
    //var carousel = document.getElementById("carouselPortfolio");
    // This will disable just the div

    var nodes = document.getElementById("carouselPortfolio").getElementsByTagName('*');
    
    console.log(id);
    id.hidden = true;
    
    if(carouselOn){
        
        for(var i = 0; i < nodes.length; i++){
            nodes[i].hidden = true;
         
        }
    }else{
        for(var i = 0; i < nodes.length; i++){
            nodes[i].hidden = false;
            
        }
    }
    id.hidden = false;
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 90
    }, 500);
});
