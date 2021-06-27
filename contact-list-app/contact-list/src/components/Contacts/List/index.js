import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  /// ilk olarak filtreleme işlemi yapıyoruz ve sonra map ediyoruz.
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    });
  });
  console.log(filtered);
  return (
    <div>
      <h1>Contacts</h1>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total contacts: ({filtered.length})</p>
    </div>
  );
}

export default List;
