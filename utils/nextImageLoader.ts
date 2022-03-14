interface NextImageLoaderProps {
  src: string;
  width?: number;
  quality?: number;
}
const nextImageLoader = ({ src }: NextImageLoaderProps) => src;
export default nextImageLoader;
