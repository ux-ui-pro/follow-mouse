<div align="center">
<br>

<h1>follow-mouse</h1>
<p><sup>Simple function to create smooth effects for the mouse cursor on your website with <a href="https://www.npmjs.com/package/gsap">GSAP</a></sup></p>

[![npm](https://img.shields.io/npm/v/follow-mouse.svg?colorB=brightgreen)](https://www.npmjs.com/package/follow-mouse)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/follow-mouse.svg)](https://github.com/ux-ui-pro/follow-mouse)
[![NPM Downloads](https://img.shields.io/npm/dm/follow-mouse.svg?style=flat)](https://www.npmjs.org/package/follow-mouse)

<sup><a href="https://bundlephobia.com/package/follow-mouse">0.7kB gzipped</a></sup>
<h3><a href="https://codepen.io/ux-ui/full/dygzNmz">Demo</a></h3>

</div>
<br>

### Installation
```javascript
$ yarn add follow-mouse
```
<sup>or</sup>
```javascript
$ npm i follow-mouse
```

<br>

### Import
```javascript
import gsap from 'gsap'
import FollowMouse from 'follow-mouse'

FollowMouse.registerGSAP(gsap)

new FollowMouse({
	ease: 0.8
})
```
<br>

### License
follow-mouse is released under MIT license
