import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


export const contactsAdapter = createEntityAdapter()

export const contactSelectors = contactsAdapter.getSelectors((state)=> state.contacts)


export const contactsSlice = createSlice({
    name:"contacts",
    initialState:contactsAdapter.getInitialState(),
    reducers:{
        addContact: contactsAdapter.addOne,
        addContacts: contactsAdapter.addMany
    },
    extraReducers: builder => {

    }
})




export const {addContact,addContacts} = contactsSlice.actions

export default contactsSlice.reducer