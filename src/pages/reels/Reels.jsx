import React, { useRef } from 'react';
import ReelElement from '../../components/reelElement/ReelElement';

const Reels = () => {
  const containerRef = useRef(null);

  const handleScroll = () => {
    const scrollThreshold = 100;
    if (containerRef.current.scrollTop >= scrollThreshold) {
      containerRef.current.scrollTop = scrollThreshold;
    }
  };

  return (
    <div
      className='content_reel'
      style={{ overflowY: 'auto', height: '100%' }} // Adjust height as needed
      ref={containerRef}
      onScroll={handleScroll}
    >
      <ReelElement />
      <ReelElement />
      <ReelElement />
      <ReelElement />
      <ReelElement />
      <ReelElement />
      <ReelElement />
    </div>
  );
};

export default Reels;
