/**
 * @license
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

foam.CLASS({
  package: 'foam.u2',
  name: 'PopupView',
  extends: 'foam.u2.Element',

  axioms: [
    foam.u2.CSS.create({
      code: function() {/*
      ^ {
        background: #999;
        box-shadow: 3px 3px 6px 0 gray;
        color: white;
        font-size: 18px;
        opacity: 0.9;
        padding: 20px;
        position: absolute;
        box-sizing: border-box;
        z-index: 999;
      }
      */}
    })
  ],

  properties: [
    'x',
    'y',
    'width',
    'height',
    'maxWidth',
    'maxHeight'
  ],

  methods: [
    function initE() {
      var self     = this;
      var parent   = this.parentNode;
      var close    = function() {
        self.remove();
        bg.remove();
      };

      if ( ! this.y       ) this.y = (parent.el().clientHeight - this.height)/2;
      if ( ! this.x       ) this.x = (parent.el().clientWidth  - this.width )/2;
      if ( this.width     ) this.style({width    : this.width     + 'px'});
      if ( this.height    ) this.style({height   : this.height    + 'px'});
      if ( this.maxWidth  ) this.style({maxWidth : this.maxWidth  + 'px'});
      if ( this.maxHeight ) this.style({maxHeight: this.maxHeight + 'px'});

      // Make a full-screen transparent background, which when clicked,
      // closes this Popup
      var bg = this.E('div').
        style({
          position: 'absolute',
          width: '10000px',
          height: '10000px',
          opacity: 0,
          top: 0,
          zIndex: 998
        }).
        on('click', close).
        write();

      this.
        addClass(this.myClass()).
        style({
          left: this.x + 'px',
          top:  this.y + 'px'
        }).
        onunload.sub(close);

      parent.style({position: 'relative'});
    }
  ]
});
