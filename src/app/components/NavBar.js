import Image from "next/image";
import styled from "styled-components";
import { BellIcon, Cog8ToothIcon } from "@heroicons/react/24/solid";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media (min-width: 769px) {
    grid-column: 1 / span 5;
  }
`;

const PageItem = styled.li`
  width: 115px;
  height: 115px;
  display: grid;
  place-items: center;
  background: ${(props) =>
    props.$selected
      ? "linear-gradient(180deg, #231F20 0%, rgba(34, 34, 34, 0) 100%);"
      : "white"};
`;

function NavBar() {
  return (
    <NavContainer className="w-full border-b border-b-[#3C3C41]">
      <a href="" className=" relative grid place-items-center">
        <Image src="/marvel_logo.svg" width={150} height={40} />
      </a>

      <ul className="flex grow flex-row ">
        <PageItem>
          <a href="" className="text-sm text-[#F0E6D2] ">
            HOME
          </a>
        </PageItem>
        <PageItem>
          <a href="" className="text-sm text-[#F0E6D2]">
            PERSONAJES
          </a>
        </PageItem>
      </ul>
      <a href="">
        <BellIcon className="stroke-[17px] h-[19px] fill-[#C89B3C]" />{" "}
      </a>
      <a href="">
        <Cog8ToothIcon className="stroke-[17px] h-[19px] fill-[#F0E6D2]" />
      </a>
    </NavContainer>
  );
}

export default NavBar;
