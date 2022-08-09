class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
    line(rope1.position.x,rope1.position.y,rope2.position.x,rope2.position.y,rope3.position.x,rope3.position.y,rope4.position.x,rope4.position.y,rope5.position.x,rope5.position.y)
		
	}

}