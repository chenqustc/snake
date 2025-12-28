// 游戏常量
const CANVAS_WIDTH = 320;
const CANVAS_HEIGHT = 240;
const GRID_SIZE = 16;
const INITIAL_SPEED = 150;

// 游戏状态
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let scoreElement = document.getElementById('score');
let snake = [];
let food = { x: 0, y: 0 };
let direction = { x: GRID_SIZE, y: 0 };
let nextDirection = { x: GRID_SIZE, y: 0 };
let score = 0;
let speed = INITIAL_SPEED;
let gameLoop = null;

// 初始化游戏
function initGame() {
    // 重置游戏状态
    snake = [
        { x: GRID_SIZE * 5, y: GRID_SIZE * 5 },
        { x: GRID_SIZE * 4, y: GRID_SIZE * 5 },
        { x: GRID_SIZE * 3, y: GRID_SIZE * 5 }
    ];
    direction = { x: GRID_SIZE, y: 0 };
    nextDirection = { x: GRID_SIZE, y: 0 };
    score = 0;
    speed = INITIAL_SPEED;
    scoreElement.textContent = score;
    
    // 生成初始食物
    generateFood();
    
    // 清除之前的游戏循环
    if (gameLoop) {
        clearInterval(gameLoop);
    }
    
    // 开始游戏循环
    gameLoop = setInterval(update, speed);
}

// 生成食物
function generateFood() {
    let validPosition = false;
    
    while (!validPosition) {
        // 随机生成食物位置
        food.x = Math.floor(Math.random() * (CANVAS_WIDTH / GRID_SIZE)) * GRID_SIZE;
        food.y = Math.floor(Math.random() * (CANVAS_HEIGHT / GRID_SIZE)) * GRID_SIZE;
        
        // 检查食物是否在蛇身上
        validPosition = !snake.some(segment => segment.x === food.x && segment.y === food.y);
    }
}

// 更新游戏状态
function update() {
    direction = nextDirection;
    
    // 移动蛇头
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    
    // 检查碰撞
    if (checkCollision(head)) {
        gameOver();
        return;
    }
    
    // 将新蛇头添加到蛇的头部
    snake.unshift(head);
    
    // 检查是否吃到食物
    if (head.x === food.x && head.y === food.y) {
        // 增加分数
        score += 10;
        scoreElement.textContent = score;
        
        // 提高速度
        speed = Math.max(50, speed - 5);
        clearInterval(gameLoop);
        gameLoop = setInterval(update, speed);
        
        // 生成新食物
        generateFood();
    } else {
        // 移除蛇尾
        snake.pop();
    }
    
    // 渲染游戏
    render();
}

// 检查碰撞
function checkCollision(head) {
    // 检查撞墙
    if (head.x < 0 || head.x >= CANVAS_WIDTH || head.y < 0 || head.y >= CANVAS_HEIGHT) {
        return true;
    }
    
    // 检查撞自己
    return snake.some(segment => segment.x === head.x && segment.y === head.y);
}

// 游戏结束
function gameOver() {
    clearInterval(gameLoop);
    
    // 显示游戏结束信息
    ctx.fillStyle = '#000';
    ctx.font = '20px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20);
    ctx.fillText('分数: ' + score, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    ctx.fillText('按空格键重新开始', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 20);
    
    // 等待空格键重新开始
    document.addEventListener('keydown', restartGame);
}

// 重新开始游戏
function restartGame(e) {
    if (e.code === 'Space') {
        document.removeEventListener('keydown', restartGame);
        initGame();
    }
}

// 渲染游戏
function render() {
    // 清空画布
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // 绘制蛇
    ctx.fillStyle = '#000';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, GRID_SIZE - 1, GRID_SIZE - 1);
    });
    
    // 绘制食物
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(food.x, food.y, GRID_SIZE - 1, GRID_SIZE - 1);
}

// 处理键盘输入
function handleKeyDown(e) {
    const key = e.code;
    
    // 防止蛇反向移动
    if (key === 'ArrowUp' && direction.y === 0) {
        nextDirection = { x: 0, y: -GRID_SIZE };
    } else if (key === 'ArrowDown' && direction.y === 0) {
        nextDirection = { x: 0, y: GRID_SIZE };
    } else if (key === 'ArrowLeft' && direction.x === 0) {
        nextDirection = { x: -GRID_SIZE, y: 0 };
    } else if (key === 'ArrowRight' && direction.x === 0) {
        nextDirection = { x: GRID_SIZE, y: 0 };
    }
}

// 初始化游戏
window.addEventListener('load', () => {
    initGame();
    document.addEventListener('keydown', handleKeyDown);
});