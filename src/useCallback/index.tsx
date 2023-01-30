import React, { useCallback, useState } from "react";
import ItemList from "./ItemList";

function UseCallback() {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setItems((prev) => prev.concat(value));
    }
  };

  const handleClick = () => {
    setItems((prev) => prev.concat(value));
  };

  // const changeItemColor = (e: React.MouseEvent<HTMLLIElement>) => {
  //   if (e.currentTarget.style.color !== "red") {
  //     e.currentTarget.style.color = "red";
  //   } else {
  //     e.currentTarget.style.color = "black";
  //   }
  // };
  const changeItemColor = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.style.color !== "red") {
      e.currentTarget.style.color = "red";
    } else {
      e.currentTarget.style.color = "black";
    }
  }, []);

  return (
    <div>
      <input value={value} onChange={handleChange} onKeyUp={handleKeyUp} />
      <button onClick={handleClick}>add</button>
      <br />
      <ItemList items={items} onChangeColor={changeItemColor} />
    </div>
  );
}

export default UseCallback;
