import { isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 *
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 *
 * @param {HeroProps}
 */

const Hero = ({ slice }) => {
  console.log(slice.items)
  return (


    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded es-fullpage-hero"
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className="hero-container">
            <div className="start">
              {isFilled.keyText(slice.primary.eyebrowHeadline) && (
                <p className="xl">
                  {slice.primary.eyebrowHeadline}
                </p>
              )}
              {isFilled.richText(slice.primary.title) && (
                  <PrismicRichText field={slice.primary.title} />
              )}
              {isFilled.richText(slice.primary.description) && (
                  <PrismicRichText field={slice.primary.description} />
              )}
              {slice.items.map(item => (
              <>
              <button className="btn btn-primary btn-lg xs">{item.coffee_nodes.uid}</button>

              </>
              ))}
              
            </div>
            <div className="end">
              {isFilled.image(slice.primary.image) && (
                <PrismicNextImage
                  field={slice.primary.image}
                  style={{ objectFit: "cover" }}
                  fill
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
