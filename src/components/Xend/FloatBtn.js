import React from "react";
const FloatBtn = () => {
  const toTop = (_) => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <p onClick={toTop} id="FloatBtn">
      ^
    </p>
  );
};

export default FloatBtn;
