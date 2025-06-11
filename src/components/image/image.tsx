import { ImageComponent } from "./image.style";
import { ImageProps } from "./image.types";

const Image = ({ width, height, src }: ImageProps) => {
    return (
        <ImageComponent
            src={src}
            width={width}
            height={height}
        />
    )
};

export default Image;
