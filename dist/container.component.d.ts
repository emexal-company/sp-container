import { Base } from '@spectrum/sp-base';
export declare class Container extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    background: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-container': Container;
    }
}
