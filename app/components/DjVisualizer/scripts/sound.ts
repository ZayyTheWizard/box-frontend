import * as THREE from 'three';


// fetch music here voice here later
export default function sound(listener: THREE.AudioListener) {
    const sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('./assets/audio/grandson.mp3', function(buffer) {
    sound.setBuffer(buffer);
        window.addEventListener('click', function() {
        sound.play();
        });
    });

  const analyser = new THREE.AudioAnalyser(sound, 32)

  return analyser
}