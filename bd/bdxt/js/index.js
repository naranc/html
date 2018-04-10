var i = 1;
$(document).ready(function(){
    
    $(".user").on("click",function(){
        i++
        if(i%2!=0){
            console.log("shi")
            console.log(i)
             $(".usert").show()
            $(".user span").css("transform","rotate(270deg)")
        }else{
            $(".usert").hide()
            $(".user span").css("transform","rotate(90deg)")
        }
       
    })
    $(".usert ul li").mouseover(function(){
        // console.log(1)
        $(this).css("background-color","#6fbbff")
        $(this).css("color","#fff")
        
    })
    $(".usert ul li").mouseout(function(){
        // console.log(2)
        $(this).css("background-color","#040c15")
        $(this).css("color","#c4c6c6")
        
    })
})