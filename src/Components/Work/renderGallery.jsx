import React, { Fragment } from "react";
import Lightbox from "react-image-lightbox";
const RenderGallery = ({ openGallery, images, photoIndex, gallery }) => (
  <Fragment>
    {openGallery && (
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => gallery({ openGallery: false })}
        onMovePrevRequest={() =>
          gallery({
            photoIndex: (photoIndex + images.length - 1) % images.length
          })
        }
        onMoveNextRequest={() =>
          gallery({
            photoIndex: (photoIndex + 1) % images.length
          })
        }
      />
    )}
  </Fragment>
);

export default RenderGallery;
