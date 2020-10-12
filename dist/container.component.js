import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import containerStyles from './container.styles';
import template from './container.template';
let Container = class Container extends Base {
    constructor() {
        super(...arguments);
        this.background = '';
    }
    render() {
        return template.call(this);
    }
};
Container.componentStyles = [containerStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Container.prototype, "background", void 0);
Container = __decorate([
    customElement('sp-container')
], Container);
export { Container };
//# sourceMappingURL=container.component.js.map