const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const menuDisplay = document.querySelector('.menu-display');
const imageContainer = document.getElementById('image-container');
const lang = document.documentElement.lang || 'ko';

const menus = {
    ko: [
        '김치찌개', '된장찌개', '비빔밥', '불고기', '제육볶음',
        '치킨', '피자', '햄버거', '초밥', '라멘',
        '짜장면', '짬뽕', '탕수육', '마라탕', '쌀국수',
        '돈까스', '스테이크', '파스타', '떡볶이', '삼겹살'
    ],
    en: [
        'Kimchi Stew', 'Doenjang Stew', 'Bibimbap', 'Bulgogi', 'Jeyuk Bokkeum',
        'Fried Chicken', 'Pizza', 'Hamburger', 'Sushi', 'Ramen',
        'Jajangmyeon', 'Jjamppong', 'Tangsu-yuk', 'Malatang', 'Pho',
        'Donkatsu', 'Steak', 'Pasta', 'Tteokbokki', 'Samgyeopsal',
        'Tacos', 'Curry', 'Dim Sum', 'Fish and Chips', 'Burrito'
    ]
};

const menuImages = {
    '피자': 'pizza-5275191_1280.jpg',
    'Pizza': 'pizza-5275191_1280.jpg'
};

// Theme toggle logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

// Menu generation logic
generateBtn.addEventListener('click', () => {
    menuDisplay.classList.add('fade-out');
    imageContainer.classList.add('fade-out');
    
    setTimeout(() => {
        const currentMenus = menus[lang] || menus['en'];
        const randomIndex = Math.floor(Math.random() * currentMenus.length);
        const selectedMenu = currentMenus[randomIndex];
        
        menuDisplay.textContent = selectedMenu;
        
        // Check for image
        if (menuImages[selectedMenu]) {
            imageContainer.innerHTML = `<img src="${menuImages[selectedMenu]}" alt="${selectedMenu}" class="menu-image">`;
        } else {
            imageContainer.innerHTML = '';
        }

        menuDisplay.classList.remove('fade-out');
        menuDisplay.classList.add('fade-in');
        imageContainer.classList.remove('fade-out');
        imageContainer.classList.add('fade-in');
        
        setTimeout(() => {
            menuDisplay.classList.remove('fade-in');
            imageContainer.classList.remove('fade-in');
        }, 500);
    }, 300);
});