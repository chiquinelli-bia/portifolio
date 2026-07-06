import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import { CarouselButton } from "./carouselButton";
import { useGalleryContext } from "@/contexts/galleryContext/galleryContext";
import { ProjectSlide } from "./slide";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const { projects } = useGalleryContext();

  return (
    <div className={styles.container}>
      <CarouselButton direction="left" onClick={scrollPrev} />
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {projects.map((project) => (
            <ProjectSlide key={project.id} project={project} />
          ))}
        </div>
      </div>
      <CarouselButton direction="Rigth" onClick={scrollNext} />
    </div>
  );
};
