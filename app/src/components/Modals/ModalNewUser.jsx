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

  /* const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`; */

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
      date: 123,
    };
    postUser('students', item);
    //setemos el valor que tiene setRecharge en su contrario.
    setRechargeStudents(!rechargeStudents);
    navigate('/dashboard/students');
  };
  //tengo que dar al boton de guardar la funcion de create y post que viene dentro.
  //Crear contexto y darselo al botón que está en el Modal básico.
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
          <Div>
            <Button
              black
              onClick={(ev) => {
                createUser(ev), close();
              }}
            >
              Guardar
            </Button>
          </Div>
          <Div>
            <Div display="flex">
              <Div width="48%" margin="0 2% 0 0" display="flex" flexdir="column">
                <Parraf fontsize="11px">Nombre</Parraf>
                <InputModal onChange={(ev) => setName(ev.target.value)}></InputModal>
              </Div>
              <Div width="48%" margin="0 0 0 2%" display="flex" flexdir="column">
                <Parraf fontsize="11px">Apellidos</Parraf>
                <InputModal onChange={(ev) => setSurname(ev.target.value)}></InputModal>
              </Div>
            </Div>
            <Div display="flex" flexdir="column">
              <Parraf fontsize="11px">Nombre de usuario</Parraf>
              <InputModal onChange={(ev) => setUsername(ev.target.value)}></InputModal>
            </Div>
            <Div display="flex" flexdir="column">
              <Parraf fontsize="11px">Email</Parraf>
              <InputModal onChange={(ev) => setEmail(ev.target.value)}></InputModal>
            </Div>
            <Div display="flex" flexdir="column">
              <Parraf fontsize="11px">Móvil</Parraf>
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

//boton cerrar no necesita el navigate, es el de Guardar, porque al
//cerrar no volvemos a renderizar los estudiantes, son los que eran
//se entiende que no se ha guardado ningun cambio y no se ha cambiado el json

/* onClick={() => {
  close(), navigate('/dashboard/students');
}} */
