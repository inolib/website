import type { VariantProps } from "tailwind-variants";

import { Slideshow, SlideshowNextButton, SlideshowPreviousButton, SlideshowSlide } from "~/components/headless";
import { tv } from "~/helpers";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";

const variants = tv({
  slots: {
    slideshowClassName:
      "flex flex-wrap items-center justify-between gap-x-16 gap-y-8 px-[4dvw] py-24 md:flex-nowrap xl:px-[8dvw]",
    slideshowNextButtonClassName:
      "rounded-full border p-4 outline-none transition-all duration-300 focus-visible:outline-4 focus-visible:outline-offset-4",
    slideshowNextButtonIconClassName: "size-6 -rotate-90",
    slideshowPreviousButtonClassName:
      "rounded-full border p-4 outline-none transition-all duration-300 focus-visible:outline-4 focus-visible:outline-offset-4 md:order-first",
    slideshowPreviousButtonIconClassName: "size-6 rotate-90",
    slideshowSlideClassName: "flex flex-col gap-8",
    slideshowSlideRoleClassName: "",
  },
  variants: {
    _color: {
      "blue-950": {
        slideshowClassName: "bg-blue-950",
        slideshowNextButtonClassName: "border-white hover:bg-black focus-visible:outline-white",
        slideshowNextButtonIconClassName: "stroke-white",
        slideshowPreviousButtonClassName: "border-white hover:bg-black focus-visible:outline-white",
        slideshowPreviousButtonIconClassName: "stroke-white",
        slideshowSlideClassName: "font-normal text-white",
        slideshowSlideRoleClassName: "text-sand-400",
      },
    },
  },
});

type TestimonialsProps = {
  _color: NonNullable<Variants["_color"]>;
};

type Variants = VariantProps<typeof variants>;

export const Testimonials = ({ _color }: TestimonialsProps) => {
  const {
    slideshowClassName,
    slideshowNextButtonClassName,
    slideshowNextButtonIconClassName,
    slideshowPreviousButtonClassName,
    slideshowPreviousButtonIconClassName,
    slideshowSlideClassName,
    slideshowSlideRoleClassName,
  } = variants({ _color });

  const testimonials = [
    {
      testimony:
        "Nous recommandons INOLIB pour leurs compétences techniques et humaines. C’était un plaisir de travailler ensemble.",
      name: "Dora BLASBERG",
      role: "Psychologue et conférencière, cofondatrice de ProAdapt",
    },
  ];

  return (
    <Slideshow aria-roledescription="diaporama" className={slideshowClassName()}>
      <div>
        {testimonials.map((item, index) => (
          <SlideshowSlide aria-roledescription="diapositive" className={slideshowSlideClassName()} key={index}>
            <p className="text-3xl sm:text-4xl">{item.testimony}</p>

            <div>
              <p className="text-2xl">{item.name}</p>
              <p className={slideshowSlideRoleClassName()}>{item.role}</p>
            </div>
          </SlideshowSlide>
        ))}
      </div>

      {testimonials.length > 1 ? (
        <SlideshowPreviousButton className={slideshowPreviousButtonClassName()} title="Témoignage précédent">
          <ArrowNarrowDownIcon aria-label="Témoignage précédent" className={slideshowPreviousButtonIconClassName()} />
        </SlideshowPreviousButton>
      ) : (
        <div className="border border-transparent p-7 md:order-first" />
      )}

      {testimonials.length > 1 ? (
        <SlideshowNextButton className={slideshowNextButtonClassName()} title="Témoignage suivant">
          <ArrowNarrowDownIcon aria-label="Témoignage suivant" className={slideshowNextButtonIconClassName()} />
        </SlideshowNextButton>
      ) : (
        <div className="border border-transparent p-7" />
      )}
    </Slideshow>
  );
};
