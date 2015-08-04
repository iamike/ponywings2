var Mouth = {};
Mouth.image = new Image(129,300);
Mouth.mouthUp = new Image(296,279);
Mouth.mouthDown = new Image(285,228);


Mouth.draw = function(){
	//mouthCTX.clearRect(0, 0, 960, 640); // Clear the canvas
	//mouthCTX.save();
	mouthCTX.clearRect(0,0,960,640);
	//hudCTX.restore();
	//console.log(HUD.awesome);
	// SCALE / TRANSLATE DEPENDING ON PONY

	// Draw Sun & Moon
	mouthCTX.save();

	if(pony.coord.y<-100){
		//0.3
		mouthCTX.scale(0.75,0.75);
		mouthCTX.translate(-260,300);
		mouthCTX.rotate(-0.3*Math.PI);
		mouthCTX.drawImage( Mouth.mouthDown, -8, 270, 296, 279 );
		mouthCTX.drawImage( Mouth.mouthUp, 0, 0, 296, 279 );

	} else {
		//0.4
		mouthCTX.translate(-200,-95);

		//mouthCTX.rotate(0.1*Math.PI);
		mouthCTX.drawImage( Mouth.mouthDown, -8, 270, 296, 279 );
		mouthCTX.drawImage( Mouth.mouthUp, 0, 0, 296, 279 );

	}





	mouthCTX.restore();
	

	// if(pony.startMoving){
	// 	//console.log('startMoving');
	// 	//PWG.gScale*=9;
	// 	//PWG.yDisp*=9;
	// 	if(pony.coord.y<-100){
	// 		//PWG.yDisp += (pony.coord.y+100)*0.5;
	// 		//console.log('pony -100');
	// 	}else{
	// 		//PWG.yDisp += 0;
	// 		//console.log('pony 0');
	// 	}
	// 	if(pony.touchGround3){
	// 		//PWG.gScale += 0.7;
	// 		//PWG.yDisp += 100;
	// 		//console.log('gScale 0.7');
	// 		//console.log('yDisp 100');
	// 	}else{
	// 		if(pony.coord.y<-100){
	// 			//PWG.gScale += 0.30;
	// 			console.log('PWG.gScale 0.3');

	// 			mouthCTX.translate(10,0);
	// 			mouthCTX.drawImage(Mouth.image, -10, -64, 110, 400 );

	// 		}else{
	// 			//PWG.gScale += 0.40;

	// 			console.log('PWG.gScale 0.4');


	// 			//mouthCTX.transform(1, 0.5, -0.5, 1, 30, 10);

	// 		}
	// 	}

	// }
		//if (pony.coord.y)

}


