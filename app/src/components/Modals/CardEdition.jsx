import axios from 'axios';
import { useContext, useState } from 'react';

import { InputModal } from '../../componentsui/Input';
import { Parraf } from '../../componentsui/Parraf';
import { Div } from '../../componentsui/StyledDiv';
import GeneralContext from '../../Context/GeneralContext';
import { UserContext } from '../../pages/Students';
import { Button } from '../Button';

const saveModifiedUser = async (endpoint, item) => {
  axios({
    method: 'put',
    url: `http://localhost:8080/${endpoint}/${item.id}`,
    data: item,
  });
};

export const CardEdition = () => {
  const item = useContext(UserContext);
  const [name, setName] = useState(item.name);
  const [surname, setSurname] = useState(item.surname);
  const [username, setUsername] = useState(item.username);
  const [email, setEmail] = useState(item.email);
  const [phone, setPhone] = useState(item.phone);
  const { rechargeStudents, setRechargeStudents } = useContext(GeneralContext);

  const modifyUser = (ev) => {
    ev.preventDefault();
    const student = {
      ...item,
      name: name,
      surname: surname,
      username: username,
      email: email,
      phone: phone,
    };
    saveModifiedUser('students', student);
    //setemos el valor que tiene setRecharge en su contrario.
    setRechargeStudents(!rechargeStudents);
  };

  return (
    <Div
      padding="3rem 0 11rem 0"
      display="flex"
      justify="center"
      flexdir="column"
      align="center"
    >
      <Div display="flex" padding="0 0 1rem 0" width="382px">
        <Div width="49%" margin="0 1% 0 0" display="flex" flexdir="column">
          <Parraf fontsize="11px" padding="0 0 0.4rem 0">
            Nombre
          </Parraf>
          <InputModal
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          ></InputModal>
        </Div>
        <Div width="49%" margin="0 0 0 1%" display="flex" flexdir="column">
          <Parraf fontsize="11px" padding="0 0 0.4rem 0">
            Apellidos
          </Parraf>
          <InputModal
            value={surname}
            onChange={(ev) => setSurname(ev.target.value)}
          ></InputModal>
        </Div>
      </Div>
      <Div display="flex" flexdir="column" padding="0 0 1rem 0" width="382px">
        <Parraf fontsize="11px" padding="0 0 0.4rem 0">
          Nombre de usuario
        </Parraf>
        <InputModal
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        ></InputModal>
      </Div>
      <Div display="flex" flexdir="column" padding="0 0 1rem 0" width="382px">
        <Parraf fontsize="11px" padding="0 0 0.4rem 0">
          Email
        </Parraf>
        <InputModal
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        ></InputModal>
      </Div>
      <Div display="flex" flexdir="column" padding="0 0 1rem 0" width="382px">
        <Parraf fontsize="11px" padding="0 0 0.4rem 0">
          Móvil
        </Parraf>
        <InputModal
          width="50%"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        ></InputModal>
      </Div>
      <Div width="382px">
        <Button
          black
          onClick={(ev) => {
            modifyUser(ev);
          }}
        >
          Falso guardar
        </Button>
      </Div>
    </Div>
  );
};
