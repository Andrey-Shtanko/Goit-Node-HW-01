const contacts = require("./contacts");

// contacts.listContacts();
// contacts.addContact("andrew", "andrew@gmail.com", "321-654-987");
const argv = require("yargs").argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.log(contactsList);
      // ...
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// invokeAction({ action: "list" });
invokeAction({ action: "get", id: "3" });
// invokeAction(argv);
