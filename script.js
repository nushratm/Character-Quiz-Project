
$("button").click(function() {
	var adventure =$(".adventure").val();
    var friends =$(".friends").val();
	var phantom =$(".phantom").val();
	var noisy =$(".noisy").val();
	var counter = 0;
    
    counter = counter + 1;
    
    $(".counter").text("Quiz taken " + counter + " times");
    
    if (parseInt(adventure) <= 2 && friends === "Yes" && phantom === "No" && noisy === "Quiet") {
	$(".results").text("You got Killua!");
    $(".results").append('<img src="https://qph.fs.quoracdn.net/main-qimg-06697523db4cb85b25b8cf1ce95f2d4e">');
} else if (parseInt(adventure) === 3 || 4 && friends === "No" && phantom === "Yes" && noisy === "Quiet") {
    $(".results").text("You got Hisoka!");
    $(".results").append('<img src="https://i.ytimg.com/vi/hm-mjjc1LoY/maxresdefault.jpg">');
} else if (parseInt(adventure) === 5 || 6 && friends === "Sometimes" || "Yes" && phantom === "Yes" && noisy === "Quiet") {
	$(".results").text("You got Kurapika!");
    $(".results").append('<img src="https://media.comicbook.com/2019/09/hxh-kurapika-1186893-1280x0.jpeg">');
} else if (parseInt(adventure) === 7 || 8 && friends === "Yes"  && phantom === "No" && noisy === "Loud") {
	$(".results").text("You got Leorio!");
    $(".results").append('<img src="https://i.redd.it/7i9wnfyo1yj21.jpg">');
} else if (parseInt(adventure) === 9 || 10 && friends === "Yes" && phantom === "No" || "Maybe" && noisy === "Loud" || "Very loud") {
	$(".results").text("You got Gon!");
	$(".results").append('<img src="https://www.anime-planet.com/images/characters/gon-freecss-2617.jpg">');
}

});






