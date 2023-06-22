class Data {
  response = undefined;
  fulfilled = false;
  constructor(
    public method: string,
    public uri: string,
    public version: string,
    public message: string
  ) {}
}

const myData = new Data("POST", "http://google.com", "HTTP/1.1", "dasdsadas");
console.log(myData);
