//Evento para remover o zoom
document.documentElement.addEventListener("gesturestart", removeZoomIphone, false);

//Função para remover o zoom do iphone
function removeZoomIphone(e) {
 e.preventDefault();
}﻿



// carrega portfolio em 6 imagens
var odGridArray = [];
odGridArray[20] = ["#portfolioModal1" , "./img/portfolio_home/portfolio_clawdia.jpg"];
odGridArray[19] = ["#portfolioModal2", "./img/portfolio_home/portfolio_omiyage.jpg"];
odGridArray[18] = ["#portfolioModal3", "./img/portfolio_home/portfolio_inbox.jpg"];
odGridArray[17] = ["#portfolioModal4", "./img/portfolio_home/portfolio_blogjb.jpg"];
odGridArray[16] = ["#portfolioModal5", "./img/portfolio_home/portfolio_central.jpg"];
odGridArray[15] = ["#portfolioModal6", "./img/portfolio_home/portfolio_bizrev.jpg"];
odGridArray[14] = ["#portfolioModal7", "./img/portfolio_home/portfolio_jedha.jpg"];
odGridArray[13] = ["#portfolioModal8", "./img/portfolio_home/portfolio_loucos.jpg"];
odGridArray[12] = ["#portfolioModal9", "./img/portfolio_home/portfolio_120.jpg"];
odGridArray[11] = ["#portfolioModal10", "./img/portfolio_home/portfolio_4truck.jpg"];
odGridArray[10] = ["#portfolioModal11", "./img/portfolio_home/portfolio_cynthia.jpg"];
odGridArray[9] = ["#portfolioModal12", "./img/portfolio_home/portfolio_softprene.jpg"];
odGridArray[8] = ["#portfolioModal13", "./img/portfolio_home/portfolio_tatiana.jpg"];
odGridArray[7] = ["#portfolioModal14", "./img/portfolio_home/portfolio_gdiscom.jpg"];
odGridArray[6] = ["#portfolioModal15", "./img/portfolio_home/portfolio_sitejb.jpg"];
odGridArray[5] = ["#portfolioModal16", "./img/portfolio_home/portfolio_talante.jpg"];
odGridArray[4] = ["#portfolioModal17", "./img/portfolio_home/portfolio_emperifa.jpg"];
odGridArray[3] = ["#portfolioModal18", "./img/portfolio_home/portfolio_newbie.jpg"];
odGridArray[2] = ["#portfolioModal19", "./img/portfolio_home/portfolio_quizcielo.jpg"];
odGridArray[1] = ["#portfolioModal20", "./img/portfolio_home/portfolio_isa.jpg"];
odGridArray[0] = ["#portfolioModal21", "./img/portfolio_home/portfolio_venancio.jpg"];





if (typeof odGridArray !== "undefined") {
  var totalCells = (odGridArray.length) - 1;
  //console.log(totalCells);

  for (var i = 0; i < 9; i++) {
    $('.js-odGrid').append('<div class="flex--col-4"><a class="portfolio-link" data-toggle="modal" href="' + odGridArray[i][0] + '"><img src="' + odGridArray[i][1] + '"/></a></div>');
    lastCell = i;
  };

  function updateDetails() {
    $("#odDetails").html("( " + (lastCell+1) + " de " + odGridArray.length + " )");
  }
  updateDetails();

  //console.log(lastCell);
  checkLoadBtn();

  function checkLoadBtn() {
    if (lastCell < totalCells) {
      $("#loadMoreOdGrid").fadeIn();
    } else {
      $("#loadMoreOdGrid").fadeOut();
    }
  }

  $("#loadMoreOdGrid").on("click", function() {
    var nextCell = (lastCell) + 1;

    for (var i = 0; i < 6; i++) {
      $('.js-odGrid').append('<div class="flex--col-4"><a class="portfolio-link" data-toggle="modal" href="' + odGridArray[nextCell][0] + '"><img src="' + odGridArray[nextCell][1] + '" /></a></div>');
      nextCell++
      lastCell++;
      //console.log(lastCell);
      checkLoadBtn();
      updateDetails();
    }

    //;
  });

} //eof odGrid

// Card Servicos flip
$('.flip').hover(function(){
        $(this).find('.card').toggleClass('flipped');

    });


// carrega função troca de bg -->
  $(document).ready(function(){

    //Alternar classe para alterar a borda no rótulo e adicionar classe ao corpo
    $("#check").change(function(){
        if($(this).is(":checked")) {
            $(".slider").addClass("isChecked");
            $("body").addClass("bodyChecked");
            $(".cloud").css("opacity",".5");
            $("body").addClass("body-home");
        } else {
            $(".slider").removeClass("isChecked");
            $("body").removeClass("bodyChecked");
            $("body").removeClass("body-home card-content p span h2 h3 h6 scrollToTop");
            $(".cloud").css("opacity","0");
        }
    });

});



// CARREGA BARRA DE HABILIDADES
  $(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });



// CARREGA EFEITO DE ROLAGEM
//jQuery precisa do JS Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        var $section = $($anchor.attr('href'));
        var scrollPos = $section.offset().top - 80;

        $('html, body').stop().animate({
            scrollTop: scrollPos
        }, 1200, 'easeInOutExpo');


        event.preventDefault();
    });
});

 // fechar a navbar quando clicar no link
  $('.page-scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // botao ir para o topo 
  $(document).ready(function(){
  
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
});

// MEU TEXTO DA HEADER 
 var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 100 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // injetar CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { text-align: center; border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };