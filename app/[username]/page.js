import React from "react";
import Image from "next/image";
import animatedDungeunImage from "../../components/icons/animatedDungeonMap.gif";
import cat2 from "../../components/icons/cat2.jpeg";

export default async function Username({ params }) {
  const { username } = await params;

  return (
    <>
      <div>{username}</div>

      <div className="cover w-full relative h-[350px]">
        <Image
          src={animatedDungeunImage}
          alt="Cover"
          fill
          className="object-cover"
          priority
          unoptimized
        />

        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 border-white border-2 w-[120px] h-[120px]
                rounded-full overflow-hidden">
          <Image
            src={cat2}
            alt="Profile"
           fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
