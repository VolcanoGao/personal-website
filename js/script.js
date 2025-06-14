// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.backgroundColor = '#2c3e50';
            nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // 为联系方式添加复制功能
    const contactItems = document.querySelectorAll('.contact-item p');
    
    contactItems.forEach(item => {
        if (!item.querySelector('a')) { // 跳过包含链接的项
            item.addEventListener('click', function() {
                const text = this.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    // 创建一个临时提示
                    const tooltip = document.createElement('span');
                    tooltip.textContent = '已复制!';
                    tooltip.style.position = 'absolute';
                    tooltip.style.backgroundColor = '#4CAF50';
                    tooltip.style.color = 'white';
                    tooltip.style.padding = '5px 10px';
                    tooltip.style.borderRadius = '3px';
                    tooltip.style.fontSize = '12px';
                    tooltip.style.opacity = '0';
                    tooltip.style.transition = 'opacity 0.3s';
                    
                    // 将提示添加到点击的元素旁边
                    this.style.position = 'relative';
                    this.appendChild(tooltip);
                    
                    // 显示提示
                    setTimeout(() => {
                        tooltip.style.opacity = '1';
                    }, 10);
                    
                    // 2秒后移除提示
                    setTimeout(() => {
                        tooltip.style.opacity = '0';
                        setTimeout(() => {
                            tooltip.remove();
                        }, 300);
                    }, 2000);
                }).catch(err => {
                    console.error('无法复制文本: ', err);
                });
            });
            
            // 添加鼠标悬停效果
            item.style.cursor = 'pointer';
            item.setAttribute('title', '点击复制');
        }
    });
}); 