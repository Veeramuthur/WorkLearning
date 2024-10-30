import { useState, useEffect } from 'react';
import process from 'process';


const images = [
`${process.env.PUBLIC_URL}/images/4.jpg`,
  `${process.env.PUBLIC_URL}/images/5.jpg`,
]; // Replace with the URLs or paths to your images

function Imagecarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Toggle play/pause state
  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  // Auto-play functionality with interval
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(nextImage, 3000); // Change every 3 seconds
    }
    return () => clearInterval(interval); // Cleanup on component unmount or when isPlaying changes
  }, [isPlaying]);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', width: '300px', margin: 'auto' }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: '100%', height: 'auto' }}
        />
        <button
          onClick={prevImage}
          style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
          }}
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          style={{
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
          }}
        >
          Next
        </button>
      </div>
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div>
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              height: '10px',
              width: '10px',
              margin: '5px',
              backgroundColor: index === currentIndex ? 'black' : 'gray',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Imagecarousel;
