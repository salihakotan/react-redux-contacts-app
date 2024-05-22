import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


export const contactsAdapter = createEntityAdapter()

export const contactSelectors = contactsAdapter.getSelectors((state)=> state.contacts)


export const contactsSlice = createSlice({
    name:"contacts",
    initialState:contactsAdapter.getInitialState(),
    reducers:{
        addContact: contactsAdapter.addOne,
        addContacts: contactsAdapter.addMany,
        deleteContact:contactsAdapter.removeOne,
        deleteContacts:contactsAdapter.removeAll,
        updateContact:contactsAdapter.updateOne
    },
    extraReducers: builder => {

    }
})




export const {addContact,addContacts,deleteContact,deleteContacts,updateContact} = contactsSlice.actions

export default contactsSlice.reducer