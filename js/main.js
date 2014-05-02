$(document).ready(function() {
  //a
  videos();

  //b
  relogio();
  tempo();
  info();
  
  //c
  aviso();
});

function videos() {
  var v = [
    {
      nome: "Primeiro",
      link: "videos/Big Buck Bunny_1.mp4"
    },
    {
      nome: "Segundo",
      link: "videos/The Amazing Spider-Man 2.mp4"
    },
    {
      nome: "Terceiro",
      link: "videos/monsters university.mp4"
    },
  ];
  var i = 0;
  $("video").on('ended',myHandler);
  function myHandler() {
    i++;
    videoPlay(i);
    if(i == (v.length-1)){
      i = 0;
    }
  }
  function videoPlay(videoNum) {
    document.getElementById("v").setAttribute("src",v[videoNum].link);
    document.getElementById("v").load();
    document.getElementById("v").play();
    //título
    $('h1.title').fadeOut(500, function() {
        $(this).text(v[videoNum].nome).fadeIn(500);
    });
  }
}

function relogio() {
  setInterval( function() {
    var minutes = new Date().getMinutes();
    $(".min").html(( minutes < 10 ? "0" : "" ) + minutes);
  },1000);
  setInterval( function() {
    var hours = new Date().getHours();
    $(".hours").html(( hours < 10 ? "0" : "" ) + hours);
  }, 1000);
}

function info(){
  var divs = $('div[id^="info"]').hide(),
      i = 0,
      t = 3;
  
  (function cycle() {
      divs.eq(i).fadeIn(500)
                .delay(60*1000)
                .fadeOut(500, cycle);
      i++;
      if(i == divs.length)
        i=0;
  })();
  
  setInterval( function() {
    $("#ino1, #ino2").delay(1000).queue(function(next){
      $(this).toggleClass("hide");
      next();
    });
    $("#ino1, #ino2").toggleClass('fadeOutRight');
    $('hr.x:hidden').animate({width: '100%'},0);
    $('hr.x').animate({width: '0%'},5000);
  },5000);
  $('hr.x:visible').animate({width: '0%'},5000);
}


function tempo() {
  setInterval( function() {
    var x = $(".weather img").attr("data-x");
    x = -x;
    $(".weather img").attr("src", "./images/icons/"+x+".png");
    $(".weather img").attr("data-x", x);
    $(".temp").text(x*6+20);
    $(".weather p").toggleClass("color-blue color-red");
  },60* 5 * 1000); // 5 minutos
}

function aviso() {
  var avisos = [
  {tipo: "Informação",
   cor: "label-blue",
   texto: "Este é o primeiro aviso que avisa aos que foram avisados previamente que se pretenderem continuar a ser avisados terão de nos avisar."
  },
  {tipo: "Importante",
   cor: "label-red",
   texto: "Este é o segundo aviso que avisa aos que foram avisados previamente que se pretenderem continuar a ser avisados terão de nos avisar."
  }];
  var curr = 0, count = 0;
  // De 2 em 2 minutos aparece o aviso. Ao fim de repetir 2 vezes desaparece
  setInterval( function() {
    if (curr > avisos.length-2) curr = 0; else curr++;
    $('.aviso .texto').marquee('destroy');
    //mudar cor da label
    $(".aviso .label").attr('class', 'label');
    $(".aviso .label").addClass(avisos[curr].cor);
    $('.aviso .label b').text(avisos[curr].tipo);
    $('.aviso .texto').text(avisos[curr].texto);
    $('.divi-a').removeClass("full");
    create();
  },2 * 60 * 1000); // 2 minutos
  create();
  function create() {
    $('.aviso .texto').bind('finished', function(){
      count++;
      if (count > 2) {count = 0; $('.divi-a').addClass("full");}
    }).marquee({
      duration: 7000
    });
  }
}
