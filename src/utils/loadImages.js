// utils/loadImages.js

const loadImages = () => {
  const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}');
  return images;
};

export default loadImages;
