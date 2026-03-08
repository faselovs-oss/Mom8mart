document.addEventListener('DOMContentLoaded', function() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessage = document.getElementById('surpriseMessage');
    
    const wishes = [
        "🌷 Пусть каждый день дарит вам улыбки и приятные сюрпризы!",
        "🌸 Будьте здоровы, счастливы и окружены заботой близких!",
        "🌺 Оставайтесь такими же красивыми, мудрыми и вдохновляющими!",
        "🌹 Спасибо за вашу бесконечную любовь и тепло!",
        "🌼 Пусть в душе всегда цветёт весна, а сердце поёт от радости!",
        "💐 Вы самые лучшие мама и бабушка на свете!",
        "🌷 Желаем вам мира, добра и только солнечных дней!",
        "🌸 Пусть сбываются мечты и исполняются желания!",
        "🌺 Вы наше вдохновение и опора, спасибо, что вы есть!"
    ];
    
    surpriseBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * wishes.length);
        const randomWish = wishes[randomIndex];
        
        surpriseMessage.textContent = randomWish;
        surpriseMessage.classList.add('show');
        
        surpriseMessage.style.opacity = '0';
        surpriseMessage.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            surpriseMessage.style.opacity = '1';
            surpriseMessage.style.transform = 'scale(1)';
        }, 10);
        
        surpriseBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            surpriseBtn.style.transform = 'scale(1)';
        }, 200);
    });
    
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        flower.addEventListener('mouseover', function() {
            this.style.opacity = '0.5';
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        flower.addEventListener('mouseout', function() {
            this.style.opacity = '0.25';
            this.style.transform = 'scale(1)';
        });
    });
    
    console.log('🌷 Сайт загружен! С 8 марта, мама Ирина и бабушка Валентина!');
});
