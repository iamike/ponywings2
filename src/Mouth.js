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


	if(pony.startMoving){
		//console.log('startMoving');
		//PWG.gScale*=9;
		//PWG.yDisp*=9;
		if(pony.coord.y<-100){
			//PWG.yDisp += (pony.coord.y+100)*0.5;
			//console.log('pony -100');
		}else{
			//PWG.yDisp += 0;
			//console.log('pony 0');
		}
		if(pony.touchGround3){
			//PWG.gScale += 0.7;
			//PWG.yDisp += 100;
			//console.log('gScale 0.7');
			//console.log('yDisp 100');
		}else{
			if (pony.coord.y<-300){
				console.log('PWG.gScale 0.2');
				mouthCTX.scale(0.6,0.6);
				mouthCTX.translate(-260,430);
				mouthCTX.rotate(-0.2*Math.PI);
				mouthCTX.drawImage( Mouth.mouthDown, -8, 270, 296, 279 );
				mouthCTX.drawImage( Mouth.mouthUp, 0, 0, 296, 279 );

			} else if (pony.coord.y<-100){
				//PWG.gScale += 0.30;
				//console.log(pony.coord.y);
				console.log('PWG.gScale 0.3');
				mouthCTX.scale(0.6,0.6);
				mouthCTX.translate(-260,300);
				mouthCTX.rotate(-0.2*Math.PI);
				mouthCTX.drawImage( Mouth.mouthDown, -8, 270, 296, 279 );
				mouthCTX.drawImage( Mouth.mouthUp, 0, 0, 296, 279 );

			}else{
				//PWG.gScale += 0.40;
				console.log('PWG.gScale 0.4');
				mouthCTX.translate(-200,-95);
				mouthCTX.drawImage( Mouth.mouthDown, -8, 270, 296, 279 );
				mouthCTX.drawImage( Mouth.mouthUp, 0, 0, 296, 279 );
			}
		}

	}
	mouthCTX.restore();

}


