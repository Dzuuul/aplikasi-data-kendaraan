import React from "react";
import AddData from "../common/Add.modal";
import SearchButton from "../common/Search.button"

const ButtonGroup = () => {
  return (
    <div className="d-flex justify-content-end">
      <div>
        <SearchButton />
        <AddData />
      </div>
    </div>
  );
};

export default ButtonGroup;
