"use client";
import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import AangDp from "../data/Aang.webp";
import AzulaDp from "../data/Azula.webp";
import IrohDp from "../data/Iroh.webp";
import KataraDp from "../data/Katara.webp";
import SokkaDp from "../data/Sokka.webp";
import TophDp from "../data/Toph_Beifong.webp";
import ZukoDp from "../data/Zuko.webp";
import Image from "next/image";

const ATLA_CHARACTERS = [
  { name: "Aang", img: AangDp },
  { name: "Azula", img: AzulaDp },
  { name: "Iroh", img: IrohDp },
  { name: "Katara", img: KataraDp },
  { name: "Sokka", img: SokkaDp },
  { name: "Toph", img: TophDp },
  { name: "Zuko", img: ZukoDp },
];

// see https://bost.ocks.org/mike/shuffle/
function shuffle<T>(array: T[]) {
  const arrayCopy = [...array];
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[currentIndex],
    ];
  }

  return arrayCopy;
}

export const ReorderDemo = () => {
  const [items, setItems] = useState(ATLA_CHARACTERS);

  useEffect(() => {
    setItems(shuffle(ATLA_CHARACTERS));
  }, []);

  return (
    <div className="mb-6">
      <h1 className="text-4xl text-primary mb-6">ATLA &nbsp;Aura Rankings:</h1>

      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="flex flex-col gap-2"
      >
        {items.map((item, index) => (
          <Reorder.Item
            key={item.name}
            value={item}
            className="flex items-center gap-2"
            // drag
          >
            <p className="text-2xl">{index + 1}</p>
            <Image
              src={item.img}
              alt={item.name}
              className="w-[100px] h-[75px] pointer-events-none"
            />
            <p className="text-xl">{item.name}</p>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};
