import React, { useState, useCallback, useEffect, useRef } from "react";

const Card = () => {
  const [lenght, setLenght] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charactoeAllow, setCharactoeAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const passwordGemerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQURSTUVXYZabcdefghijklmnopqestruvw";

    if (numberAllow) {
      str += "0123456789";
    }
    if (charactoeAllow) str += "`!#$%^&*()_+~";

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [lenght, numberAllow, charactoeAllow, setPassword]);

  useEffect(() => {
    passwordGemerator();
  }, [lenght, numberAllow, charactoeAllow, passwordGemerator]);

  const copyPass = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex justify-center items-center h-[22rem] w-full">
      <div className="bg-black p-[2rem] flex flex-col items-center rounded-xl shadow">
        <h2 className="mb-5 text-[25px]">Password generator</h2>
        <div>
          <input
            ref={passwordRef}
            type="text"
            value={password}
            placeholder="password"
            readOnly
            className="w-[26rem] py-2 text-black font-semibold"
          />
          <button
            className="bg-slate-600 py-2 px-2 cursor-pointer"
            onClick={copyPass}
          >
            copy
          </button>
        </div>
        <div className="mt-2 p-10">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="ml-2"
            onChange={(e) => setLenght(e.target.value)}
          />
          <lable className="ml-2">Lenght {lenght}</lable>
          <input
            type="checkbox"
            className="ml-2"
            defaultChecked={numberAllow}
            onChange={() => {
              setNumberAllow((prev) => !prev);
            }}
          />
          <lable className="ml-2">Numbers</lable>
          <input
            type="checkbox"
            className="ml-2"
            defaultChecked={charactoeAllow}
            onChange={() => {
              setCharactoeAllow((prev) => !prev);
            }}
          />
          <lable className="ml-2">Charactor</lable>
        </div>
      </div>
    </div>
  );
};

export default Card;
