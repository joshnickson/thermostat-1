'use strict';

describe('Thermostat', function() {
    var thermostat;

    beforeEach(function() {
      thermostat = new Thermostat;
    })
    it('has an initial setting of 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });

    describe('Thermostat temperature moderation', function() {
      it('Thermostat.prototype.up increases temperature by 1', function() {
        thermostat.up();
        expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMPERATURE + 1)
      });
    });
});
