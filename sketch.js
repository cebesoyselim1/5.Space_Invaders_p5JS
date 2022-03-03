let spaceShip;
let spaceShipBullets = [];
let invaders = [];
let invaderBullets = [];
let scoreTable;

function setup(){
    createCanvas(400,400);
    background(0);
    // spaceship was created
    spaceShip = new SpaceShip();
    
    //invaders were created
    for(let ct = 0; ct < 3; ct++){
        for(let k = 0; k < 8; k++){
            invaders.push(new Invader(k * 40 + 60,ct* 40 + 30));
        }
    }

    scoreTable = new ScoreTable();
}

function draw(){
    ResetGame();

    background(0);
    spaceShip.Move();
    spaceShip.Show();

    invaders.forEach((invader) => {
        invader.Move();
        invader.Show();
        invader.Shoot();
    })

    invaderBullets.forEach((invaderBullet) => {
        invaderBullet.Move();
        invaderBullet.Show();
    })

    spaceShipBullets.forEach((spaceShipBullet) => {
        spaceShipBullet.Move();
        spaceShipBullet.Show();
    })

    scoreTable.Show();

    if(invaders.length == 0){
        scoreTable.level ++;
        LevelUp();
    }
}

function LevelUp(){
    spaceShipBullets = [];
    invaderBullets = [];
        
    //invaders were created
    for(let ct = 0; ct < 3; ct++){
        for(let k = 0; k < 8; k++){
            invaders.push(new Invader(k * 40 + 60,ct* 40 + 30));
        }
    }
}

function ResetGame(){
    if(spaceShip.health <= 0){
        spaceShipBullets = [];
        invaders = [];
        invaderBullets = [];

        createCanvas(400,400);
        background(0);
        // spaceship was created
        spaceShip = new SpaceShip();

        // level initilized
        scoreTable.level = 1;
        
        //invaders were created
        for(let ct = 0; ct < 3; ct++){
            for(let k = 0; k < 8; k++){
                invaders.push(new Invader(k * 40 + 60,ct* 40 + 30));
            }
        }
    }
}

function keyPressed(){
    if(keyCode == LEFT_ARROW){
        spaceShip.ChangeDirection(-1);
    }else if(keyCode == RIGHT_ARROW){
        spaceShip.ChangeDirection(1);
    }else if(keyCode == 32){
        // active if user press space key
        spaceShip.Shoot();
    }
}

function keyReleased(){
    if(keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW){
        spaceShip.ChangeDirection(0);
    }
}

