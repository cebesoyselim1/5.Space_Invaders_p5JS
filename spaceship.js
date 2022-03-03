class SpaceShip{
    constructor(){
        this.r = 20;
        this.x = width / 2;
        this.y = height - this.r - 25;
        this.speed = 1;
        this.direction = 0;
        this.health = 5;
    }

    Move(){
        this.x = this.x + this.speed * this.direction;
    }

    ChangeDirection(direction){
        this.direction = direction;
    }

    
    Shoot(){
        spaceShipBullets.push(new SpaceShipBullet(this.x,this.y));
    }

    beDamaged(){
        this.health--;
    }

    Show(){
        fill(255);
        noStroke();
        ellipse(this.x,this.y,this.r * 2);
    }
}