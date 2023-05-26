import Image from "next/image";

function ImagePoster() {
  return (
    <div className="w-[382px] h-[193px]  rounded border border-[#42331A] bg-[#111111] relative">
      <Image src={"/poster_image.jpg"} alt="poster" fill />
    </div>
  );
}

export default ImagePoster;
