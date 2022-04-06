const assert = require('assert');
const logUtil = require('../src/helpers/logger');

describe("Simple unit testing", () => {
    before(() => {
        logUtil.info("Start UnitTesting");
    });
    after(() => {
        logUtil.info("End UnitTesting");
    });

    describe("UnitTesting01",()=>{
        it(" True ",()=>{
            assert.ok(true);
        });
    });
});