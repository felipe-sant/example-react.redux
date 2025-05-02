import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiExample from "../ApiExample";

const getApiExample = createAsyncThunk("get/apiExample", async () => {
    return await ApiExample.getExample()
})

export default getApiExample;