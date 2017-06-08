function addInput() {

    for (var i = 0; i < 3; i++) {
        var input = document.createElement('input');
        input.type = 'text';
        input.value = '';
        input.style.margin = '4px';
        input.style.cssFloat = 'left';
        input.style.clear = 'left';
        if (i == 0) {
            input.name = 'age';
            input.placeholder = 'age';
            input.id = 'age';
        }
        if (i == 1) {
            input.name = 'username';
            input.placeholder = 'user_name or ***user_name';
            input.id = 'user';
        }
        if (i == 2) {
            input.name = 'date';
            input.placeholder = 'dd/mm/yyyy'
            input.id = 'date';
        }
        document.querySelector('form').appendChild(input);
    }
    createSubmit();
    document.querySelector('button').remove();
}

function createSubmit() {
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Validate Me';
    submit.style.cssFloat = 'left';
    submit.style.clear = 'left';
    document.querySelector('form').appendChild(submit);
}
function required() {
    if (!requireAge() || !requireUser() || !requireDate()) {
        alert('Form check invalid data');
    } else {
        alert('Form is valid');
    }
}

function requireAge() {
    var age = document.getElementById('age').value;
    var reg = /^-{0,1}\d*\.{0,1}\d+$/;
    if ((reg.test(age)) && (age > -1)) {
        return true;
    } else {
        return false;
    }
}
function requireUser() {
    var name = document.getElementById('user').value;
    var spattern = /[*]/g;
    var upattern = /^user_/;
    var fullname = name.replace(spattern, '');
    if (!name) return false;
    if (!fullname.match(upattern)) {
        return false;
    } else {
        return true;
    }
}
function requireDate() {
    var date = document.getElementById('date').value;
    var dateReg = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;

    if (dateReg.test(date)) {
        return true;
    } else {
        return false;
    }
}

document.querySelector('form').onsubmit = function (e) {
    e.preventDefault();
    required();

};