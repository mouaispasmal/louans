document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments
    const starg = document.getElementById('starg');
    const starp = document.getElementById('starp');
    const ct1 = document.getElementById('ct1');
    const ct2 = document.getElementById('ct2');
    
    
    const rotationAmount = 15; // Angle de rotation 
    const animationDuration = 500; // Durée d'une rotation 
    
    function setupAnimation(starElement, containerElement) {
        // État actuel
        let isRotated = false;
        // Référence de l'intervalle
        let animationInterval = null;
        // État du survol
        let isHovered = false;
        
        function toggleRotation() {
            if (isRotated) {
                starElement.style.transform = 'rotate(0deg)';
            } else {
                starElement.style.transform = `rotate(${rotationAmount}deg)`;
            }
            isRotated = !isRotated;
        }
        
        // Démarrer l'animation
        function startAnimation() {
            isHovered = true;
            if (!animationInterval) {
                toggleRotation();
                animationInterval = setInterval(toggleRotation, animationDuration / 2);
            }
        }
        
        // Arrêter l'animation
        function stopAnimation() {
            isHovered = false;
            clearInterval(animationInterval);
            animationInterval = null;
            starElement.style.transform = 'rotate(0deg)';
            isRotated = false;
        }
        
       
        containerElement.addEventListener('mouseenter', startAnimation);
        containerElement.addEventListener('mouseleave', stopAnimation);
    }
    
    
    if (starp && ct1) {
        setupAnimation(starp, ct1);
    }
    
    if (starg && ct2) {
        setupAnimation(starg, ct2);
    }
});