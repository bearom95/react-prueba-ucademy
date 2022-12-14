import { useContext } from 'react';

import calendar from '../../assets/calendar.png';
import envelopeblack from '../../assets/envelopeblack.png';
import mobile from '../../assets/mobile-notch.png';
import defaultimage from '../../assets/profiledefault.png';
import personilla from '../../assets/user.png';
import { Img } from '../../componentsui/Img';
import { Parraf } from '../../componentsui/Parraf';
import { Div } from '../../componentsui/StyledDiv';
import { UserContext } from '../../pages/Students';

export const CardInfo = () => {
  const item = useContext(UserContext);
  return (
    <Div>
      <Div
        display="flex"
        flexdir="column"
        justify="center"
        align="center"
        width="100%"
        margin="1.5rem 0"
      >
        <Img src={defaultimage} alt="imagen usuario" height="138px" width="138px" />
        <Div width="263px" padding="2rem 0 0 0">
          <Div
            display="flex"
            width="100%"
            borderbottom="1px  solid #CDCDCD"
            padding="0.5rem 0"
          >
            <Div>
              <Img src={personilla} alt="user icon" padding="0 1.5rem" />
            </Div>
            <Div width="100%">
              <Div borderbottom="1px  solid #CDCDCD" width="100%" padding="0 0 0.8rem 0">
                <Parraf
                  fontsize="11px"
                  fontweight="600"
                  lineheight="11px"
                  margin="0 0 0.4rem 0"
                >
                  Nombre y apellidos
                </Parraf>
                <Parraf fontsize="14px">
                  {item.name} {item.surname}
                </Parraf>
              </Div>
              <Div margin="0.8rem 0 0 0">
                <Parraf
                  fontsize="11px"
                  fontweight="600"
                  lineheight="11px"
                  margin="0 0 0.4rem 0"
                >
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
            padding="0.8rem 0"
          >
            <Div>
              <Img src={envelopeblack} alt="user icon" padding="0 1.5rem" />
            </Div>
            <Div>
              <Parraf
                fontsize="11px"
                fontweight="600"
                lineheight="11px"
                margin="0 0 0.4rem 0"
              >
                Email
              </Parraf>
              <Parraf fontsize="14px">{item.email}</Parraf>
            </Div>
          </Div>
          <Div display="flex" padding="0.8rem 0" borderbottom="1px  solid #CDCDCD">
            <Div>
              <Img src={mobile} alt="user icon" padding="0 1.5rem" />
            </Div>
            <Div>
              <Parraf
                fontsize="11px"
                fontweight="600"
                lineheight="11px"
                margin="0 0 0.4rem 0"
              >
                M??vil
              </Parraf>
              <Parraf fontsize="14px">{item.phone}</Parraf>
            </Div>
          </Div>
          <Div display="flex" padding="0.8rem 0">
            <Div>
              <Img src={calendar} alt="user icon" padding="0 1.5rem" />
            </Div>
            <Div>
              <Parraf
                fontsize="11px"
                fontweight="600"
                lineheight="11px"
                margin="0 0 0.4rem 0"
              >
                Fecha de inscripci??n
              </Parraf>
              <Parraf fontsize="14px">{item.date}</Parraf>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
