function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this._temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};
