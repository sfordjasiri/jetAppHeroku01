/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(["ojs/ojcore","ojs/ojkeysetimpl"],function(t,e){"use strict";var n=function(){};t.Object.createSubclass(n,t.Object,"KeySet"),t.KeySet=n,n.prototype.SetInternal=function(t){this._keys=t},n.prototype.AddOrDeleteInternal=function(t,e){var n,r;return null==(n=t?this._add(e):this._remove(e))?this:((r=Object.create(Object.getPrototypeOf(this))).SetInternal(n),r)},n.prototype._add=function(t){var e=this,n=null;return t.forEach(function(t){t!==e.NOT_A_KEY&&e.get(t)===e.NOT_A_KEY&&(null==n&&(n=e.Clone()),n.add(t))}),n},n.prototype._remove=function(t){var e,n=this,r=null;return 0===this._keys.size?null:(t.forEach(function(t){(e=n.get(t))!==n.NOT_A_KEY&&(null==r&&(r=n.Clone()),r.delete(e))}),r)},n.prototype.GetInternalSize=function(){return this._keys.size},n.prototype.Clone=function(){return new Set(this._keys)},e.call(n.prototype);var r=function(t){this.InitializeWithKeys(t)};t.Object.createSubclass(r,n,"ExpandedKeySet"),t.ExpandedKeySet=r,r.prototype.add=function(t){return this.AddOrDeleteInternal(!0,t)},r.prototype.addAll=function(){return new o},r.prototype.isAddAll=function(){return!1},r.prototype.delete=function(t){return this.AddOrDeleteInternal(!1,t)},r.prototype.clear=function(){return 0===this.GetInternalSize()?this:new r},r.prototype.has=function(t){return this.get(t)!==this.NOT_A_KEY},r.prototype.values=function(){return this.Clone()};var o=function(){this.InitializeWithKeys(null)};t.Object.createSubclass(o,n,"ExpandAllKeySet"),t.ExpandAllKeySet=o,o.prototype.add=function(t){return this.AddOrDeleteInternal(!1,t)},o.prototype.addAll=function(){return 0===this.GetInternalSize()?this:new o},o.prototype.isAddAll=function(){return!0},o.prototype.delete=function(t){return this.AddOrDeleteInternal(!0,t)},o.prototype.clear=function(){return new r},o.prototype.has=function(t){return this.get(t)===this.NOT_A_KEY},o.prototype.deletedValues=function(){return this.Clone()};e=function(t){this.InitializeWithKeys(t)};t.Object.createSubclass(e,n,"KeySetImpl"),t.KeySetImpl=e,e.prototype.add=function(t){return this.AddOrDeleteInternal(!0,t)},e.prototype.addAll=function(){return new i},e.prototype.isAddAll=function(){return!1},e.prototype.delete=function(t){return this.AddOrDeleteInternal(!1,t)},e.prototype.clear=function(){return 0===this.GetInternalSize()?this:new e},e.prototype.has=function(t){return this.get(t)!==this.NOT_A_KEY},e.prototype.values=function(){return this.Clone()};var i=function(){this.InitializeWithKeys(null)};t.Object.createSubclass(i,n,"AllKeySetImpl"),t.AllKeySetImpl=i,i.prototype.add=function(t){return this.AddOrDeleteInternal(!1,t)},i.prototype.addAll=function(){return 0===this.GetInternalSize()?this:new i},i.prototype.isAddAll=function(){return!0},i.prototype.delete=function(t){return this.AddOrDeleteInternal(!0,t)},i.prototype.clear=function(){return new e},i.prototype.has=function(t){return this.get(t)===this.NOT_A_KEY},i.prototype.deletedValues=function(){return this.Clone()};var l={toArray:function(t){var e,n=t.isAddAll()?t.deletedValues():t.values();return Array.from?e=Array.from(n):(e=[],n.forEach(function(t){e.push(t)})),e.inverted=t.isAddAll(),e},toKeySet:function(t){return(t.inverted?new i:new e).add(t)}};return{KeySet:n,ExpandedKeySet:r,ExpandAllKeySet:o,KeySetImpl:e,AllKeySetImpl:i,KeySetUtils:l}});