document.addEventListener('DOMContentLoaded', function() {
    const logoSlide = document.querySelector('.logo-slide') as HTMLElement;

    if (logoSlide) {
        logoSlide.addEventListener('mouseover', function() {
            logoSlide.style.animationPlayState = 'paused';
        });

        logoSlide.addEventListener('mouseout', function() {
            logoSlide.style.animationPlayState = 'running';
        });
    }
});