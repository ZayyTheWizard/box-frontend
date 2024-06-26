import * as THREE from 'three';

import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl';
import sound from '../scripts/sound'

export function initThreeJs(refContainer: any) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xffffff, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Use ref as a mount point of the Three.js scene instead of the document.body
  refContainer && refContainer.appendChild(renderer.domElement);

  const uniforms = {
    u_resolution: {type: 'v2', value: new THREE.Vector2(window.innerWidth, window.innerHeight)},
    u_time: {type: 'f', value: 0.0},
    u_freq: {type: 'f', value: 0.0}
  }
  // Sphere geometry and material
  const geometry = new THREE.IcosahedronGeometry(2, 15);
  const material = new THREE.ShaderMaterial({ 
    uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    wireframe: true
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  camera.position.z = 5;

  const listener = new THREE.AudioListener();
  camera.add(listener);

  const analyser = sound(listener);
  const clock = new THREE.Clock();
  const animate = function () {
    requestAnimationFrame(animate);
    uniforms.u_time.value = clock.getElapsedTime();
    uniforms.u_freq.value = analyser.getAverageFrequency();
    sphere.rotation.x += 0.002;
    sphere.rotation.y += 0.002;
    renderer.render(scene, camera);
  };

  animate();
  
  return () => {
    // Clean up the scene and renderer when the component unmounts
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
    renderer.dispose();
    refContainer.removeChild(renderer.domElement);
  };
}