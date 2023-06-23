import React from "react";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko"; // n months ago를 한글로 표시

register("ko", koLocale);

export function formatAgo(data, lang = "en_US") {
  return format(data, lang);
}

// 단순한 시간을 n일 전과 같은 형식으로 바꿔주는 함수
// https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3