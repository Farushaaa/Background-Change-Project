"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [color, setColor] = useState("black");
  const [fillColorBtn, setFillColorBtn] = useState("black");

  const colorChanger = () => {
    if (
      backgroundColor == "white" &&
      color == "black" &&
      fillColorBtn == "black"
    ) {
      setBackgroundColor("black");
      setColor("white");
      setFillColorBtn("white");
    } else {
      setBackgroundColor("white");
      setColor("black");
      setFillColorBtn("black");
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color;
  }, [colorChanger]);

  return (
    <main className="main">
      <h1>Hi, dear visitor 🖐</h1>
      <h3>Click the button to change background 👇</h3>
      <Button fillColorBtn={fillColorBtn} colorChanger={colorChanger} />
    </main>
  );
}
