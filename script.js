document.addEventListener('DOMContentLoaded', () => {

    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const moonIcon = darkModeToggle.querySelector('.moon');
    const sunIcon = darkModeToggle.querySelector('.sun');

    // 函数：应用主题
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            body.classList.remove('dark-mode');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }
    }

    // 检查本地存储中是否已保存模式偏好
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // 为切换按钮添加点击事件监听器
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        const newTheme = isDarkMode ? 'light' : 'dark';
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

});
