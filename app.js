//Function to toggle subjects//
function boxToggle(subject) {
    let a = "." + subject;
    let buttonItUp = "." + subject + "button";
    $(`${a}`).toggleClass("hidden");
    if ($(`${a}`).hasClass("hidden")) {
      $(`${buttonItUp}`).addClass("unselected"); 
    }
    else {      
      $(`${buttonItUp}`).removeClass("unselected");
    }
}

//Show input Form

$(".inputcall").on("click", function(e) {
    e.preventDefault();
    $(".inputform form").toggleClass("hidden");
});

//Input Form Submit

$("form").submit(function() {
    var x = $("form").find(".description").val();
});

