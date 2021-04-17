import * as React from 'react'
import ImageSlider from '../components/ImageSlider'
import Layout from '../components/Layout'
export interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  return (
    <Layout>
      <ImageSlider>
        <ImageSlider.Item>1</ImageSlider.Item>
        <ImageSlider.Item>2</ImageSlider.Item>
        <ImageSlider.Item>3</ImageSlider.Item>
        <ImageSlider.Item>4</ImageSlider.Item>
      </ImageSlider>
    </Layout>
  )
}

export default Index
