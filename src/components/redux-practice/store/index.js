
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice" // 리팩터링
import authReducer from "./authSlice"

// 단 하나의 리덕스 스토어
// 스토어에는 여러 리듀서를 제공할 수 있다.
const store = configureStore({
    // 한개 이상이면 객체로 묶어서 key를 추가해준다. key이름은 내맘대로
    reducer: {
        counter: counterReducer,
        auth: authReducer
    } 
});



// 리액트의 index.js에게 store를 제공
export default store;