import React, { useMemo, useState } from "react";

function UseMemo() {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const itemCount = (list: string[]) => {
    console.log("counting...");
    return list.length;
  };

  /**
   * useMemo를 쓰지 않으면 리렌더링될때마다 함수를 호출해서 계산한다.
   * useMemo를 쓰면 리렌더링될때마다 계산하는것이 아니라 함수가 memoization한 계산결과를 리턴하기 때문에
   * 불필요한 계산 과정을 생략할 수 있어 최적화가 가능해진다.
   */
  // const itemLen = itemCount(items);
  const itemLen = useMemo(() => itemCount(items), [items]);

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

  return (
    <div>
      <input value={value} onChange={handleChange} onKeyUp={handleKeyUp} />
      <button onClick={handleClick}>add</button>
      <br />
      <span>{`item length : ${itemLen}`}</span>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
