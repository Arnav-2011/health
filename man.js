class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			
			friction:0.5,
			density:1.2
			}

		this.w=w
		this.h = h
		this.body=Bodies.rectangle(x,y, this.w,this.h, options);
		
		World.add(world, this.body);

	}
	display()
	{	
			var pos=this.body.position;		
			rectMode(CENTER);
			fill(255,0,255);
			
			
	}

}