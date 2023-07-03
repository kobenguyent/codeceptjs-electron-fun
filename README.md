# codeceptjs-electron-fun

**Clone and run for a quick way to see how to test an Electron app in action using CodeceptJS-Playwright.**

```bash
# Clone this repository
git clone https://github.com/kobenguyent/codeceptjs-electron-fun
# Go into the repository
cd codeceptjs-electron-fun/test
# Install dependencies
npm i
# Run the tests
npm run e2e:test
```

```
> codeceptjs run --verbose

CodeceptJS v3.4.1 #StandWithUkraine
Using test root "/Users/thanh.nguyen/Desktop/codeceptjs-electron-fun/test"
Helpers: Playwright
Plugins: screenshotOnFail, tryTo, retryTo, eachElement

Todo App --
    [1]  Starting recording promises
    Timeouts: 
 › [Session] Starting singleton browser session
  Could add new item to list
    I wait for element ".new-todo"
    › [Browser:Debug] Download the React DevTools for a better development experience: https://fb.me/react-devtoolsDownload the React DevTools for a better development experience: https://fb.me/react-devtools
    I fill field ".new-todo", "Hello World"
    I press key "Enter"
    I wait for element "[type="checkbox"]"
  ✔ OK in 752ms


  OK  | 1 passed   // 2s

```


https://github.com/kobenguyent/codeceptjs-electron-fun/assets/7845001/5e14d1c5-66ac-4ab5-ba4b-5abeb5b4404c


**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/latest/tutorial/quick-start) within the Electron documentation.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `preload.js` - A content script that runs before the renderer process loads.

You can learn more about each of these components in depth within the [Tutorial](https://electronjs.org/docs/latest/tutorial/tutorial-prerequisites).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/kobenguyent/codeceptjs-electron-fun
# Go into the repository
cd codeceptjs-electron-fun
# Install dependencies
npm i
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [Electron Fiddle](https://electronjs.org/fiddle) - Electron Fiddle, an app to test small Electron experiments


