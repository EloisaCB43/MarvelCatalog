import Image from "next/image";

function Card() {
  return (
    <div className="w-[248px] h-[448px] border-t-[0.75px] rounded-[5px] border-solid border-[#5B5A56] flex flex-col justify-between items-center relative bg-[#1E2328] p-[35px] gap-5">
      <Image src="/card_container.png" fill className="" />
      <div className="w-[179px] h-[18px] relative flex justify-center items-center">
        <Image src="/name_decorators.png" fill />
        <h2 className="text-center text-[#F0E6D2] text-[14px] tracking-[1PX] w-[81px]">
          PERSONAJE NAME
        </h2>
      </div>
      <div className="w-[164px] h-[190px] relative hover:animate-[spin_6s_linear_infinite]">
        <Image src="/avatar_container.png" fill />
      </div>

      <div className="border rounded-[5px] border-solid border-[#5B5A56] text-[#F0E6D2] bg-[#1E2328] w-[178px] h-[49px] py-2.5 px-5">
        <h3 className="text-[16px] font-['Spiegel']">Comics: 25</h3>
      </div>
      <div className="border rounded-[5px] border-solid border-[#5B5A56] text-[#F0E6D2] bg-[#1E2328] w-[178px] h-[49px] py-2.5 px-5">
        <h3 className="text-[16px] font-['Spiegel']">Movies: 25</h3>
      </div>
    </div>
  );
}
export default Card;
