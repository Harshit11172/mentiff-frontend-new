import React from 'react';
import { base_path } from '../../environment';

// interface Image {
//   className?: string;
//   src: string;
//   alt?: string;
//   height?: number;
//   width?: number;
//   id?:string;
// }

const ImageWithBasePath = (props) => {
  // Combine the base path and the provided src to create the full image source URL
  const fullSrc = `${base_path}${props.src}`;
  return (
    <img
      className={props.className}
      src={fullSrc}
      height={props.height} 
      alt={props.alt}
      width={props.width}
      id={props.id}
    />
  );
};

export default ImageWithBasePath;
