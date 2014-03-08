function Paddle(){
    Entity.call(this);

    this.width = 20;
    this.height = 100;
    
    this.y = game.height/2- this.height/2;
    
    this.xVelocity = 0;
    this.yVelocity = 0;
}

Paddle.prototype = Object.create(Entity.prototype);
Paddle.prototype.constructor = Paddle

Paddle.prototype.update = function(){
     Entity.prototype.update.apply(this,arguments); // like call to super() in Java
     
    if (this.intersect(game.ball))
        game.ball.xVelocity *= -1;
}


//Player inherits from Paddle
function Player(){
    Paddle.call(this);
    
    this.x = 20;
}

Player.prototype = Object.create(Paddle.prototype);
Player.prototype.constructor = Player;

//Need to override update function to handle key presses
Player.prototype.update = function(){
    Paddle.prototype.update.apply(this,arguments); // like call to super() in Java
    
    if (game.keyPressed.up) {
        this.y = Math.max(this.y - 10, 0);
    }
    
    if (game.keyPressed.down) {
        this.y = Math.min(this.y + 10, game.height - this.height);
    }
}

//Bot inherits from Paddle, has AI
function Bot(){
    Paddle.call(this);
    
    this.x = game.width - 20 - this.width;
    
    this.yVelocity = 4;
}

Bot.prototype = Object.create(Paddle.prototype);
Bot.prototype.constructor = Bot;

//implement the AI
Bot.prototype.update = function(){
    Paddle.prototype.update.apply(this, arguments);
    
    if (game.ball.y < this.y && this.yVelocity > 0)
        this.yVelocity *= -1;
    else
        {
            if (game.ball.y > this.y && this.yVelocity < 0)
                this.yVelocity *= -1;
        }
    

    this.y = Math.min(this.y, game.height - this.height);
    this.y = Math.max(this.y, 0);    
    
}