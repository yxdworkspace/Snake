import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = ''
    isAlive = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel(10,1)

        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        this.run()
    }

    keyDownHandler(event: KeyboardEvent) {
        this.direction = event.key
    }

    run() {
        let x = this.snake.X;
        let y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                x -= 10;
                break;
            case "ArrowRight":
                x += 10;
                break
        }
        this.checkEat(x,y)
        try {
            this.snake.X = x;
            this.snake.Y = y;
        }
       catch (e:any){
            alert(e.message)
           this.isAlive = false
       }

        this.isAlive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1)*30)
    }
    checkEat(X:number,Y:number){
        if( X === this.food.X && Y === this.food.Y){
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl