const { v4 } = require("uuid");
const { getContacts, updateContactsJson } = require("./helpers");

async function listContacts() {
  try {
    const contacts = await getContacts();
    console.table(contacts);
  } catch (error) {
    throw error;
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await getContacts();
    const findContact = contacts.find(
      (contact) => contact.id.toString() === contactId
    );
    if (!findContact) {
      throw new Error("Id is not valid");
    }
    console.table(findContact);
  } catch (error) {
    throw error;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await getContacts();
    const index = contacts.findIndex(
      (contact) => contact.id.toString() === contactId
    );
    if (index === -1) {
      throw new Error("There is no such id");
    }
    const filteredContacts = contacts.filter(
      (contact) => contact.id.toString() !== contactId
    );
    updateContactsJson(filteredContacts);
    console.table(filteredContacts);
  } catch (error) {
    throw error;
  }
}

async function addContact(name, email, phone) {
  const newContact = {
    id: v4(),
    name,
    email,
    phone,
  };
  try {
    const contacts = await getContacts();
    const newContacts = [...contacts, newContact];
    updateContactsJson(newContacts);
    console.table(newContacts);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
