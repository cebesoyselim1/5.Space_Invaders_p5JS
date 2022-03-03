class ScoreTable{
    constructor(){
        this.score = 0;
        this.level = 1;
    }

    Show(){
        spaceShip
        textSize(18);
        fill(255);
        text(`Score : ${this.score}`,width - 100,height- 6);
        text(`Level : ${this.level}`,width / 2 - 40, height - 6);
        text(`Health : ${spaceShip.health}`,10,height - 6);
    }
}