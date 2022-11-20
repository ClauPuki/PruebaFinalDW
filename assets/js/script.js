//tooltip//
$(document).ready(function () {
  $("enviar").tooltip();
});

//modal//
var enviar = document.getElementById("enviar");
var modal = new bootstrap.Modal(document.getElementById("modal"), {
  keyboard: false,
});

enviar.addEventListener("click", enviarMensaje);

function enviarMensaje() {
  modal.show();
}
//cambio texto cards//
$(document).ready(function () {
  $("#card1").click(function () {
    $("#cardMessage1").click(function () {
      $("#cardMessage1").text("$0.80");
    });
  });
});

$(document).ready(function () {
  $("#card2").click(function () {
    $("#cardMessage2").click(function () {
      $("#cardMessage2").text("$0.80");
    });
  });
});

$(document).ready(function () {
    $("#card3").click(function () {
      $("#cardMessage3").click(function () {
        $("#cardMessage3").text("$0.80");
      });
    });
  });

$(document).ready(function () {
  $("#card4").click(function () {
    $("#cardMessage4").click(function () {
      $("#cardMessage4").text("$0.80");
    });
  });
});

//smooth scroll//
var nav = document.getElementById('nav')

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset >100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});
