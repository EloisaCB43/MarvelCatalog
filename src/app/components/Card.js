import Image from "next/image";

function Card(props) {
  const { name, comics, movies, avatar } = props;
  return (
    <div className="w-[248px] h-[448px] border-t-[0.75px] rounded-[5px] flex flex-col justify-between items-center relative p-[35px] gap-5 bg-[url(/card_container.png)]">
      <div className="w-[179px] h-[18px] relative flex justify-center items-center bg-[url(/name_decorators.png)]">
        <h2 className="text-center text-[#F0E6D2] text-[14px] tracking-[1PX] w-[81px]">
          {name}
        </h2>
      </div>
      <div className="w-[164px] h-[190px] relative grid place-items-center">
        <Image
          src="/avatar_container.png"
          fill
          className="hover:animate-[spin_6s_linear_infinite]"
        />
        <Image
          className="rounded-full border border-[#3C3C41]"
          src={avatar || "/default_avatar.png"}
          width={125}
          height={125}
        />
      </div>

      <h3 className="border rounded-[5px] border-solid border-[#5B5A56] text-[#F0E6D2] bg-[#1E2328] w-[178px] h-[49px] py-1 px-5 text-base text-center">
        <span className="font-sans align-middle">Comics:</span>{" "}
        <span className="text-3xl align-middle pl-3">{comics}</span>
      </h3>
      <h3 className="border rounded-[5px] border-solid border-[#5B5A56] text-[#F0E6D2] bg-[#1E2328] w-[178px] h-[49px] py-1 px-5 text-base text-center">
        <span className="font-sans align-middle">Movies:</span>{" "}
        <span className="text-3xl align-middle pl-3">{movies}</span>
      </h3>
    </div>
  );
}
export default Card;