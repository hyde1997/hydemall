import { request } from "./require";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}
