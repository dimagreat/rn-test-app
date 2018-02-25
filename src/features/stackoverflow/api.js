const API_KEY = 'NaT81W3XjVhsBfbRkGpfSw((';
const ROOT_URL = `https://api.stackexchange.com/2.2/search?key=${API_KEY}&site=stackoverflow&order=desc&sort=creation&filter=default`;

export function fetchQuestions(page) {
  // try {
  //   const response = await fetch(
  //     `${ENDPOINT}/${QUESTIONS_URL}?site=stackoverflow&page=${page}&pagesize=50&tagged=${encodeURIComponent(tagged)}&key=${API_KEY}`
  //   ;
  //   const items = await response.json();
  //   return items;
  // } catch (e) {
  //   console.error(e)
  // }
  return fetch(`${ROOT_URL}&page=${page}`).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      return Promise.reject(resp.status);
    }
  }).then(json => json.items);
}
