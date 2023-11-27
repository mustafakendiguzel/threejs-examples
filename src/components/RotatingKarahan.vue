<template>
  <div>
    <h1>Three.js ile Vue</h1>
    <div id="canvasContainer" class="container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as Three from "three";

onMounted(() => {
  const scene = new Three.Scene();
  const camera = new Three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new Three.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("canvasContainer")?.appendChild(renderer.domElement);

  const geometry = new Three.BoxGeometry(2, 2, 2, 2);
  const personMaterial = new Three.TextureLoader().load(
    "/public/1685793412335.jpeg"
  );
  const material = new Three.MeshBasicMaterial({
    map: personMaterial,
  });
  const cube = new Three.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();
});
</script>

<style scoped>
h1 {
  color: #42b883;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
