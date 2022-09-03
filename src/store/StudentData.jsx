import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { name: "Naveen", age: 20, course: "Mech", batch: "October", id: "1" },
  { name: "Nitin", age: 21, course: "ECE", batch: "November", id: "2" },
  { name: "Abhishik", age: 22, course: "CSC", batch: "September", id: "3" },
  { name: "Pitamber", age: 23, course: "Civil", batch: "September", id: "4" },
  { name: "Pushpa", age: 24, course: "Mech", batch: "October", id: "5" },
  { name: "Rupam", age: 25, course: "EEE", batch: "November", id: "6" },
]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload)
    },
    userUpdated(state, action) {
      const { id, name, age, course, batch } = action.payload
      const existingUser = state.find((user) => user.id === id)
      if (existingUser) {
        existingUser.name = name
        existingUser.age = age
        existingUser.course = course
        existingUser.batch = batch
      }
    },
  },
})

export const { userAdded, userUpdated } = usersSlice.actions

export default usersSlice.reducer