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
        expect(function() {thermostat.down() }).toThrowError('Minimum temperature is 10');
      });

      it('Max temperature is 25deg in power saving mode', function() {
        thermostat._temperature = 25;
        expect( function() { thermostat.up() }).toThrowError('Max temperature is 25');
      });

      it('Max temperature is 32deg when not in power saving mode', function() {
        thermostat.power_mode = false;
        thermostat._temperature = 32;
        expect( function() { thermostat.up() }).toThrowError('Max temperature is 32');
      });

      it('Resets the temperature', function() {
        thermostat._temperature = 23;
        thermostat.reset();
        expect(thermostat.temperature()).toEqual(20);
      });

      it('returns energy usage information', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
        thermostat._temperature = 17;
        expect(thermostat.energyUsage()).toEqual('low-usage');        
        thermostat._temperature = 26;
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });

    });
});
