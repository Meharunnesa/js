$(document).ready(function(){
    $('.hide').click(function(){
        $('.content').hide('slow');
    }),

    $('.show').click(function(){
        $('.content').show('slow');
    })
});

// events anf callback

$(document).ready(function(){
   $('.events').dblclick(function(){
    $(this).css("color" , "red");
   }),

   $('.hide').mouseenter(function(){
        alert("If you click here this text will be hide!!");//without callback
        $('.content').hide('slow');

        //with callback
        // $('.content').hide('slow', function(){ 
        //     alert("If you click here this text will be hide!!");
        // });
   }),

   $('.events').mouseleave(function(){
    $(this).css("background-color" , "pink");
   }),

   $('.events').mouseleave(function(){
    $(this).css("background-color" , "pink");
   }),

   $('.events').mouseup(function(){
    $(this).css("background-color" , "green");
   }),

   $('.events').mousedown(function(){
    $(this).css("background-color" , "yellow");
   })

});


// multiple event

$(document).ready(function(){
    $('.multiple').on({
        mouseenter: function(){
            $(this).css("color", "red");
        },
        mouseleave: function(){
            $(this).css("color", "green");
        }
    });
});

// fade

$(document).ready(function(){
    $('.fade').click(function(){
        $('.fade-1').fadeIn();
        $('.fade-2').fadeIn('slow');
        $('.fade-3').fadeIn(3000);
    })
});

// slide & stop()

$(document).ready(function(){
    $('.slide').click(function(){
        $('.slide-content').slideToggle(3000);
    })

    $('.stop').click(function(){
        $('.slide-content').stop();
    })
});

// animation

$(document).ready(function(){
    $('.animation').click(function(){
        $('.animation-container-1').animate({
            width : "toggle"
        }, "slow");

        var move = $('.animation-container-2');

        move.animate({
            left : '300px',
            width : '100px',
            opacity : 'o.1'
        }, "slow");

        move.animate({
            top : "200px",
            height : '100px',
            opacity : "o.5"
        }, "slow");

        move.animate({
            left : "0px",
            height : '-=50px',
            opacity : "o.7"
        }, "slow");

        move.animate({
            top : "0px",
            width : '-=50px',
            opacity : "1"
        }, "slow");

    })   
});