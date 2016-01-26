$(document).ready(function() {
  $("#btnFortune").click(function(event){
    $.getJSON('/api/fortune', function(fortune) {
      $('#fortuneDiv').html(fortune.fortune);
    });
  });
});