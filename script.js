// =====================================================
// COMPLETE SLIDER + VIDEO SCRIPT.JS
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    // =====================================================
    // Special Dishes Carousel
    // =====================================================
    const specialCards = document.querySelector('.special-cards');
    const specialArrowLeft = document.querySelector('.special-arrow-left');
    const specialArrowRight = document.querySelector('.special-arrow-right');
    const cardWidth = 232; // Card width (200px) + gap (32px)
    let currentPosition = 0;

    if (specialArrowLeft && specialArrowRight && specialCards) {
        specialArrowLeft.addEventListener('click', function() {
            currentPosition -= cardWidth;
            // Prevent scrolling beyond the end
            const maxScroll = -((specialCards.children.length - 4) * cardWidth);
            if (currentPosition < maxScroll) {
                currentPosition = maxScroll;
            }
            specialCards.style.transform = `translateX(${currentPosition}px)`;
        });

        specialArrowRight.addEventListener('click', function() {
            currentPosition += cardWidth;
            // Prevent scrolling beyond the start
            if (currentPosition > 0) {
                currentPosition = 0;
            }
            specialCards.style.transform = `translateX(${currentPosition}px)`;
        });
    }

    // =====================================================
    // Video Play Button Functionality
    // =====================================================
    const loveCards = document.querySelectorAll('.love-card');
    
    loveCards.forEach(card => {
        const playButton = card.querySelector('.play-button');
        const video = card.querySelector('.love-video');
        
        if (playButton && video) {
            playButton.addEventListener('click', function(e) {
                e.stopPropagation();
                if (video.paused) {
                    video.play();
                    playButton.style.opacity = '0';
                } else {
                    video.pause();
                    playButton.style.opacity = '1';
                }
            });
            
            video.addEventListener('play', function() {
                playButton.style.opacity = '0';
            });
            
            video.addEventListener('pause', function() {
                playButton.style.opacity = '1';
            });
            
            video.addEventListener('ended', function() {
                playButton.style.opacity = '1';
            });
        }
    });
});