'use strict';

describe('Thermostat', function() {
    var thermostat;

    beforeEach(function() {
      thermostat = new Thermostat;
    })
    it('has an initial setting of 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });
});
