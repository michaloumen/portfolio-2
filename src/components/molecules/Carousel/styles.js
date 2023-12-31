import styled from 'styled-components';
import { sizeRem, sizePx } from '../../../styles';

export const Wrapper = styled.div`
  max-width: ${sizeRem.maxWidth};
  svg {
    width: ${sizePx.icon150};
    height: ${sizePx.icon100};

    @media (max-width: 700px) { 
        width: ${sizePx.icon80};
        height: ${sizePx.icon80};
    }
  }
`;

export const CarouselWrapper = styled.div`
  .button-next, .button-prev {
    position: absolute;
    top: 60%;
    transform: translate(0, -50%);
    z-index: 1;
  }
  .button-prev {
    left: -12px;
  }
  .button-next {
    right: -18px;
  }
  .slick-track {
    margin-left: -15px;
  }
  .slick-slide > div {
    margin-left: 15px;
  }
  .slick-list {
    margin: 0 3px;
  }
`;

