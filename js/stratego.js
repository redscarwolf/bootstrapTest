// switching active in class of chooseBetweenSetDelete
$(document).ready(function(){
    $(".chooseBetweenSetDelete button").click(function(){
        $(".chooseBetweenSetDelete").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});

// switching active in class of Navbar
$(document).ready(function(){
    $(".nav a").click(function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});

// switching active in class of slectCharactar list-group
$(document).ready(function(){
    $(".selectCharactar button").click(function(){
        $(".selectCharactar").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});
