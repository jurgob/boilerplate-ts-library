// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class MyModule {
  configParam: string

  constructor(config: Config) {
    this.configParam = config.configParam
  }

  getConfigParam(): string {
    return this.configParam
  }
}

interface Config {
  configParam: string
}
