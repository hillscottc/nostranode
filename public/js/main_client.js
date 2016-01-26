$(document).ready(function() {

  $("#btnFortune").click(function(event){
    $.getJSON('/api/fortune', function(fortune) {
      $('#fortuneDiv').html(fortune.fortune);
    });
  });

  $(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });


  /* Set the active tag for current navbar link. */
  $('.nav a[href="' + this.location.pathname + '"]').parent().addClass('active');

});


