import * as React from 'react'
import styledComponentsCjs from 'styled-components'
export interface FooterProps {}

const FooterBase = styledComponentsCjs.footer`

`
const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterBase>
      <ul>Num: 12345678</ul>
    </FooterBase>
  )
}

export default Footer
