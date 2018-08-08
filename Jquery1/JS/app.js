// $(document).ready(function(){

//     $('.titre, #p4').hide();
// });
//je peux cible un élément HTML, Comme en CSS. $('.titre') ou $('#p5') , etc...

// $(function(){ 

//     $('#p1').mouseenter(function(){
//         $('#p5').hide();
//     });

//     $('#p4').mouseenter(function(){
//         $('#p5').show();
//     });

// });
//  $(function(){ 

    // $('#p5').hide();
//ci-dessous, un "call-back", les fonctions s'enchaînent les unes après les autres.
//     $('#button').click(function(){
//         $('#p5').slideToggle(3000,function(){
//             $('#p4').slideToggle(2000,function(){
//                 $('#p3').slideToggle(1000);
//             });
//         });
//     });
// });
// $(function(){ 
//     $('button').click(function(){
//         $('#carre').animate({
//             left: '600px',
//             top:'150px',
//             'border-radius':'100%'
//         },3000, function(){
//             $('#carre').fadeOut();
//         });
//     });

// });
// $(function(){ 
//     $('button').click(function(){
//         console.log('document chargé')
//         $('#carre').animate({
//             left: '600px'
//         });
//     });
//     $('button').click(function(){
//         $('#carre').animate({
//             top:'150px'
//         });
//     });
//     $('button').click(function(){
//         $('#carre').animate({
//             'border-radius':'100%'
//               });
//             });        

//     $('button').click (function(){
//         $('#carre').fadeOut(1000);
//         });
//     });
// $(function(){ 
            
    //         console.log('document chargé');

    //         $('#buttonS').click(function(){
    //            var name= $("#name").val();
               
    //            $ ('div').append("<p> Bonjour <b>" + name + "</b></p>");
    
    //         });
    //  });

    $(function(){ 
        $('#buttonS').click(function(){

           var contenu= $('#name').html();
           
           $('#resultat').html(contenu);
        });
    });