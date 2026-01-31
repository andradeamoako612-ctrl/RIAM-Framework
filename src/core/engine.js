class Engine {
    constructor() {
        this.modules = []; // This will store all registered modes
    }

    init() {
        console.log("[Engine] Initializing engine...");
    }

    register(module) {
        this.modules.push(module);
        console.log(`[Engine] Module registered → ${module.name}`);
    }

    run() {
        console.log("[Engine] Running all registered modules...");
        this.modules.forEach(m => {
            if (typeof m.start === "function") {
                m.start();
            }
        });
    }
}

module.exports = Engine;

