'use strict'
const counterStep = {
    step: 0,
    increase: function () {
        this.step++;
        return this;
    },
    decrease: function () {
        this.step--;
        return this;
    },
    reset: function () {
        this.step = 0;
        return this;
    },
    read: function () {
        const pTag = document.createElement("p");
        pTag.innerHTML = this.step;
        const display = document.getElementById('display')
        document.body.insertBefore(pTag, display)
        return this;
    },
}

counterStep.read().increase().read().increase().reset().increase().decrease().decrease().read().reset().decrease().read().increase().read();

