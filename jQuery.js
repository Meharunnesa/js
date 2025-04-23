$(document).ready(function(){
    $('.hide').click(function(){
        $('.content').hide('slow');
    }),

    $('.show').click(function(){
        $('.content').show('slow');
    })
});

// events

$(document).ready(function(){
   $('.events').dblclick(function(){
    $(this).css("color" , "red");
   }),

   $('.hide').mouseenter(function(){
    alert("If you click here this text will be hide!!");
    $('.content').hide('slow');
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

// slide

$(document).ready(function(){
    $('.slide').click(function(){
        $('.slide-content').slideToggle('slow');
    })
});