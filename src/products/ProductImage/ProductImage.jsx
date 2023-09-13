import { number, string } from "prop-types";

export default function ProductImage({ imageUrl, name, width, height }) {
  return <img src={imageUrl} alt={name} width={width} height={height} />;
}

ProductImage.propTypes = {
  imageUrl: string,
  name: string,
  width: number,
  height: number,
};
