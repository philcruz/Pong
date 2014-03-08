function Ball(){
    Entity.call(this);

    this.width = 20;
    this.height = 20;
    
    this.reset();
    //this.x = game.width/2;
    //this.y = game.height/2;
    
    //this.xVelocity = Math.floor(Math.random()*(max-min+1)+min);
    //this.yVelocity = Math.floor(Math.random()*(max-min+1)+min);
}



Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball

//Need to override update function to handle collisions with the upper/lower walls
Ball.prototype.update = function(){
    Entity.prototype.update.apply(this,arguments); // like call to super() in Java
    
    if (this.y >= game.height - this.height || this.y <= 0)
        this.yVelocity *= -1; //reverse direction
    
    if (this.x > game.width){
        this.xVelocity *= -1
        this.reset();
    }
    else {
        if (this.x < 0 - this.width){
            this.xVelocity *= -1;
            this.reset();
        }
    }
        
}

Ball.prototype.reset = function(){
    this.x = game.width/2;
    this.y = game.height/2;
    
    var xmin = 3
    var ymin = 1;
    var max = 10;
    
    this.xVelocity = Math.floor(Math.random()*(max-xmin+1)+xmin);;
    this.yVelocity = Math.floor(Math.random()*(max-ymin+1)+ymin);;
    
}