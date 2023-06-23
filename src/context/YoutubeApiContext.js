import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();


const client = new YoutubeClient();  //찐 API
const youtube = new Youtube(client)


//context가 적용될 영역을 지정하는 함수정의
export function YoutubeApiProvider({children}){
  return(
    <YoutubeApiContext.Provider value={{youtube}}>
      {children}
    </YoutubeApiContext.Provider>
  )
}

export function useYoutubeApi(){
  return useContext(YoutubeApiContext);
}



