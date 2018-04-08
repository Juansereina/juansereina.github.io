import React from 'react';
import * as THREE from 'three';

export default class Scene extends React.Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    const particleCount = 100;
    let particles = new THREE.Geometry();
    const pMaterial = new THREE.PointCloudMaterial({
      color: 0xffffff,
      size: 5,
    });

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xff3c5d, 0.0008);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const form = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
    const cube = new THREE.Mesh(form, material);

    camera.position.z = 4;
    scene.add(cube);
    renderer.setClearColor('#000000');
    renderer.setSize(width, height);

    //------

    const geometry = new THREE.Geometry();

    for (let i = 0; i < particleCount; i++) {
      const vertex = new THREE.Vector3();
      vertex.x = Math.random() * 2000 - 1000;
      vertex.y = Math.random() * 2000 - 1000;
      vertex.z = Math.random() * 2000 - 1000;
      geometry.vertices.push(vertex);
    }

    for (let i = 0; i < 5; i++) {
      particles = new THREE.PointCloud(geometry, pMaterial);
      scene.add(particles);
    }

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.cube = cube;
    this.particles = particles;
    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {

    const time = Date.now() * 0.00005;

    this.camera.position.x += (0 - this.camera.position.x) * 0.05;
    this.camera.position.y += (-0 - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);
    for (let i = 0; i < this.scene.children.length; i++) {
      const object = this.scene.children[i];

      // if ( object instanceof THREE.PointCloud ) {

      object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));

      //	}
    }

    // /-----------------
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    return (
      <div
        style={{ width: w, height: h }}
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}
