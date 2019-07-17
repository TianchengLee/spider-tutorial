import Spider from "./Spider";

export default class NewsList extends Spider {
  onCatchHTML(result: string) {
    console.log(JSON.parse(result))
  }
}