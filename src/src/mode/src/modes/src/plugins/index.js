// index.js

const RIAMEngine = require("./src/engine");
const RSOF = require("./src/modes/rsof");
const RIAMR = require("./src/modes/riamr");
const DataAnalyzer = require("./src/plugins/dataAnalyzer");

const engine = new RIAMEngine();

// Register modes
engine.registerMode("RSOF", RSOF);
engine.registerMode("RIAM-R", RIAMR);

// Register plugins
engine.registerPlugin(DataAnalyzer);

// Example run
(async () => {
    const result = await engine.run("What is artificial intelligence?", "RIAM-R");
    console.log(result);
})();

module.exports = engine;
