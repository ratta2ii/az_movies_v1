// src/components/Gallery.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

// Image imports
import GalleryImage1 from './../../Assets/Images/GalleryImages/gallery1.jpg';
import GalleryImage2 from './../../Assets/Images/GalleryImages/gallery2.jpg';
import GalleryImage3 from './../../Assets/Images/GalleryImages/gallery3.jpg';
import GalleryImage4 from './../../Assets/Images/GalleryImages/gallery4.jpg';
import GalleryImage5 from './../../Assets/Images/GalleryImages/gallery5.jpg';
import GalleryImage6 from './../../Assets/Images/GalleryImages/gallery6.jpg';
import GalleryImage7 from './../../Assets/Images/GalleryImages/gallery7.jpg';
import GalleryImage8 from './../../Assets/Images/GalleryImages/gallery8.jpg';
import GalleryImage9 from './../../Assets/Images/GalleryImages/gallery9.png';
import GalleryImage10 from './../../Assets/Images/GalleryImages/gallery10.JPG';
import GalleryImage11 from './../../Assets/Images/GalleryImages/gallery11.JPG';
import GalleryImage12 from './../../Assets/Images/GalleryImages/gallery12.JPG';
import GalleryImage13 from './../../Assets/Images/GalleryImages/gallery13.JPG';
import GalleryImage14 from './../../Assets/Images/GalleryImages/gallery14.JPG';

// Array of images with alt text
const IMAGES = [
  { src: GalleryImage1, alt: 'Gallery image 1' },
  { src: GalleryImage2, alt: 'Gallery image 2' },
  { src: GalleryImage3, alt: 'Gallery image 3' },
  { src: GalleryImage4, alt: 'Gallery image 4' },
  { src: GalleryImage5, alt: 'Gallery image 5' },
  { src: GalleryImage6, alt: 'Gallery image 6' },
  { src: GalleryImage7, alt: 'Gallery image 7' },
  { src: GalleryImage8, alt: 'Gallery image 8' },
  { src: GalleryImage9, alt: 'Gallery image 9' },
  { src: GalleryImage10, alt: 'Gallery image 10' },
  { src: GalleryImage11, alt: 'Gallery image 11' },
  { src: GalleryImage12, alt: 'Gallery image 12' },
  { src: GalleryImage13, alt: 'Gallery image 13' },
  { src: GalleryImage14, alt: 'Gallery image 14' },
];

// Styled components for the gallery
const GalleryContainer = styled(Box)`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const GalleryGrid = styled(Box)`
  display: grid;
  width: 100%;
  gap: 1.5rem;

  /* xs: 1 column (<600px) */
  grid-template-columns: repeat(1, 1fr);

  /* sm: 2 columns (>=600px) */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* md: 3 columns (>=900px) */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* lg: stays 3 columns (>=1200px) — no change needed */

  /* xl: 4 columns (>=1536px) */
  @media (min-width: 1536px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryItem = styled(Box)`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    aspect-ratio: 1 / 1; /* square tiles */
  }
`;

const GalleryTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
  color: #333;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryTitle variant="h4" component="h2" style={{color: "white"}}>
        Our Gallery
      </GalleryTitle>
      <GalleryGrid>
        {IMAGES.map((image, index) => (
          <GalleryItem key={`gallery-item-${index}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Gallery;
