import React, { useEffect, useRef } from 'react';
import { useAgency } from '../context/AgencyContext';

export const ThreeCanvasBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { themeConfig } = useAgency();

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

    let isDisposed = false;
    let animationFrameId: number;
    let cleanupFn: (() => void) | null = null;

    // Defer initialization to requestIdleCallback to free main thread for FCP / LCP
    const initThree = async () => {
      if (isDisposed || !container) return;

      const THREE = await import('three');
      if (isDisposed || !container) return;

      // WebGL Renderer with graceful fallback
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: window.devicePixelRatio < 2,
          powerPreference: 'low-power',
        });
      } catch {
        return;
      }

      const isMobile = window.innerWidth < 768;
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75));
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
      camera.position.set(0, 0, 45);

      // Lightweight particle system optimized for mobile
      const particleCount = isMobile ? 80 : 260;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

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
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Circular sprite texture
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.7)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      const texture = new THREE.CanvasTexture(canvas);

      const pointsMaterial = new THREE.PointsMaterial({
        size: isMobile ? 1.4 : 1.8,
        map: texture,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const particles = new THREE.Points(geometry, pointsMaterial);
      scene.add(particles);

      // Connecting Network Lines
      const maxConnections = isMobile ? 60 : 200;
      const linePositions = new Float32Array(maxConnections * 6);
      const lineColors = new Float32Array(maxConnections * 6);
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
      );
      lineGeometry.setAttribute(
        'color',
        new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage)
      );

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      // Kinetic Torus Wireframe (desktop only or simplified on mobile)
      const ribbonGeo = new THREE.TorusKnotGeometry(12, 1.6, isMobile ? 40 : 80, isMobile ? 12 : 16, 2, 3);
      const ribbonMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(themeColorsRef.current.accent),
        wireframe: true,
        transparent: true,
        opacity: 0.07,
      });
      const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
      ribbonMesh.position.set(16, -5, -15);
      scene.add(ribbonMesh);

      let mouseX = 0;
      let mouseY = 0;
      let targetCameraX = 0;
      let targetCameraY = 0;
      let scrollProgress = 0;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      const handleScroll = () => {
        const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
        scrollProgress = window.scrollY / maxScroll;
      };

      if (!isMobile) {
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
      }
      window.addEventListener('scroll', handleScroll, { passive: true });

      const handleResize = () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize, { passive: true });

      let clock = new THREE.Clock();
      let frameCounter = 0;

      const animate = () => {
        if (isDisposed) return;
        animationFrameId = requestAnimationFrame(animate);

        // Pause WebGL work if document is hidden to conserve battery and CPU
        if (document.hidden) return;

        frameCounter++;
        const elapsedTime = clock.getElapsedTime();

        // Rotate ribbons
        ribbonMesh.rotation.x = elapsedTime * 0.08 + scrollProgress * Math.PI * 2;
        ribbonMesh.rotation.y = elapsedTime * 0.12;

        // Camera movement
        targetCameraX = mouseX * 3;
        targetCameraY = -mouseY * 3;
        camera.position.x += (targetCameraX - camera.position.x) * 0.04;
        camera.position.y += (targetCameraY - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        particles.rotation.y = elapsedTime * 0.02 + scrollProgress * Math.PI;
        lines.rotation.copy(particles.rotation);

        // Throttle distance calculations to every 2nd frame on desktop, 3rd on mobile
        const frameSkip = isMobile ? 3 : 2;
        if (frameCounter % frameSkip === 0) {
          let connectionCount = 0;
          const posArray = geometry.attributes.position.array as Float32Array;
          const colorArray = geometry.attributes.color.array as Float32Array;
          const linePos = lineGeometry.attributes.position.array as Float32Array;
          const lineCol = lineGeometry.attributes.color.array as Float32Array;
          const connectionDistance = isMobile ? 8.0 : 10.0;
          const step = isMobile ? 3 : 2;

          for (let i = 0; i < particleCount && connectionCount < maxConnections - 1; i += step) {
            for (let j = i + 1; j < particleCount && connectionCount < maxConnections - 1; j += step) {
              const dx = posArray[i * 3] - posArray[j * 3];
              const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
              const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
              const distSq = dx * dx + dy * dy + dz * dz;

              if (distSq < connectionDistance * connectionDistance) {
                const dist = Math.sqrt(distSq);
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
        }

        renderer.render(scene, camera);
      };

      animate();

      cleanupFn = () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);

        geometry.dispose();
        pointsMaterial.dispose();
        texture.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        ribbonGeo.dispose();
        ribbonMat.dispose();
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    // Initialize Three.js WebGL canvas immediately
    initThree();

    return () => {
      isDisposed = true;
      if (cleanupFn) {
        cleanupFn();
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
