import * as React from 'react'
import { Helmet } from 'react-helmet'
export interface HelmetHeaderProps {}

const HelmetHeader: React.FC<HelmetHeaderProps> = () => {
  return (
    <Helmet>
      <title>This is Felix Sample Site</title>
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
    </Helmet>
  )
}

export default HelmetHeader
