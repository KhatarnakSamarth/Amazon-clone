import React from "react";

function ProductCarouselCard({ item }) {
  return (
    <div
      className="
        shrink-0
        w-[130px]
        sm:w-[150px]
        md:w-[170px]
        lg:w-[190px]
        xl:w-[210px]
      "
    >
      {/* Image */}
      <div
        className="
          bg-[#f7f7f7]
          h-[120px]
          sm:h-[140px]
          md:h-[170px]
          lg:h-[190px]
          flex
          items-center
          justify-center
          p-2
        "
      >
        <img
          src={item.img}
          alt={item.title}
          className="
            max-w-full
            max-h-full
            object-contain
            hover:scale-105
            transition-transform
            duration-300
          "
        />
      </div>

      {/* Details */}
      <div className="mt-2 flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-1">
          <span
            className="
              bg-[#cc0c39]
              text-white
              text-[9px]
              sm:text-[10px]
              font-bold
              px-1.5
              py-0.5
              rounded-sm
            "
          >
            {item.label}
          </span>

          <span
            className="
              text-[#cc0c39]
              text-[9px]
              sm:text-[10px]
              font-bold
            "
          >
            Deal of the Day
          </span>
        </div>

        <span
          className="
            text-[10px]
            sm:text-xs
            text-[#0f1111]
            line-clamp-2
          "
        >
          {item.title}
        </span>
      </div>
    </div>
  );
}

export default ProductCarouselCard;