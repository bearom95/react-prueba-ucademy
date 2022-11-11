import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import UcademyLogo from '../assets/logo_ucademy.svg';
import { Anchor } from '../componentsui/Anchor';
import { Img } from '../componentsui/Img';
/* import { Input } from '../componentsui/Input'; */
import { Label } from '../componentsui/Label';
import { Parraf } from '../componentsui/Parraf';
import { Div } from '../componentsui/StyledDiv';
import { Button } from './Button';
/* const LoginStyledDiv = styled.div`
  button {
    all: unset;
  }

`; */

export const StyledForm = styled.form`
  height: 17.7rem;
  padding-top: 2rem;

  .required:before {
    content: '*';
    color: red;
  }

  .nameinput {
    all: unset;
    background-color: var(--white);
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    height: 2.5rem;
  }
  .passinput {
    all: unset;
    border: none;
    border-radius: 8px;
    display: flex;
    width: 376px;
    height: 2.5rem;
  }

  .checkbox {
    outline: none;
    cursor: pointer;
    border-radius: none;
    width: 16px;
    height: 16px;
  }
  .checkbox:checked {
    accent-color: grey;
  }

  .eye {
    all: unset;
    height: 1rem;
    width: 1rem;
    margin: 5px;
  }
`;

export const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = (ev) => {
    ev.preventDefault();
    setPasswordShown(passwordShown ? false : true);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onFormSubmit = (values) => {
    console.log('el submit funciona y estos son los values:', values);
    navigate('/dashboard/students');
  };

  return (
    <Div display="flex" flexwrap="wrap" flexdir="column" width="25rem" height="23rem">
      <>
        <Img src={UcademyLogo} alt="logo ucademy" />
      </>
      <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
        <Label
          htmlFor="username"
          className="required"
          display="flex"
          flexwrap="wrap"
          fontsize="0.8rem"
          fontweight="500"
          height="5rem"
        >
          Nombre de usuario
          <input
            className="nameinput"
            {...register('username', {
              required: true,
              minLength: 2,
              pattern: /^\S*$/,
            })}
            id="username"
            name="username"
            type="text"
          />
          {errors.username ? (
            <Parraf className="error" fontcolor="red">
              This field is required and must have at least 2 characters
            </Parraf>
          ) : null}
        </Label>
        <Label
          htmlFor="password"
          className="required"
          display="flex"
          flexwrap="wrap"
          fontsize="0.8rem"
          fontweight="500"
          height="5rem"
        >
          Contraseña
          <Div
            className="inputwrapper"
            display="flex"
            flexwrap="wrap"
            justify="space-between"
            borderradius="8px"
            border="1px solid #DBDBDB;"
            backgr="white"
            height="2.5rem"
          >
            <input
              {...register('password', {
                required: true,
                minLength: 6,
                pattern: /^\S*$/,
                validate: {
                  format: (password) => {
                    return (
                      /[A-Z]/g.test(password) &&
                      /[a-z]/g.test(password) &&
                      /[0-9]/g.test(password)
                    );
                  },
                },
              })}
              id="password"
              name="password"
              className="passinput"
              type={passwordShown ? 'text' : 'password'}
            />
            <Button
              type="button"
              className="eye"
              eye
              onClick={(ev) => togglePasswordVisiblity(ev)}
            >
              {!passwordShown ? (
                <AiOutlineEyeInvisible cursor={'pointer'} />
              ) : (
                <AiOutlineEye cursor={'pointer'} />
              )}
            </Button>
          </Div>
          {errors.password ? (
            <Parraf className="error" fontcolor="red">
              {/* si el tipo de errores es de formato */}
              {errors.password.type === 'format'
                ? 'Password must contain at least an upper case, a lower case and a number.'
                : 'This field is required and must have at least 6 characters'}
            </Parraf>
          ) : null}
        </Label>
        <Div
          display="flex"
          flexwrap="wrap"
          justify="space-between"
          height="3rem"
          align="center"
        >
          <Label
            fontsize="0.8rem"
            htmlFor="checkbox"
            align="center"
            display="flex"
            flexwrap="wrap"
            gap="0.5rem"
          >
            <input className="checkbox" type="checkbox" value="first_checkbox" />
            Remember me
          </Label>
          <Anchor href="...." color="grey" fontsize="12.8px">
            Olvidé mi contraseña
          </Anchor>
        </Div>
        <Div
          display="flex"
          flexwrap="wrap"
          justify="center"
          height="2.65rem"
          align="flex-end"
        >
          <Button type="submit" black>
            Iniciar sesión
          </Button>
        </Div>
      </StyledForm>
    </Div>
  );
};
