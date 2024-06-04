var Romb = /** @class */ (function () {
    function Romb() {
        this.bindHtml();
        this.HandleEvent();
    }
    Romb.prototype.bindHtml = function () {
        this.sideInput = document.querySelector('#side');
        this.alphaInput = document.querySelector('#alpha');
        this.perimeterInput = document.querySelector('#perimeter');
        this.areaInput = document.querySelector('#area');
        this.calcButton = document.querySelector('#calcButton');
    };
    Romb.prototype.HandleEvent = function () {
        var _this = this;
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.startCalc();
        });
    };
    Romb.prototype.startCalc = function () {
        var _a, _b;
        var side = Number((_a = this.sideInput) === null || _a === void 0 ? void 0 : _a.value);
        var alpha = Number((_b = this.alphaInput) === null || _b === void 0 ? void 0 : _b.value);
        var perimeter = this.calcPerimeter(side);
        var area = this.calcArea(side, alpha);
        this.renderResult(perimeter, area);
    };
    Romb.prototype.calcPerimeter = function (side) {
        return side * 4;
    };
    Romb.prototype.calcArea = function (side, alpha) {
        var rad = alpha * Math.PI / 180;
        return Math.pow(side, 2) * Math.sin(rad);
    };
    Romb.prototype.renderResult = function (perimeter, area) {
        if (this.perimeterInput) {
            this.perimeterInput.value = String(perimeter);
        }
        if (this.areaInput) {
            this.areaInput.value = String(area);
        }
    };
    return Romb;
}());
new Romb();
