document.addEventListener("DOMContentLoaded", () => {
  const audioCtrl = document.getElementById('audioCtrl');
  const audioImg = document.getElementById('audioImg');
  const bgAudio = document.getElementById('bgAudio');

  const audioOnImg = "/src/assets/music.png";
  const audioOffImg = "https://static.thenounproject.com/png/1680899-200.png";

  if (audioCtrl && audioImg && bgAudio) {
    audioImg.src = audioOffImg;

    audioCtrl.addEventListener('click', () => {
      if (bgAudio.paused) {
        bgAudio.play();
        audioImg.src = audioOnImg;
      } else {
        bgAudio.pause();
        audioImg.src = audioOffImg;
      }
    });
  } else {
    console.error("Audio elements not found in the DOM.");
  }
});
