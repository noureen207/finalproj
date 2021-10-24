var scroll_pos = 0;
$(document).scroll(function () {
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > 0) {
    $("#navbar").removeClass("bg-transparent", function () {
      $("#navbar").addClass("bg-white", 500, function () {
        $("#navbar").addClass("shadow");
      });
    });
    $("#Up").css("display", "block");
  }
  if (scroll_pos == 0) {
    $("#navbar").addClass("bg-transparent", 700);
    $("#navbar").removeClass("shadow");
    $("#navbar").removeClass("bg-white");
    $("#Up").css("display", "none");
  }
});
$(document).ready(function () {
    $("#two").click(function () {
      $('.secondtable').css('display', 'block');
      $('.firstplus').css('display', 'none');
      $('.thirdtable').css('display', 'none');
      $('.fourthtable').css('display', 'none');
      $('.fifthtable').css('display', 'none'); $('.sixththtable').css('display', 'none');
    });
    $("#one").click(function () {
      $('.secondtable').css('display', 'none');
      $('.firstplus').css('display', 'block');
      $('.thirdtable').css('display', 'none');
      $('.fourthtable').css('display', 'none');
      $('.fifthtable').css('display', 'none'); $('.sixththtable').css('display', 'none');
    });
    $("#three").click(function () {
      $('.secondtable').css('display', 'none');
      $('.firstplus').css('display', 'none');
      $('.thirdtable').css('display', 'block');
      $('.fourthtable').css('display', 'none');
      $('.fifthtable').css('display', 'none');
      $('.sixththtable').css('display', 'none');
    });
    $("#four").click(function () {
      console.log("sad");
      $('.secondtable').css('display', 'none');
      $('.thirdtable').css('display', 'none');
      $('.firstplus').css('display', 'none');
      $('.fourthtable').css('display', 'block');
      $('.fifthtable').css('display', 'none'); $('.sixththtable').css('display', 'none');
    });
    $("#five").click(function () {
      console.log("sad");
      $('.secondtable').css('display', 'none');
      $('.thirdtable').css('display', 'none');
      $('.firstplus').css('display', 'none');
      $('.fourthtable').css('display', 'none');
      $('.fifthtable').css('display', 'block');
      $('.sixththtable').css('display', 'none');
    });
    $("#six").click(function () {
      $('.secondtable').css('display', 'none');
      $('.firstplus').css('display', 'none');
      $('.thirdtable').css('display', 'block');
      $('.fourthtable').css('display', 'none');
      $('.fifthtable').css('display', 'none');
      $('.sixththtable').css('display', 'block');
    });
    $(".onee").click(function () {
      $('.firstplus1').toggle();
      $('.changing1').toggle();
    });
    $(".twod").click(function () {
      console.log("hello");
      $('.firstplus2').toggle();
      $('.changing2').toggle();
    });
    $(".threed").click(function () {
      console.log("hi");
      $('.firstplus3').toggle();
      $('.changing3').toggle();
    });
    $(".foured").click(function () {
      console.log("hi");
      $('.firstplus4').toggle();
      $('.changing4').toggle();
    });
    $(".seconed").click(function () {
      console.log("hi");
      $('.secondplus1').toggle();
      $('.changing5').toggle();
    });
    $(".sectwod").click(function () {
      console.log("hi");
      $('.secondplus2').toggle();
      $('.changing6').toggle();
    });
    $(".secthreed").click(function () {
      console.log("hi");
      $('.secondplus3').toggle();
      $('.changing7').toggle();
    });
    $(".secfoured").click(function () {
      console.log("hi");
      $('.secondplus4').toggle();
      $('.changing8').toggle();
    });
    $(".secfived").click(function () {
      console.log("hi");
      $('.secondplus5').toggle();
      $('.changing9').toggle();
    });
    $(".secsixed").click(function () {
      console.log("hi");
      $('.secondplus6').toggle();
      $('.changing10').toggle();
    });
    $(".thirdoned").click(function () {
      console.log("hi");
      $('.changing11').toggle();
      $('.thirdplus1').toggle();
    });
    $(".thirdtwod").click(function () {
      console.log("hi");
      $('.changing12').toggle();
      $('.thirdplus2').toggle();
    });
    $(".thirdthreed").click(function () {
      console.log("hi");
      $('.changing13').toggle();
      $('.thirdplus3').toggle();
    });
    $(".thirdfoured").click(function () {
      console.log("hi");
      $('.changing14').toggle();
      $('.thirdplus4').toggle();
    });
    $(".thirdfived").click(function () {
      console.log("hi");
      $('.changing15').toggle();
      $('.thirdplus5').toggle();
    });

    $(".fouroned").click(function () {
      console.log("hi");
      $('.changing16').toggle();
      $('.fourthplus1').toggle();
    });

    $(".fourtwod").click(function () {
      console.log("hi");
      $('.changing17').toggle();
      $('.fourthplus2').toggle();
    });

    $(".fourthreed").click(function () {
      console.log("hi");
      $('.changing18').toggle();
      $('.fourthplus3').toggle();
    });

    $(".fourfoured").click(function () {
      console.log("hi");
      $('.changing19').toggle();
      $('.fourthplus4').toggle();
    });
    $(".fiveoned").click(function () {
      console.log("hi");
      $('.changing20').toggle();
      $('.fifthplus1').toggle();
    });
    $(".fivetwod").click(function () {
      console.log("hi");
      $('.changing21').toggle();
      $('.fifthplus2').toggle();
    });
    $(".fivethreed").click(function () {
      console.log("hi");
      $('.changing22').toggle();
      $('.fifthplus3').toggle();
    });
    $(".fivefoured").click(function () {
      console.log("hi");
      $('.changing23').toggle();
      $('.fifthplus4').toggle();
    });
    $(".fivefived").click(function () {
      console.log("hi");
      $('.changing24').toggle();
      $('.fifthplus5').toggle();
    });
    $(".fivesixed").click(function () {
      console.log("hi");
      $('.changing25').toggle();
      $('.fifthplus6').toggle();
    });
    $(".sixoned").click(function () {
      console.log("hi");
      $('.changing26').toggle();
      $('.sixthplus1').toggle();
    });
    $(".sixtwod").click(function () {
      console.log("hi");
      $('.changing27').toggle();
      $('.sixthplus2').toggle();
    });
    $(".sixthreed").click(function () {
      console.log("hi");
      $('.changing28').toggle();
      $('.sixthplus3').toggle();
    });
    $(".sixfoured").click(function () {
      console.log("hi");
      $('.changing29').toggle();
      $('.sixthplus4').toggle();
    });
    $(".fivesixed").click(function () {
      console.log("hi");
      $('.changing30').toggle();
      $('.sixthplus5').toggle();
    });
    $(".sixsixed").click(function () {
      console.log("hi");
      $('.changing31').toggle();
      $('.sixthplus6').toggle();
    });
    $(".sixsevened").click(function () {
      console.log("hi");
      $('.changing32').toggle();
      $('.sixthplus7').toggle();
    });
    $(".sixeighted").click(function () {
      console.log("hi");
      $('.changing33').toggle();
      $('.sixthplus8').toggle();
    });

  });
  function myFunction() {
    var x = document.getElementById("aftertoggle");
    // var z = document.getElementById("notoggle");
    var y = document.getElementById("first");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  }