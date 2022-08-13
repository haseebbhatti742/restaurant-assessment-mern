import React from "react";
import { useAppContext } from "../../context/AppContextContainer";
import ContactCard from "./ContactCard";

function Contacts() {
  const { contacts } = useAppContext();

  return (
    <div>
      <div className="flex justify-center py-6 flex-col md:flex-row mb-2">
        {contacts?.map((contact, index) => (
          <ContactCard key={contact?.id} contact={contact} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
