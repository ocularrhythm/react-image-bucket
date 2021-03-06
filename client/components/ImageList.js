import React from "react";
import ImageDetail from "./ImageDetail";


const ImageList = (props) => {
  const validImages = props.images.filter((image) =>
    !image.is_album
  );

  const RenderedImages = validImages.map((image) =>
    <ImageDetail key={image.title} image={image} />
  );

  return (
    <ul className="list-group media-list">
      {RenderedImages}
    </ul>
  );
};

export default ImageList;