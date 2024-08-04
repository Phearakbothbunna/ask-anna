let count = 0
document.getElementById('noBtn').addEventListener('mouseover', function() {
    
    count++;
    // Create random positions within the viewport
    if (count <  4) {
        const randomX = Math.floor(Math.random() * (window.innerWidth - this.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - this.offsetHeight));
        // Apply the new positions
        this.style.position = 'absolute';
        this.style.left = randomX + 'px';
        this.style.top = randomY + 'px';
        
    }
    else {
        this.style.transition = 'opacity 0.5s ease';
        this.style.opacity = '0';
    }

});

document.getElementById('yesBtn').addEventListener('click', function(){
    window.location.href="yes.html";
})