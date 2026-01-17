import { ParagrafoEstilo } from "../../../Components/types/type_paragrafo/style";
import { AreaPerfilContainer, AreaPerfilInfo } from "./style";

export const AreaPerfil = () => {
  return (
    <>
      <AreaPerfilContainer>
        <AreaPerfilInfo>
          <div className="areaPerfilImg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhVVSMM4g2bdFx0S6Vw2jzXfTlT01XelwmA&s"
              alt="foto do jogador"
            />
          </div>
          <div className="areaPerfilInfoText">
            <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
              Cristiano Ronaldo
            </ParagrafoEstilo>
            <h3>Al-Nassr</h3>
          </div>
        </AreaPerfilInfo>

        <div className="areaCentral">
          <span>VS</span>
        </div>

        <AreaPerfilInfo>
          <div className="areaPerfilImg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhVVSMM4g2bdFx0S6Vw2jzXfTlT01XelwmA&s"
              alt="foto do jogador"
            />
          </div>
          <div className="areaPerfilInfoText">
            <ParagrafoEstilo $fonte={20} $cor={"#F3F4F6"}>
              Cristiano Ronaldo
            </ParagrafoEstilo>
            <h3>Al-Nassr</h3>
          </div>
        </AreaPerfilInfo>
      </AreaPerfilContainer>
    </>
  );
};
