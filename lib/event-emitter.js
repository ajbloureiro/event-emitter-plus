var Util = require( 'findhit-util' ),
        Stack = require( '' );

// -----------------------------------------------------------------------------

module.exports = function EventEmitter() {
    this
}

/* class methods */

/* instance methods */

EventEmitter.prototype.on = function ( scope, listener, options ) {

};

    EventEmitter.prototype.once = function ( scope, listener, options ) {
        var options = Util.is.Object( options ) ? options : {};

        options.runLimit = 1;

        this.on( scope, listener, options );
    };

EventEmitter.prototype.off = function ( scope, listener ) {

};

    EventEmitter.prototype.offAll = function ( scope ) {
        return this.off( '*' );
    };

EventEmitter.prototype.fire = function (    ) {

};

Object.defineProperty( EventEmitter.prototype, 'eep', {
    enumerable: true,
    writable: false,
    value: function () {
        if( this._eep ) return this._eep;

        // Add context for listeners storage
        Object.defineProperty( this, '_eep', {
            enumerable: false,
            writable: true,
            value: {},
        });
    },
});

/* private methods */

exports.eventualize = function eventualize( Class ) {

    // Mixin prototype
    Class.prototype = Util.is.Object( object.prototype ) || {};
    Util.extend( Class.prototype, EventEmitter.prototype );

    return Class;
};
