const { contextBridge } = require('electron');

class DoSomething
{
  log()
  {
    console.log("From DoSomething");
  }
}

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  myTest : {
    log : "TOTO"
  },
  myClass : new DoSomething()
  // we can also expose variables, not just functions
});