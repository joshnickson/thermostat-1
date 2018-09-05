'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this._temperature = this.DEFAULT_TEMPERATURE;
  this.power_mode = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  if (this._temperature >= this._maxTemperature()) {
    throw new Error('Max temperature is ' + this._maxTemperature());
  } else this._temperature++;
};

Thermostat.prototype.down = function() {
  if (this._temperature <= 10) {
    throw new Error('Minimum temperature is 10');
  } else this._temperature--;
};

Thermostat.prototype._maxTemperature = function() {
  var max_temp;
  (this.power_mode === true) ? max_temp = 25 : max_temp = 32;
  return max_temp;
};

Thermostat.prototype.reset = function() {
  this._temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return 'low-usage';
  } else if (this._temperature < 25) {
    return 'medium-usage';
  } else return 'high-usage';
};

Thermostat.prototype.togglePowerMode = function() {
  this.power_mode = !this.power_mode
  if(this._temperature > this._maxTemperature()) {
    this._temperature = this._maxTemperature();
  };
};