$( document ).ready(function() {

  alert( "welcome" );
  var thermostat = new Thermostat();
  
  updateDisplay();

  $("#Up").click(function() {
    thermostat.up();
    updateDisplay();
  });

  $("#Down").click(function() {
    thermostat.down();
    updateDisplay();
  });

  $("#Reset").click(function() {
    thermostat.reset();
    updateDisplay();
  });

  $("#power-save").click(function() {
    thermostat.togglePowerMode();
    console.log(thermostat.power_mode)
    updateDisplay();
  });

  function updateDisplay() {
    $('#temperature').text(thermostat._temperature);
  }

});