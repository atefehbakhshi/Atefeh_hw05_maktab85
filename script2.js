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
        console.log(this.step)
        return this;
    },

}

counterStep.read().increase().increase().reset().increase().decrease().decrease().read();

