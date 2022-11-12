import axios from 'axios';
import { useContext, useState } from 'react';

/* import { useNavigate } from 'react-router-dom'; */
import { InputModal } from '../../componentsui/Input';
import { Parraf } from '../../componentsui/Parraf';
import { Div } from '../../componentsui/StyledDiv';
import GeneralContext from '../../Context/GeneralContext';
import { UserContext } from '../../pages/Students';

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

  /* const navigate = useNavigate(); */

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
    /* navigate('/dashboard/students'); */
  };

  return (
    <Div>
      <Div display="flex">
        <Div width="48%" margin="0 2% 0 0" display="flex" flexdir="column">
          <Parraf fontsize="11px">Nombre</Parraf>
          <InputModal
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          ></InputModal>
        </Div>
        <Div width="48%" margin="0 0 0 2%" display="flex" flexdir="column">
          <Parraf fontsize="11px">Apellidos</Parraf>
          <InputModal
            value={surname}
            onChange={(ev) => setSurname(ev.target.value)}
          ></InputModal>
        </Div>
      </Div>
      <Div display="flex" flexdir="column">
        <Parraf fontsize="11px">Nombre de usuario</Parraf>
        <InputModal
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        ></InputModal>
      </Div>
      <Div display="flex" flexdir="column">
        <Parraf fontsize="11px">Email</Parraf>
        <InputModal
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        ></InputModal>
      </Div>
      <Div display="flex" flexdir="column">
        <Parraf fontsize="11px">Móvil</Parraf>
        <InputModal
          width="50%"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        ></InputModal>
      </Div>
      <Div>
        <button
          onClick={(ev) => {
            modifyUser(ev);
          }}
        >
          guardar pero tiene que ser el otro boton que está fuera
        </button>
      </Div>
    </Div>
  );
};
