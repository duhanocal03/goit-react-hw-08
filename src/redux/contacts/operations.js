import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Not: axios.defaults.baseURL genellikle auth/operations.js içinde tanımlanır.
// Eğer orada tanımlamadıysan buraya da ekleyebilirsin.

// 1. Tüm kişileri çekme (GET)
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data; // Başarılıysa veriyi slice'a gönderir
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 2. Yeni kişi ekleme (POST)
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 3. Kişi silme (DELETE)
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data; // Genelde silinen kişinin ID'sini veya objesini döner
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);