console.log('ok');

$(function(){ 

$('#button').click(function(){

    console.log('button');

    var name= $("#nom").val();
    var pre= $("#pre").val();
    var age= $("#age").val();
               
    $("#result").append(name);

    });
});