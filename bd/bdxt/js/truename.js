$(document).ready(function(){
    $("button").on("click",function(){
        $(".rightin").show();
        // $(".rightout").hide();
    })
    $(".close").on("click",function(){
        $(".rightin").hide();
        // $(".rightout").show();
    })
})