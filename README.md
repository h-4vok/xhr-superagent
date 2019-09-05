<h1 align="center">Welcome to xhr-superagent 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-5.1w.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/h-4vok/xhr-superagent#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/h-4vok/xhr-superagent/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/h-4vok/xhr-superagent/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> xhr-superagent is an xhr-bridge implementation on top of the superagent http client library.

### 🏠 [Homepage](https://github.com/h-4vok/xhr-superagent#readme)

## Install

```
npm install xhr-superagent
```

## About xhr-superagent

xhr-superagent is an abstraction layer on top of superagent which follows the xhr-bridge contract. By using a xhr-bridge contract for your http requests all of your requests will look the same and be compatible with other xhr-bridge implementations. Meaning that you can swap xhr-superagent for another xhr-bridge implementation without changing any of your code.

There are caveats to xhr-bridge. If there are very specific implementations of certain http libraries that xhr-bridge does not cover, or cannot provide for all other http clients, then it will probably not be available through xhr-bridge. You can still use it directly from the http library of your choice, but swapping the xhr-bridge lib to another implementation will not swap your code obviously.

## Development choices

- ESLint for linting is a must for me. ESLint allows you to build a DOCUMENT with rules which make up your coding standard. This is a coding standard you can EXECUTE. The best kind of documentation.
- JEST for unit testing. This is a no-brainer. I am a big fan of JEST and how easy it made unit testing on javascript. If you have another tool of choice, feel free to fork this repo and change it to your liking!
- Code Coverage with JEST at 100%. If I am building a package that will be hosted on npmjs for everyone to download then I want to make sure that it is tested at 100%. Exclusions can be made as long as it makes sense. Besides, unit testing drives design for me. While not a TDD practitioner in any way, I am a TDD enthusiast and try to apply it when possible.
- Prettier and Pretty-Quick. This is by far one of my favorite tools. By being so heavily opinionated you no longer require discussions on how to format code. Between Prettier and ESLint your coding standard and formatting is assured. Now focus on writing readable code.
- Babel. This is a JavaScript project scaffolding. For small projects like small npm packages plain JavaScript makes a whole sense to me. Other people might choose TS over JS. Guess we need another scaffolding github project for that :). I will build my own if I get to the point I want to build a package on TS.
- Husky for precommit hooks. I added husky to save myself whenever I commit code. We can be excellent professionals, but we are not excellent RAM memories.
- Prepublish checks. If you run npm publish then the prepublish script will run, saving you from yourself again.
- Finally, we got an .editorconfig file. Install editorconfig on your IDE and get the best from both EditorConfig and Prettier. I have configured them both and ESLint to ensure they work gracefully together.

## Author

👤 **Christian Guzmán**

- Github: [@h-4vok](https://github.com/h-4vok)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/h-4vok/xhr-superagent/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Christian Guzmán](https://github.com/h-4vok).<br />
This project is [MIT](https://github.com/h-4vok/xhr-superagent/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
