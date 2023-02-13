function attachEventsListeners() {
    let inputDistance = document.getElementById('inputDistance');
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');
    let outputDistance = document.getElementById('outputDistance');
    document.getElementById('convert').addEventListener('click', convert);

    let units = {
        m: 1,
        km: 1000,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        'in': 0.0254
    }

    function convert() {
        let toMeters = units[inputUnits.value] * Number(inputDistance.value);
        outputDistance.value = toMeters / units[outputUnits.value];
    }
}