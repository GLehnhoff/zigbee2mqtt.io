"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[18586],{99030:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-b0b41224",path:"/devices/3RSS009Z.html",title:"Third Reality 3RSS009Z control via MQTT",lang:"en-US",frontmatter:{title:"Third Reality 3RSS009Z control via MQTT",description:"Integrate your Third Reality 3RSS009Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-06-18T12:49:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Swap ON/OFF",slug:"swap-on-off",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/3RSS009Z.md",git:{updatedTime:1668936147e3}}},91518:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});const a=(0,i(66252).uE)('<h1 id="third-reality-3rss009z" tabindex="-1"><a class="header-anchor" href="#third-reality-3rss009z" aria-hidden="true">#</a> Third Reality 3RSS009Z</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>3RSS009Z</td></tr><tr><td>Vendor</td><td>Third Reality</td></tr><tr><td>Description</td><td>Smart switch Gen3</td></tr><tr><td>Exposes</td><td>switch (state), voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/3RSS009Z.jpg" alt="Third Reality 3RSS009Z"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To put the device in pairing mode, hold the switch&#39;s button for 30 seconds until LED starts blinking fast (2 blinks per second)</p><h3 id="swap-on-off" tabindex="-1"><a class="header-anchor" href="#swap-on-off" aria-hidden="true">#</a> Swap ON/OFF</h3><p>To reverse the On/Off direction of the switch, hold the button for more than 10 seconds until the LED turns on and then release</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),o={},d=(0,i(83744).Z)(o,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);