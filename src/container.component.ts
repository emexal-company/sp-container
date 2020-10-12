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

import { query, css, customElement, LitElement, property, PropertyValues } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import containerStyles from './container.styles';
import template from './container.template';

@customElement('sp-container')
export class Container extends Base {
  public static componentStyles = [containerStyles];

  @property({ type: String })  public background: string = '';

  protected render() {
    return template.call(this);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'sp-container': Container;
  }
}