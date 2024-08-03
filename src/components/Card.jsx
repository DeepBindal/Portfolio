import React from "react";

function Card({imgUrl, skill}) {
  return (
    <article class="p-8 relative duration-500 hover:[transform:rotate3d(20_,-10,_1,_50deg)] m-4 rounded-xl flex flex-col items-center justify-evenly bg-gray-100/5 shadow-5xl">
      <div class="img">
        <img
          src={imgUrl}
          height="75"
          width="75"
          className="bg-blend-multiply"
        />
      </div>
      <div className="mt-4 text-center font-bold">{skill}</div>
    </article>
  );
}

export default Card;
