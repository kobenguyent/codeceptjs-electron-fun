import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
import path from 'path';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  timeout: 20,
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: false,
      browser: 'electron',
      electron: {
        executablePath: require("electron"),
        args: [path.join('../', "main.js")],
      },
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'test',
  plugins: {
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
      outputDir: "./output",
    },
  },
}