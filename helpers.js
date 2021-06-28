const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const getContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const updateContactsJson = async (contacts) => {
  const str = JSON.stringify(contacts);
  await fs.writeFile(contactsPath, str);
};

module.exports = {
  getContacts,
  updateContactsJson,
};
