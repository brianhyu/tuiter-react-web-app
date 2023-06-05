import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   
const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
       likeTuit(state, action) {
           const tuit = state.tuits.find(tuit => tuit._id === action.payload)
           if (tuit) {
               if (tuit.liked === true) {
                   tuit.liked = false;
                   tuit.likes--;
               } else {
                   tuit.liked = true;
                   tuit.likes++;
               }
           }
        },
   
       deleteTuit(state, action) {
           const index = state.tuits
              .findIndex(tuit =>
                 tuit._id === action.payload);
           state.tuits.splice(index, 1);
         },

      createTuit(state, action) {
        state.tuits.unshift({
          ...action.payload,
          ...templateTuit,
          _id: (new Date()).getTime(),
        })
      }
   }
});

export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;