//내부 json로 연결 - 실제 유튜브 API를 가져올 수가 없음(사용제한)
import axios from "axios";

// *리팩토링
// 여기서 class를 만들어서 보냄
export default class FakeYoutubeClient {
  // 키워드를 받아 올 필요가 없음
  async search({ params }) {
    // return relatedToVideoId ? axios.get(`/videos/related.json`) : axios.get(`/videos/search.json`)
    return axios.get(`/videos/{${params.relatedToVideoId ? "related" : "search"}.json`);
  }

  async videos() {
    return axios.get(`/videos/popular.json`);
  }

  async channels() {
    return axios.get(`/videos/channel.json`);
  }
}

// export default class FakeYoutube {
//   constructor() {}

//   // 함수 3개 정의
//   // Videos.jsx에서 keyword를 받아옴
//   async search(keyword) {
//     return keyword ? this.#searchByKeyword(keyword) : this.#popular();
//   }

//   //아이디값만 수정해서 얻어옴
//   async #searchByKeyword(keyword) {
//     return axios
//       .get(`/videos/search.json`)
//       .then((res) => res.data.items)
//       .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
//   }

//   async #popular() {
//     return axios.get(`/videos/popular.json`).then((res) => res.data.items);
//   }
// }

/*
export async function search(keyword) {
  return axios
    .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res)=>res.data.items)
*/
