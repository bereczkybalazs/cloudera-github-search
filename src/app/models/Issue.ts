export class Issue {
  id: number;
  title: string;
  user: {
    login: string;
    url: string;
  };
  state: string;
  body: string;
  pull_request: {
    url: string;
  };
}
