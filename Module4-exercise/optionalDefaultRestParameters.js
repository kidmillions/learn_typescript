(function () {
    function buildAddressOptional(address1, city, state, address2) {
        var addr2 = (address2.length > 0) ? ', ' + address2 : '';
        displayAddress(address1 + addr2 + ', ' + city + ', ' + state);
    }
    function buildAddressRest(city, state) {
        var Address = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            Address[_i - 2] = arguments[_i];
        }
        var address = '';
        Address.forEach(function (addr) { return address += (addr.length > 0) ? addr + ', ' : ''; });
        address += city + ", " + state;
        displayAddress(address);
    }
    function displayAddress(msg) {
        result.innerHTML = msg;
    }
    var $ = function (id) { return document.getElementById(id); };
    var addressButton = $('addressButton'), address = $('address'), address2 = $('address2'), city = $('city'), state = $('state'), result = $('result');
    addressButton.addEventListener('click', function (e) { return buildAddressOptional(address.value, city.value, state.value, address2.value); });
}());
//# sourceMappingURL=optionalDefaultRestParameters.js.map