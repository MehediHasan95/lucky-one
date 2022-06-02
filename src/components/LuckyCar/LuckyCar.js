import React from "react";

const LuckyCar = (props) => {
  const { name, img } = props.luckycar;
  return (
    <div>
      <h6 className="mb-3">{name}</h6>
    </div>
  );
};

export default LuckyCar;
