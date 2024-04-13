import React from "react";

function UlLiCompAlgoSection({ title, description }) {
  return (
    <li className="text-black text-left text-md space-y-3 my-3">
      <p>
        <span className="font-bold text-black">&#9679;</span> {title}
      </p>
      <p className="pl-4">{description}</p>
    </li>
  );
}

export default UlLiCompAlgoSection;
