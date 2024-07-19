class EmployeeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const company = this.getAttribute('company') || 'Company Name';
        const image = this.getAttribute('image') || 'https://via.placeholder.com/200';
        const name = this.getAttribute('name') || 'Employee Name';
        const role = this.getAttribute('role') || 'Employee Role';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    width: 240px;
                    border: 2px solid #333;
                    border-radius: 16px;
                    overflow: hidden;
                    font-family: Arial, sans-serif;
                    font-size: 1.2em;
                    font-weight: bold;
                }
                .company {
                    background-color: white;
                    color: black;
                    padding: 16px;
                    text-align: center;
                    font-size: 1.2em;
                }
                .info {
                    background-color: #333;
                    color: white;
                    padding: 16px;
                    text-align: center;
                }
                .info img {
                    width: 200px;
                    height: 200px;
                    border-radius: 48px;
                    margin-bottom: 16px;
                }
                .role {
                    background-color: red;
                    color: white;
                    padding: 16px;
                    text-align: center;
                }
            </style>
            <div class="company">${company}</div>
            <div class="info">
                <img src="${image}" alt="${name}">
                <div>${name}</div>
            </div>
            <div class="role">${role}</div>
        `;
    }
}

customElements.define('employee-card', EmployeeCard);