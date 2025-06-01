import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const meshRef = useRef<THREE.Mesh>();
  const frameIdRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.02,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const handleScroll = () => {
      if (meshRef.current) {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollTop / maxScroll;

        meshRef.current.rotation.x = scrollProgress * Math.PI * 2;
        meshRef.current.rotation.y = scrollProgress * Math.PI * 3;
        meshRef.current.rotation.z = scrollProgress * Math.PI;

        const scale = 1 + Math.sin(scrollProgress * Math.PI * 4) * 0.1;
        meshRef.current.scale.setScalar(scale);
      }
    };

    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.002;
        meshRef.current.rotation.y += 0.003;

        if (particles) {
          particles.rotation.x += 0.0005;
          particles.rotation.y += 0.001;
        }
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }

      frameIdRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ThreeBackground;
