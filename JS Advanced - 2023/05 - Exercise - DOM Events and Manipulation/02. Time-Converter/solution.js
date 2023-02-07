function attachEventsListeners() {

    let allButtons = Array.from(document.querySelectorAll('input[type="button"]'));
    allButtons.forEach(button => button.addEventListener('click', converter))

    let daysOutput = document.getElementById('days');
    let hoursOutput = document.getElementById('hours');
    let minutesOutput = document.getElementById('minutes');
    let secondsOutput = document.getElementById('seconds');

    let unitInfo = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function converter(element) {
        let inputType = element.target.parentElement.children[0].htmlFor;
        let inputNumber = element.target.parentElement.children[1].value;

        let result = inputNumber / unitInfo[inputType];

        daysOutput.value = result * unitInfo['days'];
        hoursOutput.value = result * unitInfo['hours'];
        minutesOutput.value = result * unitInfo['minutes'];
        secondsOutput.value = result * unitInfo['seconds'];

    }
}