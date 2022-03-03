class Invader{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 10;
        this.initialCoordinate = createVector(this.x, this.y);
        this.movementDirection = 1;
        this. speed = 0.5;
        setTimeout(() => {
            this.health = scoreTable.level;
        }, 10);
        this.isDeleted = false;
    }

    Move(){
        
        if(this.initialCoordinate.x + 30 <= this.x){
            this.movementDirection = -1;
        }else if(this.initialCoordinate.x - 30 >= this.x){
            this.movementDirection = 1;
        }
        this.x = this.x + this.speed * this.movementDirection;
    }

    Shoot(){
        let rndUpperLimit = 1000 / scoreTable.level;
        let fireChance = floor(random(rndUpperLimit));

        let rndTargetNum = floor(500 / scoreTable.level);
        if(fireChance == rndTargetNum){
            invaderBullets.push(new InvaderBullet(this.x,this.y));
        }
    }

    Show(){
        fill(255,100,100);
        noStroke();
        ellipse(this.x,this.y,this.r*2);
    }
}