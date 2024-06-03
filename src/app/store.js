import { configureStore } from "@reduxjs/toolkit"
import { movieSlice } from "../features/movies/moviesSlice"
import { userSlice } from "../features/users/useSlice";



export const store = configureStore({
  reducer: {
    [movieSlice.name]: movieSlice.reducer,
    [userSlice.name]: userSlice.reducer
  }
});


console.log(store.getState());