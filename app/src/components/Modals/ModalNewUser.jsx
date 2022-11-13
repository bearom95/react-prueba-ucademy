import 'reactjs-popup/dist/index.css';

import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { v4 as uuidv4 } from 'uuid';

import plus from '../../assets/plus.png';
import { Img } from '../../componentsui/Img';
import { InputModal } from '../../componentsui/Input';
import { Parraf } from '../../componentsui/Parraf';
import { Div } from '../../componentsui/StyledDiv';
import GeneralContext from '../../Context/GeneralContext';
import { Button } from '../Button';

const postUser = async (endpoint, item) => {
  axios({
    method: 'post',
    url: `http://localhost:8080/${endpoint}`,
    data: item,
  });
};

export const ImgModalNew = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const { rechargeStudents, setRechargeStudents } = useContext(GeneralContext);
  const today = new Date();
  const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  const navigate = useNavigate();

  const createUser = (ev) => {
    ev.preventDefault();
    const item = {
      id: uuidv4(),
      name: name,
      surname: surname,
      username: username,
      email: email,
      phone: phone,
      date: date,
    };
    postUser('students', item);
    //setemos el valor que tiene setRecharge en su contrario.
    setRechargeStudents(!rechargeStudents);
    navigate('/dashboard/students');
  };

  return (
    <Popup
      contentStyle={{
        width: '480px',
        border: 'auto',
        borderRadius: '5px',
        padding: '1rem',
      }}
      trigger={<Img src={plus} alt="plus logo" />}
      modal
      nested
    >
      {(close) => (
        <Div>
          <Div display="flex" justify="flex-end">
            <Button
              black
              onClick={(ev) => {
                createUser(ev), close();
              }}
            >
              Guardar
            </Button>
          </Div>
          <Div padding="3rem 0 11rem 0" display="flex" flexdir="column" align="center">
            <Div display="flex" padding="0 0 1rem 0" width="382px">
              <Div width="49%" margin="0 1% 0 0" display="flex" flexdir="column">
                <Parraf fontsize="11px" padding="0 0 0.4rem 0">
                  Nombre
                </Parraf>
                <InputModal onChange={(ev) => setName(ev.target.value)}></InputModal>
              </Div>
              <Div width="49%" margin="0 0 0 1%" display="flex" flexdir="column">
                <Parraf fontsize="11px" padding="0 0 0.4rem 0">
                  Apellidos
                </Parraf>
                <InputModal onChange={(ev) => setSurname(ev.target.value)}></InputModal>
              </Div>
            </Div>
            <Div display="flex" flexdir="column" padding="0 0 1rem 0" width="382px">
              <Parraf fontsize="11px" padding="0 0 0.4rem 0">
                Nombre de usuario
              </Parraf>
              <InputModal onChange={(ev) => setUsername(ev.target.value)}></InputModal>
            </Div>
            <Div display="flex" flexdir="column" padding="0 0 1rem 0" width="382px">
              <Parraf fontsize="11px" padding="0 0 0.4rem 0">
                Email
              </Parraf>
              <InputModal onChange={(ev) => setEmail(ev.target.value)}></InputModal>
            </Div>
            <Div display="flex" flexdir="column" padding="0 0 1rem 0" width="382px">
              <Parraf fontsize="11px" padding="0 0 0.4rem 0">
                Móvil
              </Parraf>
              <InputModal
                width="50%"
                onChange={(ev) => setPhone(ev.target.value)}
              ></InputModal>
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
};
