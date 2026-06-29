import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>Slide 1</div>
          <div className={styles.embla__slide}>Slide 2</div>
          <div className={styles.embla__slide}>Slide 3</div>
        </div>
      </div>

      <button className={styles.embla__prev} onClick={scrollPrev}>
        Scroll to prev
      </button>
      <button className={styles.embla__next} onClick={scrollNext}>
        Scroll to next
      </button>
    </div>
  );
};

export { Carousel };
