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
