class InvaderBullet extends Bullet{
    constructor(x,y){
        super(x,y);
        this.r = 3;
        this.speed = -1;
        this.bulletColor = 150;
    }

    PassBorder(){
        // check if invader's bullet pass the border
        if(this.y > height){
            invaderBullets = invaderBullets.filter((invaderBullet) => invaderBullet != this);
        }
    }

    Hit(){
        // check if invader's bullet hit spaceship
        let distance = dist(this.x,this.y,spaceShip.x,spaceShip.y);
        if(distance < this.r + spaceShip.r){
            // If hits spaceship's health point decrease.
            spaceShip.beDamaged();
            invaderBullets = invaderBullets.filter((invaderBullet) => invaderBullet != this);
        }
    }
}