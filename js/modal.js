// modal.js

// 获取元素
var modal = document.getElementById("modal");
var img = document.getElementById("viewImage");
var modalImg = document.getElementById("modalImage");
var closeModal = document.getElementById("closeModal");

// 点击头像时，显示大图
img.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "flex";
    modalImg.src = event.target.src; // 赋值给大图
}

// 点击关闭按钮时，关闭大图
closeModal.onclick = function() {
    modal.style.display = "none";
}

// 点击弹窗外部也可以关闭
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
