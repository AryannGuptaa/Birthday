
const confettiScript = document.createElement('script');
confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
confettiScript.onload = () => {
    window.onload = function() {
        confetti({
            particleCount: 250,  
            spread: 200,         
            startVelocity: 45,   
            origin: { y: 0.5 }   
        });
    };
};
document.body.appendChild(confettiScript);


document.getElementById("uploadVideo").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
      const videoURL = URL.createObjectURL(file);
      const videoElement = document.getElementById("uploadedVideo");
      const videoSource = document.getElementById("uploadedVideoSource");

     
      videoSource.src = videoURL;
      videoElement.load(); 

      
      document.getElementById("uploadBox").style.display = "none";
      videoElement.style.display = "block";
  }
});
function downloadPDF() {
  
  const link = document.createElement("a");
  link.href = "addons/Birthday.pdf"; 
  link.download = "Birthday.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


const birthdayDate = new Date(2025, 2, 1, 0, 0, 0); // 1st March 2025

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = birthdayDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown-container").style.display = "none";
        document.getElementById("birthday-content").style.display = "block";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `<span>${days}d</span> <span>${hours}h</span> <span>${minutes}m</span> <span>${seconds}s</span>`;
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
