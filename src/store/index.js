import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

Vue.use(Vuex);

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", false, /\.js$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modula, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath
    .replace(/^\.\/(.*)\.\w+$/, "$1")
    .replace(/-([a-z])/g, (g) => g[1].toUpperCase());

  // camelCase(modulePath.replace(/^\.\/(.*)\.\w+$/, '$1'));
  const value = modulesFiles(modulePath);
  // eslint-disable-next-line
  modula[moduleName] = value.default;

  return modula;
}, {});

const store = new Vuex.Store({
  modules,
  getters,
});

export default store;
