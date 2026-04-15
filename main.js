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

// Nano Banana 스타일의 고화질 이미지 매핑 (Unsplash API 활용)
const menuImages = {
    // Korean Menus
    '김치찌개': 'https://images.unsplash.com/photo-1583216075267-384fba3c2323?w=400',
    '된장찌개': 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400',
    '비빔밥': 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400',
    '불고기': 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?w=400',
    '제육볶음': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400',
    '치킨': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400',
    '피자': 'pizza-5275191_1280.jpg', // 기존 업로드 파일 활용
    '햄버거': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    '초밥': 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400',
    '라멘': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
    '짜장면': 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400',
    '짬뽕': 'https://images.unsplash.com/photo-1635158174712-706798b03039?w=400',
    '탕수육': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400',
    '마라탕': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    '쌀국수': 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400',
    '돈까스': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400',
    '스테이크': 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=400',
    '파스타': 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400',
    '떡볶이': 'https://images.unsplash.com/photo-1624510103282-3788523c9472?w=400',
    '삼겹살': 'https://images.unsplash.com/photo-1622321458022-38d5e1657c91?w=400',

    // English Menus
    'Kimchi Stew': 'https://images.unsplash.com/photo-1583216075267-384fba3c2323?w=400',
    'Doenjang Stew': 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400',
    'Bibimbap': 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400',
    'Bulgogi': 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?w=400',
    'Jeyuk Bokkeum': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400',
    'Fried Chicken': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400',
    'Pizza': 'pizza-5275191_1280.jpg',
    'Hamburger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    'Sushi': 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400',
    'Ramen': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
    'Jajangmyeon': 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400',
    'Jjamppong': 'https://images.unsplash.com/photo-1635158174712-706798b03039?w=400',
    'Tangsu-yuk': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400',
    'Malatang': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    'Pho': 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400',
    'Donkatsu': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400',
    'Steak': 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=400',
    'Pasta': 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400',
    'Tteokbokki': 'https://images.unsplash.com/photo-1624510103282-3788523c9472?w=400',
    'Samgyeopsal': 'https://images.unsplash.com/photo-1622321458022-38d5e1657c91?w=400',
    'Tacos': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
    'Curry': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400',
    'Dim Sum': 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400',
    'Fish and Chips': 'https://images.unsplash.com/photo-1524339102455-6f49959a4401?w=400',
    'Burrito': 'https://images.unsplash.com/photo-1584031036380-3fb6f2d51882?w=400'
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
    const menuTip = document.getElementById('menu-tip');
    const lang = document.documentElement.lang || 'ko';

    const menuTips = {
        ko: {
            '김치찌개': '단백질이 풍부한 두부를 넣어 드시면 더욱 좋습니다.',
            '된장찌개': '제철 채소를 듬뿍 넣으면 비타민 섭취에 도움이 됩니다.',
            '비빔밥': '나물을 많이 넣어 식이섬유를 보충해보세요.',
            '불고기': '쌈 채소와 함께 드시면 포만감이 오래 유지됩니다.',
            '제육볶음': '마늘과 함께 볶으면 풍미가 깊어집니다.',
            '치킨': '샐러드와 함께 드시는 것을 추천합니다.',
            '피자': '피클보다는 가벼운 샐러드를 곁들여보세요.',
            '햄버거': '천천히 씹어 드시면 소화에 더욱 좋습니다.',
            '초밥': '따뜻한 미소 된장국과 잘 어울립니다.',
            '라멘': '숙주를 추가하여 아삭한 식감을 살려보세요.',
            '짜장면': '단무지 대신 양파를 춘장에 찍어 드시면 건강에 좋습니다.',
            '짬뽕': '해산물이 풍부하여 고단백 식사로 적합합니다.',
            '탕수육': '소스에 채소를 많이 넣어 비타민을 챙겨보세요.',
            '마라탕': '청경채와 버섯을 많이 넣으면 영양 균형이 좋아집니다.',
            '쌀국수': '레몬즙을 살짝 뿌리면 비타민 C 섭취를 돕습니다.',
            '돈까스': '양배추 샐러드를 듬뿍 곁들여 드세요.',
            '스테이크': '아스파라거스와 함께 구워 영양을 더해보세요.',
            '파스타': '통밀면을 선택하시면 혈당 관리에 유리합니다.',
            '떡볶이': '삶은 달걀을 추가하여 단백질을 보충하세요.',
            '삼겹살': '상추, 깻잎과 함께 드시면 칼륨 섭취에 좋습니다.'
        }
    };

    // ... (기존 변수 선언 유지)

    // Menu generation logic
    generateBtn.addEventListener('click', () => {
        menuDisplay.classList.add('fade-out');
        imageContainer.classList.add('fade-out');
        if(menuTip) menuTip.classList.add('fade-out');

        setTimeout(() => {
            const currentMenus = menus[lang] || menus['en'];
            const randomIndex = Math.floor(Math.random() * currentMenus.length);
            const selectedMenu = currentMenus[randomIndex];

            menuDisplay.textContent = selectedMenu;

            // Add Tip
            if(menuTip) {
                menuTip.textContent = menuTips[lang] ? (menuTips[lang][selectedMenu] || '') : '';
            }

            // Image handling
            const imageUrl = menuImages[selectedMenu];
            if (imageUrl) {
                imageContainer.innerHTML = `<img src="${imageUrl}" alt="${selectedMenu}" class="menu-image">`;
            } else {
                imageContainer.innerHTML = `<div class="image-placeholder">No Image Available</div>`;
            }

            menuDisplay.classList.remove('fade-out');
            menuDisplay.classList.add('fade-in');
            imageContainer.classList.remove('fade-out');
            imageContainer.classList.add('fade-in');
            if(menuTip) {
                menuTip.classList.remove('fade-out');
                menuTip.classList.add('fade-in');
            }

            setTimeout(() => {
                menuDisplay.classList.remove('fade-in');
                imageContainer.classList.remove('fade-in');
                if(menuTip) menuTip.classList.remove('fade-in');
            }, 500);
        }, 300);
    });