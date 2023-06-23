// context와 관련 된 파일을 모아 둔 js파일
import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
// import FakeYoutubeClient from "../api/fakeYoutubeClient";
import YoutubeClient from "../api/youtubeClient";
// import FakeYoutube from "../api/fakeYoutubeClient";

export const YoutubeApiContext = createContext();

// *리팩토링
// const client = new FakeYoutubeClient(); // 로컬 json을 불러온 가짜 API
const client = new YoutubeClient(); // 실제 API
const youtube = new Youtube(client);

// context가 적용될 영역을 지정하는 함수 정의
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

// youtube value값에 접근할 수 있도록 하는 함수(Videos.jsx)
export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}

/*
  위와 같이 설정하면 youtube api 불러온 것을 모든 컴포넌트에서 불러다 쓸 수 있음
*/

// export const YoutubeApiContext = createContext();

// // const youtube = new FakeYoutube();
// const youtube = new Youtube();

// // context가 적용될 영역을 지정하는 함수 정의
// export function YoutubeApiProvider({ children }) {
//   return (
//     <YoutubeApiContext.Provider value={{youtube}}>
//       {children}
//     </YoutubeApiContext.Provider>
//   );
// }

// // youtube value값에 접근할 수 있도록 하는 함수(Videos.jsx)
// export function useYoutubeApi() {
//   return useContext(YoutubeApiContext);
// }

// /*
//   위와 같이 설정하면 youtube api 불러온 것을 모든 컴포넌트에서 불러다 쓸 수 있음
// */
