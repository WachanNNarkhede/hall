import React, { useEffect, useRef } from "react";

export default function PanoramaViewer() {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    // Check if Three.js and Panolens are already loaded
    if (!window.THREE || !window.PANOLENS) {
      console.error("Three.js or Panolens not loaded");
      return;
    }

    // Initialize viewer
    const initViewer = () => {
      // Cleanup previous instance if exists
      if (viewerRef.current) {
        viewerRef.current.dispose();
        containerRef.current.innerHTML = '';
      }

      // Create panorama
      const panorama = new window.PANOLENS.ImagePanorama("/360.jpg");
      
      // Configure viewer with manual controls
      viewerRef.current = new window.PANOLENS.Viewer({
        container: containerRef.current,
        autoRotate: false,
        autoRotateSpeed: 0,
        controlBar: false,
        cameraFov: 70,
        enableReticle: false
      });

      // Configure orbit controls for better dragging
      viewerRef.current.OrbitControls.noZoom = false;
      viewerRef.current.OrbitControls.noPan = false;
      viewerRef.current.OrbitControls.enableDamping = true;
      viewerRef.current.OrbitControls.dampingFactor = 0.25;
      viewerRef.current.OrbitControls.enableKeys = false;

      // Add panorama to viewer
      viewerRef.current.add(panorama);
    };

    // Initialize when both libraries are loaded
    const checkAndInit = () => {
      if (window.THREE && window.PANOLENS) {
        initViewer();
      } else {
        setTimeout(checkAndInit, 100);
      }
    };

    checkAndInit();

    // Cleanup function
    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ 
        width: "100%", 
        height: "500px",
        cursor: "grab"
      }}
      onMouseDown={() => {
        if (containerRef.current) {
          containerRef.current.style.cursor = "grabbing";
        }
      }}
      onMouseUp={() => {
        if (containerRef.current) {
          containerRef.current.style.cursor = "grab";
        }
      }}
    />
  );
}