'use client';
import { useEffect, useRef } from 'react';

export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    let animId: number;

    const init = async () => {
      const THREE = await import('three');
      const W = window.innerWidth;
      const H = document.body.scrollHeight;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      mountRef.current!.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, W / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 5);

      // Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      const pLight1 = new THREE.PointLight(0x00d4ff, 3, 15);
      pLight1.position.set(3, 3, 2);
      scene.add(pLight1);
      const pLight2 = new THREE.PointLight(0x7c3aed, 2, 12);
      pLight2.position.set(-3, -2, 1);
      scene.add(pLight2);

      /* ── Floating geometric shapes ── */
      const shapes: THREE.Mesh[] = [];

      const addShape = (geo: THREE.BufferGeometry, color: number, x: number, y: number, z: number) => {
        const mat = new THREE.MeshStandardMaterial({
          color, roughness: 0.3, metalness: 0.7,
          transparent: true, opacity: 0.15,
          wireframe: false,
        });
        const m = new THREE.Mesh(geo, mat);
        m.position.set(x, y, z);
        scene.add(m);
        shapes.push(m);
        return m;
      };

      // Icosahedrons
      addShape(new THREE.IcosahedronGeometry(0.6, 0), 0x00d4ff, -3, 2, -1);
      addShape(new THREE.IcosahedronGeometry(0.4, 0), 0x7c3aed, 3.5, -1, -2);
      addShape(new THREE.IcosahedronGeometry(0.8, 0), 0x0080ff, 0, -3, -3);
      addShape(new THREE.IcosahedronGeometry(0.3, 0), 0x00d4ff, -4, -2, -1);
      addShape(new THREE.IcosahedronGeometry(0.5, 0), 0xa855f7, 4, 3, -2);

      // Torus knots
      addShape(new THREE.TorusKnotGeometry(0.4, 0.12, 80, 12), 0x00d4ff, -2, -1, -2);
      addShape(new THREE.TorusKnotGeometry(0.3, 0.09, 60, 10), 0x7c3aed, 2.5, 2, -3);

      // Octahedrons
      addShape(new THREE.OctahedronGeometry(0.5), 0x38bdf8, 1, -2, -1);
      addShape(new THREE.OctahedronGeometry(0.35), 0xa855f7, -1.5, 3, -2);

      // Torus rings
      addShape(new THREE.TorusGeometry(0.5, 0.08, 16, 40), 0x00d4ff, 3, 0, -2);
      addShape(new THREE.TorusGeometry(0.35, 0.06, 12, 32), 0x7c3aed, -3.5, 1, -1);

      /* ── Particle field ── */
      const pCount = 300;
      const pPos = new Float32Array(pCount * 3);
      const pCol = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        pPos[i * 3]     = (Math.random() - 0.5) * 14;
        pPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
        const c = Math.random();
        pCol[i * 3]     = c > 0.5 ? 0.0 : 0.5;
        pCol[i * 3 + 1] = c > 0.5 ? 0.7 : 0.3;
        pCol[i * 3 + 2] = 1.0;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
      const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
        size: 0.025, vertexColors: true, transparent: true, opacity: 0.5,
      }));
      scene.add(particles);

      /* ── Connecting lines (neural network effect) ── */
      const linePositions: number[] = [];
      for (let i = 0; i < 20; i++) {
        const x1 = (Math.random() - 0.5) * 10;
        const y1 = (Math.random() - 0.5) * 8;
        const z1 = (Math.random() - 0.5) * 4 - 2;
        const x2 = x1 + (Math.random() - 0.5) * 3;
        const y2 = y1 + (Math.random() - 0.5) * 3;
        const z2 = z1 + (Math.random() - 0.5) * 2;
        linePositions.push(x1, y1, z1, x2, y2, z2);
      }
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
      const lineMesh = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({
        color: 0x00d4ff, transparent: true, opacity: 0.08,
      }));
      scene.add(lineMesh);

      /* ── Scroll-based camera ── */
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progress = scrollY / maxScroll;
        camera.position.y = -progress * 3;
        camera.position.x = Math.sin(progress * Math.PI * 2) * 0.5;
      };
      window.addEventListener('scroll', handleScroll);

      /* ── Resize ── */
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      /* ── Mouse parallax ── */
      let mouseX = 0, mouseY = 0;
      const handleMouse = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
      };
      window.addEventListener('mousemove', handleMouse);

      /* ── Animate ── */
      let t = 0;
      const rotSpeeds = shapes.map(() => ({
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.006,
      }));
      const floatOffsets = shapes.map(() => Math.random() * Math.PI * 2);

      const animate = () => {
        t += 0.016;
        animId = requestAnimationFrame(animate);

        // Rotate shapes
        shapes.forEach((s, i) => {
          s.rotation.x += rotSpeeds[i].x;
          s.rotation.y += rotSpeeds[i].y;
          s.rotation.z += rotSpeeds[i].z;
          s.position.y += Math.sin(t * 0.5 + floatOffsets[i]) * 0.001;
        });

        // Pulse lights
        pLight1.intensity = 2.5 + Math.sin(t * 1.5) * 0.8;
        pLight2.intensity = 1.8 + Math.sin(t * 1.2 + 1) * 0.6;
        pLight1.position.x = 3 + Math.sin(t * 0.4) * 1;
        pLight2.position.x = -3 + Math.cos(t * 0.3) * 1;

        // Mouse parallax on camera
        camera.position.x += (mouseX - camera.position.x) * 0.02;
        camera.rotation.y += (-mouseX * 0.1 - camera.rotation.y) * 0.02;
        camera.rotation.x += (-mouseY * 0.05 - camera.rotation.x) * 0.02;

        // Particles slow drift
        const pos = pGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < pCount; i++) {
          pos[i * 3 + 1] += 0.002;
          if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -5;
        }
        pGeo.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouse);
      };
    };

    init();
    return () => {
      cancelAnimationFrame(animId);
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
