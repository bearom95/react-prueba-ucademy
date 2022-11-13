import { Parraf } from '../../componentsui/Parraf';
import { ProgressBar } from '../../componentsui/ProgressBar';
import { Div } from '../../componentsui/StyledDiv';

//componetizar el div y pasarle por props value, max y width

export const CardCourses = () => {
  return (
    <Div margin="3.1rem 0">
      <Div display="flex" flexdir="column" justify="center" align="center" width="100%">
        <Div margin="0 0 1rem 0">
          <Parraf fontweight="600" fontsize="15px">
            Curso 1
          </Parraf>
          <Div display="flex">
            <ProgressBar value="50" max="100"></ProgressBar>
            <Parraf fontsize="13px" fontweight="500" padding="0.6rem 0 0.6rem 0">
              50%
            </Parraf>
          </Div>
          <Parraf fontsize="10px" fontcolor="#767676">
            Fecha de inscripción: 01-02-2021
          </Parraf>
        </Div>
        <Div margin="0 0 1rem 0">
          <Parraf fontweight="600" fontsize="15px">
            Curso 1
          </Parraf>
          <Div display="flex">
            <ProgressBar value="50" max="100"></ProgressBar>
            <Parraf fontsize="13px" fontweight="500" padding="0.6rem 0 0.6rem 0">
              50%
            </Parraf>
          </Div>
          <Parraf fontsize="10px" fontcolor="#767676">
            Fecha de inscripción: 01-02-2021
          </Parraf>
        </Div>
        <Div margin="0 0 1rem 0">
          <Parraf fontweight="600" fontsize="15px">
            Curso 1
          </Parraf>
          <Div display="flex">
            <ProgressBar value="50" max="100"></ProgressBar>
            <Parraf fontsize="13px" fontweight="500" padding="0.6rem 0 0.6rem 0">
              50%
            </Parraf>
          </Div>
          <Parraf fontsize="10px" fontcolor="#767676">
            Fecha de inscripción: 01-02-2021
          </Parraf>
        </Div>
        <Div margin="0 0 1rem 0">
          <Parraf fontweight="600" fontsize="15px">
            Curso 1
          </Parraf>
          <Div display="flex">
            <ProgressBar value="50" max="100"></ProgressBar>
            <Parraf fontsize="13px" fontweight="500" padding="0.6rem 0 0.6rem 0">
              50%
            </Parraf>
          </Div>
          <Parraf fontsize="10px" fontcolor="#767676">
            Fecha de inscripción: 01-02-2021
          </Parraf>
        </Div>
        <Div margin="0 0 1rem 0">
          <Parraf fontweight="600" fontsize="15px">
            Curso 1
          </Parraf>
          <Div display="flex">
            <ProgressBar value="50" max="100"></ProgressBar>
            <Parraf fontsize="13px" fontweight="500" padding="0.6rem 0 0.6rem 0">
              50%
            </Parraf>
          </Div>
          <Parraf fontsize="10px" fontcolor="#767676">
            Fecha de inscripción: 01-02-2021
          </Parraf>
        </Div>
      </Div>
    </Div>
  );
};
