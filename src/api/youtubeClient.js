//실제 유튜브 연결 - 실제 유튜브 API
// https://developers.google.com/youtube/v3/getting-started
import axios from "axios";

export default class YoutubeClient {
  constructor() {
    // 반복되는 부분 변수화
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  // *리팩토링
  // 옵션만 처리
  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }

  async channels(params) {
    return this.httpClient.get("channels", params);
  }

  // export default class Youtube {
  //   constructor() {
  //     // 반복되는 부분 변수화
  //     this.httpClient = axios.create({
  //       baseURL: "https://youtube.googleapis.com/youtube/v3",
  //       params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
  //     });
  //   }
  // //아이디값만 수정해서 얻어옴
  // async #searchByKeyword(keyword) {
  //   return this.httpClient
  //     .get(`search`, {
  //       params: {
  //         part: "snippet",
  //         maxResults: 25,
  //         type: "video",
  //         q: keyword, // 키워드로 전달받음
  //       },
  //     })
  //     .then((res) => res.data.items);
  // }

  // async #popular() {
  //   return this.httpClient
  //     .get(`videos`, {
  //       params: {
  //         part: "snippet",
  //         maxResults: 25,
  //         chart: "mostPopular",
  //         regionCode: "KR",
  //       },
  //     })
  //     .then((res) => res.data.items);
  // }
}

/*
export async function search(keyword) {
  return axios
    .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res)=>res.data.items)
*/
