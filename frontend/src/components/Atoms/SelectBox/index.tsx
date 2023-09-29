import React from "react";
import SelectBoxProps from "./props";
import Style from "./style.module.css";

const SelectBox: React.FC<SelectBoxProps> = ({ data, onChange, value }) => {
  return (
    <>
      <select value={value} className={Style.select} onChange={onChange}>
        {data?.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};
export default SelectBox;
