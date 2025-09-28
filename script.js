// 等待文档所有内容加载完毕后执行
document.addEventListener('DOMContentLoaded', () => {

    // 获取切换按钮和body元素
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // 检查本地存储中是否已保存模式偏好
    const currentMode = localStorage.getItem('theme');
    if (currentMode === 'dark') {
        body.classList.add('dark-mode');
    }

    // 为切换按钮添加点击事件监听器
    darkModeToggle.addEventListener('click', () => {
        // 切换body的 'dark-mode' 类
        body.classList.toggle('dark-mode');

        // 将用户的模式偏好保存到本地存储
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

});
