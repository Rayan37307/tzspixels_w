import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const AuraCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the aura
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const auraX = useSpring(mouseX, springConfig);
  const auraY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Track hoverable elements
    const updateHoverElements = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], .hover-target');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateHoverElements();

    // Mutation observer to handle dynamic content
    const observer = new MutationObserver(updateHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Main Dot - Follows mouse instantly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Aura Circle - Follows with delay/spring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-[9998]"
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2.2 : 1,
          backgroundColor: isHovering ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0)',
          borderColor: isHovering ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        {/* Inner Glow - Subtle Gray */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-black/5 blur-sm"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 1 : 0,
          }}
        />
      </motion.div>
    </>
  );
};

export default AuraCursor;
