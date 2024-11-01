class CustomCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    static get observedAttributes() {
        return ['card-title', 'card-bg-color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const cardTitle = this.getAttribute('card-title') || 'Default Title';
        const cardBgColor = this.getAttribute('card-bg-color') || '#fff';

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background-color: var(--card-bg-color, ${cardBgColor});
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    padding: var(--card-padding, 16px);
                    width: 300px;
                }
                .header {
                    font-weight: bold;
                    font-size: 1.2em;
                    margin-bottom: 12px;
                }
                .content {
                    margin-bottom: 12px;
                }
                .footer {
                    text-align: right;
                }
            </style>
            <div class="card" style="--card-bg-color: ${cardBgColor};">
                <div class="header"><slot name="header">${cardTitle}</slot></div>
                <div class="content"><slot name="content"></slot></div>
                <div class="footer"><slot name="footer"></slot></div>
            </div>
        `;
    }
}

customElements.define('custom-card', CustomCard);
