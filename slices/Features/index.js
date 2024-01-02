import { isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.FeatureSlice} FeatureSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureSlice>} FeatureProps
 * @param {FeatureProps}
 */
const Feature = ({ slice }) => {
  return (
    <div className='container-fluid pb-5 mb-5'>
      <div className='row '>
        <div className="features-container col-12 col-md-4">
          <div className="start">
            {isFilled.image(slice.primary.coffe_bar_feature_image) && (
              <PrismicNextImage
                field={slice.primary.coffe_bar_feature_image}
                style={{ objectFit: "cover" }}
                fill
              />
            )}
          </div>
          <div className="end">
            <div className='mb-3'>
              {isFilled.keyText(slice.primary.coffee_bar_headline) && (
                <h5>
                  {slice.primary.coffee_bar_headline}
                </h5>
              )}
              {isFilled.richText(slice.primary.coffee_bar_description) && (
                  <PrismicRichText field={slice.primary.coffee_bar_description} />
              )}
            </div>
            <PrismicNextLink 
              field={slice.primary.coffee_bar_link}
              rel="author"
              className="btn btn-primary">
              {slice.primary.coffee_bar_link_text}
            </PrismicNextLink>
          </div>
        </div>
        <div className="features-container col-12 col-md-4">
          <div className="start">
          {isFilled.image(slice.primary.subscription_image) && (
              <PrismicNextImage
                field={slice.primary.subscription_image}
                style={{ objectFit: "cover" }}
                fill
              />
            )}
          </div>
          <div className="end">
            <div className='mb-3'>
            {isFilled.keyText(slice.primary.subscription_headline) && (
                <h5>
                  {slice.primary.subscription_headline}
                </h5>
              )}
              {isFilled.richText(slice.primary.subscription_description) && (
                  <PrismicRichText field={slice.primary.subscription_description} />
              )}
            </div>
            <PrismicNextLink 
              field={slice.primary.subscription_link}
              rel="author"
              className="btn btn-primary">
              {slice.primary.subscription_link_text}
            </PrismicNextLink>
          </div>
        </div>
        <div className="features-container col-12 col-md-4">
          <div className="start">
          {isFilled.image(slice.primary.app_image) && (
              <PrismicNextImage
                field={slice.primary.app_image}
                style={{ objectFit: "cover" }}
                fill
              />
            )}
          </div>
          <div className="end">
            <div className='mb-3'>
            {isFilled.keyText(slice.primary.app_headline) && (
                <h5>
                  {slice.primary.app_headline}
                </h5>
              )}
              {isFilled.richText(slice.primary.app_description) && (
                  <PrismicRichText field={slice.primary.app_description} />
              )}
            </div>
            <PrismicNextLink 
              field={slice.primary.app_link}
              rel="author"
              className="btn btn-primary">
              {slice.primary.app_link_text}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
