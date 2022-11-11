import 'reactjs-popup/dist/index.css';

import React from 'react';
import Popup from 'reactjs-popup';

import plus from '../../assets/plus.png';
import { Img } from '../../componentsui/Img';
import { InputModal } from '../../componentsui/Input';
import { Parraf } from '../../componentsui/Parraf';
import { Div } from '../../componentsui/StyledDiv';
import { Button } from '../Button';

export const ImgModalNew = () => (
  <Popup
    contentStyle={{
      width: '480px',
      border: 'auto',
      'border-radius': '5px',
      padding: '1rem',
    }}
    trigger={<Img src={plus} alt="plus logo" />}
    modal
    nested
  >
    {(close) => (
      <Div>
        <Div>
          <Div className="nombreyapellidos" display="flex">
            <Div width="48%" margin="0 2% 0 0" display="flex" flexdir="column">
              <Parraf fontsize="11px">Nombre</Parraf>
              <InputModal></InputModal>
            </Div>
            <Div width="48%" margin="0 0 0 2%" display="flex" flexdir="column">
              <Parraf fontsize="11px">Apellidos</Parraf>
              <InputModal></InputModal>
            </Div>
          </Div>
          <Div className="username" display="flex" flexdir="column">
            <Parraf fontsize="11px">Nombre de usuario</Parraf>
            <InputModal></InputModal>
          </Div>
          <Div className="email" display="flex" flexdir="column">
            <Parraf fontsize="11px">Email</Parraf>
            <InputModal></InputModal>
          </Div>
          <Div className="móvil" display="flex" flexdir="column">
            <Parraf fontsize="11px">Móvil</Parraf>
            <InputModal width="50%"></InputModal>
          </Div>
        </Div>
        <Div display="flex" justify="flex-end">
          <Button white onClick={close}>
            Cerrar
          </Button>
        </Div>
      </Div>
    )}
  </Popup>
);
