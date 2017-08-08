//Default Objects
const resources = [{
                    descriptionVal: "MDN HTML Homepage",
                    linkVal: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    dropdownVal: "html"
                },
                 {
                     descriptionVal: "MDN CSS Homepage",
                     linkVal: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS",
                     dropdownVal: "css"
                 }
                ]

for (var i = 0; i < resources.length; i++) {
    $("#grid").append(`<section class="${resources[i].dropdownVal}"><h2>${resources[i].descriptionVal}</h2><a href="${resources[i].linkVal}">Click Here</a></section>`);
}


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

$("form").on("submit", function(e) {
    e.preventDefault();
    var descriptionVal = $("form").find(".description").val();
    var linkVal = $("form").find(".formlink").val();
    var dropdownVal = $("form").find(".dropdown").val();
    $("#grid").append(`<section class="${dropdownVal}"><h2>${descriptionVal}</h2><a href="${linkVal}">Click Here</a></section>`);
});

