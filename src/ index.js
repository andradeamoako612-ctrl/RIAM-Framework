
// Import Engine and Modes
const Engine = require("./core/engine");
const RSOF = require("./modes/RSOF/index");
const RIAMR = require("./modes/RIAM-R/index");
const loadConfig = require("./config/env");

// Load configuration
const config = loadConfig();

// Initialize the engine
const engine = new Engine();
engine.init();

// Create mode instances
const rsof = new RSOF();
const riamr = new RIAMR();

// Register modes with the engine
engine.register(rsof);
engine.register(riamr);

// Start all registered modes
console.log("=== Starting all modes via engine ===");
engine.run();

console.log(`Framework running in ${config.mode} mode on port ${config.port}`);
