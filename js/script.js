		var timer = null;
		var countdownNumber = 10;

		var changeState = function(state) {
			document.body.className = 'body-state'+state;
			clearInterval(timer);
			countdownNumber = 10;
			document.getElementById('countdown').innerHTML = countdownNumber;

			if (state == 2) {
				timer = setInterval(function() {
					countdownNumber = countdownNumber - 1;
					document.getElementById('countdown').innerHTML = countdownNumber;

					if(countdownNumber <= 0) {
						changeState(3);
					};
				}, 1000);

			} else if (state == 3) {
						var success = setTimeout(function(){
							var randomNumber = Math.round(Math.random()*10);

							console.log('randomNumber: ',randomNumber)

							if (randomNumber > 5) {
								changeState(4);
							} else {
								changeState(5);
							}
						}, 2000);
				};
			};
			

		// var blastOff = function() {
		// 	document.getElementById('rocket').className = 'rocket flying';
		// };

		// var doCoolStuff = function() {
		// 	var currentClassName = document.getElementById('cool').className;

		// 	if (currentClassName == 'cool') {
		// 		document.getElementById('cool').className = 'cool red';
		// 	} else {
		// 	document.getElementById('cool').className = 'cool';
		// 	}
		// };

		// var car = {
		// 	make: 'VW',
		// 	type: 'Polo',
		// 	color: 'blue',
		// 	isTurnedOn: false,
		// 	numberOfWheels: 4,
		// 	seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
		// 	turnOn: function() {
		// 		this.isTurnedOn = true;
		// 	},
		// 	fly: function() {
		// 		alert('fly');
		// 	},
		// 	switchCar: function(isOn) {
		// 		console.log('turn car ' + isOn);
		// 		if(isOn == true){
		// 			this.isTurnedOn = true;
		// 		} else {
		// 			this.isTurnedOn = false;
		// 		}
		// 	}
		// };

