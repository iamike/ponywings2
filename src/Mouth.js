var Mouth = {};
//Mouth.image = new Image(129,300);
Mouth.mouthUp = new Image(296,279);
Mouth.mouthDown = new Image(285,228);
Mouth.wave = 0;

Mouth.draw = function(){
	//mouthCTX.clearRect(0, 0, 960, 640); // Clear the canvas
	//mouthCTX.save();

	//mouthCTX.mouthDown = [{"x":0,"y":-250,"velX":1},{"x":-100,"y":-200,"velX":3}];

	//console.log(Math.abs(Math.sin(HUD.timer*1000)));
	mouthCTX.clearRect(0,0,960,640);
	//hudCTX.restore();
	//console.log(HUD.awesome);
	// SCALE / TRANSLATE DEPENDING ON PONY

	// Draw Mouth


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
			//console.log('yDisp 100 pony die');

		}else{
			if (pony.coord.y<-280){
				mouthCTX.save();
				//console.log('PWG.gScale 0.2');
				mouthCTX.scale(0.6,0.6);
				mouthCTX.translate(-260,400);
				mouthCTX.rotate(-0.2*Math.PI);
				mouthCTX.drawImage( Mouth.mouthDown, -8, 270*(1-0.05*Math.abs(Math.sin(HUD.timer*1000))), 296, 279 );
				mouthCTX.drawImage( Mouth.mouthUp, 0, -10*(1-0.5*Math.abs(Math.sin(HUD.timer*1000))), 296, 279 );
				mouthCTX.restore();

			} else if (pony.coord.y<-100){
				//PWG.gScale += 0.30;
				//console.log(pony.coord.y);
				//console.log('PWG.gScale 0.3');
				mouthCTX.save();
				mouthCTX.scale(0.6,0.6);
				mouthCTX.translate(-260,300);
				mouthCTX.rotate(-0.2*Math.PI);
				mouthCTX.drawImage( Mouth.mouthDown, -8, 270*(1-0.05*Math.abs(Math.sin(HUD.timer*1000))), 296, 279 );
				mouthCTX.drawImage( Mouth.mouthUp, 0, -10*(1-0.5*Math.abs(Math.sin(HUD.timer*1000))), 296, 279 );
				mouthCTX.restore();
			}else{
				//PWG.gScale += 0.40;
				//console.log('PWG.gScale 0.4');
				mouthCTX.save();
				mouthCTX.translate(-200,-95);
				mouthCTX.drawImage( Mouth.mouthDown, -8, 270*(1-0.05*Math.abs(Math.sin(HUD.timer*1000))), 296, 279 );
				mouthCTX.drawImage( Mouth.mouthUp, 0, -10*(1-0.5*Math.abs(Math.sin(HUD.timer*1000))), 296, 279 );
				mouthCTX.restore();
			}
		}

	}

}


