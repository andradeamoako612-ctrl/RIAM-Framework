// src/engine.js

class RIAMEngine {
    constructor(config = {}) {
        this.modes = {};                  // Registered modes
        this.memory = {                   // Basic memory system
            shortTerm: [],
            longTerm: []
        };
        this.plugins = [];                // Registered plugins
        this.config = config;
    }

    // Register a mode (RSOF, RIAM-R, custom modes)
    registerMode(name, modeObject) {
        this.modes[name] = modeObject;
    }

    // Register plugin (tools, analyzers, etc.)
    registerPlugin(plugin) {
        this.plugins.push(plugin);
    }

    // Store memory
    remember(data, type = "short") {
        if (type === "short") {
            this.memory.shortTerm.push(data);
        } else {
            this.memory.longTerm.push(data);
        }
    }

    // Retrieve memory summary
    recall() {
        return {
            shortTerm: this.memory.shortTerm.slice(-5),
            longTerm: this.memory.longTerm
        };
    }

    // 🔥 CORE AI EXECUTION
    async run(input, modeName = "RSOF") {
        const mode = this.modes[modeName];

        if (!mode) throw new Error(`Mode ${modeName} not found.`);

        // Step 1: Store input in memory
        this.remember({ input, timestamp: Date.now() }, "short");

        // Step 2: Pre-process (plugins)
        let processed = input;
        for (const plugin of this.plugins) {
            if (plugin.preProcess) {
                processed = await plugin.preProcess(processed);
            }
        }

        // Step 3: Run mode logic
        let output = await mode.execute(processed, this);

        // Step 4: Post-process (plugins)
        for (const plugin of this.plugins) {
            if (plugin.postProcess) {
                output = await plugin.postProcess(output);
            }
        }

        return output;
    }
}

module.exports = RIAMEngine;
