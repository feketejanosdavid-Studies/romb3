class Romb {
    //kötések (bind)
    sideInput?: HTMLInputElement | null;
    alphaInput?: HTMLInputElement | null;
    perimeterInput?: HTMLInputElement | null;
    areaInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;



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
        this.calcButton?.addEventListener('click', () => {
        this.startCalc();
        })
    }

    startCalc() {
        
        const side = Number(this.sideInput?.value);
        const alpha = Number(this.alphaInput?.value);
        const perimeter = this.calcPerimeter(side);
        const area = this.calcArea(side, alpha);
        this.renderResult(perimeter, area);

        

    }

    calcPerimeter(side: number): number {
        return side * 4;
    }

    calcArea(side: number, alpha: number): number {
        const rad = alpha * Math.PI / 180;
        return Math.pow(side, 2) * Math.sin(rad);
    }

    renderResult(perimeter: number, area: number) {
        if (this.perimeterInput) {
        this.perimeterInput.value = String(perimeter)
        }
        if (this.areaInput) {
        this.areaInput.value = String(area)
        }

        
    }
}
new Romb();