document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const overlay = document.querySelector('.overlay');
    const enlargedCard = document.querySelector('.enlarged-card');
    const enlargedFront = document.querySelector('.enlarged-card-front img');
    const enlargedBack = document.querySelector('.enlarged-card-back p');
    const closeBtn = document.querySelector('.close-btn');
    const flipBtn = document.querySelector('.flip-btn');
    
    function isMobile() {
        return window.innerWidth <= 768; 
    }
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardId = this.getAttribute('data-id');
            const cardInner = this.querySelector('.card-inner');
            
            if (isMobile()) {
                if (cardInner.style.transform === 'rotateY(180deg)') {
                    cardInner.style.transform = 'rotateY(0deg)';
                } else {
                    cardInner.style.transform = 'rotateY(180deg)';
                }
                return; 
            }
            
            const cardFront = this.querySelector('.card-front img');
            const cardBack = this.querySelector('.card-back p');
            
            enlargedFront.src = cardFront.src;
            enlargedFront.alt = cardFront.alt;
            enlargedBack.textContent = cardBack.textContent;
            
            enlargedCard.style.transform = 'rotateY(0)';
            
            overlay.classList.add('active');
        });
    });
    
    function updateHoverBehavior() {
        if (isMobile()) {
            document.querySelectorAll('.card').forEach(card => {
                card.classList.add('mobile');
            });
        } else {
            document.querySelectorAll('.card').forEach(card => {
                card.classList.remove('mobile');
            });
        }
    }
    
    updateHoverBehavior();
    window.addEventListener('resize', updateHoverBehavior);
    
    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
    });
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
    
    flipBtn.addEventListener('click', function() {
        if (enlargedCard.style.transform === 'rotateY(180deg)') {
            enlargedCard.style.transform = 'rotateY(0)';
        } else {
            enlargedCard.style.transform = 'rotateY(180deg)';
        }
    });
});