import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import { CarouselButton } from "./carouselButton";
const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  return (
    <div className={styles.container}>
      <CarouselButton direction="left" onClick={scrollPrev} />
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>Slide 1</div>
          <div className={styles.embla__slide}>Slide 2</div>
          <div className={styles.embla__slide}>Slide 3</div>
        </div>
      </div>
      <CarouselButton direction="Rigth" onClick={scrollNext} />n
    </div>
  );
};

export { Carousel };
