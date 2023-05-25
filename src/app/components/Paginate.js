import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import styled from "styled-components";

const PaginateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  @media (min-width: 769px) {
    grid-column: 3 / span 1;
    grid-row: 4 / span 1;
  }
`;

function CardPaginate() {
  return (
    <PaginateContainer>
      <ArrowLeftCircleIcon className="flex flex-grow stroke-[34px] h-[34px] fill-[#C89B3C]" />
      <h1 className="text-[#C89B3C] text-[20px]">1 / 5</h1>
      <ArrowRightCircleIcon className="flex flex-grow stroke-[34px] h-[34px] fill-[#C89B3C]" />
    </PaginateContainer>
  );
}

export default CardPaginate;
