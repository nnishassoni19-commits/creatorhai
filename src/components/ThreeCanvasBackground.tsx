import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useAgency } from '../context/AgencyContext';

export const ThreeCanvasBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { themeConfig } = useAgency();

  // Keep colors ref to update smoothly without recreating the entire scene
  const themeColorsRef = useRef({
    accent: themeConfig.accent,
    secondary: themeConfig.secondaryAccent,
  });

  useEffect(() => {
    themeColorsRef.current = {
      accent: themeConfig.accent,
      secondary: themeConfig.secondaryAccent,
    };
  }, [themeConfig.accent, themeConfig.secondaryAccent]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect if WebGL is supported
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 45);

    // ==========================================
    // 1. PARTICLES NETWORK (Creators & Brands)
    // ==========================================
    const particleCount = window.innerWidth < 768 ? 220 : 450;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const color1 = new THREE.Color(themeColorsRef.current.accent);
    const color2 = new THREE.Color(themeColorsRef.current.secondary);

    const spreadX = 75;
    const spreadY = 65;
    const spreadZ = 55;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * spreadX;
      positions[i3 + 1] = (Math.random() - 0.5) * spreadY;
      positions[i3 + 2] = (Math.random() - 0.5) * spreadZ;

      const mixedColor = i % 2 === 0 ? color1 : color2;
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      scales[i] = Math.random() * 2.5 + 1.0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circle sprite texture for smooth, antialiased points
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const pointsMaterial = new THREE.PointsMaterial({
      size: 1.8,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, pointsMaterial);
    scene.add(particles);

    // ==========================================
    // 2. CONNECTING NETWORK LINES (The Bridge)
    // ==========================================
    const maxConnections = particleCount * 2;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // ==========================================
    // 3. 3D FLOATING KINETIC BRIDGE (Torus Ribbon)
    // ==========================================
    const ribbonGeo = new THREE.TorusKnotGeometry(12, 1.8, 120, 20, 2, 3);
    const ribbonMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(themeColorsRef.current.accent),
      wireframe: true,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });
    const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
    ribbonMesh.position.set(16, -5, -15);
    scene.add(ribbonMesh);

    // Secondary Torus Knot
    const ribbonGeo2 = new THREE.TorusGeometry(18, 0.6, 16, 100);
    const ribbonMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(themeColorsRef.current.secondary),
      wireframe: true,
      transparent: true,
      opacity: 0.05,
      blending: THREE.AdditiveBlending,
    });
    const ribbonMesh2 = new THREE.Mesh(ribbonGeo2, ribbonMat2);
    ribbonMesh2.position.set(-20, 10, -25);
    scene.add(ribbonMesh2);

    // ==========================================
    // 4. SCROLL & MOUSE INTERACTION STATE
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;
    let scrollProgress = 0;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const currentScrollY = window.scrollY;
      scrollProgress = currentScrollY / maxScroll;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.02;
      lastScrollY = currentScrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // ==========================================
    // 5. RENDER LOOP
    // ==========================================
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth color interpolation if user changes palette
      const curColor1 = new THREE.Color(themeColorsRef.current.accent);
      const curColor2 = new THREE.Color(themeColorsRef.current.secondary);
      ribbonMat.color.lerp(curColor1, 0.08);
      ribbonMat2.color.lerp(curColor2, 0.08);

      // Damp scroll velocity smoothly
      scrollVelocity *= 0.92;

      // Rotate ribbons smoothly with scroll acceleration
      const scrollSpeedBoost = Math.abs(scrollVelocity) * 0.05;
      ribbonMesh.rotation.x = elapsedTime * 0.08 + scrollProgress * Math.PI * 2;
      ribbonMesh.rotation.y = elapsedTime * 0.12 + scrollProgress * Math.PI * 3;
      ribbonMesh.position.y = -5 + Math.sin(elapsedTime * 0.5) * 3 + scrollProgress * -15;

      ribbonMesh2.rotation.z = elapsedTime * 0.05 + scrollProgress * Math.PI;
      ribbonMesh2.rotation.x = elapsedTime * 0.07;
      ribbonMesh2.position.y = 10 + Math.cos(elapsedTime * 0.4) * 2 + scrollProgress * 10;

      // Mouse Parallax + Scroll Camera Navigation
      targetCameraX = mouseX * 4;
      targetCameraY = -mouseY * 4;
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;

      // Camera zooms & orbits based on scroll position!
      const targetZ = 45 - scrollProgress * 18 + Math.sin(scrollProgress * Math.PI * 4) * 6;
      camera.position.z += (targetZ - camera.position.z) * 0.05;
      camera.lookAt(0, 0, 0);

      // Rotate overall particles cloud
      particles.rotation.y = elapsedTime * 0.03 + scrollProgress * Math.PI * 1.5;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1 + scrollProgress * 0.4;
      lines.rotation.copy(particles.rotation);

      // Dynamic Network Lines between closest particles
      let connectionCount = 0;
      const posArray = geometry.attributes.position.array as Float32Array;
      const colorArray = geometry.attributes.color.array as Float32Array;
      const linePos = lineGeometry.attributes.position.array as Float32Array;
      const lineCol = lineGeometry.attributes.color.array as Float32Array;

      // Animate particle drift
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArray[i3 + 1] += Math.sin(elapsedTime + i) * 0.015;
      }
      geometry.attributes.position.needsUpdate = true;

      const connectionDistance = 9.5;
      const step = window.innerWidth < 768 ? 3 : 2;

      for (let i = 0; i < particleCount && connectionCount < maxConnections - 1; i += step) {
        for (let j = i + 1; j < particleCount && connectionCount < maxConnections - 1; j += step) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            const lineIdx = connectionCount * 6;
            linePos[lineIdx] = posArray[i * 3];
            linePos[lineIdx + 1] = posArray[i * 3 + 1];
            linePos[lineIdx + 2] = posArray[i * 3 + 2];

            linePos[lineIdx + 3] = posArray[j * 3];
            linePos[lineIdx + 4] = posArray[j * 3 + 1];
            linePos[lineIdx + 5] = posArray[j * 3 + 2];

            const alpha = 1.0 - dist / connectionDistance;
            lineCol[lineIdx] = colorArray[i * 3] * alpha;
            lineCol[lineIdx + 1] = colorArray[i * 3 + 1] * alpha;
            lineCol[lineIdx + 2] = colorArray[i * 3 + 2] * alpha;

            lineCol[lineIdx + 3] = colorArray[j * 3] * alpha;
            lineCol[lineIdx + 4] = colorArray[j * 3 + 1] * alpha;
            lineCol[lineIdx + 5] = colorArray[j * 3 + 2] * alpha;

            connectionCount++;
          }
        }
      }

      lineGeometry.setDrawRange(0, connectionCount * 2);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Cleanup WebGL resources
      geometry.dispose();
      pointsMaterial.dispose();
      texture.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      ribbonGeo.dispose();
      ribbonMat.dispose();
      ribbonGeo2.dispose();
      ribbonMat2.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
};
