import React from 'react';

import { 
    Container, 
    Details, 
    Img, 
    Title,
    Description 
} from './styles';

import imgBanner from '../../images/13.png';

export default function Banner() {
    return (
      <Container>
        <Details>
          <Title>Cobre um amigo</Title>
          <Description>
            Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças.    
          </Description>
        </Details> 
        <Img source={imgBanner} />
      </Container>
    );
}