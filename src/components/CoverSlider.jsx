import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCoverImages, nextSlide, prevSlide } from  '../redux/storeSlide'



const CoverSlider = () => {
  const dispatch = useDispatch();
  const coverImages = useSelector((state) => state.coverImages);
  const currentSlideIndex = useSelector((state) => state.currentSlideIndex);

  useEffect(() => {
    // Fetch the cover images and update the store using setCoverImages action
    const fetchedImages = ['../assets/slide.png', '../assets/slide.png', '../assets/slide.png']; // Replace with your fetched images
    dispatch(setCoverImages(fetchedImages));
  }, [dispatch]);

  const currentImage = coverImages[currentSlideIndex];

  return (
    <div>
      <button onClick={() => dispatch(prevSlide())}>Previous</button>
      <img src={currentImage} alt="Cover Image" />
      <button onClick={() => dispatch(nextSlide())}>Next</button>
    </div>
  );
};
export default CoverSlider;