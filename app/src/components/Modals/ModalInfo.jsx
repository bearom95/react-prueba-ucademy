import 'reactjs-popup/dist/index.css';

import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

import calendar from '../../assets/calendar.png';
import envelopeblack from '../../assets/envelopeblack.png';
import info from '../../assets/info.png';
import mobile from '../../assets/mobile-notch.png';
import defaultimage from '../../assets/profiledefault.png';
import personilla from '../../assets/user.png';
import { Img } from '../../componentsui/Img';
import { Parraf } from '../../componentsui/Parraf';
import { Div } from '../../componentsui/StyledDiv';
import { Button } from '../Button';

const ModalDivStyled = styled.div`
  /* height: 611px; */
  border: none;
`;

//quitar los onclick clse de los botones que no corresponda

export const ImgModalInfo = ({ item }) => (
  <Popup
    contentStyle={{
      width: '480px',
      border: 'auto',
      'border-radius': '5px',
      padding: '1rem',
    }}
    trigger={<Img src={info} alt="info logo" />}
    modal
    nested
  >
    {(close) => (
      <ModalDivStyled>
        <Div display="flex" justify="space-between" flexwrap="wrap">
          <Div>
            <Button underlined onClick={close}>
              Perfil
            </Button>
            <Button underlined onClick={close}>
              Cursos
            </Button>
          </Div>
          <Button black onClick={close}>
            Editar estudiante
          </Button>
        </Div>
        <Div display="flex" flexdir="column" justify="center" align="center" width="100%">
          <Img src={defaultimage} alt="imagen usuario" height="138px" width="138px" />
          <Div width="263px" padding="2rem 0 0 0">
            <Div
              display="flex"
              width="100%"
              borderbottom="1px  solid #CDCDCD"
              padding="0.5rem 0"
            >
              <Div>
                <Img src={personilla} alt="user icon" padding="0 1rem" />
              </Div>
              <Div width="100%">
                <Div borderbottom="1px  solid #CDCDCD" width="100%">
                  <Parraf fontsize="11px" fontweight="600" lineheight="11px">
                    Nombre y apellidos
                  </Parraf>
                  <Parraf fontsize="14px">
                    {item.name} {item.surname}
                  </Parraf>
                </Div>
                <Div>
                  <Parraf fontsize="11px" fontweight="600" lineheight="11px">
                    Nombre de usuario
                  </Parraf>
                  <Parraf fontsize="14px">{item.username}</Parraf>
                </Div>
              </Div>
            </Div>
            <Div
              display="flex"
              width="100%"
              borderbottom="1px  solid #CDCDCD"
              padding="0.5rem 0"
            >
              <Div>
                <Img src={envelopeblack} alt="user icon" padding="0 1rem" />
              </Div>
              <Div>
                <Parraf fontsize="11px" fontweight="600" lineheight="11px">
                  Email
                </Parraf>
                <Parraf fontsize="14px">{item.email}</Parraf>
              </Div>
            </Div>
            <Div display="flex" padding="0.5rem 0" borderbottom="1px  solid #CDCDCD">
              <Div>
                <Img src={mobile} alt="user icon" padding="0 1rem" />
              </Div>
              <Div>
                <Parraf fontsize="11px" fontweight="600" lineheight="11px">
                  Móvil
                </Parraf>
                <Parraf fontsize="14px">{item.phone}</Parraf>
              </Div>
            </Div>
            <Div display="flex" padding="0.5rem 0">
              <Div>
                <Img src={calendar} alt="user icon" padding="0 1rem" />
              </Div>
              <Div>
                <Parraf fontsize="11px" fontweight="600" lineheight="11px">
                  Fecha de inscripción
                </Parraf>
                <Parraf fontsize="14px">{item.phone}</Parraf>
              </Div>
            </Div>
          </Div>
        </Div>
        <Div display="flex" justify="flex-end">
          <Button white onClick={close}>
            Cerrar
          </Button>
        </Div>
      </ModalDivStyled>
    )}
  </Popup>
);
