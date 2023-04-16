import axios from "axios";

export default async function fetch(method, url, postData = {}) {
  const { data } = await axios({
    method: method,
    url: url,
    data: postData,
  });

  return data;
}
