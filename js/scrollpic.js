const scrollContainer = document.getElementById('scroll-container');
const scrollContent = document.getElementById('scroll-content');

// 设置每秒滚动的距离
const scrollSpeed = 1; // 越大，滚动越慢
let currentScrollPosition = 0;

function scroll() {
    // 每次移动一点，滚动内容左移
    currentScrollPosition += scrollSpeed;
    if (currentScrollPosition >= scrollContent.offsetWidth) {
        // 如果滚动到最右端，重置位置
        currentScrollPosition = 0;
    }

    scrollContent.style.transform = `translateX(-${currentScrollPosition}px)`;
}

// 启动滚动
setInterval(scroll, 20); // 每20毫秒更新一次
