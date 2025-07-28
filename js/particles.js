// 获取 canvas 元素和上下文
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');

// 设置 canvas 的尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义粒子类
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1.5 + 1; // 粒子大小
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3;
    }

    // 更新粒子位置
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    // 绘制粒子
    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}

// 存储所有粒子
let particles = [];

// 鼠标位置
let mouseX, mouseY;
let mouseParticleEffect = true;

// 鼠标移动事件
window.addEventListener('mousemove', (e) => {
    mouseX = e.x;
    mouseY = e.y;

    if (mouseParticleEffect) {
        for (let i = 0; i < 5; i++) { // 产生多个粒子
            particles.push(new Particle(mouseX, mouseY));
        }
    }
});

// 创建动画
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // 删除超出画布范围的粒子
        if (particles[i].x < 0 || particles[i].x > canvas.width || particles[i].y < 0 || particles[i].y > canvas.height) {
            particles.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(animateParticles); // 递归调用，形成动画
}

// 启动动画
animateParticles();
