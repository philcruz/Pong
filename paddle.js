function Paddle(){
    Entity.call(this);

    this.width = 20;
    this.height = 100;
    
    this.x = 20;
    this.y = game.height/2- this.height/2;
    
    this.xVelocity = 0;
    this.yVelocity = 0;
}



Paddle.prototype = Object.create(Entity.prototype);
Paddle.prototype.constructor = Paddle

//Need to override update function to handle collisions with the upper/lower walls
Paddle.prototype.update = function(){
    Entity.prototype.update.apply(this,arguments); // like call to super() in Java
    
    if (game.keyPressed.up) {
        this.y = Math.max(this.y - 10, 0);
    }
    
    if (game.keyPressed.down) {
        this.y = Math.min(this.y + 10, game.height - this.height);
    }
}