const audioCtrl = document.getElementById('audioCtrl');
    const audioImg = document.getElementById('audioImg');
    const bgAudio = document.getElementById('bgAudio');

    const audioOnImg = "assets/music.png";
    const audioOffImg = "https://static.thenounproject.com/png/1680900-200.png";

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
