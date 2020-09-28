import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';
export default function template() {
    const styles = {
        "background-color": (this.background) ? `var(--spectrum-global-color-${this.background})` : `var(--spectrum-global-color-gray-50)`,
    };
    return html `
        <div style="${styleMap(styles)}" id="container">
          <slot style="${styleMap(styles)}"></slot>
        </div>
        `;
}
//# sourceMappingURL=container.template.js.map