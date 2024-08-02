import React from "react";

function Card({imgUrl, skill}) {
  return (
    <article class="p-8 rounded-xl flex flex-col items-center justify-evenly bg-gray-100/5 shadow-xl">
      <div class="img">
        <img
          src={imgUrl}
          height="75"
          width="75"
          class="bg-blend-multiply"
        />
      </div>
      <div class="mt-4 text-center font-bold">{skill}</div>
    </article>
  );
}

export default Card;
