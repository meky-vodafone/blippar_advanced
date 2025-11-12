// 👇 Define the component
AFRAME.registerComponent("always-face-camera", {
  tick: function () {
    const cameraEl = this.el.sceneEl.camera.el; // get the active camera
    if (!cameraEl) return;

    // Get camera world position
    const cameraWorldPos = new THREE.Vector3();
    cameraEl.object3D.getWorldPosition(cameraWorldPos);

    // Make this entity look at the camera
    this.el.object3D.lookAt(cameraWorldPos);

    // Optional: fix if your model faces backward by default
    // this.el.object3D.rotateY(Math.PI);
  },
});
