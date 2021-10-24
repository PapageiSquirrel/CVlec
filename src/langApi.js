import Lang from './data/lang.json';

export default class LangManager {
  constructor() {
    this.defaultLang = "fr";
    this.currentLang = window.localStorage.getItem("lang") || "";
  }

  setCountryCode(code) {
    //var old = this.currentLang || this.defaultLang;
    this.currentLang = code;
    //console.log("[API][Lang] Changing language from " + old + " to " + this.currentLang);
    window.localStorage.setItem("lang", code);
    location.reload(true);
  }

  getCountryCode() {
    return this.currentLang || this.defaultLang;
  }

  getLabel(code) {
    var cc = this.getCountryCode();
    return Lang[cc][code];
  }
}

export const langApi = new LangManager();