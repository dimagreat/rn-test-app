type AppState = {
  auth: {
    username: string;
  },
  questions: {
    isLoading: boolean;
    questions: string[];
    page: number;
  }
}

type Action<T> = {
  type: string;
  payload: T;
}
