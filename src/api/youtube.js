//실제 유튜브 연결 - 실제 유튜브 API
// https://developers.google.com/youtube/v3/getting-started

// import axios from "axios";

export default class Youtube {
  constructor(apiClient) {
    // 반복되는 부분 변수화
    // this.httpClient = axios.create({
    //   baseURL: "https://youtube.googleapis.com/youtube/v3",
    //   params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    // });

    this.apiClient = apiClient; // 외부에서 받아옴
  }

  // * 리팩토링
  // 함수 3개 정의
  // Videos.jsx에서 keyword를 받아옴
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#popular();
  }

  // 채널 이미지를 가져오기 위해 필요한 옵션을 정의하는 함수
  async channelImageURL(id) {
    return this.apiClient
      .channels({
        params: {
          part: "snippet",
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  // 관련 비디오를 가져오기 위해 필요한 옵션을 정의하는 함수
  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }


  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #popular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}

// 기존 youtubeClient.js가 없을 때 youtube.js 코드
// export default class Youtube {
//   constructor() {
//     // 반복되는 부분 변수화
//     // this.httpClient = axios.create({
//     //   baseURL: "https://youtube.googleapis.com/youtube/v3",
//     //   params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
//     // });

//     this.httpClient = httpClient // 외부에서 받아옴
//   }
//   // 함수 3개 정의
//   // Videos.jsx에서 keyword를 받아옴
//   async search(keyword) {
//     return keyword ? this.#searchByKeyword(keyword) : this.#popular();
//   }

//   //아이디값만 수정해서 얻어옴
//   async #searchByKeyword(keyword) {
//     return this.apiClient
//       .seach(`search`, {
//         params: {
//           part: "snippet",
//           maxResults: 25,
//           type: "video",
//           q: keyword, // 키워드로 전달받음
//         },
//       })
//       .then((res) => res.data.items);
//   }

//   async #popular() {
//     return this.httpClient
//       .get(`videos`, {
//         params: {
//           part: "snippet",
//           maxResults: 25,
//           chart: "mostPopular",
//           regionCode: "KR",
//         },
//       })
//       .then((res) => res.data.items);
//   }
// }

/*
export async function search(keyword) {
  return axios
    .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res)=>res.data.items)
*/
