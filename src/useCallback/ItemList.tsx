import React from "react";

interface Props {
  items: string[];
  onChangeColor: (e: React.MouseEvent<HTMLLIElement>) => void;
}

function ItemList({ items, onChangeColor }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    onChangeColor(e);
  };

  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx} onClick={handleClick}>
          {item}
        </li>
      ))}
    </ul>
  );
}

// export default ItemList;
export default React.memo(ItemList);
