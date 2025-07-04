// Add event listener to window load
window.addEventListener('load', () => {
    // Fade in hero video
    const heroVideo = document.getElementById('hero-video');
    heroVideo.classList.add('fade-in');

    // Add smooth transition to featured videos
    const featuredVideos = document.querySelectorAll('.featured-videos li');
    featuredVideos.forEach((video) => {
        video.addEventListener('mouseover', () => {
            video.classList.add('smooth-transition');
        });
        video.addEventListener('mouseout', () => {
            video.classList.remove('smooth-transition');
        });
    });
});