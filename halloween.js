// A counter for the exploded pumkins
var counter = 0;

// Create a new pumpkin every 500ms
var interval = setInterval(createPumpkin, 500);


function createPumpkin(){

	// Game over if more than 10 pumpkins
	if (document.getElementsByClassName("pumpkin").length == 10){
		clearInterval(interval);

		// Add a "Game Over" div
		var gameOver = document.createElement("div");
		gameOver.id = "gameOver";
		gameOver.innerHTML = "GAME OVER";
		document.body.appendChild(gameOver);
		gameOver.style.top = (document.body.clientHeight - gameOver.offsetHeight) / 2 + "px";
	}
	else{
		

		var pumpkinDiv = document.createElement("div");
		pumpkinDiv.className = "pumpkin";
		var position = pickRandomPosition();
		pumpkinDiv.style.left = position[0] + "px";
		pumpkinDiv.style.top = position[1] + "px";
		var leftPumpkinDiv = document.createElement("div");
		leftPumpkinDiv.className = "left-pumpkin";
		var rightPumpkinDiv = document.createElement("div");
		rightPumpkinDiv.className = "right-pumpkin";
		var middlePumpkinDiv = document.createElement("div");
		middlePumpkinDiv.className = "middle-pumpkin";
		var mouthDiv = document.createElement("div");
		mouthDiv.className = "mouth";
		var lipDiv = document.createElement("div");
		lipDiv.className = "lip";
		var t1Div = document.createElement("div");
		t1Div.className = "tooth t1";
		var t2Div = document.createElement("div");
		t2Div.className = "tooth t2";
		var t3Div = document.createElement("div");
		t3Div.className = "tooth t3";
		var e1Div = document.createElement("div");
		e1Div.className = "eye e1";
		var e2Div = document.createElement("div");
		e2Div.className = "eye e2";
		var noseDiv = document.createElement("div");
		noseDiv.className = "nose";
		var stemDiv = document.createElement("div");
		stemDiv.className = "stem";
		pumpkinDiv.appendChild(leftPumpkinDiv);
		pumpkinDiv.appendChild(middlePumpkinDiv);
		pumpkinDiv.appendChild(rightPumpkinDiv);
		pumpkinDiv.appendChild(mouthDiv);
		pumpkinDiv.appendChild(lipDiv);
		pumpkinDiv.appendChild(t1Div);
		pumpkinDiv.appendChild(t2Div);
		pumpkinDiv.appendChild(t3Div);
		pumpkinDiv.appendChild(e1Div);
		pumpkinDiv.appendChild(e2Div);
		pumpkinDiv.appendChild(noseDiv);	
		pumpkinDiv.appendChild(stemDiv);
		
		// add directly to the body element
		document.body.appendChild(pumpkinDiv);

		// Add event listener to explode on click
		pumpkinDiv.addEventListener("click", function(){explode(this);});
	}
}


  
function pickRandomPosition(){
	var x = Math.floor(Math.random() * (document.body.clientWidth - 300));
	var y = Math.floor(Math.random() * (document.body.clientHeight - 300));
	return [ x, y ];
}


function explode(pumpkin){
	// Get center position
	var x = parseInt(pumpkin.style.left) + 150;
	var y = parseInt(pumpkin.style.top) + 150;

	// Remove the pumpkin
	pumpkin.parentNode.removeChild(pumpkin);

	// Create 25 orange particles
	for (var i = 0; i < 25; i++){
		var particle = document.createElement("div");
		particle.style.left = x + "px";
		particle.style.top = y + "px";
		particle.className = "particle";
		var translation = Math.floor(Math.random() * 300);
		particle.style.transform = 'rotate(' + (i * 36) + 'deg) translate(' + translation + 'px) scale(5)';
		particle.addEventListener("animationend", function(){
			document.body.removeChild(this);
		});
		document.body.appendChild(particle);
	}

	
	counter++;
	document.getElementById("counter").innerHTML = counter;
}