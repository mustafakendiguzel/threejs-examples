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
  const karahanImage =
    "https://media.licdn.com/dms/image/D4D03AQHT3ScgP93zQg/profile-displayphoto-shrink_800_800/0/1685793412335?e=2147483647&v=beta&t=FI3XFeAx7ZhxAKgZvn5fKAfqcgDoS0BcBWVqOOf3JWc";
  const cenkayImage =
    "https://media.licdn.com/dms/image/C4D03AQFJCHxK5lHtDA/profile-displayphoto-shrink_800_800/0/1640021700010?e=2147483647&v=beta&t=fovj4wM04OzzNfuGzLPjxWXVzvPRrtA27Id1yA1bHHw";
  const geometry = new Three.BoxGeometry(2, 2, 2, 2);
  const karahanTexture = new Three.TextureLoader().load(karahanImage);
  const cenkayTexture = new Three.TextureLoader().load(cenkayImage);
  const karahanMaterial = new Three.MeshBasicMaterial({
    map: karahanTexture,
  });
  const cenkayMaterial = new Three.MeshBasicMaterial({
    map: cenkayTexture,
  });
  const cube = new Three.Mesh(geometry, [
    karahanMaterial,
    cenkayMaterial,
    karahanMaterial,
    cenkayMaterial,
    karahanMaterial,
    cenkayMaterial,
  ]);
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
