import styled from 'styled-components';

import avatar from '../assets/Avatar.png';
import bell from '../assets/bell.png';
import envelope from '../assets/envelope.png';
import line from '../assets/LineAvatar.png';
import lupa from '../assets/lupa.png';
import { Img } from '../componentsui/Img';
import { Input } from '../componentsui/Input';
import { Div } from '../componentsui/StyledDiv';

const HeaderStyled = styled.header`
  width: 100vw;
  background-color: #262d34;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <Div display="flex" flexwrap="wrap">
        <Img src="../../public/Logo.png" alt="ucademy logo white" display="block" />
        <Div align="center" display="flex">
          <Img src={lupa} alt="lupa icon" />
          <Input
            type="text"
            all="unset"
            placeholder="Buscar"
            border="none"
            backgr="inherit"
          />
        </Div>
      </Div>
      <Div align="center" display="flex" padding="1rem">
        <Div>
          <Img src={envelope} alt="envelope icon" padding="1rem" />
          <Img src={bell} alt="bell icon" padding="1rem" />
        </Div>
        <Img src={line} alt="line" padding="0rem 1rem" />
        <Img src={avatar} alt="avatar icon" padding="0rem 1rem" />
      </Div>
    </HeaderStyled>
  );
};
