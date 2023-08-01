"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{8050:function(t,e,i){i.d(e,{ad:function(){return ts}});var s,r,n=i(5568),o=i(8341),a=i(4794),l=i(7365),h=i(8376);i(2040);let u="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="10.1.0",f=new a.Yd("@firebase/firestore");function p(t,...e){if(f.logLevel<=a.in.DEBUG){let i=e.map(m);f.debug(`Firestore (${d}): ${t}`,...i)}}function g(t,...e){if(f.logLevel<=a.in.ERROR){let i=e.map(m);f.error(`Firestore (${d}): ${t}`,...i)}}function m(t){if("string"==typeof t)return t;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(t)}catch(e){return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t="Unexpected state"){let e=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+t;throw g(e),Error(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends l.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(c.UNAUTHENTICATED))}shutdown(){}}class w{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class N{constructor(t){this.t=t,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i,s=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve(),r=new T;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new T,t.enqueueRetryable(()=>s(this.currentUser))};let n=()=>{let e=r;t.enqueueRetryable(async()=>{await e.promise,await s(this.currentUser)})},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),n()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){let t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new T)}},0),n()}getToken(){let t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?("string"==typeof e.accessToken||E(),new v(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let t=this.auth&&this.auth.getUid();return null===t||"string"==typeof t||E(),new c(t)}}class C{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=c.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new C(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){let i=t=>{null!=t.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);let i=t.token!==this.R;return this.R=t.token,p("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>i(e))};let s=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit(t=>s(t)),setTimeout(()=>{if(!this.appCheck){let t=this.A.getImmediate({optional:!0});t?s(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?("string"==typeof t.token||E(),this.R=t.token,new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static V(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,i="";for(;i.length<20;){let s=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){let e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let e=0;e<t;e++)i[e]=Math.floor(256*Math.random());return i}(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%t.length))}return i}}function S(t,e){return t<e?-1:t>e?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t,e,i){void 0===e?e=0:e>t.length&&E(),void 0===i?i=t.length-e:i>t.length-e&&E(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return 0===D.comparator(this,t)}child(t){let e=this.segments.slice(this.offset,this.limit());return t instanceof D?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){let i=Math.min(t.length,e.length);for(let s=0;s<i;s++){let i=t.get(s),r=e.get(s);if(i<r)return -1;if(i>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class P extends D{construct(t,e,i){return new P(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){let e=[];for(let i of t){if(i.indexOf("//")>=0)throw new A(y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(t=>t.length>0))}return new P(e)}static emptyPath(){return new P([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.path=t}static fromPath(t){return new b(P.fromString(t))}static fromName(t){return new b(P.fromString(t).popFirst(5))}static empty(){return new b(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===P.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return P.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new b(new P(t.slice()))}}function U(t){return"IndexedDbTransactionError"===t.name}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.comparator=t,this.root=e||x.EMPTY}insert(t,e){return new O(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,x.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,x.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){let i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){let s=this.comparator(t,i.key);if(0===s)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){let t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new F(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new F(this.root,t,this.comparator,!1)}getReverseIterator(){return new F(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new F(this.root,t,this.comparator,!0)}}class F{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class x{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=null!=i?i:x.RED,this.left=null!=s?s:x.EMPTY,this.right=null!=r?r:x.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new x(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this,r=i(t,s.key);return(s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i))).fixUp()}removeMin(){if(this.left.isEmpty())return x.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,e){let i,s=this;if(0>e(t,s.key))s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return x.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){let t=this.copy(null,null,x.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,x.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();let t=this.left.check();if(t!==this.right.check())throw E();return t+(this.isRed()?0:1)}}x.EMPTY=null,x.RED=!0,x.BLACK=!1,x.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(t,e,i,s,r){return this}insert(t,e,i){return new x(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){let i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){let s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){let e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new V(this.data.getIterator())}getIteratorFrom(t){return new V(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof M)||this.size!==t.size)return!1;let e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){let t=e.getNext().key,s=i.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){let t=[];return this.forEach(e=>{t.push(e)}),t}toString(){let t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){let e=new M(this.comparator);return e.data=t,e}}class V{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.binaryString=t}static fromBase64String(t){let e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new z("Invalid base64 string: "+t):t}}(t);return new K(e)}static fromUint8Array(t){let e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new K(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){let e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return S(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}function $(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}K.EMPTY_BYTE_STRING=new K("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,e,i,s,r,n,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=n,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class G{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new G("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof G&&t.projectId===this.projectId&&t.database===this.database}}new O(b.comparator),new O(b.comparator),new O(b.comparator),new M(b.comparator),new M(S),(r=s||(s={}))[r.OK=0]="OK",r[r.CANCELLED=1]="CANCELLED",r[r.UNKNOWN=2]="UNKNOWN",r[r.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",r[r.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",r[r.NOT_FOUND=5]="NOT_FOUND",r[r.ALREADY_EXISTS=6]="ALREADY_EXISTS",r[r.PERMISSION_DENIED=7]="PERMISSION_DENIED",r[r.UNAUTHENTICATED=16]="UNAUTHENTICATED",r[r.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",r[r.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",r[r.ABORTED=10]="ABORTED",r[r.OUT_OF_RANGE=11]="OUT_OF_RANGE",r[r.UNIMPLEMENTED=12]="UNIMPLEMENTED",r[r.INTERNAL=13]="INTERNAL",r[r.UNAVAILABLE=14]="UNAVAILABLE",r[r.DATA_LOSS=15]="DATA_LOSS",new h.z8([4294967295,4294967295],0);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){var i;if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt($(t.integerValue));else if("doubleValue"in t){let i=$(t.doubleValue);isNaN(i)?this.Et(e,13):(this.Et(e,15),0===i&&1/i==-1/0?e.dt(0):e.dt(i))}else if("timestampValue"in t){let i=t.timestampValue;this.Et(e,20),"string"==typeof i?e.At(i):(e.At(`${i.seconds||""}`),e.dt(i.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft("string"==typeof(i=t.bytesValue)?K.fromBase64String(i):K.fromUint8Array(i)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){let i=t.geoPointValue;this.Et(e,45),e.dt(i.latitude||0),e.dt(i.longitude||0)}else"mapValue"in t?"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):E()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){let i=t.fields||{};for(let t of(this.Et(e,55),Object.keys(i)))this.Rt(t,e),this.It(i[t],e)}wt(t,e){let i=t.values||[];for(let t of(this.Et(e,50),i))this.It(t,e)}gt(t,e){this.Et(e,37),b.fromName(t).path.forEach(t=>{this.Et(e,60),this.St(t,e)})}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}j.bt=new j,new Uint8Array(0);class q{constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}static withCacheSize(t){return new q(t,q.DEFAULT_COLLECTION_PERCENTILE,q.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}function H(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */q.DEFAULT_COLLECTION_PERCENTILE=10,q.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,q.DEFAULT=new q(41943040,q.DEFAULT_COLLECTION_PERCENTILE,q.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),q.DISABLED=new q(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e,i=1e3,s=1.5,r=6e4){this.ii=t,this.timerId=e,this.So=i,this.bo=s,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();let e=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),s=Math.max(0,e-i);s>0&&p("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e,i,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,i,s,r){let n=Date.now()+i,o=new Y(t,e,n,s,r);return o.start(i),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new A(y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=c.UNAUTHENTICATED,this.clientId=L.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(i,t=>(p("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){let e=function(t,e){if(g("AsyncQueue",`${e}: ${t}`),U(t))return new A(y.UNAVAILABLE,`${e}: ${t}`);throw t}(i,"Failed to shutdown persistence");t.reject(e)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t){let e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){var e,i;if(void 0===t.host){if(void 0!==t.ssl)throw new A(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new A(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,i,s){if(!0===e&&!0===s)throw new A(y.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W(null!==(i=t.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new A(y.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new A(y.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new A(y.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){var e,i;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,i=t.experimentalLongPollingOptions,e.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class tt{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new A(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new I;switch(t.type){case"firstParty":return new _(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new A(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let e=J.get(t);e&&(p("ComponentProvider","Removing Datastore"),J.delete(t),e.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new X(this,"async_queue_retry"),this.Xa=()=>{let t=H();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};let t=H();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;let e=H();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});let e=new T;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!U(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){let e=this.Wa.then(()=>(this.Ja=!0,t().catch(t=>{let e;this.Ha=t,this.Ja=!1;let i=(e=t.message||"",t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e);throw g("INTERNAL UNHANDLED ERROR: ",i),t}).then(t=>(this.Ja=!1,t))));return this.Wa=e,e}enqueueAfterDelay(t,e,i){this.eu(),this.Za.indexOf(t)>-1&&(e=0);let s=Y.createAndSchedule(this,t,e,i,t=>this.ru(t));return this.ja.push(s),s}eu(){this.Ha&&E()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(let e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{for(let e of(this.ja.sort((t,e)=>t.targetTimeMs-e.targetTimeMs),this.ja))if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){let e=this.ja.indexOf(t);this.ja.splice(e,1)}}class ti extends tt{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new te,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||function(t){var e,i,s,r,n,o;let a=t._freezeSettings(),l=(r=t._databaseId,n=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new B(r,n,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,W(a.experimentalLongPollingOptions),a.useFetchStreams));t._firestoreClient=new Q(t._authCredentials,t._appCheckCredentials,t._queue,l),(null===(i=a.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(s=a.localCache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.localCache.kind,_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider})}(this),this._firestoreClient.terminate()}}function ts(t,e){let i="object"==typeof t?t:(0,n.Mq)(),s=(0,n.qX)(i,"firestore").getImmediate({identifier:"string"==typeof t?t:e||"(default)"});if(!s._initialized){let t=(0,l.P0)("firestore");t&&function(t,e,i,s={}){var r;let n=(t=function(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let i=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{var e;let i=(e=t).constructor?e.constructor.name:null;return i?`a custom ${i} object`:"an object"}}return"function"==typeof t?"a function":E()}(t);throw new A(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}(t,tt))._getSettings(),o=`${e}:${i}`;if("firestore.googleapis.com"!==n.host&&n.host!==o&&function(t){if(f.logLevel<=a.in.WARN){let e=[].map(m);f.warn(`Firestore (${d}): ${t}`,...e)}}("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},n),{host:o,ssl:!1})),s.mockUserToken){let e,i;if("string"==typeof s.mockUserToken)e=s.mockUserToken,i=c.MOCK_USER;else{e=(0,l.Sg)(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);let n=s.mockUserToken.sub||s.mockUserToken.user_id;if(!n)throw new A(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new c(n)}t._authCredentials=new w(new v(e,i))}}(s,...t)}return s}!function(t,e=!0){d=n.Jn,(0,n.Xd)(new o.wA("firestore",(t,{instanceIdentifier:i,options:s})=>{let r=t.getProvider("app").getImmediate(),n=new ti(new N(t.getProvider("auth-internal")),new R(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new A(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new G(t.options.projectId,e)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),n._setSettings(s),n},"PUBLIC").setMultipleInstances(!0)),(0,n.KN)(u,"4.1.0",void 0),(0,n.KN)(u,"4.1.0","esm2017")}()}}]);