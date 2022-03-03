
class SpaceShipBullet extends Bullet{
    constructor(x,y){
        super(x,y);
        this.r = 5;
        this.speed  = 5;
        this.bulletColor = 220
    }

    PassBorder(){
        // if bullet pass the border remove it from list
        if(this.y < 0){
            spaceShipBullets = spaceShipBullets.filter((spaceShipBullet) => spaceShipBullet != this)
        }
    }

    Hit(){
        // check whether it hit the bullets or not, delete if it hits
        invaders.forEach((invader) => {
            let distance = dist(this.x,this.y,invader.x,invader.y);
            if(distance <= this.r + invader.r){
                scoreTable.score += 10;
                invader.health--;
                if(invader.health <= 0) invader.isDeleted = true;
                invaders = invaders.filter((invader) => !invader.isDeleted);
                // delete current bullet object because of hitting
                spaceShipBullets = spaceShipBullets.filter((spaceShipBullet) => spaceShipBullet != this);
            }
        })
    }

    
}