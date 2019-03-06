//自动加载../pages/.api.js
const components = require.context('../pages', true, /\.api.js$/);
let loadApis = {};
components.keys().forEach(key => {
  let defines = undefined;
  try {
    defines = components(key).default;
  } catch (e) {
    throw Error(`${key}:${e}`);
  }
  if (defines === undefined) {
    throw Error(`${key}:内没有 export default`);
  } else if (typeof defines.apis != 'object') {
    throw Error(`${key}:apis有误`);
  }
  const i = key.lastIndexOf('/');
  const fileName = key.slice(i + 1).replace('.api.js', '');
  let name = defines.name && typeof defines.name === 'string' ? defines.name : fileName; //
  loadApis[name] = defines.apis;
});
export default loadApis;
