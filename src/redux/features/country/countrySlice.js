import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import 'whatwg-fetch';

const initialState = {
    country: []
}


export const getCountry = createAsyncThunk('getCountry', async() => {
    const {data} = await axios.get('https://countriesnow.space/api/v0.1/countries/population/cities')
    return data
})

export const countrySlice = createSlice({
    name: "country",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCountry.fulfilled, (state,action) =>{
            state.country = action.payload
        })
    }
})


export default countrySlice.reducer