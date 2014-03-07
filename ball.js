function Ball(){
    Entity.call(this);

    this.width = 20;
    this.height = 20;
    
    this.x = (game.width/2);
    this.y = game.height/2;
    
    this.xVelocity = 0;
    this.yVelocity = -5;
}



Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball

//Need to override update function to handle collisions with the upper/lower walls
Ball.prototype.update = function(){
    Entity.prototype.update.apply(this,arguments); // like call to super() in Java
    
    if (this.y >= game.height - this.height || this.y <= 0)
        this.yVelocity *= -1; //reverse direction
        
    
        
}