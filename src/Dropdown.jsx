import React, { useContext } from "react";
import { DropdownContext, DropdownProvider, useDropdown } from "./DropdownContext";

const DropdownButton = () => {
  const { toggleDropdown, selectedItem } = useContext(DropdownContext);
  const data = useContext(DropdownContext);
  const clickHandler = () => {
    toggleDropdown();
  };
  return <button onClick={clickHandler}>{!selectedItem ? "Dropdown Button" : selectedItem}</button>;
};

const DropdownMenu = ({ items }) => {
  const { isOpen, selectItem, toggleDropdown } = useContext(DropdownContext);
  const itemClickHandler = (item) => {
    selectItem(item);
    toggleDropdown();
  };
  return (
    <ul>
      {isOpen === true ? (
        items.map((item) => (
          <li key={item} onClick={() => itemClickHandler(item)}>
            {item}
          </li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};

const Dropdown = ({ items }) => {
  return (
    <DropdownProvider>
      <div>
        <DropdownButton />
        <DropdownMenu items={items} />
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
