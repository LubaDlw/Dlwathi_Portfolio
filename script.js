document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Game Developer", "Front-End Developer", "Digital Innovator", "UI/UX Designer"];
    const roleText = document.getElementById('role-text');
    let index = 0;

    function rotateRole() {
        // Add 'hide' class to fade out
        roleText.classList.add('hide');

        // Wait for fade-out transition, then change text
        setTimeout(() => {
            roleText.textContent = roles[index];
            roleText.classList.remove('hide'); // Fade in new text
            index = (index + 1) % roles.length;
        }, 500); // Delay matches the CSS transition duration
    }

    // Rotate every 3 seconds
    setInterval(rotateRole, 3000);
});
