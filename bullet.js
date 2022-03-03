class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 5;
        this.speed  = 5;
        this.bulletColor = 100;
    }

    Move(){
        this.y = this.y - this.speed;
        this.PassBorder();
        this.Hit();
    }

    PassBorder(){
        // if bullet pass the border remove it from list
        if(this.y < 0){
            bullets = bullets.filter((bullet) => bullet != this)
        }
    }

    Hit(){
        // check whether it hit the bullets or not, delete if it hits
        invaders.forEach((invader) => {
            let distance = dist(this.x,this.y,invader.x,invader.y);
            if(distance <= this.r + invader.r){
                scoreTable.score += 10;
                invader.isDeleted = true;
                invaders = invaders.filter((invader) => !invader.isDeleted);
                // delete current bullet object because of hitting
                bullets = bullets.filter((bullet) => bullet != this);
            }
        })   
    }

    Show(){
        fill(255,0,0,this.bulletColor);
        noStroke();
        ellipse(this.x,this.y,this.r*2);
    }
}