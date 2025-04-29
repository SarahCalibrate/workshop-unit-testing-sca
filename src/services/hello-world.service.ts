export interface HelloWorldService {
  helloWorld(): Promise<string>;
  byeWorld(): Promise<string>;
}
