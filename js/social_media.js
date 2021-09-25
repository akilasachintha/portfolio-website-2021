function buttonAnimation(pressedButton) {
    if (pressedButton.classList.contains('social-media-pressed')) {
        pressedButton.classList.remove('social-media-pressed');
        pressedButton.classList.add('social-media');

        setTimeout(function() {
            pressedButton.classList.remove('social-media');
            pressedButton.classList.add('social-media-pressed');
        }, 3000);
    }
}

document.getElementById('icon-tab').addEventListener('mouseenter', (e) => {
    if (e.target.classList.contains('social')) {
        buttonAnimation(e.target);
    }
});