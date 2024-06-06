import { calcPerimeter, calcArea } from "./rombusz.js";
class Romb {
    constructor() {
        this.bindHtml();
        this.HandleEvent();
    }
    bindHtml() {
        this.sideInput = document.querySelector('#side');
        this.alphaInput = document.querySelector('#alpha');
        this.perimeterInput = document.querySelector('#perimeter');
        this.areaInput = document.querySelector('#area');
        this.calcButton = document.querySelector('#calcButton');
    }
    HandleEvent() {
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.startCalc();
        });
    }
    startCalc() {
        var _a, _b;
        const side = Number((_a = this.sideInput) === null || _a === void 0 ? void 0 : _a.value);
        const alpha = Number((_b = this.alphaInput) === null || _b === void 0 ? void 0 : _b.value);
        const perimeter = calcPerimeter(side);
        const area = calcArea(side, alpha);
        this.renderResult(perimeter, area);
    }
    renderResult(perimeter, area) {
        if (this.perimeterInput) {
            this.perimeterInput.value = String(perimeter);
        }
        if (this.areaInput) {
            this.areaInput.value = String(area);
        }
    }
}
new Romb();
