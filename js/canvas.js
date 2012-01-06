window.onload = function(){
               	var canvas = document.getElementById("myCanvas");
	           	var context = canvas.getContext("2d");
	 
	                // do stuff here

	                // Straight Line
	                context.beginPath();
	                context.moveTo(30,50);
	                context.lineTo(450, 50);
	                context.lineWidth = 7;
	                context.strokeStyle = "#ff931e"
	                context.lineCap = "round";
	                context.stroke();

	                 // Straight Line 2
	                context.beginPath();
	                context.moveTo(650,50);
	                context.lineTo(1180, 50);
	                context.stroke();

	                 // Straight Line 3
	                context.beginPath();
	                context.moveTo(1370,50);
	                context.lineTo(1460, 50);
	                context.stroke();

	                // Straight Line 4
	                context.beginPath();
	                context.moveTo(150,1340);
	                context.lineTo(450, 1340);
	                context.stroke();
	                
	                // Straight Line 5
	                // context.beginPath();
	                //context.moveTo(650,1340);
	                //context.lineTo(1070, 1340);
	                // context.stroke();

	                // Straight Line 6
	                // context.beginPath();
	                // context.moveTo(1340,1340);
	                // context.lineTo(1460, 1340);
	                // context.stroke();

	                // Down Line 1
	                context.beginPath();
	                context.moveTo(1080,1440);
	                context.lineTo(1080, 1720);
	                context.stroke();

	                // Down Line 2
	                context.beginPath();
	                context.moveTo(1080,2020);
	                context.lineTo(1080, 2400);
	                context.stroke();

	                // Down Line 3
	                context.beginPath();
	                context.moveTo(1080,2500);
	                context.lineTo(1080, 2565);
	                context.stroke();

	                // Curved Line (Right then Down)
				var rectWidth = 100;
				var rectHeight = 2260;
				var rectX = 50;
	    			var rectY = 50;

				var cornerRadius = 50;

				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX + rectWidth - cornerRadius, rectY);
				context.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, 
				rectY + cornerRadius, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Curved Line (Right then Down) 2
				var rectWidth = 100;
				var rectHeight = 925;
				var rectX = 750;
	    			
				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX + rectWidth - cornerRadius, rectY);
				context.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, 
				rectY + cornerRadius, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Curved Line (Right then Down) 4
				var rectWidth = 100;
				var rectHeight = 2260;
				var rectX = 1460;
	    			
				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX + rectWidth - cornerRadius, rectY);
				context.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, 
				rectY + cornerRadius, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Curved Line (Right then Down) 3
				var rectWidth = 100;
				var rectHeight = 310;
				var rectX = 980;
				var rectY = 1025;
	    			
				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX + rectWidth - cornerRadius, rectY);
				context.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, 
				rectY + cornerRadius, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Brown Line 1
				context.beginPath();
	                context.moveTo(300,200);
	                context.lineTo(660, 200);
	                context.lineWidth = 7;
	                context.strokeStyle = "#736356"
	                context.lineCap = "round";
	                context.stroke();

	                // Brown Line 2
				context.beginPath();
	                context.moveTo(300,475);
	                context.lineTo(660, 475);
	                context.stroke();

	                // Brown Line 3
				context.beginPath();
	                context.moveTo(300,750);
	                context.lineTo(660, 750);
	                context.stroke();

	                // Brown Line 4
				context.beginPath();
	                context.moveTo(300,1025);
	                context.lineTo(660, 1025);
	                context.stroke();

	                // Brown Line 5
				context.beginPath();
	                context.moveTo(1020,200);
	                context.lineTo(1380, 200);
	                context.stroke();

				// Items Curved Line 1 (Down then Right)
				var rectWidth = 150;
				var rectHeight = 100;
				var rectX = 150;
	    			var rectY = 100;

				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX, rectY + rectHeight - cornerRadius);
				context.arcTo(rectX, rectY + rectHeight, rectX + cornerRadius, 
				rectY + rectHeight, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY + rectHeight);
				
				context.strokeStyle = "#ff931e"
				context.lineWidth = 7;
				context.stroke();

				// Items Curved Line 1 (Down then Right) 2
	    			var rectY = 375;

				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX, rectY + rectHeight - cornerRadius);
				context.arcTo(rectX, rectY + rectHeight, rectX + cornerRadius, 
				rectY + rectHeight, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Items Curved Line 1 (Down then Right) 3
	    			var rectY = 650;

				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX, rectY + rectHeight - cornerRadius);
				context.arcTo(rectX, rectY + rectHeight, rectX + cornerRadius, 
				rectY + rectHeight, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Items Curved Line 1 (Down then Right) 4
	    			var rectY = 925;

				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX, rectY + rectHeight - cornerRadius);
				context.arcTo(rectX, rectY + rectHeight, rectX + cornerRadius, 
				rectY + rectHeight, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Items Curved Line 1 (Down then Right) 5
				var rectX = 850;
	    			var rectY = 100;

				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX, rectY + rectHeight - cornerRadius);
				context.arcTo(rectX, rectY + rectHeight, rectX + cornerRadius, 
				rectY + rectHeight, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Items Curved Line 1 (Down then Right) 6
				var rectX = 850;
	    			var rectY = 925;

				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX, rectY + rectHeight - cornerRadius);
				context.arcTo(rectX, rectY + rectHeight, rectX + cornerRadius, 
				rectY + rectHeight, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Items Curved Line 1 (Down then Right) 7
				var rectHeight = 80;
				var rectX = 1080;
	    			var rectY = 2525;

				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX, rectY + rectHeight - cornerRadius);
				context.arcTo(rectX, rectY + rectHeight, rectX + cornerRadius, 
				rectY + rectHeight, cornerRadius);
				context.lineTo(rectX + 90, rectY + rectHeight);
				
				context.stroke();

				// Items Curved Line 1 (Down then Left)
				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX, rectY + rectHeight - cornerRadius);
				context.arcTo(rectX, rectY + rectHeight, rectX - cornerRadius, 
				rectY + rectHeight, cornerRadius);
				context.lineTo(rectX - rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Items Curved Line 2 (Down then Left)
				var rectWidth = 180;
				var rectHeight = 100;
				var rectX = 1560;
	    			var rectY = 2505;

				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX, rectY + rectHeight - cornerRadius);
				context.arcTo(rectX, rectY + rectHeight, rectX - cornerRadius, 
				rectY + rectHeight, cornerRadius);
				context.lineTo(rectX - rectWidth, rectY + rectHeight);
				
				context.stroke();

				// Items Curved Line 1 (Up then Right)
				var rectHeight = 80;
				var rectX = 850;
	    			var rectY = 2685;

				context.beginPath();
				context.moveTo(rectX, rectY);
				context.lineTo(rectX, rectY - rectHeight + cornerRadius);
				context.arcTo(rectX, rectY - rectHeight, rectX + cornerRadius, 
				rectY - rectHeight, cornerRadius);
				context.lineTo(rectX + rectWidth, rectY - rectHeight);
				
				context.stroke();

				// Logo Ball
				var centerX = 1080;
				var centerY = 1920;
				var radius = 200;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fillStyle = "#fff";
				context.fill();
				context.lineWidth = 5;
				context.stroke();


				// Ball 1
				var centerX = 450;
				var centerY = 50;
				var radius = 12;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fillStyle = "#fff";
				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 2
				var centerX = 650;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 3
				var centerX = 300;
				var centerY = 200;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 4
				var centerX = 300;
				var centerY = 475;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 5
				var centerY = 750;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 6
				var centerY = 1025;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 7
				var centerX = 1180;
				var centerY = 50;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 8
				var centerX = 1370;
				var centerY = 50;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 9
				var centerX = 1000;
				var centerY = 200;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 10
				var centerX = 1000;
				var centerY = 1025;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 11
				var centerX = 450;
				var centerY = 1340;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 13
				var centerX = 1080;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 14
				var centerY = 1440;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 15
				var centerY = 2400;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 16
				var centerY = 2500;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 17
				var centerX = 1560;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 17
				var centerX = 1180;
				var centerY = 2605;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 18
				var centerX = 1370;

				context.beginPath();
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				context.fill();
				context.lineWidth = 5;
				context.stroke();

				// Ball 12
				//var centerX = 650;

				//context.beginPath();
				//context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				//context.fill();
				//context.lineWidth = 5;
				//context.stroke();

				// Ball 14
				//var centerX = 1340;

				//context.beginPath();
				//context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

				//context.fill();
				//context.lineWidth = 5;
				//context.stroke();

           	};