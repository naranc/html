
$(document).ready(function(){
    var u = 1;
    var m = 1;
    var mt = 1;
    var t = 1;
    var g = 1;
    $(".user").on("click",function(){
        u++
        if(u%2==0){
            // console.log("shi")
            // console.log(i)
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
        $(".usert ul li a").css("color","#fff")
        
    })
    $(".usert ul li").mouseout(function(){
        // console.log(2)
        $(this).css("background-color","#040c15")
        $(this).css("color","#c4c6c6")
        
    })
    $(".msg").on("click",function(){
        m++
        if(m%2==0){
            // console.log("shi")
            // console.log(i)
             $(".msgt").show()
            $(".msg span").css("transform","rotate(270deg)")
        }else{
            $(".msgt").hide()
            $(".msg span").css("transform","rotate(90deg)")
        }
       
    })
    $(".msgt ul li").mouseover(function(){
        // console.log(1)
        $(this).css("background-color","#6fbbff")
        $(this).css("color","#fff")
        
    })
    $(".msgt ul li").mouseout(function(){
        // console.log(2)
        $(this).css("background-color","#040c15")
        $(this).css("color","#c4c6c6")
        
    })
    $(".main").on("click",function(){
        mt++
        if(mt%2==0){
            // console.log("shi")
            // console.log(i)
             $(".maint").show()
            $(".main span").css("transform","rotate(270deg)")
        }else{
            $(".maint").hide()
            $(".main span").css("transform","rotate(90deg)")
        }
       
    })
    $(".maint ul li").mouseover(function(){
        // console.log(1)
        $(this).css("background-color","#6fbbff")
        $(this).css("color","#fff")
        
    })
    $(".maint ul li").mouseout(function(){
        $(this).css("background-color","#040c15")
        $(this).css("color","#fff")
        
    })
    $(".tongji").on("click",function(){
        t++
        if(t%2==0){
            // console.log("shi")
            // console.log(i)
             $(".tongjit").show()
            $(".tongji span").css("transform","rotate(270deg)")
        }else{
            $(".tongjit").hide()
            $(".tongji span").css("transform","rotate(90deg)")
        }
       
    })
    $(".tongjit ul li").mouseover(function(){
        // console.log(1)
        $(this).css("background-color","#6fbbff")
        $(this).css("color","#fff")
        
    })
    $(".tongjit ul li").mouseout(function(){
        $(this).css("background-color","#040c15")
        $(this).css("color","#fff")
        
    })
    $(".grade").on("click",function(){
        g++
        if(g%2==0){
            // console.log("shi")
            // console.log(i)
             $(".gradet").show()
            $(".grade span").css("transform","rotate(270deg)")
        }else{
            $(".gradet").hide()
            $(".grade span").css("transform","rotate(90deg)")
        }
       
    })
    $(".gradet ul li").mouseover(function(){
        // console.log(1)
        $(this).css("background-color","#6fbbff")
        $(this).css("color","#fff")
        
    })
    $(".gradet ul li").mouseout(function(){
        $(this).css("background-color","#040c15")
        $(this).css("color","#fff")
        
    })
    
    
})