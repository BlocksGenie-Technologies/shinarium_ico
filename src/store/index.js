import { configureStore } from "@reduxjs/toolkit";

import swap from "./swap";

export const store = configureStore({
  reducer: {
    swap
  }
});
