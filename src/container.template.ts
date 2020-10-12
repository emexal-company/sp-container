/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Container } from './container.component';

export default function template(this: Container) {

    const styles = {
        "background-color": (this.background) ? `var(--spectrum-global-color-${this.background})` : `var(--spectrum-global-color-gray-50)`,
    };

    return html`
        <div style="${styleMap(styles)}" id="container">
          <slot style="${styleMap(styles)}"></slot>
        </div>
        `;
}
