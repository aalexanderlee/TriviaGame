//should produce a timed question list with radio button responses
$(document).ready(function() {
	
	//original variables for pushing and matching elements from radio selects and saved answers
	//LOGIC VARIABLE
	var correctValues = ["Pacific Ocean", "Mt. Everest", "Mariana Trench", "1", "Saturn", "142"];
	//define these input array elements in the click function that records the user response
	//LOGIC VARIABLE
	var selectAnswers = [];
	
	//starts the count for correct answers at zero; log and write these into HTML inside or after stopCount
	//REMEMBER TO ACCESS AND PRINT THESE IN AFTER STOPCOUNT
	var correctCount = 0;
	//starts the count for the wrong answers at zero; log and write these into HTML inside or after stopCount
	//REMEMBER TO ACCESS AND PRINT THESE IN AFTER STOPCOUNT
	var wrongCount = 0;

	
function runLogic() {

	//records input as selectedValues elements using a radio click function, record as the person goes down the list of questions
		$("#AnswerOne").one('click', function() {
			var responseOne = $("#AnswerOne input[type='radio'][name='ocean']:checked").val();
			selectAnswers.push(responseOne)
			

			if (selectAnswers[0] === correctValues[0]) {
				correctCount++;
				console.log("Right: " + correctCount);
				console.log(selectAnswers)
				
			} else if (selectAnswers[0] !== correctValues[0]) {
				wrongCount++;
				console.log("Wrong: " + wrongCount);
				console.log(selectAnswers)
				
			}

			if (seconds === 0){
				stopCount();
			}
		
		});


		$("#AnswerTwo").one('click', function() {
			var responseTwo = $("#AnswerTwo input[type='radio'][name='mountain']:checked").val();
			selectAnswers.push(responseTwo)

			
			if (selectAnswers[1] === correctValues[1]) {
				correctCount++;
				console.log("Right: " + correctCount);
				console.log(selectAnswers)
				
			} else if (selectAnswers[1] !== correctValues[1]) {
				wrongCount++;
				console.log("Wrong: " + wrongCount);
				console.log(selectAnswers)
				
			}

			if (seconds === 0){
				stopCount();
			}
			
		});

		$("#AnswerThree").one('click', function() {
			var responseThree = $("#AnswerThree input[type='radio'][name='ditch']:checked").val();
			selectAnswers.push(responseThree)

			
			if (selectAnswers[2] === correctValues[2]) {
				correctCount++;
				console.log("Right: " + correctCount);
				console.log(selectAnswers)
				
			} else if (selectAnswers[2] !== correctValues[2]) {
				wrongCount++;
				console.log("Wrong: " + wrongCount);
				console.log(selectAnswers)
				
			}

			if (seconds === 0){
				stopCount();
			}

		});

		$("#AnswerFour").one('click', function() {
			var responseFour = $("#AnswerFour input[type='radio'][name='amount']:checked").val();
			selectAnswers.push(responseFour)
	
			
			if (selectAnswers[3] === correctValues[3]) {
				correctCount++;
				console.log("Right: " + correctCount);
				console.log(selectAnswers)
				
			} else if (selectAnswers[3] !== correctValues[3]) {
				wrongCount++;
				console.log("Wrong: " + wrongCount);
				console.log(selectAnswers)
				
			}

			if (seconds === 0){
				stopCount();
			}
			
		});

		$("#AnswerFive").one('click', function() {
			var responseFive = $("#AnswerFive input[type='radio'][name='planet']:checked").val();
			selectAnswers.push(responseFive)
			

			if (selectAnswers[4] === correctValues[4]) {
				correctCount++;
				console.log("Right: " + correctCount);
				console.log(selectAnswers)
				
			} else if (selectAnswers[4]!== correctValues[4]) {
				wrongCount++;
				console.log("Wrong: "+ wrongCount);
				console.log(selectAnswers)
				
			}

			if (seconds === 0){
				stopCount();
			}
		
		});

		$("#AnswerSix").one('click', function() {
			var responseSix = $("#AnswerSix input[type='radio'][name='mass']:checked").val();
			selectAnswers.push(responseSix)

			
			if (selectAnswers[5] === correctValues[5]) {
				correctCount++;
				console.log("Right: " + correctCount);
				console.log(selectAnswers)
				
			} else if (selectAnswers[5] !== correctValues[5]) {
				wrongCount++;
				console.log("Wrong: " + wrongCount);
				console.log(selectAnswers)
				
			}

			if (seconds === 0){
				stopCount();
			}
			
		});

		/* maybe try making a submit button
		$("#submitButton").submit('click', function() {
			console.log("Right: " + correctCount);
			console.log("Wrong: " + wrongCount);
			console.log(selectAnswers)
			stopCount();
		});*/

	};
	runLogic();

	//set the total time run, make this definition global
	//make sure this timer runs as a function that includes all of the logic above
	var seconds = 30;
	//create a name for your interval that refreshes for your countdown, leave undefined
	var myInterval;

	//function that decrements from global second 30 and logs it up
	//reset seconds to 30; 
	var decrement =  function () {
		seconds--
		console.log(seconds);
		console.log("T-minus!");
		//update the div #clockCounting display everytime seconds variable is decreased by one
		$("#clockCounting").html("<h4><hr>T-Minus: " + seconds + " seconds!<hr></h4>");

		//will refer to the stopCount function below when seconds gets to 0 
		if (seconds === 0) {
			$("#lookUp").html("Scroll up to view your score!");
			//will skip to the function responsible for stopping the decrement at the bottom
			stopCount();
			
			emptyQuestionContent();

			pushSolutions();
		}

	 }

	//push all of the cumulative correctCount and wrongCount tally variables to question div in html
	var pushSolutions = function() {
	 	var newDiv = $("<div>");
	 	$("#clockCounting").append(newDiv);
	 	newDiv.append("Correct Responses: " + correctCount + "<br>");
	 	newDiv.append("Wrong Responses: " + wrongCount);	
	}

	//call a function initiates the countDown function 
	var startQuiz = function() {
	 	countDown();	
	}
	 
	//empties all the contents of the questions div in html
	var emptyQuestionContent = function(){
	 	$("#clockCounting").empty();
	}
	 

	//changes the myInterval variable to seconds from milliseconds while decreasing
	var countDown = function() {
	 	myInterval = setInterval(decrement, 1000); 
	}


	//clears all of the interval decrements and ends the program 	 
	var stopCount = function() {
	 	clearInterval(myInterval);
	}

	countDown();

});


	//My original pseudo-coding for logic portion:
	//maybe var questionsArr = ["#questionOne", "#questionTwo", "#questionThree", "questionFour", "#questionFifth", "#questionSixth"]; 

	//try pushing it to an array selectedValues, let this complete before it runs comparisons
	//selectedValues.push(for each radio button recorded)

	//initiate comparisons iterations with "for (var i=0; i<correctValues.length; i++)"
	//then compare these selectedValues array indices with the correctValues indices using if statements
	
	//if selectedValues[i] = correctValues[i], then add one to correctCount via increments
	//console.log(correctCount)
	//post this correctCount onto html screen after this whole program runs
	
	//else if selectedValues[i] != correctValues[i], then add one to wrongCount via increments
	//console.log(wrongCount)
	//post this wrongCount onto html screen after this whole program runs

	//Jerome's suggestion; try your own way first to understand radio buttons inputs thoroughly
	//Object with keys as questions : values as possible answers; index 
	//var QuestionAnswers = {
		//"Which ocean is the deepest in the world?": ["Pacific Ocean", ["Atlantic Ocean","Indian Ocean","Arctic Ocean"]],
		//"Where is the highest point of the Earth's crust?": ["Mt. Everest", ["Mt. Shasta", "Mt. Morty", "Mt. Schwifty"]],
		//"Where is the lowest point of the Earth's crust?": ["Mariana Trench", ["Death Valley", "Florida", "Trump's Inauguration"]],
		//"How many protons are in hydrogen's most common isotope?": ["1", ["2", "3", "4"]],
		//"What is the 6th planet of our solar system, inward to outward?": ["Saturn", ["Uranus", "Neptune", "Earth"]],
		//"What is the matching chemical weight (amu) for sodium phosphate?": ["142", ["234", "54.6", "38.8"]]
	//}
	//new variable that represents every question (aka key) in the QuestionAnswers object
	//var allQuestions = Object.keys(QuestionAnswers);
	//place all of these into an id you placed in html via iteration
	//new variable that represents every answer (aka value) in the QuestionAnswers object
	//var allAnswers = Object.values(QuestionAnswers);
	//place all of these into an id you placed in html via iteration
	//var formatQA = function(){
	//}


	//Other random thoughts for pseudo-coding:
	//try an array of id's for you to dynamically run through
	//not sure if these ids can be referred to in an array
	
	/*var questionIdArr = ["#questionOne", "#questionTwo", "#questionThree", "#questionFour", "#questionFive"];

	var loopButtons = function() {
	
		//go through the questions one by one
		for(var i=0; i<questionIdArr.length; i++) {

			//append radio buttons onto each question as you iterate
			$('#questionIdArr').append('<input type="radio" name="Question: " />');
		}
	} 

	//all the right answers you want to compare with the selected values
	//maybe try for(i=0; i<)*/
