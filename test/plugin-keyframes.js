"use strict";

var assert = require("assert"),

    postcss = require("postcss"),
    
    scoping   = require("../src/plugins/scoping"),
    keyframes = require("../src/plugins/keyframes");

describe("postcss-modular-css", function() {
    describe("plugin-keyframes", function() {
        it("should update scoped animations from the scoping plugin's message", function() {
            var out = postcss([ scoping, keyframes ]).process(
                    "@keyframes kooga { } .wooga { animation: kooga; }"
                );
            
            assert.equal(
                out.css,
                "@keyframes mcb4af99404319798e981c4177a3a110fc_kooga { } " +
                ".mcb4af99404319798e981c4177a3a110fc_wooga { animation: mcb4af99404319798e981c4177a3a110fc_kooga; }"
            );
        });

        it("should update scoped prefixed animations from the scoping plugin's message", function() {
            var out = postcss([ scoping, keyframes ]).process(
                    "@-webkit-keyframes kooga { } .wooga { animation: kooga; }"
                );
            
            assert.equal(
                out.css,
                "@-webkit-keyframes mcda556213f48c595171cbc3ab40b8b727_kooga { } " +
                ".mcda556213f48c595171cbc3ab40b8b727_wooga { animation: mcda556213f48c595171cbc3ab40b8b727_kooga; }"
            );
        });
    });
});
