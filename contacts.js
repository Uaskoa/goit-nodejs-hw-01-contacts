const fs = require("fs").promises;
// const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");


const contactsPath = path.join(__dirname, "db", "contacts.json");


async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);


    return contacts;
  } catch (error) {
    throw error;
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const findContact = contacts.find((contact) => contact.id === contactId);
    if (!findContact) {
      throw new Error("Id is not valid");
    }
  console.table(findContact);
    return findContact;
  } catch (error) {
    throw error;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
   const index = contacts.findIndex((contact) => contact.id === contactId);
   if(index === -1) {
     throw new Error ('There is no such id')
   }
       const filteredContacts = contacts.filter(
      (contact) => contact.id !== contactId);
   
       const str = JSON.stringify(filteredContacts);
       await fs.writeFile(contactsPath, str);
     console.table(filteredContacts);
    return filteredContacts;
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
    const contacts = await listContacts();
    const newContacts = [...contacts, newContact];
    const str = JSON.stringify(newContacts);
    await fs.writeFile(contactsPath, str);
    console.table(newContacts);
    return newContacts;
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
