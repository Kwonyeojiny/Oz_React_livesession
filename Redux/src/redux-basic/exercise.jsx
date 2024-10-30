// 리덕스에 대해서 기초적인거 같이 진행

// 액션 (보통 대문자)
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 액션 생성함수 (action creator, 보통 소문자)
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 리듀서 생성
const myreducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// 스토어
const store = createStore(myreducer);

// 디스패치 생성

// 구독
store.subscribe(() => {
  console.log("상태가 변경되었습니다", store.getState());
});

// 강제로 디스패치
store.dispatch(increment);
