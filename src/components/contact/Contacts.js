import React from "react";
import { useAppContext } from "../../context/AppContextContainer";
import Loader from "../loader/Loader";
import ContactCard from "./ContactCard";

function Contacts() {
  const { contacts, contactsLoading } = useAppContext();

  return (
    <div>
      <div className="flex justify-center mt-36 md:mt-0 mx-20 py-6 md:py-12 flex-col md:flex-row mb-2">
        {contactsLoading ? (
          <Loader />
        ) : (
          contacts?.map((contact, index) => (
            <ContactCard key={contact?.id} contact={contact} index={index} />
          ))
        )}
      </div>
    </div>
  );
}

export default Contacts;
