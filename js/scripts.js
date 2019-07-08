// Business Logic In the Back






// User Interface for Pizza Party In the Front 

$(document).ready(function(){
    $("form#transportation_survey").submit(function(event){
      event.preventDefault();
      $("#toppings").show();
      $("input:checkbox[name=toppings]:checked").each(function(){
        var pizzaToppings = $(this).val();
        $('#work-responses').append(workTransportationMode + "<br>");
      });
      $("#fun-responses").show();
      $("input:checkbox[name=fun-transportation]:checked").each(function(){
        var funTransportationMode = $(this).val();
        $('#fun-responses').append(funTransportationMode + "<br>");
      });
      $('#transportation_survey').hide();
    });
  });
  