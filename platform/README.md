<p align="center">
  <img src="https://user-images.githubusercontent.com/20338451/128799226-dc84c780-a031-4899-9880-3c9df4c2c52b.png" width="560" /><br />
</p>

<p align="center">
Bring your Capacitor ⚡ apps to the desktop with Tauri! 🖥
</p>
<p align="center">
  <a href="https://github.com/capacitor-community/tauri"><img src="https://img.shields.io/badge/maintenance%20status-being%20developed-orange" /></a>
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#-contributors"><img src="https://img.shields.io/badge/all%20contributors-1-orange" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
  <a href="https://www.electronjs.org/releases/stable?version=13"><img src="https://img.shields.io/badge/tauri%20version-v1.0.0--beta.5-blue" /></a>
</p>
<p align="center">
  <a href="https://npmjs.com/package/@capacitor-community/tauri"><img src="https://img.shields.io/npm/v/@capacitor-community/tauri/alpha" /></a>
  <a href="https://npmjs.com/package/@capacitor-community/tauri"><img alt="npm" src="https://img.shields.io/npm/dw/@capacitor-community/tauri/alpha"></a>
  <a href="https://npmjs.com/package/@capacitor-community/tauri"><img src="https://img.shields.io/npm/l/@capacitor-community/tauri.svg?color=blue" /></a>
  <a href="https://github.com/capacitor-community/tauri"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/capacitor-community/tauri/CI"></a>
</p>

## ⚠ Important Info
- Please follow your operating systems guide to setup your environment for Tauri development [here](https://tauri.studio/en/docs/getting-started/intro#setting-up-your-environment)
- You will need a local build of `@capacitor/core` via `npm link` using this [PR](https://github.com/ionic-team/capacitor/pull/4771) until the PR is merged and published in a release.

## ⏳ Quickstart (super bare bones for now as the platform is just in alpha)
0. Create or open a Capacitor initialized web app project. [CAPACITOR DOCS](https://capacitorjs.com/docs)
1. `npm i @capacitor-community/tauri@alpha`
2. `npx cap add @capacitor-community/tauri`
3. Edit `APP_ROOT/tauri/src-tauri/tauri.conf.json -> build.devPath` to contain the url of you web app when running in dev mode. For example react app runs on `http://localhost:3000`.
4. Make sure your web app is running. For example, `npm run start` from the `APP_ROOT`
5. `npx cap open @capacitor-community/tauri`
6. You now have your web app running in tauri, right click and select `inspect` to bring up dev tools. 

## 🎉 More Info
- Check out Tauri on its [website](https://tauri.studio/) or on [github](https://github.com/tauri-apps/tauri)

## 🛠 Maintainers 

| Maintainer       | GitHub                                  | Social                                    | Sponsoring Company | Primary |
| ---------------- | --------------------------------------- | ----------------------------------------- | ------------------ | ------- |
| Mike Summerfeldt | [IT-MikeS](https://github.com/IT-MikeS) | [@IT_MikeS](https://twitter.com/IT_MikeS) | Volunteer          | Yes     |


## ✨ Contributors 

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/IT-MikeS"><img src="https://avatars0.githubusercontent.com/u/20338451?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Mike S</b></sub></a><br /><a href="https://github.com/capacitor-community/tauri/commits?author=IT-MikeS" title="Code">💻</a> <a href="https://github.com/capacitor-community/tauri/commits?author=IT-MikeS" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->