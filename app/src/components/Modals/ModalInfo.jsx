import 'reactjs-popup/dist/index.css';

import React from 'react';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

import info from '../../assets/info.png';
import { Img } from '../../componentsui/Img';
import { Div } from '../../componentsui/StyledDiv';
import { Button } from '../Button';
import { CardCourses } from './CardCourses';
import { CardEdition } from './CardEdition';
import { CardInfo } from './CardInfo';

const ModalDivStyled = styled.div`
  /* height: 611px; */
  border: none;
`;

export const ImgModalInfo = () => {
  const [minipage, setMiniPage] = useState('profile');

  return (
    <Popup
      contentStyle={{
        width: '480px',
        border: 'auto',
        borderRadius: '5px',
        padding: '1rem',
      }}
      trigger={<Img src={info} alt="info logo" cursor="pointer" />}
      modal
      nested
    >
      {(close) => (
        <ModalDivStyled>
          <Div display="flex" justify="space-between" flexwrap="wrap">
            <Div>
              <Button underlined onClick={() => setMiniPage('profile')}>
                Perfil
              </Button>
              <Button underlined onClick={() => setMiniPage('courses')}>
                Cursos
              </Button>
            </Div>
            <Div>
              {minipage == 'profile' ? (
                <Button black onClick={() => setMiniPage('edition')}>
                  Editar estudiante
                </Button>
              ) : minipage == 'edition' ? (
                <Div
                  display="flex"
                  flexwrap="wrap"
                  justify="space-between"
                  width="14.5rem"
                >
                  <Button white onClick={() => setMiniPage('profile')}>
                    Cancelar Edición
                  </Button>
                  <Button
                    black
                    onClick={() =>
                      console.log('ya se guardó y cerrar y sacar estudiantes')
                    }
                  >
                    Guardar
                  </Button>
                </Div>
              ) : null}
            </Div>
          </Div>
          {minipage == 'profile' ? (
            <CardInfo />
          ) : minipage == 'edition' ? (
            <CardEdition />
          ) : minipage == 'courses' ? (
            <CardCourses />
          ) : null}
          <Div display="flex" justify="flex-end">
            <Button
              white
              onClick={() => {
                setMiniPage('profile'), close();
              }}
            >
              Cerrar
            </Button>
          </Div>
        </ModalDivStyled>
      )}
    </Popup>
  );
};
