import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import { CarouselButton } from "./carouselButton";
import { useGalleryContext } from "@/contexts/galleryContext/galleryContext";
import { ProjectSlide } from "./slide";
import { useEffect } from "react";
import { ThumbsPreview } from "./thumbsPreview";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    duration: 30,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const {
    projects,
    setCurrentIndex,
    currentIndex,
    setCurrentImage,
    currentImage,
  } = useGalleryContext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
      setCurrentImage(0);
    };

    emblaApi.on("select", onSelect);

    onSelect();
  }, [emblaApi, setCurrentIndex, setCurrentImage]);

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
      <div
        role="group"
        className={styles.containerPagination}
        aria-label="Selecionar imagem do projeto"
      >
        {projects[currentIndex].images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Ir para a imagem ${index + 1}`}
            aria-pressed={index === currentImage ? "true" : undefined}
            className={`${styles.dotsPagination} ${
              index === currentImage ? styles.active : ""
            }`}
          ></button>
        ))}
      </div>
      <ThumbsPreview projects={projects} emblaApi={emblaApi} />
    </div>
  );
};
