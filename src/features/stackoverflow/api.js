// @flow

const TAGGED = '&tagged=react-native';
const PAGE_SIZE = '&pagesize=50';
const API_URL = 'https://api.stackexchange.com/2.2';
const API_METHOD = '/questions';
const ROOT_URL = `${API_URL}${API_METHOD}?order=desc&${TAGGED}&sort=activity&site=stackoverflow${PAGE_SIZE}`;

export async function fetchQuestions(page: number) {
  try {
    const response = await fetch(`${ROOT_URL}&page=${page}`);
    const json = await response.json();
    // TODO: Error handling
    if (json.error_message) {
      return {
        error: true
      }
    }
    return {
      questions: json.items.map(item => item.title),
      pagination: {
        hasNext: json.has_more,
        page: page
      }
    }

  } catch (e) {
    return e;
  }
}
