import React from 'react';
import * as THREE from 'three';
import styles from './background.scss'

export default class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
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

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 3000);
    camera.position.z = 1000;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x00FFFF, 0.0008);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor('#000000');
    renderer.setSize(width, height);

    const geometry = new THREE.Geometry();

    for (let i = 0; i < particleCount; i++) {
      const vertex = new THREE.Vector3();
      vertex.x = (Math.random() * 2000) - 1000;
      vertex.y = (Math.random() * 2000) - 1000;
      vertex.z = (Math.random() * 2000) - 1000;
      geometry.vertices.push(vertex);
    }

    for (let i = 0; i < 5; i++) {
      particles = new THREE.PointCloud(geometry, pMaterial);

      particles.rotation.x = Math.random() * 6;
			particles.rotation.y = Math.random() * 6;
			particles.rotation.z = Math.random() * 6;

      scene.add(particles);
    }

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.mount.appendChild(this.renderer.domElement);
    this.start();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    window.removeEventListener('resize', this.updateDimensions);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId);
  }

  animate = () => {
    const time = Date.now() * 0.00005;
    this.camera.position.x += (0 - this.camera.position.x) * 0.05;
    this.camera.position.y += (-0 - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);
    for (let i = 0; i < this.scene.children.length; i++) {
      const object = this.scene.children[i];
      object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
    }
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }
  updateDimensions = () => {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }
  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    const { width, height } = this.state;
    return (
      <div
      className={styles.root}
        style={{ width, height }}
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}
