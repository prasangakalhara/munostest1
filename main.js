$(document).ready(function() {
   $(".parcours-box").removeClass("parcours-active");
   
   // set parc3 as active on page load
   $(".parc3").addClass("parcours-active");
   
   // trigger click event on round2 button
   $(".round2").click();

   $(".round1").on("click",function(){
      $(".tl-round").css("background-color","rgb(85, 69, 69)");
      $(".round1").css("background-color","white");
      $(".parcours-active").removeClass("parcours-active");
      $(".parc1").addClass("parcours-active");
      $(".timeline-indicator").css("width","0");
   })
   
   $(".round2").on("click",function(){
      $(".tl-round").css("background-color","rgb(85, 69, 69)");
      $(".round1").css("background-color","white");
      $(".round2").css("background-color","white");
      $(".parcours-active").removeClass("parcours-active");
      $(".parc2").addClass("parcours-active");
      $(".timeline-indicator").css("width","240");

      // display data for round2 section
      // code goes here
   })
   
   $(".round3").on("click",function(){
      $(".tl-round").css("background-color","rgb(85, 69, 69)");
      $(".round1").css("background-color","white");
      $(".round2").css("background-color","white");
      $(".round3").css("background-color","white");
      $(".parcours-active").removeClass("parcours-active");
      $(".parc3").addClass("parcours-active");
      $(".timeline-indicator").css("width","480");
   })
   
   $(".round4").on("click",function(){
      $(".tl-round").css("background-color","rgb(85, 69, 69)");
      $(".round1").css("background-color","white");
      $(".round2").css("background-color","white");
      $(".round3").css("background-color","white");
      $(".round4").css("background-color","white");
      $(".parcours-active").removeClass("parcours-active");
      $(".parc4").addClass("parcours-active");
      $(".timeline-indicator").css("width","720");
   })
   
});




const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )
