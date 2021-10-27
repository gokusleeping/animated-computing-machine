import { useState } from "react";
import QRCode from "qrcode";
import React from "react";
import clx from "../styles/index.module.scss";
const index = () => {
  const [img, setimg] = useState("");
  const [text, setText] = useState("");
  const generateQR = async () => {
    try {
      setimg(await QRCode.toDataURL(text));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form
      className={clx.form}
      onSubmit={(e) => {
        e.preventDefault();
        generateQR();
      }}
    >
      <input
        className={clx.input}
        onChange={(e: any) => setText(e.target.value)}
      />
      <button className={clx.btn}>Generate</button>
      {!!img && <img className="image" src={img} />}
    </form>
  );
};

export default index;
