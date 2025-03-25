import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const prevContacts = await readContacts();
    const newContact = createFakeContact();
    writeContacts([...prevContacts, newContact]);
};

addOneContact();
