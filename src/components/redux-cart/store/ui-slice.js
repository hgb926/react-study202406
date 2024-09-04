

// ui상태에 대한 관리 slice (보였다 안보였다)

import { createSlice } from "@reduxjs/toolkit";

// 상태관리할 값들의 초기값
const initialState = {
    // 쇼핑카트 ui가 보이고 안보이고.. 상태값
    cartIsVisible: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState, // key랑 value가 이름이 같으면 한번만 써도 됨.
    reducers: {
        // 상태변경 행위를 여기서 정의! (action함수)
        // 여기 안에 정의된 함수는 파라미터가 무조건 두개 (state, action)
        // state는 변수, action은 행위 (payload)
        toggle(state, action) {
            state.cartIsVisible = !state.cartIsVisible;
            console.log(action)
        },
    }
});


// 액션 함수들 내보내기 (액션 함수는 변수에 담아서 내보내야함)
export const uiActions = uiSlice.actions;
export default uiSlice.reducer; // reducer는 slice