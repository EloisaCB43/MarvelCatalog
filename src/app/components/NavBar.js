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
      ? "linear-gradient(180deg, rgba(34, 34, 34, 0) 0%, #231F20 100%), url(/navbar_selected_page.png) no-repeat top"
      : "none"};
  color: ${(props) => (props.$selected ? "#C89B3C" : "#F0E6D2")};
`;

function NavBar() {
  return (
    <NavContainer className="w-full border-b border-b-[#3C3C41]">
      <a href="" className=" relative grid place-items-center">
        <Image src="/marvel_logo.svg" alt="logo" width={150} height={40} />
      </a>

      <ul className="flex grow flex-row ">
        <PageItem $selected={false}>
          <a href="" className="text-sm">
            HOME
          </a>
        </PageItem>
        <PageItem $selected={true}>
          <a href="" className="text-sm">
            PERSONAJES
          </a>
        </PageItem>
      </ul>
      <a href="">
        <BellIcon className="stroke-[17px] h-[19px] fill-[#F0E6D2] hover:fill-[#C89B3C]" />
      </a>
      <a href="">
        <Cog8ToothIcon className="stroke-[17px] h-[19px] fill-[#F0E6D2] hover:fill-[#C89B3C]" />
      </a>
    </NavContainer>
  );
}

export default NavBar;
