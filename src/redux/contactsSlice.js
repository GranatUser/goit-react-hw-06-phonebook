import { createSlice } from "@reduxjs/toolkit";
const contactsInitialState = {
    contacts: []
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload);
        },

        deleteContact(state, action) {
            return { contacts: state.contacts.filter((contact) => { return contact.id !== action.payload }) };
        }

    }
})
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;