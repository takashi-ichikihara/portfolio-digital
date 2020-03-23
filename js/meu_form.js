$(document).ready(function () {

  // VALIDATE NAME:

  $('[name="nome"]').on('keyup', function (event) {

    if ($(this).val().trim()) {

      // If the statement inside if is true, meaning that the string is not empty show green bottom border indicating valid input

      $(this).css("borderBottom", "3px solid #1de71d");
      $('#warningName').text('');
    } else {

      // If keyup event is triggered by the tab key do not show the warning message and make bottom border blue for focus

      if (event.which == 9) {
        $(this).css("borderBottom", "3px solid dodgerblue");
        $('#warningName').text('');
      } else {

        // If keyup event is triggered by any key other than the tab key display warning message

        $(this).css("borderBottom", "3px solid #F00");
        $('#warningName').text("Digite o seu nome");
      };
    }
  }); // close on keyup

  // VALIDATE EMAIL:

  $('#email').on('keyup', function (event) {

    // Verify if email has at at symbol and a dot to the right of the at symbol

    var x = $('#email').val().trim();
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {

      // If email is not valid, check if the keyup event is triggered by tab key, in which case do not show warning message and make bottom border blue for focus

      if (event.which == 9) {
        $(this).css("borderBottom", "3px solid dodgerblue");
        $('#warningEmail').text('');
      } else {

        // If keyup event is triggered by any key other than the tab key display warning message

        $(this).css("borderBottom", "3px solid #F00");
        $('#warningEmail').text("Digite seu e-mail");
      }

    }
    else {

      // If email is valid show green bottom border indicating valid input

      $(this).css("borderBottom", "3px solid #1de71d");
      $('#warningEmail').text('');
    }

  }); // close on keyup

  // VALIDATE COMMENTS:

  $('[name="mensagem"]').on('keyup', function (event) {

    if ($(this).val().trim()) {

      // If the statement inside if is true, meaning that the string is not empty show green bottom border indicating valid input

      $(this).css("borderBottom", "3px solid #1de71d");
      $('#warningComment').text('');
    } else {

      // If keyup event is triggered by the tab key do not show the warning message and make bottom border blue for focus

      if (event.which == 9) {
        $(this).css("borderBottom", "3px solid dodgerblue");
        $('#warningComment').text('');
      } else {

        // If keyup event is triggered by any key other than the tab key display warning message

        $(this).css("borderBottom", "3px solid #F00");
        $('#warningComment').text("Digite uma mensagem");
      }
    };
  }); // close on keyup
}); // close doc ready