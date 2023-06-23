//내부 json로 연결 - 실제 유튜브 API를 가져올 수가 없음(사용제한)

import axios from 'axios';

export default class FakeYoutubeClient {
  
  async search(){
    return axios
      .get(`/videos/search.json`)
    } 

  async videos(){
    return axios.get(`/videos/popular.json`)
  }
}





/*
export async function search(keyword) {
  return axios
    .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res)=>res.data.items)
*/



