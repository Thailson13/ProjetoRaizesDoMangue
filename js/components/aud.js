const audioAbout = document.querySelector("#audioAbout");

export function play() {
  audioAbout.play();
}

export function pause() {
  audioAbout.pause();
}

export function aum() {
  if (audioAbout.volume < 1) {
    audioAbout.volume += 0.1;
  } else {
    console.log("Max");
    return;
  }
}

export function aba() {
  if (audioAbout.volume > 0.1) {
    audioAbout.volume -= 0.1;
  } else {
    console.log("Min");
  }
}