//Pojedyncza kulka
class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
    }

    //Rysowanie kulki w canvasie
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2 );
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    //Aktualizowanie pozycji kulki
    update(canvas) {
        this.x += this.vx;
        this.y += this.vy;

        if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.vx = -this.vx;
        }

        if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.vy = -this.vy;
        }
    }
}


function main() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const numBallsInput = document.getElementById('numBalls');
    const minDistanceInput = document.getElementById('minDistance');
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');
    let balls = []; //Przechowywanie kulek
    let updateInterval = setInterval(update, 16); //Aktualizowanie 60fps

    function start() {
        balls = [];

        const numBalls = numBallsInput.value;
        for(let i = 0; i < numBalls; i++) {
            const radius = 20;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const color = 'black';
            balls.push(new Ball(x, y, radius, color));
        }
    }

    function reset() {
        balls = []; //Usuowanie kulek

        //Tworzenie nowych kulek o losowych pozycjach i kolorach
        const numBalls = numBallsInput.value;
        for(let i = 0; i < numBalls; i++) {
            const radius = 20;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            balls.push(new Ball(x, y, radius, color));
        }
    }

    function update() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        const minDistance = minDistanceInput.value;
        for (let i=0; i < balls.length; i++) {
            balls[i].update(canvas);
            balls[i].draw(ctx);

            //Rysowanie linii pomiędzy kulkami, jesli odleglosc jest mniejsza od minDistance
            for(let j = i + 1; j < balls.length;j++) {
                const dx = balls[i].x - balls[j].x;
                const dy = balls[i].y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < minDistance) {
                    ctx.beginPath();
                    ctx.moveTo(balls[i].x, balls[i].y);
                    ctx.lineTo(balls[j].x, balls[j].y);
                    ctx.strokeStyle = 'black';
                    ctx.stroke();
                }
            }
        }
    }

    startButton.addEventListener('click', function() {
        updateInterval = setInterval(16);
        start();
        this.removeEventListener('click', arguments.callee);
    });

    resetButton.addEventListener('click', function() {
        clearInterval(updateInterval);
        reset();
    });
}
main();