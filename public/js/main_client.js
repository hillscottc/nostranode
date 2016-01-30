$(document).ready(function() {

  $("#btnFortune").click(function(event){
    $.getJSON('/api/fortune', function(fortune) {
      $('#fortuneDiv').html(fortune.fortune);
      $("#fortuneDiv").effect( "bounce", "slow" );
    });
  });

  /* Set the active tag for current navbar link. */
  $('.nav a[href="' + this.location.pathname + '"]').parent().addClass('active');

});


