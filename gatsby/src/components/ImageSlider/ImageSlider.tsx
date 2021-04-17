import * as React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export interface ImageSliderProps {}
const Item: React.FC = (props) => {
  return <div>{props.children}</div>
}
interface IImageSlider extends React.FC<ImageSliderProps> {
  Item: React.FC
}
const ImageSlider: IImageSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return <Slider {...settings}>{props.children}</Slider>
}
ImageSlider.Item = Item
export default ImageSlider
