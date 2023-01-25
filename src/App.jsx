/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
// export default ColorfulMessage;の場合の書き方
// import ColorfulMessage from "./components/ColorfulMessage";
// 直接exportしている場合は分割代入形式でimportしないとエラー出る←こちらの方がコンポーネント名が確約できるのでミスがない
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("saisho");
  const [num, steNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    steNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
    // 干渉したいStateのみ最後に配列内で記載（無限ループしないように）
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      <ColorfulMessage color="blue">お元気ですか？？</ColorfulMessage>
      <ColorfulMessage color="red">俺は元気</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントUP</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)/</p>}
    </>
  );
};

export default App;
