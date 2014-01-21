/*
  A simple utility library.

  This was made because I wanted something similar to Apache commons.  
  Probably not bullet proof, so on the off chance someone is viewing this or
  want to use it, becareful.
*/

var ObjectUtils = {

  'getType': function(input) {
    return typeof input;
  },

  'isNull': function(input) {
    return ( null === input || "undefined" === getType(input) );
  },
  
  'isNotNull': function(input) {
    return !this.isNull(input);
  },
  
  'isString': function(input) {
    return "string" === this.getType(input);
  },
  
  'isNumber': function(input) {
    return "number" === this.getType(input);
  },
  
  'isArray': funnction(input) {
    return Array.isArray(input);
  },
  
  'isObject': function(input) {
    return !isArray(input) && "object" === this.getType(input);
  }
};

var StringUtils = {
  'isNull': function(input) {
    return ObjectUtils.isNull(input);
  },
  
  'isNotNull': function(input) {
    return ObjectUtils.isNotNull(input);
  },
  
  'isString': function(input) {
    return ObjectUtils.isString(input);
  }
  
  'isEmpty': function(input) {
    return !!input;
  },
  
  'isNotEmpty': function(input) {
    return !input;
  },
  
  'isBlank': function(input) {
    return ObjectUtils.isNull(input) || !/\S/.test(input);
  },
  
  'isNotBlank': function(input) {
    return !this.isBlank(input);
  },
  
  'isNumeric': function(input) {
    return !isNaN(input);
  },
  
  'isNotNumeric': function(input) {
    return isNaN(input);
  },
  
  'isAlpha': function(input) {
    return this.isNotBlank(input) &&  /^[a-zA-Z/s]+$/.test(input);
  },
  
  'isNotAlpha': function(input) {
    return !this.isAlpha(input);
  },
  
  'isAplhaNumeric': function(input) {
    return this.isNotBlank(input) && /^[a-zA-Z0-9?/\S]+$/.test(input);
  },
  
  'isNotAlphaNumeric': function(input) {
    return !this.isAlphaNumeric(input);
  }
};
