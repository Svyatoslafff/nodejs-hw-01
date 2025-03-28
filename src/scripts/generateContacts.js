import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async number => {
    const prevContacts = await readContacts();
    const newContacts = Array(number).fill('').map(createFakeContact);
    writeContacts([...prevContacts, ...newContacts]);
};

generateContacts(5);
