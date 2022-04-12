export class NegotiationsView {

    private element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    template(): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>25/10/2017</td>
                        <td>100</td>
                        <td>5.000,00</td>
                    </tr>
                </tbody>
            </table>
        `;
    }
    update(): void {
        this.element.innerHTML = this.template();
    }
}