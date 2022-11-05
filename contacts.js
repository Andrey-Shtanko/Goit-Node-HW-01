const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.normalize("./db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const response = await fs.readFile(contactsPath);
    const contacts = JSON.parse(response);
    return contacts;
  } catch (error) {
    console.log(error);
  }

  // .then((contacts) => console.log(contacts))
  // .catch((error) => console.log(error));
  // ...твой код
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const findedContact = contacts.find((contact) => contact.id === contactId);
    return findedContact;
  } catch (error) {
    console.log(error);
  }
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  const contact = {
    name,
    email,
    phone,
  };
  // fs.readFile(contactsPath, "utf-8")
  //   .then((contacts) => {
  //     const newContacts = [...JSON.parse(contacts), contact];
  //     console.log(newContacts);
  //     fs.writeFile(contactsPath, JSON.stringify(newContacts), (error) =>
  //       console.log(error)
  //     )
  //     .catch((err) => console.log(err));
  //   })
  //   .catch((error) => console.log(error));

  // fs.writeFile(contactsPath, contact, (error) => console.log(error))
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
  // ...твой кодs
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
