var Mouth = {};
Mouth.image = new Image(129,300);


Mouth.draw = function(){
	//mouthCTX.clearRect(0, 0, 960, 640); // Clear the canvas
	//hudCTX.save();

	mouthCTX.drawImage(Mouth.image, -10, -64, 110, 400 );
	//hudCTX.restore();

}


