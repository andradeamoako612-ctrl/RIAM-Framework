const Engine = require("./core/engine");
const Router = require("./core/router");
const loadConfig = require("./config/env");

const config = loadConfig();
const engine = new Engine();
const router = new Router();

console.log("=== RIAM Framework Booting ===");
engine.init();
router.init();
console.log(`Framework running in ${config.mode} mode on port ${config.port}`);
