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

Thermostat.prototype.down = function() {
  if (this._temperature === 10) {
    throw new Error('Minimum temperature is 10');
  } else {
    this._temperature--; // we know this returns undefined
  }
};
