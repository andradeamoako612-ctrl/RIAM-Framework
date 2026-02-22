// src/plugins/dataAnalyzer.js

module.exports = {
    name: "DataAnalyzer",

    preProcess(input) {
        return input.trim();
    },

    postProcess(output) {
        return output + "\n\n[Plugin: Data Analyzer Processed]";
    }
};
