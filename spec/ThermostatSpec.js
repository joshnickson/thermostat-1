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
      it('Thermostat.prototype.down decrease temperature by 1', function() {
        thermostat.down();
        expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMPERATURE - 1)
      });
      it('Minimum temperature is 10 degress', function() {
        var i;
        for (i=0; i<10; i++) {
          thermostat.down();
        }
        expect(function() {thermostat.down();}).toThrowError('Minimum temperature is 10');
      });
    });
});
