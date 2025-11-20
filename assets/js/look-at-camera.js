AFRAME.registerComponent("face-camera", {
  tick: function () {
    const camera = document.querySelector("#camera");
    if (!camera) return;

    const camPos = camera.object3D.position;
    const obj = this.el.object3D;

    obj.lookAt(camPos);
  }
});