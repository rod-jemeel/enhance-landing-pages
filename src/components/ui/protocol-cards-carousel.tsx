"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
  carouselRef?: React.RefObject<HTMLDivElement>;
  onScrollChange?: (canScrollLeft: boolean, canScrollRight: boolean) => void;
}

type Card = {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
  image: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const ProtocolCarousel = ({ items, initialScroll = 0, carouselRef: externalRef, onScrollChange }: CarouselProps) => {
  const internalRef = React.useRef<HTMLDivElement>(null);
  const ref = externalRef || internalRef;
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      const left = scrollLeft > 0;
      const right = scrollLeft < scrollWidth - clientWidth;
      setCanScrollLeft(left);
      setCanScrollRight(right);
      if (onScrollChange) {
        onScrollChange(left, right);
      }
    }
  };

  const handleCardClose = (index: number) => {
    if (ref.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      ref.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 md:py-16"
          ref={ref}
          onScroll={checkScrollability}
          style={{ 
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
        >
          <div
            className={cn(
              "flex flex-row justify-start gap-4 md:gap-6 pl-8 md:pl-16 lg:pl-20",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="flex-shrink-0"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const ProtocolCard = ({
  card,
  index,
}: {
  card: Card;
  index: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-8 h-fit max-w-3xl rounded-3xl bg-white p-8 md:p-12 dark:bg-neutral-900"
            >
              <button
                className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={handleClose}
              >
                <X className="h-4 w-4 text-gray-700" />
              </button>
              <div className="space-y-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${card.accentColor} rounded-2xl`}>
                  <span className={`text-2xl font-bold ${card.textColor}`}>{card.number}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <div 
        className="group perspective-1000 h-[28rem] w-72 md:h-[32rem] md:w-96 cursor-pointer flex-shrink-0"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={handleOpen}
      >
        <div className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
          isFlipped && "rotate-y-180"
        )}>
          {/* Front of card */}
          <div
            className={cn(
              "absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl"
            )}
          >
            {/* Background image */}
            <img 
              src={card.image} 
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-20 h-full p-8 flex flex-col justify-between">
              <span className="text-6xl font-bold text-white/90">{card.number}</span>
              <div className="space-y-2">
                <p className="text-sm font-medium text-white/90 uppercase tracking-wider">Phase {card.number}</p>
                <h3 className="text-3xl font-bold text-white leading-tight">
                  {card.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div
            className={cn(
              "absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-2xl",
              "bg-amber-400"
            )}
          >
            <div className="h-full p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <span className="text-5xl font-bold text-black">{card.number}</span>
                <h3 className="text-2xl font-bold text-black">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-black/80">
                  {card.description}
                </p>
                <button className="mt-2 inline-flex items-center text-base font-semibold text-black hover:underline group">
                  Learn more 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};