function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this._temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  this._temperature++; // we know this returns undefined 
};
