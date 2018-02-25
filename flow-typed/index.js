type AppState = {
  auth: {
    username: string;
  }
}

type Action<T> = {
  type: string;
  payload: T;
}
