const contacts = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.table(contactsList);

      break;

    case "get":
      const contact = await contacts.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id: ${id} not found in this contacts`);
      }
      console.log(contact);

      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);

      break;

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      console.log(deletedContact);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// invokeAction({ action: "list" });
// invokeAction({ action: "remove", id: "13" });
// invokeAction({ action: "get", id: "10" });
invokeAction(argv);
// invokeAction({
//   action: "add",
//   name: "Andrew",
//   email: "andrew@gmail.com",
//   phone: "123-456-789",
// });
