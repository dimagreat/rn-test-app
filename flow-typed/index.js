type AppState = {
  auth: {
    username: string;
  },
  questions: {
    isLoading: boolean;
    questions: string[];
    pagination: {
      page: number;
      hasNext: boolean;
    }
  }
}

type Action<T> = {
  type: string;
  payload: T;
}
