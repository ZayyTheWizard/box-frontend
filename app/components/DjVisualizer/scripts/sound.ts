import * as THREE from 'three';
import fetchVoiceAudio from './fetchVoiceAudio';

// fetch music here voice here later
export default async function sound(listener: THREE.AudioListener) {
  const data = await fetchVoiceAudio();

  console.log(data);
    // Check if data is null or empty
  if (!data || data.length === 0) {
    console.error('No songs found or data is null.');
    return null; // or handle the error as needed
  }

  const sound = new THREE.Audio(listener);
  const audioLoader = new THREE.AudioLoader();
  
  audioLoader.load(data[0].script_url, function(buffer) {
    sound.setBuffer(buffer);
    if (!sound.isPlaying) {
      playSound();
    }
  });

  const playSound = () => {
    window.addEventListener('click', function() {
      sound.play();
    });
  };

  const analyser = new THREE.AudioAnalyser(sound, 32)

  if (analyser) {
    return analyser
  } else {
    console.error('Failed to resolve Analyzer')
    return 
  }
}