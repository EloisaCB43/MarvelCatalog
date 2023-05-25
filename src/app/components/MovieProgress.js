import styled from "styled-components";

const BarContainer = styled.div`
  width: 460px;
  height: 30px;
  padding: 5px;
  background: #1e2328;
  box-shadow: 0px 0px 4px #ffa942, 0px 0px 4px rgba(255, 169, 66, 0.25),
    0px 0px 7px rgba(255, 169, 66, 0.25);
  position: relative;
  transform: skew(-15deg);
`;
const CellsSeparation = styled.div`
  width: 442px;
  height: 20px;
  border: 1px solid black;
  border-left: 0px;
  background: repeating-linear-gradient(90deg, black 0 1px, transparent 0 10%);
  position: absolute;
`;

const Progress = styled.div`
  width: 442px;
  height: 20px;
  background: linear-gradient(
        90deg,
        transparent ${(props) => props.value}%,
        white ${(props) => props.value}%
      )
      content-box,
    linear-gradient(
        180deg,
        #31969d 0%,
        #65e6f4 31.77%,
        #24aebd 66.15%,
        #1299a8 98.96%
      )
      padding-box;
`;

function MovieProgress() {
  return (
    <div className="w-[510px] h-[193px] p-[23px] rounded flex flex-col items-center justify-between border border-[#42331A] bg-[#111111] ">
      <h2 className="text-[#F0E6D2] text-xl ">
        PROGRESO DE PELICULAS PRODUCIDAS
      </h2>
      <p className="flex self-end text-[#C89B3C] text-[11px] leading-[0px]">
        xx Películas
      </p>
      <p className="mb-1px flex self-end text-[#C89B3C] text-[11px] leading-[0px]">
        Meta de Producción
      </p>
      <BarContainer>
        <CellsSeparation />
        <Progress value={40} />
      </BarContainer>
      <div className="w-[40%] flex self-start justify-end">
        <p className="w-[60px] text-[#1DA5B4] text-[11px] leading-none ">
          xx Películas Producidas
        </p>
      </div>
    </div>
  );
}

export default MovieProgress;
