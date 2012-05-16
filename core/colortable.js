/*
 * 
 *                  xxxxxxx      xxxxxxx
 *                   x:::::x    x:::::x 
 *                    x:::::x  x:::::x  
 *                     x:::::xx:::::x   
 *                      x::::::::::x    
 *                       x::::::::x     
 *                       x::::::::x     
 *                      x::::::::::x    
 *                     x:::::xx:::::x   
 *                    x:::::x  x:::::x  
 *                   x:::::x    x:::::x 
 *              THE xxxxxxx      xxxxxxx TOOLKIT
 *                    
 *                  http://www.goXTK.com
 *                   
 * Copyright (c) 2012 The X Toolkit Developers <dev@goXTK.com>
 *                   
 *    The X Toolkit (XTK) is licensed under the MIT License:
 *      http://www.opensource.org/licenses/mit-license.php
 * 
 *      "Free software" is a matter of liberty, not price.
 *      "Free" as in "free speech", not as in "free beer".
 *                                         - Richard M. Stallman
 * 
 * 
 */

// provides
goog.provide('X.colortable');

// requires
goog.require('X.base');
goog.require('X.file');
goog.require('goog.structs.Map');



/**
 * Create a container for a colortable.
 * 
 * @constructor
 * @extends X.base
 */
X.colortable = function() {

  //
  // call the standard constructor of X.base
  goog.base(this);
  
  //
  // class attributes
  
  /**
   * @inheritDoc
   * @const
   */
  this._classname = 'colortable';
  
  /**
   * The internal hash map to store the value-color mapping.
   * 
   * @type {!goog.structs.Map}
   * @protected
   */
  this._map = new goog.structs.Map();
  
  /**
   * The file of this color table.
   * 
   * @type {?string|X.file}
   * @protected
   */
  this._file = null;
  
};
// inherit from X.base
goog.inherits(X.colortable, X.base);


/**
 * Add an entry to this color table.
 * 
 * @param value
 * @param label
 * @param r
 * @param g
 * @param b
 * @param a
 * @throws {Error} If the given values are invalid.
 */
X.colortable.prototype.add = function(value, label, r, g, b, a) {

  if (!goog.isNumber(value) || !goog.isNumber(r) || !goog.isNumber(g) ||
      !goog.isNumber(b) || !goog.isNumber(a)) {
    
    throw new Error('Invalid color table entry.');
    
  }
  
  this._map.set(value, [label, r, g, b, a]);
  
  this._dirty = true;
  
};


/**
 * Get the file of this color table.
 * 
 * @return {?X.file} The file of this color table.
 * @public
 */
X.colortable.prototype.__defineGetter__('file', function() {

  return this._file;
  
});


/**
 * Set the file for this color table.
 * 
 * @param {?X.file|string} file The file path or an X.file object containing the
 *          path.
 * @public
 */
X.colortable.prototype.__defineSetter__('file', function(file) {

  if (!goog.isDefAndNotNull(file)) {
    
    // null files are allowed
    this._file = null;
    return;
    
  }
  
  if (goog.isString(file)) {
    
    file = new X.file(file);
    
  }
  
  this._file = file;
  
});