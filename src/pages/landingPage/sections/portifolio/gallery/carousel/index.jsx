import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import { CarouselButton } from "./carouselButton";
import { useGalleryContext } from "@/contexts/galleryContext/galleryContext";
import { ProjectSlide } from "./slide";
import { useEffect } from "react";
import { ThumbsPreview } from "./thumbsPreview";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const { projects, setCurrentIndex } = useGalleryContext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    onSelect();
  }, [emblaApi, setCurrentIndex]);

  return (
    <div className={styles.carousel}>
      <div className={styles.container}>
        <CarouselButton direction="left" onClick={scrollPrev} />
        <div className={styles.carouselShadow}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {projects.map((project) => (
                <ProjectSlide key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
        <CarouselButton direction="Rigth" onClick={scrollNext} />
      </div>
      <ThumbsPreview projects={projects} emblaApi={emblaApi} />
    </div>
  );
};
