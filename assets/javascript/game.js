var wins=0;
var losses=0;
var computerRandomNumber=0;
var userScore = 0;
var crystals = [
{"name":"blue", "image":"assets/images/bluetriangle.png", "num":0},
{"name":"green", "image":"assets/images/greensquare.png", "num":0},
{"name":"yellow", "image":"assets/images/yellowoct.png", "num":0},
{"name":"pink", "image":"assets/images/pinkhex.png", "num":0}
];


function randomIntFromInterval(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}

$(document).ready(function() {
	// game picks a random number 
	computerRandomNumber = randomIntFromInterval(19,120);
	$("#randomNbr").text(computerRandomNumber);

	var buttonDiv = $("#buttons");
	for(var i =0; i < crystals.length ; i++){
		var b = $('<button></button>');
		b.addClass("letter-button letter letter-button-color");
		b.attr("id", crystals[i].name);
			//b.html(crystals[i].name);
			crystals[i].num = randomIntFromInterval(1,12);
			b.data("value", crystals[i].num);
			var img = document.createElement("IMG");
			img.src = crystals[i].image;
			img.height = 100;
			img.width = 100;
			b.html(img); 
			buttonDiv.append(b);
		}


		function refresh() {
			var delay = 2000;
			setTimeout(function() {
 				// code
 				computerRandomNumber = randomIntFromInterval(19,120);
 				$("#randomNbr").text(computerRandomNumber);
 				$("#userScore").text(0);
 				userScore = 0;
 				$("#message").text("");

 				var buttonDiv = $("#buttons");
 				var children = buttonDiv.children();
 				for(var i =0; i < crystals.length ; i++){
 					crystals[i].num = randomIntFromInterval(1,12);
 					var buttonDiv = children[i];
 					$('#'+crystals[i].name).data("value", crystals[i].num);
 				}
 			}, delay);
		}


	function checkOutcome() {
			if(parseInt($("#userScore").text()) === parseInt($("#randomNbr").text())) {
			//The player wins if their total score matches the random number from the beginning of the game.		
				wins++;
				$("#numWinsId").text(wins);
				$("#message").text("You win!!");
				refresh();

			}else if(parseInt($("#userScore").text()) > parseInt($("#randomNbr").text())) {
			//The player loses if their score goes above the random number.
				losses++;
				$("#numLossesId").text(losses);
				$("#message").text("You lose!!");
				refresh();
			}
	}

	//click event for each crystal
	$("button").on("click", function(event) {
        //userAnswer=event.target.id;
        var score = $(this).data("value");
        console.log("Selected=" + score);
        userScore += score;
        $("#userScore").text(userScore);
        checkOutcome();
    });

});
