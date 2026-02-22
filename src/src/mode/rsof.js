// src/modes/rsof.js

module.exports = {
    name: "RSOF",

    async execute(input, engine) {
        return `
[RSOF MODE ACTIVE]
Here is a direct and simple response:

→ You asked: "${input}"

→ Memory Awareness:
Short-term memory stored entries: ${engine.memory.shortTerm.length}
        `;
    }
};
