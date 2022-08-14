import React from "react";

function ContactCard({ contact, index }) {
  const { icon, id, title, description } = contact;
  return (
    <div
      className={`h-auto w-full md:w-1/3 rounded-3xl p-10 space-y-4 text-gray-600 font-semibold ${
        index % 2 !== 0 ? "bg-yellow-primary" : "bg-white"
      } flex flex-col justify-between items-center mx-2  `}
    >
      <div>
        <img src={icon} className="h-20 w-20" alt={`icon-${id}`} />
      </div>
      <div>
        <h1 className="text-xl font-semibold">{description}</h1>
      </div>
      <div>
        <h1 className="text-gray-600">{title}</h1>
      </div>
    </div>
  );
}

export default ContactCard;
