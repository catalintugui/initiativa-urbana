import { useCallback, useEffect, useState } from "react";
import { visionSlides } from "../../content/visionSlides";

const AUTO_ADVANCE_MS = 2000;

export function VisionSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const slideCount = visionSlides.length;

    const goTo = useCallback(
        (index: number) => {
            setActiveIndex((index + slideCount) % slideCount);
        },
        [slideCount],
    );

    const goNext = useCallback(() => {
        goTo(activeIndex + 1);
    }, [activeIndex, goTo]);

    const goPrev = useCallback(() => {
        goTo(activeIndex - 1);
    }, [activeIndex, goTo]);

    useEffect(() => {
        if (isPaused) {
            return;
        }

        const timer = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % slideCount);
        }, AUTO_ADVANCE_MS);

        return () => window.clearInterval(timer);
    }, [isPaused, slideCount]);

    return (
        <div
            className="vision-slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setIsPaused(false);
                }
            }}
        >
            <div className="vision-slider-viewport" aria-live="polite">
                {visionSlides.map((slide, index) => (
                    <img
                        key={slide.src}
                        alt={slide.alt}
                        className={
                            index === activeIndex
                                ? "vision-slider-slide is-active"
                                : "vision-slider-slide"
                        }
                        draggable={false}
                        src={slide.src}
                    />
                ))}
            </div>

            <button
                aria-label="Imaginea anterioară"
                className="vision-slider-arrow vision-slider-arrow--prev"
                type="button"
                onClick={goPrev}
            >
                ‹
            </button>
            <button
                aria-label="Imaginea următoare"
                className="vision-slider-arrow vision-slider-arrow--next"
                type="button"
                onClick={goNext}
            >
                ›
            </button>

            <div
                aria-label="Progres slideshow"
                className="vision-slider-dots"
                role="tablist"
            >
                {visionSlides.map((slide, index) => (
                    <button
                        aria-label={`Imaginea ${index + 1}: ${slide.alt}`}
                        aria-selected={index === activeIndex}
                        className={
                            index === activeIndex
                                ? "vision-slider-dot is-active"
                                : "vision-slider-dot"
                        }
                        key={slide.src}
                        role="tab"
                        type="button"
                        onClick={() => goTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}
