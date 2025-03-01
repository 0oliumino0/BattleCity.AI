function BombFx(x,y,score)
{
	Sprite.call(this, x, y, "bombFx", 6);
	
	this.x = x - 16;
	this.y = y - 16;
	
	this.frame = 0;
	this.time = -10;
	this.score = score;
}

BombFx.prototype.draw = function(canvas)
{
	var myCanvas = document.getElementById(canvas);
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");
	
	graphics.drawImage(img,this.frame * 67 + images[this.src][0], images[this.src][1], 66, 66, this.x + offerX, this.y + offerY, 66, 66) ;
	return;
};

BombFx.prototype.updata = function()
{
	if(this.time % 7 == 1) 
	{
		this.frame++;
	}
	if(this.frame > 4) 
	{
		return;
	}
	this.time ++;
};

function drawBombFxs()
{
	
	for(var i = 0;i < bombFxs.length;i++)
	{
		bombFxs[i].draw("main");
	}
}

function updataBombFxs()
{
	
	for(var i = 0;i < bombFxs.length;i++)
	{
		bombFxs[i].updata();
		
		if(bombFxs[i].frame > 3)
		{
			var tempScore = new Score(bombFxs[i].x + 33,bombFxs[i].y + 33,bombFxs[i].score); 
			scoreNums.push(tempScore);
			
			bombFxs.splice(i,1);
			i --;
		}
	}
}