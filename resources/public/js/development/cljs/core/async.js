// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23860 = arguments.length;
switch (G__23860) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23861 = (function (f,blockable,meta23862){
this.f = f;
this.blockable = blockable;
this.meta23862 = meta23862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23863,meta23862__$1){
var self__ = this;
var _23863__$1 = this;
return (new cljs.core.async.t_cljs$core$async23861(self__.f,self__.blockable,meta23862__$1));
});

cljs.core.async.t_cljs$core$async23861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23863){
var self__ = this;
var _23863__$1 = this;
return self__.meta23862;
});

cljs.core.async.t_cljs$core$async23861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23862","meta23862",1127747251,null)], null);
});

cljs.core.async.t_cljs$core$async23861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23861";

cljs.core.async.t_cljs$core$async23861.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23861");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23861.
 */
cljs.core.async.__GT_t_cljs$core$async23861 = (function cljs$core$async$__GT_t_cljs$core$async23861(f__$1,blockable__$1,meta23862){
return (new cljs.core.async.t_cljs$core$async23861(f__$1,blockable__$1,meta23862));
});

}

return (new cljs.core.async.t_cljs$core$async23861(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23867 = arguments.length;
switch (G__23867) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23870 = arguments.length;
switch (G__23870) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23873 = arguments.length;
switch (G__23873) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23875 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23875);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23875,ret){
return (function (){
return fn1.call(null,val_23875);
});})(val_23875,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23877 = arguments.length;
switch (G__23877) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23879 = n;
var x_23880 = (0);
while(true){
if((x_23880 < n__4607__auto___23879)){
(a[x_23880] = (0));

var G__23881 = (x_23880 + (1));
x_23880 = G__23881;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23882 = (i + (1));
i = G__23882;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23883 = (function (flag,meta23884){
this.flag = flag;
this.meta23884 = meta23884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23885,meta23884__$1){
var self__ = this;
var _23885__$1 = this;
return (new cljs.core.async.t_cljs$core$async23883(self__.flag,meta23884__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23885){
var self__ = this;
var _23885__$1 = this;
return self__.meta23884;
});})(flag))
;

cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23883.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23884","meta23884",-1591109167,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23883";

cljs.core.async.t_cljs$core$async23883.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23883");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23883.
 */
cljs.core.async.__GT_t_cljs$core$async23883 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23883(flag__$1,meta23884){
return (new cljs.core.async.t_cljs$core$async23883(flag__$1,meta23884));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23883(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23886 = (function (flag,cb,meta23887){
this.flag = flag;
this.cb = cb;
this.meta23887 = meta23887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23888,meta23887__$1){
var self__ = this;
var _23888__$1 = this;
return (new cljs.core.async.t_cljs$core$async23886(self__.flag,self__.cb,meta23887__$1));
});

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23888){
var self__ = this;
var _23888__$1 = this;
return self__.meta23887;
});

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23887","meta23887",924908240,null)], null);
});

cljs.core.async.t_cljs$core$async23886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23886";

cljs.core.async.t_cljs$core$async23886.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23886");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23886.
 */
cljs.core.async.__GT_t_cljs$core$async23886 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23886(flag__$1,cb__$1,meta23887){
return (new cljs.core.async.t_cljs$core$async23886(flag__$1,cb__$1,meta23887));
});

}

return (new cljs.core.async.t_cljs$core$async23886(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23889_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23889_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23890_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23890_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23891 = (i + (1));
i = G__23891;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23897 = arguments.length;
var i__4731__auto___23898 = (0);
while(true){
if((i__4731__auto___23898 < len__4730__auto___23897)){
args__4736__auto__.push((arguments[i__4731__auto___23898]));

var G__23899 = (i__4731__auto___23898 + (1));
i__4731__auto___23898 = G__23899;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23894){
var map__23895 = p__23894;
var map__23895__$1 = (((((!((map__23895 == null))))?(((((map__23895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23895):map__23895);
var opts = map__23895__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23892){
var G__23893 = cljs.core.first.call(null,seq23892);
var seq23892__$1 = cljs.core.next.call(null,seq23892);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23893,seq23892__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23901 = arguments.length;
switch (G__23901) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23800__auto___23947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___23947){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___23947){
return (function (state_23925){
var state_val_23926 = (state_23925[(1)]);
if((state_val_23926 === (7))){
var inst_23921 = (state_23925[(2)]);
var state_23925__$1 = state_23925;
var statearr_23927_23948 = state_23925__$1;
(statearr_23927_23948[(2)] = inst_23921);

(statearr_23927_23948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23926 === (1))){
var state_23925__$1 = state_23925;
var statearr_23928_23949 = state_23925__$1;
(statearr_23928_23949[(2)] = null);

(statearr_23928_23949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23926 === (4))){
var inst_23904 = (state_23925[(7)]);
var inst_23904__$1 = (state_23925[(2)]);
var inst_23905 = (inst_23904__$1 == null);
var state_23925__$1 = (function (){var statearr_23929 = state_23925;
(statearr_23929[(7)] = inst_23904__$1);

return statearr_23929;
})();
if(cljs.core.truth_(inst_23905)){
var statearr_23930_23950 = state_23925__$1;
(statearr_23930_23950[(1)] = (5));

} else {
var statearr_23931_23951 = state_23925__$1;
(statearr_23931_23951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23926 === (13))){
var state_23925__$1 = state_23925;
var statearr_23932_23952 = state_23925__$1;
(statearr_23932_23952[(2)] = null);

(statearr_23932_23952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23926 === (6))){
var inst_23904 = (state_23925[(7)]);
var state_23925__$1 = state_23925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23925__$1,(11),to,inst_23904);
} else {
if((state_val_23926 === (3))){
var inst_23923 = (state_23925[(2)]);
var state_23925__$1 = state_23925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23925__$1,inst_23923);
} else {
if((state_val_23926 === (12))){
var state_23925__$1 = state_23925;
var statearr_23933_23953 = state_23925__$1;
(statearr_23933_23953[(2)] = null);

(statearr_23933_23953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23926 === (2))){
var state_23925__$1 = state_23925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23925__$1,(4),from);
} else {
if((state_val_23926 === (11))){
var inst_23914 = (state_23925[(2)]);
var state_23925__$1 = state_23925;
if(cljs.core.truth_(inst_23914)){
var statearr_23934_23954 = state_23925__$1;
(statearr_23934_23954[(1)] = (12));

} else {
var statearr_23935_23955 = state_23925__$1;
(statearr_23935_23955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23926 === (9))){
var state_23925__$1 = state_23925;
var statearr_23936_23956 = state_23925__$1;
(statearr_23936_23956[(2)] = null);

(statearr_23936_23956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23926 === (5))){
var state_23925__$1 = state_23925;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23937_23957 = state_23925__$1;
(statearr_23937_23957[(1)] = (8));

} else {
var statearr_23938_23958 = state_23925__$1;
(statearr_23938_23958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23926 === (14))){
var inst_23919 = (state_23925[(2)]);
var state_23925__$1 = state_23925;
var statearr_23939_23959 = state_23925__$1;
(statearr_23939_23959[(2)] = inst_23919);

(statearr_23939_23959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23926 === (10))){
var inst_23911 = (state_23925[(2)]);
var state_23925__$1 = state_23925;
var statearr_23940_23960 = state_23925__$1;
(statearr_23940_23960[(2)] = inst_23911);

(statearr_23940_23960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23926 === (8))){
var inst_23908 = cljs.core.async.close_BANG_.call(null,to);
var state_23925__$1 = state_23925;
var statearr_23941_23961 = state_23925__$1;
(statearr_23941_23961[(2)] = inst_23908);

(statearr_23941_23961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___23947))
;
return ((function (switch__23705__auto__,c__23800__auto___23947){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_23942 = [null,null,null,null,null,null,null,null];
(statearr_23942[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_23942[(1)] = (1));

return statearr_23942;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_23925){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_23925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e23943){if((e23943 instanceof Object)){
var ex__23709__auto__ = e23943;
var statearr_23944_23962 = state_23925;
(statearr_23944_23962[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23963 = state_23925;
state_23925 = G__23963;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_23925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_23925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___23947))
})();
var state__23802__auto__ = (function (){var statearr_23945 = f__23801__auto__.call(null);
(statearr_23945[(6)] = c__23800__auto___23947);

return statearr_23945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___23947))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23964){
var vec__23965 = p__23964;
var v = cljs.core.nth.call(null,vec__23965,(0),null);
var p = cljs.core.nth.call(null,vec__23965,(1),null);
var job = vec__23965;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23800__auto___24136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___24136,res,vec__23965,v,p,job,jobs,results){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___24136,res,vec__23965,v,p,job,jobs,results){
return (function (state_23972){
var state_val_23973 = (state_23972[(1)]);
if((state_val_23973 === (1))){
var state_23972__$1 = state_23972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23972__$1,(2),res,v);
} else {
if((state_val_23973 === (2))){
var inst_23969 = (state_23972[(2)]);
var inst_23970 = cljs.core.async.close_BANG_.call(null,res);
var state_23972__$1 = (function (){var statearr_23974 = state_23972;
(statearr_23974[(7)] = inst_23969);

return statearr_23974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23972__$1,inst_23970);
} else {
return null;
}
}
});})(c__23800__auto___24136,res,vec__23965,v,p,job,jobs,results))
;
return ((function (switch__23705__auto__,c__23800__auto___24136,res,vec__23965,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0 = (function (){
var statearr_23975 = [null,null,null,null,null,null,null,null];
(statearr_23975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__);

(statearr_23975[(1)] = (1));

return statearr_23975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1 = (function (state_23972){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_23972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e23976){if((e23976 instanceof Object)){
var ex__23709__auto__ = e23976;
var statearr_23977_24137 = state_23972;
(statearr_23977_24137[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24138 = state_23972;
state_23972 = G__24138;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__ = function(state_23972){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1.call(this,state_23972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___24136,res,vec__23965,v,p,job,jobs,results))
})();
var state__23802__auto__ = (function (){var statearr_23978 = f__23801__auto__.call(null);
(statearr_23978[(6)] = c__23800__auto___24136);

return statearr_23978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___24136,res,vec__23965,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23979){
var vec__23980 = p__23979;
var v = cljs.core.nth.call(null,vec__23980,(0),null);
var p = cljs.core.nth.call(null,vec__23980,(1),null);
var job = vec__23980;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___24139 = n;
var __24140 = (0);
while(true){
if((__24140 < n__4607__auto___24139)){
var G__23983_24141 = type;
var G__23983_24142__$1 = (((G__23983_24141 instanceof cljs.core.Keyword))?G__23983_24141.fqn:null);
switch (G__23983_24142__$1) {
case "compute":
var c__23800__auto___24144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24140,c__23800__auto___24144,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (__24140,c__23800__auto___24144,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async){
return (function (state_23996){
var state_val_23997 = (state_23996[(1)]);
if((state_val_23997 === (1))){
var state_23996__$1 = state_23996;
var statearr_23998_24145 = state_23996__$1;
(statearr_23998_24145[(2)] = null);

(statearr_23998_24145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (2))){
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23996__$1,(4),jobs);
} else {
if((state_val_23997 === (3))){
var inst_23994 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23996__$1,inst_23994);
} else {
if((state_val_23997 === (4))){
var inst_23986 = (state_23996[(2)]);
var inst_23987 = process.call(null,inst_23986);
var state_23996__$1 = state_23996;
if(cljs.core.truth_(inst_23987)){
var statearr_23999_24146 = state_23996__$1;
(statearr_23999_24146[(1)] = (5));

} else {
var statearr_24000_24147 = state_23996__$1;
(statearr_24000_24147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (5))){
var state_23996__$1 = state_23996;
var statearr_24001_24148 = state_23996__$1;
(statearr_24001_24148[(2)] = null);

(statearr_24001_24148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (6))){
var state_23996__$1 = state_23996;
var statearr_24002_24149 = state_23996__$1;
(statearr_24002_24149[(2)] = null);

(statearr_24002_24149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (7))){
var inst_23992 = (state_23996[(2)]);
var state_23996__$1 = state_23996;
var statearr_24003_24150 = state_23996__$1;
(statearr_24003_24150[(2)] = inst_23992);

(statearr_24003_24150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24140,c__23800__auto___24144,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async))
;
return ((function (__24140,switch__23705__auto__,c__23800__auto___24144,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0 = (function (){
var statearr_24004 = [null,null,null,null,null,null,null];
(statearr_24004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__);

(statearr_24004[(1)] = (1));

return statearr_24004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1 = (function (state_23996){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_23996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e24005){if((e24005 instanceof Object)){
var ex__23709__auto__ = e24005;
var statearr_24006_24151 = state_23996;
(statearr_24006_24151[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24152 = state_23996;
state_23996 = G__24152;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__ = function(state_23996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1.call(this,state_23996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__;
})()
;})(__24140,switch__23705__auto__,c__23800__auto___24144,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async))
})();
var state__23802__auto__ = (function (){var statearr_24007 = f__23801__auto__.call(null);
(statearr_24007[(6)] = c__23800__auto___24144);

return statearr_24007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(__24140,c__23800__auto___24144,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async))
);


break;
case "async":
var c__23800__auto___24153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24140,c__23800__auto___24153,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (__24140,c__23800__auto___24153,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async){
return (function (state_24020){
var state_val_24021 = (state_24020[(1)]);
if((state_val_24021 === (1))){
var state_24020__$1 = state_24020;
var statearr_24022_24154 = state_24020__$1;
(statearr_24022_24154[(2)] = null);

(statearr_24022_24154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (2))){
var state_24020__$1 = state_24020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24020__$1,(4),jobs);
} else {
if((state_val_24021 === (3))){
var inst_24018 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24020__$1,inst_24018);
} else {
if((state_val_24021 === (4))){
var inst_24010 = (state_24020[(2)]);
var inst_24011 = async.call(null,inst_24010);
var state_24020__$1 = state_24020;
if(cljs.core.truth_(inst_24011)){
var statearr_24023_24155 = state_24020__$1;
(statearr_24023_24155[(1)] = (5));

} else {
var statearr_24024_24156 = state_24020__$1;
(statearr_24024_24156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (5))){
var state_24020__$1 = state_24020;
var statearr_24025_24157 = state_24020__$1;
(statearr_24025_24157[(2)] = null);

(statearr_24025_24157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (6))){
var state_24020__$1 = state_24020;
var statearr_24026_24158 = state_24020__$1;
(statearr_24026_24158[(2)] = null);

(statearr_24026_24158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24021 === (7))){
var inst_24016 = (state_24020[(2)]);
var state_24020__$1 = state_24020;
var statearr_24027_24159 = state_24020__$1;
(statearr_24027_24159[(2)] = inst_24016);

(statearr_24027_24159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24140,c__23800__auto___24153,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async))
;
return ((function (__24140,switch__23705__auto__,c__23800__auto___24153,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0 = (function (){
var statearr_24028 = [null,null,null,null,null,null,null];
(statearr_24028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__);

(statearr_24028[(1)] = (1));

return statearr_24028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1 = (function (state_24020){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_24020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e24029){if((e24029 instanceof Object)){
var ex__23709__auto__ = e24029;
var statearr_24030_24160 = state_24020;
(statearr_24030_24160[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24161 = state_24020;
state_24020 = G__24161;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__ = function(state_24020){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1.call(this,state_24020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__;
})()
;})(__24140,switch__23705__auto__,c__23800__auto___24153,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async))
})();
var state__23802__auto__ = (function (){var statearr_24031 = f__23801__auto__.call(null);
(statearr_24031[(6)] = c__23800__auto___24153);

return statearr_24031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(__24140,c__23800__auto___24153,G__23983_24141,G__23983_24142__$1,n__4607__auto___24139,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23983_24142__$1)].join('')));

}

var G__24162 = (__24140 + (1));
__24140 = G__24162;
continue;
} else {
}
break;
}

var c__23800__auto___24163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___24163,jobs,results,process,async){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___24163,jobs,results,process,async){
return (function (state_24053){
var state_val_24054 = (state_24053[(1)]);
if((state_val_24054 === (7))){
var inst_24049 = (state_24053[(2)]);
var state_24053__$1 = state_24053;
var statearr_24055_24164 = state_24053__$1;
(statearr_24055_24164[(2)] = inst_24049);

(statearr_24055_24164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24054 === (1))){
var state_24053__$1 = state_24053;
var statearr_24056_24165 = state_24053__$1;
(statearr_24056_24165[(2)] = null);

(statearr_24056_24165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24054 === (4))){
var inst_24034 = (state_24053[(7)]);
var inst_24034__$1 = (state_24053[(2)]);
var inst_24035 = (inst_24034__$1 == null);
var state_24053__$1 = (function (){var statearr_24057 = state_24053;
(statearr_24057[(7)] = inst_24034__$1);

return statearr_24057;
})();
if(cljs.core.truth_(inst_24035)){
var statearr_24058_24166 = state_24053__$1;
(statearr_24058_24166[(1)] = (5));

} else {
var statearr_24059_24167 = state_24053__$1;
(statearr_24059_24167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24054 === (6))){
var inst_24034 = (state_24053[(7)]);
var inst_24039 = (state_24053[(8)]);
var inst_24039__$1 = cljs.core.async.chan.call(null,(1));
var inst_24040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24041 = [inst_24034,inst_24039__$1];
var inst_24042 = (new cljs.core.PersistentVector(null,2,(5),inst_24040,inst_24041,null));
var state_24053__$1 = (function (){var statearr_24060 = state_24053;
(statearr_24060[(8)] = inst_24039__$1);

return statearr_24060;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24053__$1,(8),jobs,inst_24042);
} else {
if((state_val_24054 === (3))){
var inst_24051 = (state_24053[(2)]);
var state_24053__$1 = state_24053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24053__$1,inst_24051);
} else {
if((state_val_24054 === (2))){
var state_24053__$1 = state_24053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24053__$1,(4),from);
} else {
if((state_val_24054 === (9))){
var inst_24046 = (state_24053[(2)]);
var state_24053__$1 = (function (){var statearr_24061 = state_24053;
(statearr_24061[(9)] = inst_24046);

return statearr_24061;
})();
var statearr_24062_24168 = state_24053__$1;
(statearr_24062_24168[(2)] = null);

(statearr_24062_24168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24054 === (5))){
var inst_24037 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24053__$1 = state_24053;
var statearr_24063_24169 = state_24053__$1;
(statearr_24063_24169[(2)] = inst_24037);

(statearr_24063_24169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24054 === (8))){
var inst_24039 = (state_24053[(8)]);
var inst_24044 = (state_24053[(2)]);
var state_24053__$1 = (function (){var statearr_24064 = state_24053;
(statearr_24064[(10)] = inst_24044);

return statearr_24064;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24053__$1,(9),results,inst_24039);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___24163,jobs,results,process,async))
;
return ((function (switch__23705__auto__,c__23800__auto___24163,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0 = (function (){
var statearr_24065 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24065[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__);

(statearr_24065[(1)] = (1));

return statearr_24065;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1 = (function (state_24053){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_24053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e24066){if((e24066 instanceof Object)){
var ex__23709__auto__ = e24066;
var statearr_24067_24170 = state_24053;
(statearr_24067_24170[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24171 = state_24053;
state_24053 = G__24171;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__ = function(state_24053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1.call(this,state_24053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___24163,jobs,results,process,async))
})();
var state__23802__auto__ = (function (){var statearr_24068 = f__23801__auto__.call(null);
(statearr_24068[(6)] = c__23800__auto___24163);

return statearr_24068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___24163,jobs,results,process,async))
);


var c__23800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto__,jobs,results,process,async){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto__,jobs,results,process,async){
return (function (state_24106){
var state_val_24107 = (state_24106[(1)]);
if((state_val_24107 === (7))){
var inst_24102 = (state_24106[(2)]);
var state_24106__$1 = state_24106;
var statearr_24108_24172 = state_24106__$1;
(statearr_24108_24172[(2)] = inst_24102);

(statearr_24108_24172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (20))){
var state_24106__$1 = state_24106;
var statearr_24109_24173 = state_24106__$1;
(statearr_24109_24173[(2)] = null);

(statearr_24109_24173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (1))){
var state_24106__$1 = state_24106;
var statearr_24110_24174 = state_24106__$1;
(statearr_24110_24174[(2)] = null);

(statearr_24110_24174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (4))){
var inst_24071 = (state_24106[(7)]);
var inst_24071__$1 = (state_24106[(2)]);
var inst_24072 = (inst_24071__$1 == null);
var state_24106__$1 = (function (){var statearr_24111 = state_24106;
(statearr_24111[(7)] = inst_24071__$1);

return statearr_24111;
})();
if(cljs.core.truth_(inst_24072)){
var statearr_24112_24175 = state_24106__$1;
(statearr_24112_24175[(1)] = (5));

} else {
var statearr_24113_24176 = state_24106__$1;
(statearr_24113_24176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (15))){
var inst_24084 = (state_24106[(8)]);
var state_24106__$1 = state_24106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24106__$1,(18),to,inst_24084);
} else {
if((state_val_24107 === (21))){
var inst_24097 = (state_24106[(2)]);
var state_24106__$1 = state_24106;
var statearr_24114_24177 = state_24106__$1;
(statearr_24114_24177[(2)] = inst_24097);

(statearr_24114_24177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (13))){
var inst_24099 = (state_24106[(2)]);
var state_24106__$1 = (function (){var statearr_24115 = state_24106;
(statearr_24115[(9)] = inst_24099);

return statearr_24115;
})();
var statearr_24116_24178 = state_24106__$1;
(statearr_24116_24178[(2)] = null);

(statearr_24116_24178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (6))){
var inst_24071 = (state_24106[(7)]);
var state_24106__$1 = state_24106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24106__$1,(11),inst_24071);
} else {
if((state_val_24107 === (17))){
var inst_24092 = (state_24106[(2)]);
var state_24106__$1 = state_24106;
if(cljs.core.truth_(inst_24092)){
var statearr_24117_24179 = state_24106__$1;
(statearr_24117_24179[(1)] = (19));

} else {
var statearr_24118_24180 = state_24106__$1;
(statearr_24118_24180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (3))){
var inst_24104 = (state_24106[(2)]);
var state_24106__$1 = state_24106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24106__$1,inst_24104);
} else {
if((state_val_24107 === (12))){
var inst_24081 = (state_24106[(10)]);
var state_24106__$1 = state_24106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24106__$1,(14),inst_24081);
} else {
if((state_val_24107 === (2))){
var state_24106__$1 = state_24106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24106__$1,(4),results);
} else {
if((state_val_24107 === (19))){
var state_24106__$1 = state_24106;
var statearr_24119_24181 = state_24106__$1;
(statearr_24119_24181[(2)] = null);

(statearr_24119_24181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (11))){
var inst_24081 = (state_24106[(2)]);
var state_24106__$1 = (function (){var statearr_24120 = state_24106;
(statearr_24120[(10)] = inst_24081);

return statearr_24120;
})();
var statearr_24121_24182 = state_24106__$1;
(statearr_24121_24182[(2)] = null);

(statearr_24121_24182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (9))){
var state_24106__$1 = state_24106;
var statearr_24122_24183 = state_24106__$1;
(statearr_24122_24183[(2)] = null);

(statearr_24122_24183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (5))){
var state_24106__$1 = state_24106;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24123_24184 = state_24106__$1;
(statearr_24123_24184[(1)] = (8));

} else {
var statearr_24124_24185 = state_24106__$1;
(statearr_24124_24185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (14))){
var inst_24084 = (state_24106[(8)]);
var inst_24086 = (state_24106[(11)]);
var inst_24084__$1 = (state_24106[(2)]);
var inst_24085 = (inst_24084__$1 == null);
var inst_24086__$1 = cljs.core.not.call(null,inst_24085);
var state_24106__$1 = (function (){var statearr_24125 = state_24106;
(statearr_24125[(8)] = inst_24084__$1);

(statearr_24125[(11)] = inst_24086__$1);

return statearr_24125;
})();
if(inst_24086__$1){
var statearr_24126_24186 = state_24106__$1;
(statearr_24126_24186[(1)] = (15));

} else {
var statearr_24127_24187 = state_24106__$1;
(statearr_24127_24187[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (16))){
var inst_24086 = (state_24106[(11)]);
var state_24106__$1 = state_24106;
var statearr_24128_24188 = state_24106__$1;
(statearr_24128_24188[(2)] = inst_24086);

(statearr_24128_24188[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (10))){
var inst_24078 = (state_24106[(2)]);
var state_24106__$1 = state_24106;
var statearr_24129_24189 = state_24106__$1;
(statearr_24129_24189[(2)] = inst_24078);

(statearr_24129_24189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (18))){
var inst_24089 = (state_24106[(2)]);
var state_24106__$1 = state_24106;
var statearr_24130_24190 = state_24106__$1;
(statearr_24130_24190[(2)] = inst_24089);

(statearr_24130_24190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24107 === (8))){
var inst_24075 = cljs.core.async.close_BANG_.call(null,to);
var state_24106__$1 = state_24106;
var statearr_24131_24191 = state_24106__$1;
(statearr_24131_24191[(2)] = inst_24075);

(statearr_24131_24191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto__,jobs,results,process,async))
;
return ((function (switch__23705__auto__,c__23800__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0 = (function (){
var statearr_24132 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__);

(statearr_24132[(1)] = (1));

return statearr_24132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1 = (function (state_24106){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_24106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e24133){if((e24133 instanceof Object)){
var ex__23709__auto__ = e24133;
var statearr_24134_24192 = state_24106;
(statearr_24134_24192[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24193 = state_24106;
state_24106 = G__24193;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__ = function(state_24106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1.call(this,state_24106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto__,jobs,results,process,async))
})();
var state__23802__auto__ = (function (){var statearr_24135 = f__23801__auto__.call(null);
(statearr_24135[(6)] = c__23800__auto__);

return statearr_24135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto__,jobs,results,process,async))
);

return c__23800__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24195 = arguments.length;
switch (G__24195) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24198 = arguments.length;
switch (G__24198) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24201 = arguments.length;
switch (G__24201) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23800__auto___24250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___24250,tc,fc){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___24250,tc,fc){
return (function (state_24227){
var state_val_24228 = (state_24227[(1)]);
if((state_val_24228 === (7))){
var inst_24223 = (state_24227[(2)]);
var state_24227__$1 = state_24227;
var statearr_24229_24251 = state_24227__$1;
(statearr_24229_24251[(2)] = inst_24223);

(statearr_24229_24251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (1))){
var state_24227__$1 = state_24227;
var statearr_24230_24252 = state_24227__$1;
(statearr_24230_24252[(2)] = null);

(statearr_24230_24252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (4))){
var inst_24204 = (state_24227[(7)]);
var inst_24204__$1 = (state_24227[(2)]);
var inst_24205 = (inst_24204__$1 == null);
var state_24227__$1 = (function (){var statearr_24231 = state_24227;
(statearr_24231[(7)] = inst_24204__$1);

return statearr_24231;
})();
if(cljs.core.truth_(inst_24205)){
var statearr_24232_24253 = state_24227__$1;
(statearr_24232_24253[(1)] = (5));

} else {
var statearr_24233_24254 = state_24227__$1;
(statearr_24233_24254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (13))){
var state_24227__$1 = state_24227;
var statearr_24234_24255 = state_24227__$1;
(statearr_24234_24255[(2)] = null);

(statearr_24234_24255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (6))){
var inst_24204 = (state_24227[(7)]);
var inst_24210 = p.call(null,inst_24204);
var state_24227__$1 = state_24227;
if(cljs.core.truth_(inst_24210)){
var statearr_24235_24256 = state_24227__$1;
(statearr_24235_24256[(1)] = (9));

} else {
var statearr_24236_24257 = state_24227__$1;
(statearr_24236_24257[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (3))){
var inst_24225 = (state_24227[(2)]);
var state_24227__$1 = state_24227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24227__$1,inst_24225);
} else {
if((state_val_24228 === (12))){
var state_24227__$1 = state_24227;
var statearr_24237_24258 = state_24227__$1;
(statearr_24237_24258[(2)] = null);

(statearr_24237_24258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (2))){
var state_24227__$1 = state_24227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24227__$1,(4),ch);
} else {
if((state_val_24228 === (11))){
var inst_24204 = (state_24227[(7)]);
var inst_24214 = (state_24227[(2)]);
var state_24227__$1 = state_24227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24227__$1,(8),inst_24214,inst_24204);
} else {
if((state_val_24228 === (9))){
var state_24227__$1 = state_24227;
var statearr_24238_24259 = state_24227__$1;
(statearr_24238_24259[(2)] = tc);

(statearr_24238_24259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (5))){
var inst_24207 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24208 = cljs.core.async.close_BANG_.call(null,fc);
var state_24227__$1 = (function (){var statearr_24239 = state_24227;
(statearr_24239[(8)] = inst_24207);

return statearr_24239;
})();
var statearr_24240_24260 = state_24227__$1;
(statearr_24240_24260[(2)] = inst_24208);

(statearr_24240_24260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (14))){
var inst_24221 = (state_24227[(2)]);
var state_24227__$1 = state_24227;
var statearr_24241_24261 = state_24227__$1;
(statearr_24241_24261[(2)] = inst_24221);

(statearr_24241_24261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (10))){
var state_24227__$1 = state_24227;
var statearr_24242_24262 = state_24227__$1;
(statearr_24242_24262[(2)] = fc);

(statearr_24242_24262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (8))){
var inst_24216 = (state_24227[(2)]);
var state_24227__$1 = state_24227;
if(cljs.core.truth_(inst_24216)){
var statearr_24243_24263 = state_24227__$1;
(statearr_24243_24263[(1)] = (12));

} else {
var statearr_24244_24264 = state_24227__$1;
(statearr_24244_24264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___24250,tc,fc))
;
return ((function (switch__23705__auto__,c__23800__auto___24250,tc,fc){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_24245 = [null,null,null,null,null,null,null,null,null];
(statearr_24245[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_24245[(1)] = (1));

return statearr_24245;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_24227){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_24227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e24246){if((e24246 instanceof Object)){
var ex__23709__auto__ = e24246;
var statearr_24247_24265 = state_24227;
(statearr_24247_24265[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24266 = state_24227;
state_24227 = G__24266;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_24227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_24227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___24250,tc,fc))
})();
var state__23802__auto__ = (function (){var statearr_24248 = f__23801__auto__.call(null);
(statearr_24248[(6)] = c__23800__auto___24250);

return statearr_24248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___24250,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto__){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto__){
return (function (state_24287){
var state_val_24288 = (state_24287[(1)]);
if((state_val_24288 === (7))){
var inst_24283 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24289_24307 = state_24287__$1;
(statearr_24289_24307[(2)] = inst_24283);

(statearr_24289_24307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (1))){
var inst_24267 = init;
var state_24287__$1 = (function (){var statearr_24290 = state_24287;
(statearr_24290[(7)] = inst_24267);

return statearr_24290;
})();
var statearr_24291_24308 = state_24287__$1;
(statearr_24291_24308[(2)] = null);

(statearr_24291_24308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (4))){
var inst_24270 = (state_24287[(8)]);
var inst_24270__$1 = (state_24287[(2)]);
var inst_24271 = (inst_24270__$1 == null);
var state_24287__$1 = (function (){var statearr_24292 = state_24287;
(statearr_24292[(8)] = inst_24270__$1);

return statearr_24292;
})();
if(cljs.core.truth_(inst_24271)){
var statearr_24293_24309 = state_24287__$1;
(statearr_24293_24309[(1)] = (5));

} else {
var statearr_24294_24310 = state_24287__$1;
(statearr_24294_24310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (6))){
var inst_24274 = (state_24287[(9)]);
var inst_24267 = (state_24287[(7)]);
var inst_24270 = (state_24287[(8)]);
var inst_24274__$1 = f.call(null,inst_24267,inst_24270);
var inst_24275 = cljs.core.reduced_QMARK_.call(null,inst_24274__$1);
var state_24287__$1 = (function (){var statearr_24295 = state_24287;
(statearr_24295[(9)] = inst_24274__$1);

return statearr_24295;
})();
if(inst_24275){
var statearr_24296_24311 = state_24287__$1;
(statearr_24296_24311[(1)] = (8));

} else {
var statearr_24297_24312 = state_24287__$1;
(statearr_24297_24312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (3))){
var inst_24285 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24287__$1,inst_24285);
} else {
if((state_val_24288 === (2))){
var state_24287__$1 = state_24287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24287__$1,(4),ch);
} else {
if((state_val_24288 === (9))){
var inst_24274 = (state_24287[(9)]);
var inst_24267 = inst_24274;
var state_24287__$1 = (function (){var statearr_24298 = state_24287;
(statearr_24298[(7)] = inst_24267);

return statearr_24298;
})();
var statearr_24299_24313 = state_24287__$1;
(statearr_24299_24313[(2)] = null);

(statearr_24299_24313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (5))){
var inst_24267 = (state_24287[(7)]);
var state_24287__$1 = state_24287;
var statearr_24300_24314 = state_24287__$1;
(statearr_24300_24314[(2)] = inst_24267);

(statearr_24300_24314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (10))){
var inst_24281 = (state_24287[(2)]);
var state_24287__$1 = state_24287;
var statearr_24301_24315 = state_24287__$1;
(statearr_24301_24315[(2)] = inst_24281);

(statearr_24301_24315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24288 === (8))){
var inst_24274 = (state_24287[(9)]);
var inst_24277 = cljs.core.deref.call(null,inst_24274);
var state_24287__$1 = state_24287;
var statearr_24302_24316 = state_24287__$1;
(statearr_24302_24316[(2)] = inst_24277);

(statearr_24302_24316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto__))
;
return ((function (switch__23705__auto__,c__23800__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23706__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23706__auto____0 = (function (){
var statearr_24303 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24303[(0)] = cljs$core$async$reduce_$_state_machine__23706__auto__);

(statearr_24303[(1)] = (1));

return statearr_24303;
});
var cljs$core$async$reduce_$_state_machine__23706__auto____1 = (function (state_24287){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_24287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e24304){if((e24304 instanceof Object)){
var ex__23709__auto__ = e24304;
var statearr_24305_24317 = state_24287;
(statearr_24305_24317[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24318 = state_24287;
state_24287 = G__24318;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23706__auto__ = function(state_24287){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23706__auto____1.call(this,state_24287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23706__auto____0;
cljs$core$async$reduce_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23706__auto____1;
return cljs$core$async$reduce_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto__))
})();
var state__23802__auto__ = (function (){var statearr_24306 = f__23801__auto__.call(null);
(statearr_24306[(6)] = c__23800__auto__);

return statearr_24306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto__))
);

return c__23800__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto__,f__$1){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto__,f__$1){
return (function (state_24324){
var state_val_24325 = (state_24324[(1)]);
if((state_val_24325 === (1))){
var inst_24319 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24324__$1 = state_24324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24324__$1,(2),inst_24319);
} else {
if((state_val_24325 === (2))){
var inst_24321 = (state_24324[(2)]);
var inst_24322 = f__$1.call(null,inst_24321);
var state_24324__$1 = state_24324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24324__$1,inst_24322);
} else {
return null;
}
}
});})(c__23800__auto__,f__$1))
;
return ((function (switch__23705__auto__,c__23800__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23706__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23706__auto____0 = (function (){
var statearr_24326 = [null,null,null,null,null,null,null];
(statearr_24326[(0)] = cljs$core$async$transduce_$_state_machine__23706__auto__);

(statearr_24326[(1)] = (1));

return statearr_24326;
});
var cljs$core$async$transduce_$_state_machine__23706__auto____1 = (function (state_24324){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_24324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e24327){if((e24327 instanceof Object)){
var ex__23709__auto__ = e24327;
var statearr_24328_24330 = state_24324;
(statearr_24328_24330[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24331 = state_24324;
state_24324 = G__24331;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23706__auto__ = function(state_24324){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23706__auto____1.call(this,state_24324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23706__auto____0;
cljs$core$async$transduce_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23706__auto____1;
return cljs$core$async$transduce_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto__,f__$1))
})();
var state__23802__auto__ = (function (){var statearr_24329 = f__23801__auto__.call(null);
(statearr_24329[(6)] = c__23800__auto__);

return statearr_24329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto__,f__$1))
);

return c__23800__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24333 = arguments.length;
switch (G__24333) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto__){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto__){
return (function (state_24358){
var state_val_24359 = (state_24358[(1)]);
if((state_val_24359 === (7))){
var inst_24340 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
var statearr_24360_24381 = state_24358__$1;
(statearr_24360_24381[(2)] = inst_24340);

(statearr_24360_24381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24359 === (1))){
var inst_24334 = cljs.core.seq.call(null,coll);
var inst_24335 = inst_24334;
var state_24358__$1 = (function (){var statearr_24361 = state_24358;
(statearr_24361[(7)] = inst_24335);

return statearr_24361;
})();
var statearr_24362_24382 = state_24358__$1;
(statearr_24362_24382[(2)] = null);

(statearr_24362_24382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24359 === (4))){
var inst_24335 = (state_24358[(7)]);
var inst_24338 = cljs.core.first.call(null,inst_24335);
var state_24358__$1 = state_24358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24358__$1,(7),ch,inst_24338);
} else {
if((state_val_24359 === (13))){
var inst_24352 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
var statearr_24363_24383 = state_24358__$1;
(statearr_24363_24383[(2)] = inst_24352);

(statearr_24363_24383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24359 === (6))){
var inst_24343 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
if(cljs.core.truth_(inst_24343)){
var statearr_24364_24384 = state_24358__$1;
(statearr_24364_24384[(1)] = (8));

} else {
var statearr_24365_24385 = state_24358__$1;
(statearr_24365_24385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24359 === (3))){
var inst_24356 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24358__$1,inst_24356);
} else {
if((state_val_24359 === (12))){
var state_24358__$1 = state_24358;
var statearr_24366_24386 = state_24358__$1;
(statearr_24366_24386[(2)] = null);

(statearr_24366_24386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24359 === (2))){
var inst_24335 = (state_24358[(7)]);
var state_24358__$1 = state_24358;
if(cljs.core.truth_(inst_24335)){
var statearr_24367_24387 = state_24358__$1;
(statearr_24367_24387[(1)] = (4));

} else {
var statearr_24368_24388 = state_24358__$1;
(statearr_24368_24388[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24359 === (11))){
var inst_24349 = cljs.core.async.close_BANG_.call(null,ch);
var state_24358__$1 = state_24358;
var statearr_24369_24389 = state_24358__$1;
(statearr_24369_24389[(2)] = inst_24349);

(statearr_24369_24389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24359 === (9))){
var state_24358__$1 = state_24358;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24370_24390 = state_24358__$1;
(statearr_24370_24390[(1)] = (11));

} else {
var statearr_24371_24391 = state_24358__$1;
(statearr_24371_24391[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24359 === (5))){
var inst_24335 = (state_24358[(7)]);
var state_24358__$1 = state_24358;
var statearr_24372_24392 = state_24358__$1;
(statearr_24372_24392[(2)] = inst_24335);

(statearr_24372_24392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24359 === (10))){
var inst_24354 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
var statearr_24373_24393 = state_24358__$1;
(statearr_24373_24393[(2)] = inst_24354);

(statearr_24373_24393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24359 === (8))){
var inst_24335 = (state_24358[(7)]);
var inst_24345 = cljs.core.next.call(null,inst_24335);
var inst_24335__$1 = inst_24345;
var state_24358__$1 = (function (){var statearr_24374 = state_24358;
(statearr_24374[(7)] = inst_24335__$1);

return statearr_24374;
})();
var statearr_24375_24394 = state_24358__$1;
(statearr_24375_24394[(2)] = null);

(statearr_24375_24394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto__))
;
return ((function (switch__23705__auto__,c__23800__auto__){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_24376 = [null,null,null,null,null,null,null,null];
(statearr_24376[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_24376[(1)] = (1));

return statearr_24376;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_24358){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_24358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e24377){if((e24377 instanceof Object)){
var ex__23709__auto__ = e24377;
var statearr_24378_24395 = state_24358;
(statearr_24378_24395[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24396 = state_24358;
state_24358 = G__24396;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_24358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_24358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto__))
})();
var state__23802__auto__ = (function (){var statearr_24379 = f__23801__auto__.call(null);
(statearr_24379[(6)] = c__23800__auto__);

return statearr_24379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto__))
);

return c__23800__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24397 = (function (ch,cs,meta24398){
this.ch = ch;
this.cs = cs;
this.meta24398 = meta24398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24399,meta24398__$1){
var self__ = this;
var _24399__$1 = this;
return (new cljs.core.async.t_cljs$core$async24397(self__.ch,self__.cs,meta24398__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24399){
var self__ = this;
var _24399__$1 = this;
return self__.meta24398;
});})(cs))
;

cljs.core.async.t_cljs$core$async24397.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24397.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24397.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24397.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24397.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24397.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24397.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24398","meta24398",800641793,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24397";

cljs.core.async.t_cljs$core$async24397.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24397");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24397.
 */
cljs.core.async.__GT_t_cljs$core$async24397 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24397(ch__$1,cs__$1,meta24398){
return (new cljs.core.async.t_cljs$core$async24397(ch__$1,cs__$1,meta24398));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24397(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23800__auto___24619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___24619,cs,m,dchan,dctr,done){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___24619,cs,m,dchan,dctr,done){
return (function (state_24534){
var state_val_24535 = (state_24534[(1)]);
if((state_val_24535 === (7))){
var inst_24530 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24536_24620 = state_24534__$1;
(statearr_24536_24620[(2)] = inst_24530);

(statearr_24536_24620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (20))){
var inst_24433 = (state_24534[(7)]);
var inst_24445 = cljs.core.first.call(null,inst_24433);
var inst_24446 = cljs.core.nth.call(null,inst_24445,(0),null);
var inst_24447 = cljs.core.nth.call(null,inst_24445,(1),null);
var state_24534__$1 = (function (){var statearr_24537 = state_24534;
(statearr_24537[(8)] = inst_24446);

return statearr_24537;
})();
if(cljs.core.truth_(inst_24447)){
var statearr_24538_24621 = state_24534__$1;
(statearr_24538_24621[(1)] = (22));

} else {
var statearr_24539_24622 = state_24534__$1;
(statearr_24539_24622[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (27))){
var inst_24475 = (state_24534[(9)]);
var inst_24482 = (state_24534[(10)]);
var inst_24477 = (state_24534[(11)]);
var inst_24402 = (state_24534[(12)]);
var inst_24482__$1 = cljs.core._nth.call(null,inst_24475,inst_24477);
var inst_24483 = cljs.core.async.put_BANG_.call(null,inst_24482__$1,inst_24402,done);
var state_24534__$1 = (function (){var statearr_24540 = state_24534;
(statearr_24540[(10)] = inst_24482__$1);

return statearr_24540;
})();
if(cljs.core.truth_(inst_24483)){
var statearr_24541_24623 = state_24534__$1;
(statearr_24541_24623[(1)] = (30));

} else {
var statearr_24542_24624 = state_24534__$1;
(statearr_24542_24624[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (1))){
var state_24534__$1 = state_24534;
var statearr_24543_24625 = state_24534__$1;
(statearr_24543_24625[(2)] = null);

(statearr_24543_24625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (24))){
var inst_24433 = (state_24534[(7)]);
var inst_24452 = (state_24534[(2)]);
var inst_24453 = cljs.core.next.call(null,inst_24433);
var inst_24411 = inst_24453;
var inst_24412 = null;
var inst_24413 = (0);
var inst_24414 = (0);
var state_24534__$1 = (function (){var statearr_24544 = state_24534;
(statearr_24544[(13)] = inst_24411);

(statearr_24544[(14)] = inst_24414);

(statearr_24544[(15)] = inst_24413);

(statearr_24544[(16)] = inst_24412);

(statearr_24544[(17)] = inst_24452);

return statearr_24544;
})();
var statearr_24545_24626 = state_24534__$1;
(statearr_24545_24626[(2)] = null);

(statearr_24545_24626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (39))){
var state_24534__$1 = state_24534;
var statearr_24549_24627 = state_24534__$1;
(statearr_24549_24627[(2)] = null);

(statearr_24549_24627[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (4))){
var inst_24402 = (state_24534[(12)]);
var inst_24402__$1 = (state_24534[(2)]);
var inst_24403 = (inst_24402__$1 == null);
var state_24534__$1 = (function (){var statearr_24550 = state_24534;
(statearr_24550[(12)] = inst_24402__$1);

return statearr_24550;
})();
if(cljs.core.truth_(inst_24403)){
var statearr_24551_24628 = state_24534__$1;
(statearr_24551_24628[(1)] = (5));

} else {
var statearr_24552_24629 = state_24534__$1;
(statearr_24552_24629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (15))){
var inst_24411 = (state_24534[(13)]);
var inst_24414 = (state_24534[(14)]);
var inst_24413 = (state_24534[(15)]);
var inst_24412 = (state_24534[(16)]);
var inst_24429 = (state_24534[(2)]);
var inst_24430 = (inst_24414 + (1));
var tmp24546 = inst_24411;
var tmp24547 = inst_24413;
var tmp24548 = inst_24412;
var inst_24411__$1 = tmp24546;
var inst_24412__$1 = tmp24548;
var inst_24413__$1 = tmp24547;
var inst_24414__$1 = inst_24430;
var state_24534__$1 = (function (){var statearr_24553 = state_24534;
(statearr_24553[(13)] = inst_24411__$1);

(statearr_24553[(14)] = inst_24414__$1);

(statearr_24553[(18)] = inst_24429);

(statearr_24553[(15)] = inst_24413__$1);

(statearr_24553[(16)] = inst_24412__$1);

return statearr_24553;
})();
var statearr_24554_24630 = state_24534__$1;
(statearr_24554_24630[(2)] = null);

(statearr_24554_24630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (21))){
var inst_24456 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24558_24631 = state_24534__$1;
(statearr_24558_24631[(2)] = inst_24456);

(statearr_24558_24631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (31))){
var inst_24482 = (state_24534[(10)]);
var inst_24486 = done.call(null,null);
var inst_24487 = cljs.core.async.untap_STAR_.call(null,m,inst_24482);
var state_24534__$1 = (function (){var statearr_24559 = state_24534;
(statearr_24559[(19)] = inst_24486);

return statearr_24559;
})();
var statearr_24560_24632 = state_24534__$1;
(statearr_24560_24632[(2)] = inst_24487);

(statearr_24560_24632[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (32))){
var inst_24474 = (state_24534[(20)]);
var inst_24475 = (state_24534[(9)]);
var inst_24477 = (state_24534[(11)]);
var inst_24476 = (state_24534[(21)]);
var inst_24489 = (state_24534[(2)]);
var inst_24490 = (inst_24477 + (1));
var tmp24555 = inst_24474;
var tmp24556 = inst_24475;
var tmp24557 = inst_24476;
var inst_24474__$1 = tmp24555;
var inst_24475__$1 = tmp24556;
var inst_24476__$1 = tmp24557;
var inst_24477__$1 = inst_24490;
var state_24534__$1 = (function (){var statearr_24561 = state_24534;
(statearr_24561[(20)] = inst_24474__$1);

(statearr_24561[(9)] = inst_24475__$1);

(statearr_24561[(11)] = inst_24477__$1);

(statearr_24561[(21)] = inst_24476__$1);

(statearr_24561[(22)] = inst_24489);

return statearr_24561;
})();
var statearr_24562_24633 = state_24534__$1;
(statearr_24562_24633[(2)] = null);

(statearr_24562_24633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (40))){
var inst_24502 = (state_24534[(23)]);
var inst_24506 = done.call(null,null);
var inst_24507 = cljs.core.async.untap_STAR_.call(null,m,inst_24502);
var state_24534__$1 = (function (){var statearr_24563 = state_24534;
(statearr_24563[(24)] = inst_24506);

return statearr_24563;
})();
var statearr_24564_24634 = state_24534__$1;
(statearr_24564_24634[(2)] = inst_24507);

(statearr_24564_24634[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (33))){
var inst_24493 = (state_24534[(25)]);
var inst_24495 = cljs.core.chunked_seq_QMARK_.call(null,inst_24493);
var state_24534__$1 = state_24534;
if(inst_24495){
var statearr_24565_24635 = state_24534__$1;
(statearr_24565_24635[(1)] = (36));

} else {
var statearr_24566_24636 = state_24534__$1;
(statearr_24566_24636[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (13))){
var inst_24423 = (state_24534[(26)]);
var inst_24426 = cljs.core.async.close_BANG_.call(null,inst_24423);
var state_24534__$1 = state_24534;
var statearr_24567_24637 = state_24534__$1;
(statearr_24567_24637[(2)] = inst_24426);

(statearr_24567_24637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (22))){
var inst_24446 = (state_24534[(8)]);
var inst_24449 = cljs.core.async.close_BANG_.call(null,inst_24446);
var state_24534__$1 = state_24534;
var statearr_24568_24638 = state_24534__$1;
(statearr_24568_24638[(2)] = inst_24449);

(statearr_24568_24638[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (36))){
var inst_24493 = (state_24534[(25)]);
var inst_24497 = cljs.core.chunk_first.call(null,inst_24493);
var inst_24498 = cljs.core.chunk_rest.call(null,inst_24493);
var inst_24499 = cljs.core.count.call(null,inst_24497);
var inst_24474 = inst_24498;
var inst_24475 = inst_24497;
var inst_24476 = inst_24499;
var inst_24477 = (0);
var state_24534__$1 = (function (){var statearr_24569 = state_24534;
(statearr_24569[(20)] = inst_24474);

(statearr_24569[(9)] = inst_24475);

(statearr_24569[(11)] = inst_24477);

(statearr_24569[(21)] = inst_24476);

return statearr_24569;
})();
var statearr_24570_24639 = state_24534__$1;
(statearr_24570_24639[(2)] = null);

(statearr_24570_24639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (41))){
var inst_24493 = (state_24534[(25)]);
var inst_24509 = (state_24534[(2)]);
var inst_24510 = cljs.core.next.call(null,inst_24493);
var inst_24474 = inst_24510;
var inst_24475 = null;
var inst_24476 = (0);
var inst_24477 = (0);
var state_24534__$1 = (function (){var statearr_24571 = state_24534;
(statearr_24571[(27)] = inst_24509);

(statearr_24571[(20)] = inst_24474);

(statearr_24571[(9)] = inst_24475);

(statearr_24571[(11)] = inst_24477);

(statearr_24571[(21)] = inst_24476);

return statearr_24571;
})();
var statearr_24572_24640 = state_24534__$1;
(statearr_24572_24640[(2)] = null);

(statearr_24572_24640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (43))){
var state_24534__$1 = state_24534;
var statearr_24573_24641 = state_24534__$1;
(statearr_24573_24641[(2)] = null);

(statearr_24573_24641[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (29))){
var inst_24518 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24574_24642 = state_24534__$1;
(statearr_24574_24642[(2)] = inst_24518);

(statearr_24574_24642[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (44))){
var inst_24527 = (state_24534[(2)]);
var state_24534__$1 = (function (){var statearr_24575 = state_24534;
(statearr_24575[(28)] = inst_24527);

return statearr_24575;
})();
var statearr_24576_24643 = state_24534__$1;
(statearr_24576_24643[(2)] = null);

(statearr_24576_24643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (6))){
var inst_24466 = (state_24534[(29)]);
var inst_24465 = cljs.core.deref.call(null,cs);
var inst_24466__$1 = cljs.core.keys.call(null,inst_24465);
var inst_24467 = cljs.core.count.call(null,inst_24466__$1);
var inst_24468 = cljs.core.reset_BANG_.call(null,dctr,inst_24467);
var inst_24473 = cljs.core.seq.call(null,inst_24466__$1);
var inst_24474 = inst_24473;
var inst_24475 = null;
var inst_24476 = (0);
var inst_24477 = (0);
var state_24534__$1 = (function (){var statearr_24577 = state_24534;
(statearr_24577[(20)] = inst_24474);

(statearr_24577[(29)] = inst_24466__$1);

(statearr_24577[(9)] = inst_24475);

(statearr_24577[(30)] = inst_24468);

(statearr_24577[(11)] = inst_24477);

(statearr_24577[(21)] = inst_24476);

return statearr_24577;
})();
var statearr_24578_24644 = state_24534__$1;
(statearr_24578_24644[(2)] = null);

(statearr_24578_24644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (28))){
var inst_24474 = (state_24534[(20)]);
var inst_24493 = (state_24534[(25)]);
var inst_24493__$1 = cljs.core.seq.call(null,inst_24474);
var state_24534__$1 = (function (){var statearr_24579 = state_24534;
(statearr_24579[(25)] = inst_24493__$1);

return statearr_24579;
})();
if(inst_24493__$1){
var statearr_24580_24645 = state_24534__$1;
(statearr_24580_24645[(1)] = (33));

} else {
var statearr_24581_24646 = state_24534__$1;
(statearr_24581_24646[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (25))){
var inst_24477 = (state_24534[(11)]);
var inst_24476 = (state_24534[(21)]);
var inst_24479 = (inst_24477 < inst_24476);
var inst_24480 = inst_24479;
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24480)){
var statearr_24582_24647 = state_24534__$1;
(statearr_24582_24647[(1)] = (27));

} else {
var statearr_24583_24648 = state_24534__$1;
(statearr_24583_24648[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (34))){
var state_24534__$1 = state_24534;
var statearr_24584_24649 = state_24534__$1;
(statearr_24584_24649[(2)] = null);

(statearr_24584_24649[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (17))){
var state_24534__$1 = state_24534;
var statearr_24585_24650 = state_24534__$1;
(statearr_24585_24650[(2)] = null);

(statearr_24585_24650[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (3))){
var inst_24532 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24534__$1,inst_24532);
} else {
if((state_val_24535 === (12))){
var inst_24461 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24586_24651 = state_24534__$1;
(statearr_24586_24651[(2)] = inst_24461);

(statearr_24586_24651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (2))){
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24534__$1,(4),ch);
} else {
if((state_val_24535 === (23))){
var state_24534__$1 = state_24534;
var statearr_24587_24652 = state_24534__$1;
(statearr_24587_24652[(2)] = null);

(statearr_24587_24652[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (35))){
var inst_24516 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24588_24653 = state_24534__$1;
(statearr_24588_24653[(2)] = inst_24516);

(statearr_24588_24653[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (19))){
var inst_24433 = (state_24534[(7)]);
var inst_24437 = cljs.core.chunk_first.call(null,inst_24433);
var inst_24438 = cljs.core.chunk_rest.call(null,inst_24433);
var inst_24439 = cljs.core.count.call(null,inst_24437);
var inst_24411 = inst_24438;
var inst_24412 = inst_24437;
var inst_24413 = inst_24439;
var inst_24414 = (0);
var state_24534__$1 = (function (){var statearr_24589 = state_24534;
(statearr_24589[(13)] = inst_24411);

(statearr_24589[(14)] = inst_24414);

(statearr_24589[(15)] = inst_24413);

(statearr_24589[(16)] = inst_24412);

return statearr_24589;
})();
var statearr_24590_24654 = state_24534__$1;
(statearr_24590_24654[(2)] = null);

(statearr_24590_24654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (11))){
var inst_24411 = (state_24534[(13)]);
var inst_24433 = (state_24534[(7)]);
var inst_24433__$1 = cljs.core.seq.call(null,inst_24411);
var state_24534__$1 = (function (){var statearr_24591 = state_24534;
(statearr_24591[(7)] = inst_24433__$1);

return statearr_24591;
})();
if(inst_24433__$1){
var statearr_24592_24655 = state_24534__$1;
(statearr_24592_24655[(1)] = (16));

} else {
var statearr_24593_24656 = state_24534__$1;
(statearr_24593_24656[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (9))){
var inst_24463 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24594_24657 = state_24534__$1;
(statearr_24594_24657[(2)] = inst_24463);

(statearr_24594_24657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (5))){
var inst_24409 = cljs.core.deref.call(null,cs);
var inst_24410 = cljs.core.seq.call(null,inst_24409);
var inst_24411 = inst_24410;
var inst_24412 = null;
var inst_24413 = (0);
var inst_24414 = (0);
var state_24534__$1 = (function (){var statearr_24595 = state_24534;
(statearr_24595[(13)] = inst_24411);

(statearr_24595[(14)] = inst_24414);

(statearr_24595[(15)] = inst_24413);

(statearr_24595[(16)] = inst_24412);

return statearr_24595;
})();
var statearr_24596_24658 = state_24534__$1;
(statearr_24596_24658[(2)] = null);

(statearr_24596_24658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (14))){
var state_24534__$1 = state_24534;
var statearr_24597_24659 = state_24534__$1;
(statearr_24597_24659[(2)] = null);

(statearr_24597_24659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (45))){
var inst_24524 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24598_24660 = state_24534__$1;
(statearr_24598_24660[(2)] = inst_24524);

(statearr_24598_24660[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (26))){
var inst_24466 = (state_24534[(29)]);
var inst_24520 = (state_24534[(2)]);
var inst_24521 = cljs.core.seq.call(null,inst_24466);
var state_24534__$1 = (function (){var statearr_24599 = state_24534;
(statearr_24599[(31)] = inst_24520);

return statearr_24599;
})();
if(inst_24521){
var statearr_24600_24661 = state_24534__$1;
(statearr_24600_24661[(1)] = (42));

} else {
var statearr_24601_24662 = state_24534__$1;
(statearr_24601_24662[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (16))){
var inst_24433 = (state_24534[(7)]);
var inst_24435 = cljs.core.chunked_seq_QMARK_.call(null,inst_24433);
var state_24534__$1 = state_24534;
if(inst_24435){
var statearr_24602_24663 = state_24534__$1;
(statearr_24602_24663[(1)] = (19));

} else {
var statearr_24603_24664 = state_24534__$1;
(statearr_24603_24664[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (38))){
var inst_24513 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24604_24665 = state_24534__$1;
(statearr_24604_24665[(2)] = inst_24513);

(statearr_24604_24665[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (30))){
var state_24534__$1 = state_24534;
var statearr_24605_24666 = state_24534__$1;
(statearr_24605_24666[(2)] = null);

(statearr_24605_24666[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (10))){
var inst_24414 = (state_24534[(14)]);
var inst_24412 = (state_24534[(16)]);
var inst_24422 = cljs.core._nth.call(null,inst_24412,inst_24414);
var inst_24423 = cljs.core.nth.call(null,inst_24422,(0),null);
var inst_24424 = cljs.core.nth.call(null,inst_24422,(1),null);
var state_24534__$1 = (function (){var statearr_24606 = state_24534;
(statearr_24606[(26)] = inst_24423);

return statearr_24606;
})();
if(cljs.core.truth_(inst_24424)){
var statearr_24607_24667 = state_24534__$1;
(statearr_24607_24667[(1)] = (13));

} else {
var statearr_24608_24668 = state_24534__$1;
(statearr_24608_24668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (18))){
var inst_24459 = (state_24534[(2)]);
var state_24534__$1 = state_24534;
var statearr_24609_24669 = state_24534__$1;
(statearr_24609_24669[(2)] = inst_24459);

(statearr_24609_24669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (42))){
var state_24534__$1 = state_24534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24534__$1,(45),dchan);
} else {
if((state_val_24535 === (37))){
var inst_24402 = (state_24534[(12)]);
var inst_24502 = (state_24534[(23)]);
var inst_24493 = (state_24534[(25)]);
var inst_24502__$1 = cljs.core.first.call(null,inst_24493);
var inst_24503 = cljs.core.async.put_BANG_.call(null,inst_24502__$1,inst_24402,done);
var state_24534__$1 = (function (){var statearr_24610 = state_24534;
(statearr_24610[(23)] = inst_24502__$1);

return statearr_24610;
})();
if(cljs.core.truth_(inst_24503)){
var statearr_24611_24670 = state_24534__$1;
(statearr_24611_24670[(1)] = (39));

} else {
var statearr_24612_24671 = state_24534__$1;
(statearr_24612_24671[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24535 === (8))){
var inst_24414 = (state_24534[(14)]);
var inst_24413 = (state_24534[(15)]);
var inst_24416 = (inst_24414 < inst_24413);
var inst_24417 = inst_24416;
var state_24534__$1 = state_24534;
if(cljs.core.truth_(inst_24417)){
var statearr_24613_24672 = state_24534__$1;
(statearr_24613_24672[(1)] = (10));

} else {
var statearr_24614_24673 = state_24534__$1;
(statearr_24614_24673[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___24619,cs,m,dchan,dctr,done))
;
return ((function (switch__23705__auto__,c__23800__auto___24619,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23706__auto__ = null;
var cljs$core$async$mult_$_state_machine__23706__auto____0 = (function (){
var statearr_24615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24615[(0)] = cljs$core$async$mult_$_state_machine__23706__auto__);

(statearr_24615[(1)] = (1));

return statearr_24615;
});
var cljs$core$async$mult_$_state_machine__23706__auto____1 = (function (state_24534){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_24534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e24616){if((e24616 instanceof Object)){
var ex__23709__auto__ = e24616;
var statearr_24617_24674 = state_24534;
(statearr_24617_24674[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24675 = state_24534;
state_24534 = G__24675;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23706__auto__ = function(state_24534){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23706__auto____1.call(this,state_24534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23706__auto____0;
cljs$core$async$mult_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23706__auto____1;
return cljs$core$async$mult_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___24619,cs,m,dchan,dctr,done))
})();
var state__23802__auto__ = (function (){var statearr_24618 = f__23801__auto__.call(null);
(statearr_24618[(6)] = c__23800__auto___24619);

return statearr_24618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___24619,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24677 = arguments.length;
switch (G__24677) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24689 = arguments.length;
var i__4731__auto___24690 = (0);
while(true){
if((i__4731__auto___24690 < len__4730__auto___24689)){
args__4736__auto__.push((arguments[i__4731__auto___24690]));

var G__24691 = (i__4731__auto___24690 + (1));
i__4731__auto___24690 = G__24691;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24683){
var map__24684 = p__24683;
var map__24684__$1 = (((((!((map__24684 == null))))?(((((map__24684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24684):map__24684);
var opts = map__24684__$1;
var statearr_24686_24692 = state;
(statearr_24686_24692[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24684,map__24684__$1,opts){
return (function (val){
var statearr_24687_24693 = state;
(statearr_24687_24693[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24684,map__24684__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24688_24694 = state;
(statearr_24688_24694[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24679){
var G__24680 = cljs.core.first.call(null,seq24679);
var seq24679__$1 = cljs.core.next.call(null,seq24679);
var G__24681 = cljs.core.first.call(null,seq24679__$1);
var seq24679__$2 = cljs.core.next.call(null,seq24679__$1);
var G__24682 = cljs.core.first.call(null,seq24679__$2);
var seq24679__$3 = cljs.core.next.call(null,seq24679__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24680,G__24681,G__24682,seq24679__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24695 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24696){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24696 = meta24696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24697,meta24696__$1){
var self__ = this;
var _24697__$1 = this;
return (new cljs.core.async.t_cljs$core$async24695(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24696__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24697){
var self__ = this;
var _24697__$1 = this;
return self__.meta24696;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24695.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24695.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24695.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24695.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24695.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24695.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24695.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24695.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24696","meta24696",1358569034,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24695";

cljs.core.async.t_cljs$core$async24695.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24695");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24695.
 */
cljs.core.async.__GT_t_cljs$core$async24695 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24695(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24696){
return (new cljs.core.async.t_cljs$core$async24695(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24696));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24695(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23800__auto___24859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___24859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___24859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24799){
var state_val_24800 = (state_24799[(1)]);
if((state_val_24800 === (7))){
var inst_24714 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24801_24860 = state_24799__$1;
(statearr_24801_24860[(2)] = inst_24714);

(statearr_24801_24860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (20))){
var inst_24726 = (state_24799[(7)]);
var state_24799__$1 = state_24799;
var statearr_24802_24861 = state_24799__$1;
(statearr_24802_24861[(2)] = inst_24726);

(statearr_24802_24861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (27))){
var state_24799__$1 = state_24799;
var statearr_24803_24862 = state_24799__$1;
(statearr_24803_24862[(2)] = null);

(statearr_24803_24862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (1))){
var inst_24701 = (state_24799[(8)]);
var inst_24701__$1 = calc_state.call(null);
var inst_24703 = (inst_24701__$1 == null);
var inst_24704 = cljs.core.not.call(null,inst_24703);
var state_24799__$1 = (function (){var statearr_24804 = state_24799;
(statearr_24804[(8)] = inst_24701__$1);

return statearr_24804;
})();
if(inst_24704){
var statearr_24805_24863 = state_24799__$1;
(statearr_24805_24863[(1)] = (2));

} else {
var statearr_24806_24864 = state_24799__$1;
(statearr_24806_24864[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (24))){
var inst_24759 = (state_24799[(9)]);
var inst_24750 = (state_24799[(10)]);
var inst_24773 = (state_24799[(11)]);
var inst_24773__$1 = inst_24750.call(null,inst_24759);
var state_24799__$1 = (function (){var statearr_24807 = state_24799;
(statearr_24807[(11)] = inst_24773__$1);

return statearr_24807;
})();
if(cljs.core.truth_(inst_24773__$1)){
var statearr_24808_24865 = state_24799__$1;
(statearr_24808_24865[(1)] = (29));

} else {
var statearr_24809_24866 = state_24799__$1;
(statearr_24809_24866[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (4))){
var inst_24717 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
if(cljs.core.truth_(inst_24717)){
var statearr_24810_24867 = state_24799__$1;
(statearr_24810_24867[(1)] = (8));

} else {
var statearr_24811_24868 = state_24799__$1;
(statearr_24811_24868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (15))){
var inst_24744 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
if(cljs.core.truth_(inst_24744)){
var statearr_24812_24869 = state_24799__$1;
(statearr_24812_24869[(1)] = (19));

} else {
var statearr_24813_24870 = state_24799__$1;
(statearr_24813_24870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (21))){
var inst_24749 = (state_24799[(12)]);
var inst_24749__$1 = (state_24799[(2)]);
var inst_24750 = cljs.core.get.call(null,inst_24749__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24751 = cljs.core.get.call(null,inst_24749__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24752 = cljs.core.get.call(null,inst_24749__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24799__$1 = (function (){var statearr_24814 = state_24799;
(statearr_24814[(10)] = inst_24750);

(statearr_24814[(13)] = inst_24751);

(statearr_24814[(12)] = inst_24749__$1);

return statearr_24814;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24799__$1,(22),inst_24752);
} else {
if((state_val_24800 === (31))){
var inst_24781 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
if(cljs.core.truth_(inst_24781)){
var statearr_24815_24871 = state_24799__$1;
(statearr_24815_24871[(1)] = (32));

} else {
var statearr_24816_24872 = state_24799__$1;
(statearr_24816_24872[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (32))){
var inst_24758 = (state_24799[(14)]);
var state_24799__$1 = state_24799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24799__$1,(35),out,inst_24758);
} else {
if((state_val_24800 === (33))){
var inst_24749 = (state_24799[(12)]);
var inst_24726 = inst_24749;
var state_24799__$1 = (function (){var statearr_24817 = state_24799;
(statearr_24817[(7)] = inst_24726);

return statearr_24817;
})();
var statearr_24818_24873 = state_24799__$1;
(statearr_24818_24873[(2)] = null);

(statearr_24818_24873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (13))){
var inst_24726 = (state_24799[(7)]);
var inst_24733 = inst_24726.cljs$lang$protocol_mask$partition0$;
var inst_24734 = (inst_24733 & (64));
var inst_24735 = inst_24726.cljs$core$ISeq$;
var inst_24736 = (cljs.core.PROTOCOL_SENTINEL === inst_24735);
var inst_24737 = ((inst_24734) || (inst_24736));
var state_24799__$1 = state_24799;
if(cljs.core.truth_(inst_24737)){
var statearr_24819_24874 = state_24799__$1;
(statearr_24819_24874[(1)] = (16));

} else {
var statearr_24820_24875 = state_24799__$1;
(statearr_24820_24875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (22))){
var inst_24758 = (state_24799[(14)]);
var inst_24759 = (state_24799[(9)]);
var inst_24757 = (state_24799[(2)]);
var inst_24758__$1 = cljs.core.nth.call(null,inst_24757,(0),null);
var inst_24759__$1 = cljs.core.nth.call(null,inst_24757,(1),null);
var inst_24760 = (inst_24758__$1 == null);
var inst_24761 = cljs.core._EQ_.call(null,inst_24759__$1,change);
var inst_24762 = ((inst_24760) || (inst_24761));
var state_24799__$1 = (function (){var statearr_24821 = state_24799;
(statearr_24821[(14)] = inst_24758__$1);

(statearr_24821[(9)] = inst_24759__$1);

return statearr_24821;
})();
if(cljs.core.truth_(inst_24762)){
var statearr_24822_24876 = state_24799__$1;
(statearr_24822_24876[(1)] = (23));

} else {
var statearr_24823_24877 = state_24799__$1;
(statearr_24823_24877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (36))){
var inst_24749 = (state_24799[(12)]);
var inst_24726 = inst_24749;
var state_24799__$1 = (function (){var statearr_24824 = state_24799;
(statearr_24824[(7)] = inst_24726);

return statearr_24824;
})();
var statearr_24825_24878 = state_24799__$1;
(statearr_24825_24878[(2)] = null);

(statearr_24825_24878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (29))){
var inst_24773 = (state_24799[(11)]);
var state_24799__$1 = state_24799;
var statearr_24826_24879 = state_24799__$1;
(statearr_24826_24879[(2)] = inst_24773);

(statearr_24826_24879[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (6))){
var state_24799__$1 = state_24799;
var statearr_24827_24880 = state_24799__$1;
(statearr_24827_24880[(2)] = false);

(statearr_24827_24880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (28))){
var inst_24769 = (state_24799[(2)]);
var inst_24770 = calc_state.call(null);
var inst_24726 = inst_24770;
var state_24799__$1 = (function (){var statearr_24828 = state_24799;
(statearr_24828[(15)] = inst_24769);

(statearr_24828[(7)] = inst_24726);

return statearr_24828;
})();
var statearr_24829_24881 = state_24799__$1;
(statearr_24829_24881[(2)] = null);

(statearr_24829_24881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (25))){
var inst_24795 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24830_24882 = state_24799__$1;
(statearr_24830_24882[(2)] = inst_24795);

(statearr_24830_24882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (34))){
var inst_24793 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24831_24883 = state_24799__$1;
(statearr_24831_24883[(2)] = inst_24793);

(statearr_24831_24883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (17))){
var state_24799__$1 = state_24799;
var statearr_24832_24884 = state_24799__$1;
(statearr_24832_24884[(2)] = false);

(statearr_24832_24884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (3))){
var state_24799__$1 = state_24799;
var statearr_24833_24885 = state_24799__$1;
(statearr_24833_24885[(2)] = false);

(statearr_24833_24885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (12))){
var inst_24797 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24799__$1,inst_24797);
} else {
if((state_val_24800 === (2))){
var inst_24701 = (state_24799[(8)]);
var inst_24706 = inst_24701.cljs$lang$protocol_mask$partition0$;
var inst_24707 = (inst_24706 & (64));
var inst_24708 = inst_24701.cljs$core$ISeq$;
var inst_24709 = (cljs.core.PROTOCOL_SENTINEL === inst_24708);
var inst_24710 = ((inst_24707) || (inst_24709));
var state_24799__$1 = state_24799;
if(cljs.core.truth_(inst_24710)){
var statearr_24834_24886 = state_24799__$1;
(statearr_24834_24886[(1)] = (5));

} else {
var statearr_24835_24887 = state_24799__$1;
(statearr_24835_24887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (23))){
var inst_24758 = (state_24799[(14)]);
var inst_24764 = (inst_24758 == null);
var state_24799__$1 = state_24799;
if(cljs.core.truth_(inst_24764)){
var statearr_24836_24888 = state_24799__$1;
(statearr_24836_24888[(1)] = (26));

} else {
var statearr_24837_24889 = state_24799__$1;
(statearr_24837_24889[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (35))){
var inst_24784 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
if(cljs.core.truth_(inst_24784)){
var statearr_24838_24890 = state_24799__$1;
(statearr_24838_24890[(1)] = (36));

} else {
var statearr_24839_24891 = state_24799__$1;
(statearr_24839_24891[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (19))){
var inst_24726 = (state_24799[(7)]);
var inst_24746 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24726);
var state_24799__$1 = state_24799;
var statearr_24840_24892 = state_24799__$1;
(statearr_24840_24892[(2)] = inst_24746);

(statearr_24840_24892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (11))){
var inst_24726 = (state_24799[(7)]);
var inst_24730 = (inst_24726 == null);
var inst_24731 = cljs.core.not.call(null,inst_24730);
var state_24799__$1 = state_24799;
if(inst_24731){
var statearr_24841_24893 = state_24799__$1;
(statearr_24841_24893[(1)] = (13));

} else {
var statearr_24842_24894 = state_24799__$1;
(statearr_24842_24894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (9))){
var inst_24701 = (state_24799[(8)]);
var state_24799__$1 = state_24799;
var statearr_24843_24895 = state_24799__$1;
(statearr_24843_24895[(2)] = inst_24701);

(statearr_24843_24895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (5))){
var state_24799__$1 = state_24799;
var statearr_24844_24896 = state_24799__$1;
(statearr_24844_24896[(2)] = true);

(statearr_24844_24896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (14))){
var state_24799__$1 = state_24799;
var statearr_24845_24897 = state_24799__$1;
(statearr_24845_24897[(2)] = false);

(statearr_24845_24897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (26))){
var inst_24759 = (state_24799[(9)]);
var inst_24766 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24759);
var state_24799__$1 = state_24799;
var statearr_24846_24898 = state_24799__$1;
(statearr_24846_24898[(2)] = inst_24766);

(statearr_24846_24898[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (16))){
var state_24799__$1 = state_24799;
var statearr_24847_24899 = state_24799__$1;
(statearr_24847_24899[(2)] = true);

(statearr_24847_24899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (38))){
var inst_24789 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24848_24900 = state_24799__$1;
(statearr_24848_24900[(2)] = inst_24789);

(statearr_24848_24900[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (30))){
var inst_24759 = (state_24799[(9)]);
var inst_24750 = (state_24799[(10)]);
var inst_24751 = (state_24799[(13)]);
var inst_24776 = cljs.core.empty_QMARK_.call(null,inst_24750);
var inst_24777 = inst_24751.call(null,inst_24759);
var inst_24778 = cljs.core.not.call(null,inst_24777);
var inst_24779 = ((inst_24776) && (inst_24778));
var state_24799__$1 = state_24799;
var statearr_24849_24901 = state_24799__$1;
(statearr_24849_24901[(2)] = inst_24779);

(statearr_24849_24901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (10))){
var inst_24701 = (state_24799[(8)]);
var inst_24722 = (state_24799[(2)]);
var inst_24723 = cljs.core.get.call(null,inst_24722,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24724 = cljs.core.get.call(null,inst_24722,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24725 = cljs.core.get.call(null,inst_24722,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24726 = inst_24701;
var state_24799__$1 = (function (){var statearr_24850 = state_24799;
(statearr_24850[(16)] = inst_24724);

(statearr_24850[(7)] = inst_24726);

(statearr_24850[(17)] = inst_24723);

(statearr_24850[(18)] = inst_24725);

return statearr_24850;
})();
var statearr_24851_24902 = state_24799__$1;
(statearr_24851_24902[(2)] = null);

(statearr_24851_24902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (18))){
var inst_24741 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24852_24903 = state_24799__$1;
(statearr_24852_24903[(2)] = inst_24741);

(statearr_24852_24903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (37))){
var state_24799__$1 = state_24799;
var statearr_24853_24904 = state_24799__$1;
(statearr_24853_24904[(2)] = null);

(statearr_24853_24904[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (8))){
var inst_24701 = (state_24799[(8)]);
var inst_24719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24701);
var state_24799__$1 = state_24799;
var statearr_24854_24905 = state_24799__$1;
(statearr_24854_24905[(2)] = inst_24719);

(statearr_24854_24905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___24859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23705__auto__,c__23800__auto___24859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23706__auto__ = null;
var cljs$core$async$mix_$_state_machine__23706__auto____0 = (function (){
var statearr_24855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24855[(0)] = cljs$core$async$mix_$_state_machine__23706__auto__);

(statearr_24855[(1)] = (1));

return statearr_24855;
});
var cljs$core$async$mix_$_state_machine__23706__auto____1 = (function (state_24799){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_24799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e24856){if((e24856 instanceof Object)){
var ex__23709__auto__ = e24856;
var statearr_24857_24906 = state_24799;
(statearr_24857_24906[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24907 = state_24799;
state_24799 = G__24907;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23706__auto__ = function(state_24799){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23706__auto____1.call(this,state_24799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23706__auto____0;
cljs$core$async$mix_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23706__auto____1;
return cljs$core$async$mix_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___24859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23802__auto__ = (function (){var statearr_24858 = f__23801__auto__.call(null);
(statearr_24858[(6)] = c__23800__auto___24859);

return statearr_24858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___24859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24909 = arguments.length;
switch (G__24909) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24913 = arguments.length;
switch (G__24913) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24911_SHARP_){
if(cljs.core.truth_(p1__24911_SHARP_.call(null,topic))){
return p1__24911_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24911_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24914 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24915){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24915 = meta24915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24916,meta24915__$1){
var self__ = this;
var _24916__$1 = this;
return (new cljs.core.async.t_cljs$core$async24914(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24915__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24916){
var self__ = this;
var _24916__$1 = this;
return self__.meta24915;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24914.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24915","meta24915",-245419049,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24914";

cljs.core.async.t_cljs$core$async24914.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24914");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24914.
 */
cljs.core.async.__GT_t_cljs$core$async24914 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24914(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24915){
return (new cljs.core.async.t_cljs$core$async24914(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24915));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24914(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23800__auto___25034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___25034,mults,ensure_mult,p){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___25034,mults,ensure_mult,p){
return (function (state_24988){
var state_val_24989 = (state_24988[(1)]);
if((state_val_24989 === (7))){
var inst_24984 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_24990_25035 = state_24988__$1;
(statearr_24990_25035[(2)] = inst_24984);

(statearr_24990_25035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (20))){
var state_24988__$1 = state_24988;
var statearr_24991_25036 = state_24988__$1;
(statearr_24991_25036[(2)] = null);

(statearr_24991_25036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (1))){
var state_24988__$1 = state_24988;
var statearr_24992_25037 = state_24988__$1;
(statearr_24992_25037[(2)] = null);

(statearr_24992_25037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (24))){
var inst_24967 = (state_24988[(7)]);
var inst_24976 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24967);
var state_24988__$1 = state_24988;
var statearr_24993_25038 = state_24988__$1;
(statearr_24993_25038[(2)] = inst_24976);

(statearr_24993_25038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (4))){
var inst_24919 = (state_24988[(8)]);
var inst_24919__$1 = (state_24988[(2)]);
var inst_24920 = (inst_24919__$1 == null);
var state_24988__$1 = (function (){var statearr_24994 = state_24988;
(statearr_24994[(8)] = inst_24919__$1);

return statearr_24994;
})();
if(cljs.core.truth_(inst_24920)){
var statearr_24995_25039 = state_24988__$1;
(statearr_24995_25039[(1)] = (5));

} else {
var statearr_24996_25040 = state_24988__$1;
(statearr_24996_25040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (15))){
var inst_24961 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_24997_25041 = state_24988__$1;
(statearr_24997_25041[(2)] = inst_24961);

(statearr_24997_25041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (21))){
var inst_24981 = (state_24988[(2)]);
var state_24988__$1 = (function (){var statearr_24998 = state_24988;
(statearr_24998[(9)] = inst_24981);

return statearr_24998;
})();
var statearr_24999_25042 = state_24988__$1;
(statearr_24999_25042[(2)] = null);

(statearr_24999_25042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (13))){
var inst_24943 = (state_24988[(10)]);
var inst_24945 = cljs.core.chunked_seq_QMARK_.call(null,inst_24943);
var state_24988__$1 = state_24988;
if(inst_24945){
var statearr_25000_25043 = state_24988__$1;
(statearr_25000_25043[(1)] = (16));

} else {
var statearr_25001_25044 = state_24988__$1;
(statearr_25001_25044[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (22))){
var inst_24973 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
if(cljs.core.truth_(inst_24973)){
var statearr_25002_25045 = state_24988__$1;
(statearr_25002_25045[(1)] = (23));

} else {
var statearr_25003_25046 = state_24988__$1;
(statearr_25003_25046[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (6))){
var inst_24967 = (state_24988[(7)]);
var inst_24969 = (state_24988[(11)]);
var inst_24919 = (state_24988[(8)]);
var inst_24967__$1 = topic_fn.call(null,inst_24919);
var inst_24968 = cljs.core.deref.call(null,mults);
var inst_24969__$1 = cljs.core.get.call(null,inst_24968,inst_24967__$1);
var state_24988__$1 = (function (){var statearr_25004 = state_24988;
(statearr_25004[(7)] = inst_24967__$1);

(statearr_25004[(11)] = inst_24969__$1);

return statearr_25004;
})();
if(cljs.core.truth_(inst_24969__$1)){
var statearr_25005_25047 = state_24988__$1;
(statearr_25005_25047[(1)] = (19));

} else {
var statearr_25006_25048 = state_24988__$1;
(statearr_25006_25048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (25))){
var inst_24978 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25007_25049 = state_24988__$1;
(statearr_25007_25049[(2)] = inst_24978);

(statearr_25007_25049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (17))){
var inst_24943 = (state_24988[(10)]);
var inst_24952 = cljs.core.first.call(null,inst_24943);
var inst_24953 = cljs.core.async.muxch_STAR_.call(null,inst_24952);
var inst_24954 = cljs.core.async.close_BANG_.call(null,inst_24953);
var inst_24955 = cljs.core.next.call(null,inst_24943);
var inst_24929 = inst_24955;
var inst_24930 = null;
var inst_24931 = (0);
var inst_24932 = (0);
var state_24988__$1 = (function (){var statearr_25008 = state_24988;
(statearr_25008[(12)] = inst_24930);

(statearr_25008[(13)] = inst_24929);

(statearr_25008[(14)] = inst_24931);

(statearr_25008[(15)] = inst_24954);

(statearr_25008[(16)] = inst_24932);

return statearr_25008;
})();
var statearr_25009_25050 = state_24988__$1;
(statearr_25009_25050[(2)] = null);

(statearr_25009_25050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (3))){
var inst_24986 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24988__$1,inst_24986);
} else {
if((state_val_24989 === (12))){
var inst_24963 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25010_25051 = state_24988__$1;
(statearr_25010_25051[(2)] = inst_24963);

(statearr_25010_25051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (2))){
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24988__$1,(4),ch);
} else {
if((state_val_24989 === (23))){
var state_24988__$1 = state_24988;
var statearr_25011_25052 = state_24988__$1;
(statearr_25011_25052[(2)] = null);

(statearr_25011_25052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (19))){
var inst_24969 = (state_24988[(11)]);
var inst_24919 = (state_24988[(8)]);
var inst_24971 = cljs.core.async.muxch_STAR_.call(null,inst_24969);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24988__$1,(22),inst_24971,inst_24919);
} else {
if((state_val_24989 === (11))){
var inst_24943 = (state_24988[(10)]);
var inst_24929 = (state_24988[(13)]);
var inst_24943__$1 = cljs.core.seq.call(null,inst_24929);
var state_24988__$1 = (function (){var statearr_25012 = state_24988;
(statearr_25012[(10)] = inst_24943__$1);

return statearr_25012;
})();
if(inst_24943__$1){
var statearr_25013_25053 = state_24988__$1;
(statearr_25013_25053[(1)] = (13));

} else {
var statearr_25014_25054 = state_24988__$1;
(statearr_25014_25054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (9))){
var inst_24965 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25015_25055 = state_24988__$1;
(statearr_25015_25055[(2)] = inst_24965);

(statearr_25015_25055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (5))){
var inst_24926 = cljs.core.deref.call(null,mults);
var inst_24927 = cljs.core.vals.call(null,inst_24926);
var inst_24928 = cljs.core.seq.call(null,inst_24927);
var inst_24929 = inst_24928;
var inst_24930 = null;
var inst_24931 = (0);
var inst_24932 = (0);
var state_24988__$1 = (function (){var statearr_25016 = state_24988;
(statearr_25016[(12)] = inst_24930);

(statearr_25016[(13)] = inst_24929);

(statearr_25016[(14)] = inst_24931);

(statearr_25016[(16)] = inst_24932);

return statearr_25016;
})();
var statearr_25017_25056 = state_24988__$1;
(statearr_25017_25056[(2)] = null);

(statearr_25017_25056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (14))){
var state_24988__$1 = state_24988;
var statearr_25021_25057 = state_24988__$1;
(statearr_25021_25057[(2)] = null);

(statearr_25021_25057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (16))){
var inst_24943 = (state_24988[(10)]);
var inst_24947 = cljs.core.chunk_first.call(null,inst_24943);
var inst_24948 = cljs.core.chunk_rest.call(null,inst_24943);
var inst_24949 = cljs.core.count.call(null,inst_24947);
var inst_24929 = inst_24948;
var inst_24930 = inst_24947;
var inst_24931 = inst_24949;
var inst_24932 = (0);
var state_24988__$1 = (function (){var statearr_25022 = state_24988;
(statearr_25022[(12)] = inst_24930);

(statearr_25022[(13)] = inst_24929);

(statearr_25022[(14)] = inst_24931);

(statearr_25022[(16)] = inst_24932);

return statearr_25022;
})();
var statearr_25023_25058 = state_24988__$1;
(statearr_25023_25058[(2)] = null);

(statearr_25023_25058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (10))){
var inst_24930 = (state_24988[(12)]);
var inst_24929 = (state_24988[(13)]);
var inst_24931 = (state_24988[(14)]);
var inst_24932 = (state_24988[(16)]);
var inst_24937 = cljs.core._nth.call(null,inst_24930,inst_24932);
var inst_24938 = cljs.core.async.muxch_STAR_.call(null,inst_24937);
var inst_24939 = cljs.core.async.close_BANG_.call(null,inst_24938);
var inst_24940 = (inst_24932 + (1));
var tmp25018 = inst_24930;
var tmp25019 = inst_24929;
var tmp25020 = inst_24931;
var inst_24929__$1 = tmp25019;
var inst_24930__$1 = tmp25018;
var inst_24931__$1 = tmp25020;
var inst_24932__$1 = inst_24940;
var state_24988__$1 = (function (){var statearr_25024 = state_24988;
(statearr_25024[(17)] = inst_24939);

(statearr_25024[(12)] = inst_24930__$1);

(statearr_25024[(13)] = inst_24929__$1);

(statearr_25024[(14)] = inst_24931__$1);

(statearr_25024[(16)] = inst_24932__$1);

return statearr_25024;
})();
var statearr_25025_25059 = state_24988__$1;
(statearr_25025_25059[(2)] = null);

(statearr_25025_25059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (18))){
var inst_24958 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25026_25060 = state_24988__$1;
(statearr_25026_25060[(2)] = inst_24958);

(statearr_25026_25060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (8))){
var inst_24931 = (state_24988[(14)]);
var inst_24932 = (state_24988[(16)]);
var inst_24934 = (inst_24932 < inst_24931);
var inst_24935 = inst_24934;
var state_24988__$1 = state_24988;
if(cljs.core.truth_(inst_24935)){
var statearr_25027_25061 = state_24988__$1;
(statearr_25027_25061[(1)] = (10));

} else {
var statearr_25028_25062 = state_24988__$1;
(statearr_25028_25062[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___25034,mults,ensure_mult,p))
;
return ((function (switch__23705__auto__,c__23800__auto___25034,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_25029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25029[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_25029[(1)] = (1));

return statearr_25029;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_24988){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_24988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e25030){if((e25030 instanceof Object)){
var ex__23709__auto__ = e25030;
var statearr_25031_25063 = state_24988;
(statearr_25031_25063[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25064 = state_24988;
state_24988 = G__25064;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_24988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_24988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___25034,mults,ensure_mult,p))
})();
var state__23802__auto__ = (function (){var statearr_25032 = f__23801__auto__.call(null);
(statearr_25032[(6)] = c__23800__auto___25034);

return statearr_25032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___25034,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25066 = arguments.length;
switch (G__25066) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25069 = arguments.length;
switch (G__25069) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25072 = arguments.length;
switch (G__25072) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23800__auto___25139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___25139,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___25139,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25111){
var state_val_25112 = (state_25111[(1)]);
if((state_val_25112 === (7))){
var state_25111__$1 = state_25111;
var statearr_25113_25140 = state_25111__$1;
(statearr_25113_25140[(2)] = null);

(statearr_25113_25140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (1))){
var state_25111__$1 = state_25111;
var statearr_25114_25141 = state_25111__$1;
(statearr_25114_25141[(2)] = null);

(statearr_25114_25141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (4))){
var inst_25075 = (state_25111[(7)]);
var inst_25077 = (inst_25075 < cnt);
var state_25111__$1 = state_25111;
if(cljs.core.truth_(inst_25077)){
var statearr_25115_25142 = state_25111__$1;
(statearr_25115_25142[(1)] = (6));

} else {
var statearr_25116_25143 = state_25111__$1;
(statearr_25116_25143[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (15))){
var inst_25107 = (state_25111[(2)]);
var state_25111__$1 = state_25111;
var statearr_25117_25144 = state_25111__$1;
(statearr_25117_25144[(2)] = inst_25107);

(statearr_25117_25144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (13))){
var inst_25100 = cljs.core.async.close_BANG_.call(null,out);
var state_25111__$1 = state_25111;
var statearr_25118_25145 = state_25111__$1;
(statearr_25118_25145[(2)] = inst_25100);

(statearr_25118_25145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (6))){
var state_25111__$1 = state_25111;
var statearr_25119_25146 = state_25111__$1;
(statearr_25119_25146[(2)] = null);

(statearr_25119_25146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (3))){
var inst_25109 = (state_25111[(2)]);
var state_25111__$1 = state_25111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25111__$1,inst_25109);
} else {
if((state_val_25112 === (12))){
var inst_25097 = (state_25111[(8)]);
var inst_25097__$1 = (state_25111[(2)]);
var inst_25098 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25097__$1);
var state_25111__$1 = (function (){var statearr_25120 = state_25111;
(statearr_25120[(8)] = inst_25097__$1);

return statearr_25120;
})();
if(cljs.core.truth_(inst_25098)){
var statearr_25121_25147 = state_25111__$1;
(statearr_25121_25147[(1)] = (13));

} else {
var statearr_25122_25148 = state_25111__$1;
(statearr_25122_25148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (2))){
var inst_25074 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25075 = (0);
var state_25111__$1 = (function (){var statearr_25123 = state_25111;
(statearr_25123[(9)] = inst_25074);

(statearr_25123[(7)] = inst_25075);

return statearr_25123;
})();
var statearr_25124_25149 = state_25111__$1;
(statearr_25124_25149[(2)] = null);

(statearr_25124_25149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (11))){
var inst_25075 = (state_25111[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25111,(10),Object,null,(9));
var inst_25084 = chs__$1.call(null,inst_25075);
var inst_25085 = done.call(null,inst_25075);
var inst_25086 = cljs.core.async.take_BANG_.call(null,inst_25084,inst_25085);
var state_25111__$1 = state_25111;
var statearr_25125_25150 = state_25111__$1;
(statearr_25125_25150[(2)] = inst_25086);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25111__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (9))){
var inst_25075 = (state_25111[(7)]);
var inst_25088 = (state_25111[(2)]);
var inst_25089 = (inst_25075 + (1));
var inst_25075__$1 = inst_25089;
var state_25111__$1 = (function (){var statearr_25126 = state_25111;
(statearr_25126[(7)] = inst_25075__$1);

(statearr_25126[(10)] = inst_25088);

return statearr_25126;
})();
var statearr_25127_25151 = state_25111__$1;
(statearr_25127_25151[(2)] = null);

(statearr_25127_25151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (5))){
var inst_25095 = (state_25111[(2)]);
var state_25111__$1 = (function (){var statearr_25128 = state_25111;
(statearr_25128[(11)] = inst_25095);

return statearr_25128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25111__$1,(12),dchan);
} else {
if((state_val_25112 === (14))){
var inst_25097 = (state_25111[(8)]);
var inst_25102 = cljs.core.apply.call(null,f,inst_25097);
var state_25111__$1 = state_25111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25111__$1,(16),out,inst_25102);
} else {
if((state_val_25112 === (16))){
var inst_25104 = (state_25111[(2)]);
var state_25111__$1 = (function (){var statearr_25129 = state_25111;
(statearr_25129[(12)] = inst_25104);

return statearr_25129;
})();
var statearr_25130_25152 = state_25111__$1;
(statearr_25130_25152[(2)] = null);

(statearr_25130_25152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (10))){
var inst_25079 = (state_25111[(2)]);
var inst_25080 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25111__$1 = (function (){var statearr_25131 = state_25111;
(statearr_25131[(13)] = inst_25079);

return statearr_25131;
})();
var statearr_25132_25153 = state_25111__$1;
(statearr_25132_25153[(2)] = inst_25080);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25111__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (8))){
var inst_25093 = (state_25111[(2)]);
var state_25111__$1 = state_25111;
var statearr_25133_25154 = state_25111__$1;
(statearr_25133_25154[(2)] = inst_25093);

(statearr_25133_25154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___25139,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23705__auto__,c__23800__auto___25139,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_25134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25134[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_25134[(1)] = (1));

return statearr_25134;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_25111){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_25111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e25135){if((e25135 instanceof Object)){
var ex__23709__auto__ = e25135;
var statearr_25136_25155 = state_25111;
(statearr_25136_25155[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25156 = state_25111;
state_25111 = G__25156;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_25111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_25111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___25139,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23802__auto__ = (function (){var statearr_25137 = f__23801__auto__.call(null);
(statearr_25137[(6)] = c__23800__auto___25139);

return statearr_25137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___25139,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25159 = arguments.length;
switch (G__25159) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23800__auto___25213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___25213,out){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___25213,out){
return (function (state_25191){
var state_val_25192 = (state_25191[(1)]);
if((state_val_25192 === (7))){
var inst_25171 = (state_25191[(7)]);
var inst_25170 = (state_25191[(8)]);
var inst_25170__$1 = (state_25191[(2)]);
var inst_25171__$1 = cljs.core.nth.call(null,inst_25170__$1,(0),null);
var inst_25172 = cljs.core.nth.call(null,inst_25170__$1,(1),null);
var inst_25173 = (inst_25171__$1 == null);
var state_25191__$1 = (function (){var statearr_25193 = state_25191;
(statearr_25193[(7)] = inst_25171__$1);

(statearr_25193[(9)] = inst_25172);

(statearr_25193[(8)] = inst_25170__$1);

return statearr_25193;
})();
if(cljs.core.truth_(inst_25173)){
var statearr_25194_25214 = state_25191__$1;
(statearr_25194_25214[(1)] = (8));

} else {
var statearr_25195_25215 = state_25191__$1;
(statearr_25195_25215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (1))){
var inst_25160 = cljs.core.vec.call(null,chs);
var inst_25161 = inst_25160;
var state_25191__$1 = (function (){var statearr_25196 = state_25191;
(statearr_25196[(10)] = inst_25161);

return statearr_25196;
})();
var statearr_25197_25216 = state_25191__$1;
(statearr_25197_25216[(2)] = null);

(statearr_25197_25216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (4))){
var inst_25161 = (state_25191[(10)]);
var state_25191__$1 = state_25191;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25191__$1,(7),inst_25161);
} else {
if((state_val_25192 === (6))){
var inst_25187 = (state_25191[(2)]);
var state_25191__$1 = state_25191;
var statearr_25198_25217 = state_25191__$1;
(statearr_25198_25217[(2)] = inst_25187);

(statearr_25198_25217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (3))){
var inst_25189 = (state_25191[(2)]);
var state_25191__$1 = state_25191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25191__$1,inst_25189);
} else {
if((state_val_25192 === (2))){
var inst_25161 = (state_25191[(10)]);
var inst_25163 = cljs.core.count.call(null,inst_25161);
var inst_25164 = (inst_25163 > (0));
var state_25191__$1 = state_25191;
if(cljs.core.truth_(inst_25164)){
var statearr_25200_25218 = state_25191__$1;
(statearr_25200_25218[(1)] = (4));

} else {
var statearr_25201_25219 = state_25191__$1;
(statearr_25201_25219[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (11))){
var inst_25161 = (state_25191[(10)]);
var inst_25180 = (state_25191[(2)]);
var tmp25199 = inst_25161;
var inst_25161__$1 = tmp25199;
var state_25191__$1 = (function (){var statearr_25202 = state_25191;
(statearr_25202[(11)] = inst_25180);

(statearr_25202[(10)] = inst_25161__$1);

return statearr_25202;
})();
var statearr_25203_25220 = state_25191__$1;
(statearr_25203_25220[(2)] = null);

(statearr_25203_25220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (9))){
var inst_25171 = (state_25191[(7)]);
var state_25191__$1 = state_25191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25191__$1,(11),out,inst_25171);
} else {
if((state_val_25192 === (5))){
var inst_25185 = cljs.core.async.close_BANG_.call(null,out);
var state_25191__$1 = state_25191;
var statearr_25204_25221 = state_25191__$1;
(statearr_25204_25221[(2)] = inst_25185);

(statearr_25204_25221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (10))){
var inst_25183 = (state_25191[(2)]);
var state_25191__$1 = state_25191;
var statearr_25205_25222 = state_25191__$1;
(statearr_25205_25222[(2)] = inst_25183);

(statearr_25205_25222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25192 === (8))){
var inst_25171 = (state_25191[(7)]);
var inst_25172 = (state_25191[(9)]);
var inst_25170 = (state_25191[(8)]);
var inst_25161 = (state_25191[(10)]);
var inst_25175 = (function (){var cs = inst_25161;
var vec__25166 = inst_25170;
var v = inst_25171;
var c = inst_25172;
return ((function (cs,vec__25166,v,c,inst_25171,inst_25172,inst_25170,inst_25161,state_val_25192,c__23800__auto___25213,out){
return (function (p1__25157_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25157_SHARP_);
});
;})(cs,vec__25166,v,c,inst_25171,inst_25172,inst_25170,inst_25161,state_val_25192,c__23800__auto___25213,out))
})();
var inst_25176 = cljs.core.filterv.call(null,inst_25175,inst_25161);
var inst_25161__$1 = inst_25176;
var state_25191__$1 = (function (){var statearr_25206 = state_25191;
(statearr_25206[(10)] = inst_25161__$1);

return statearr_25206;
})();
var statearr_25207_25223 = state_25191__$1;
(statearr_25207_25223[(2)] = null);

(statearr_25207_25223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___25213,out))
;
return ((function (switch__23705__auto__,c__23800__auto___25213,out){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_25208 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25208[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_25208[(1)] = (1));

return statearr_25208;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_25191){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_25191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e25209){if((e25209 instanceof Object)){
var ex__23709__auto__ = e25209;
var statearr_25210_25224 = state_25191;
(statearr_25210_25224[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25225 = state_25191;
state_25191 = G__25225;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_25191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_25191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___25213,out))
})();
var state__23802__auto__ = (function (){var statearr_25211 = f__23801__auto__.call(null);
(statearr_25211[(6)] = c__23800__auto___25213);

return statearr_25211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___25213,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25227 = arguments.length;
switch (G__25227) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23800__auto___25272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___25272,out){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___25272,out){
return (function (state_25251){
var state_val_25252 = (state_25251[(1)]);
if((state_val_25252 === (7))){
var inst_25233 = (state_25251[(7)]);
var inst_25233__$1 = (state_25251[(2)]);
var inst_25234 = (inst_25233__$1 == null);
var inst_25235 = cljs.core.not.call(null,inst_25234);
var state_25251__$1 = (function (){var statearr_25253 = state_25251;
(statearr_25253[(7)] = inst_25233__$1);

return statearr_25253;
})();
if(inst_25235){
var statearr_25254_25273 = state_25251__$1;
(statearr_25254_25273[(1)] = (8));

} else {
var statearr_25255_25274 = state_25251__$1;
(statearr_25255_25274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (1))){
var inst_25228 = (0);
var state_25251__$1 = (function (){var statearr_25256 = state_25251;
(statearr_25256[(8)] = inst_25228);

return statearr_25256;
})();
var statearr_25257_25275 = state_25251__$1;
(statearr_25257_25275[(2)] = null);

(statearr_25257_25275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (4))){
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25251__$1,(7),ch);
} else {
if((state_val_25252 === (6))){
var inst_25246 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25258_25276 = state_25251__$1;
(statearr_25258_25276[(2)] = inst_25246);

(statearr_25258_25276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (3))){
var inst_25248 = (state_25251[(2)]);
var inst_25249 = cljs.core.async.close_BANG_.call(null,out);
var state_25251__$1 = (function (){var statearr_25259 = state_25251;
(statearr_25259[(9)] = inst_25248);

return statearr_25259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25251__$1,inst_25249);
} else {
if((state_val_25252 === (2))){
var inst_25228 = (state_25251[(8)]);
var inst_25230 = (inst_25228 < n);
var state_25251__$1 = state_25251;
if(cljs.core.truth_(inst_25230)){
var statearr_25260_25277 = state_25251__$1;
(statearr_25260_25277[(1)] = (4));

} else {
var statearr_25261_25278 = state_25251__$1;
(statearr_25261_25278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (11))){
var inst_25228 = (state_25251[(8)]);
var inst_25238 = (state_25251[(2)]);
var inst_25239 = (inst_25228 + (1));
var inst_25228__$1 = inst_25239;
var state_25251__$1 = (function (){var statearr_25262 = state_25251;
(statearr_25262[(10)] = inst_25238);

(statearr_25262[(8)] = inst_25228__$1);

return statearr_25262;
})();
var statearr_25263_25279 = state_25251__$1;
(statearr_25263_25279[(2)] = null);

(statearr_25263_25279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (9))){
var state_25251__$1 = state_25251;
var statearr_25264_25280 = state_25251__$1;
(statearr_25264_25280[(2)] = null);

(statearr_25264_25280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (5))){
var state_25251__$1 = state_25251;
var statearr_25265_25281 = state_25251__$1;
(statearr_25265_25281[(2)] = null);

(statearr_25265_25281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (10))){
var inst_25243 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25266_25282 = state_25251__$1;
(statearr_25266_25282[(2)] = inst_25243);

(statearr_25266_25282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (8))){
var inst_25233 = (state_25251[(7)]);
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25251__$1,(11),out,inst_25233);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___25272,out))
;
return ((function (switch__23705__auto__,c__23800__auto___25272,out){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_25267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25267[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_25267[(1)] = (1));

return statearr_25267;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_25251){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_25251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e25268){if((e25268 instanceof Object)){
var ex__23709__auto__ = e25268;
var statearr_25269_25283 = state_25251;
(statearr_25269_25283[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25284 = state_25251;
state_25251 = G__25284;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_25251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_25251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___25272,out))
})();
var state__23802__auto__ = (function (){var statearr_25270 = f__23801__auto__.call(null);
(statearr_25270[(6)] = c__23800__auto___25272);

return statearr_25270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___25272,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25286 = (function (f,ch,meta25287){
this.f = f;
this.ch = ch;
this.meta25287 = meta25287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25288,meta25287__$1){
var self__ = this;
var _25288__$1 = this;
return (new cljs.core.async.t_cljs$core$async25286(self__.f,self__.ch,meta25287__$1));
});

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25288){
var self__ = this;
var _25288__$1 = this;
return self__.meta25287;
});

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25289 = (function (f,ch,meta25287,_,fn1,meta25290){
this.f = f;
this.ch = ch;
this.meta25287 = meta25287;
this._ = _;
this.fn1 = fn1;
this.meta25290 = meta25290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25291,meta25290__$1){
var self__ = this;
var _25291__$1 = this;
return (new cljs.core.async.t_cljs$core$async25289(self__.f,self__.ch,self__.meta25287,self__._,self__.fn1,meta25290__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25291){
var self__ = this;
var _25291__$1 = this;
return self__.meta25290;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25285_SHARP_){
return f1.call(null,(((p1__25285_SHARP_ == null))?null:self__.f.call(null,p1__25285_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25287","meta25287",-187765557,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25286","cljs.core.async/t_cljs$core$async25286",-436727068,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25290","meta25290",992774325,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25289";

cljs.core.async.t_cljs$core$async25289.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25289");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25289.
 */
cljs.core.async.__GT_t_cljs$core$async25289 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25289(f__$1,ch__$1,meta25287__$1,___$2,fn1__$1,meta25290){
return (new cljs.core.async.t_cljs$core$async25289(f__$1,ch__$1,meta25287__$1,___$2,fn1__$1,meta25290));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25289(self__.f,self__.ch,self__.meta25287,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25287","meta25287",-187765557,null)], null);
});

cljs.core.async.t_cljs$core$async25286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25286";

cljs.core.async.t_cljs$core$async25286.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25286");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25286.
 */
cljs.core.async.__GT_t_cljs$core$async25286 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25286(f__$1,ch__$1,meta25287){
return (new cljs.core.async.t_cljs$core$async25286(f__$1,ch__$1,meta25287));
});

}

return (new cljs.core.async.t_cljs$core$async25286(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25292 = (function (f,ch,meta25293){
this.f = f;
this.ch = ch;
this.meta25293 = meta25293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25294,meta25293__$1){
var self__ = this;
var _25294__$1 = this;
return (new cljs.core.async.t_cljs$core$async25292(self__.f,self__.ch,meta25293__$1));
});

cljs.core.async.t_cljs$core$async25292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25294){
var self__ = this;
var _25294__$1 = this;
return self__.meta25293;
});

cljs.core.async.t_cljs$core$async25292.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25292.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25292.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25293","meta25293",1669621108,null)], null);
});

cljs.core.async.t_cljs$core$async25292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25292";

cljs.core.async.t_cljs$core$async25292.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25292");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25292.
 */
cljs.core.async.__GT_t_cljs$core$async25292 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25292(f__$1,ch__$1,meta25293){
return (new cljs.core.async.t_cljs$core$async25292(f__$1,ch__$1,meta25293));
});

}

return (new cljs.core.async.t_cljs$core$async25292(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25295 = (function (p,ch,meta25296){
this.p = p;
this.ch = ch;
this.meta25296 = meta25296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25297,meta25296__$1){
var self__ = this;
var _25297__$1 = this;
return (new cljs.core.async.t_cljs$core$async25295(self__.p,self__.ch,meta25296__$1));
});

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25297){
var self__ = this;
var _25297__$1 = this;
return self__.meta25296;
});

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25296","meta25296",1927192831,null)], null);
});

cljs.core.async.t_cljs$core$async25295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25295";

cljs.core.async.t_cljs$core$async25295.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25295");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25295.
 */
cljs.core.async.__GT_t_cljs$core$async25295 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25295(p__$1,ch__$1,meta25296){
return (new cljs.core.async.t_cljs$core$async25295(p__$1,ch__$1,meta25296));
});

}

return (new cljs.core.async.t_cljs$core$async25295(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25299 = arguments.length;
switch (G__25299) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23800__auto___25339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___25339,out){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___25339,out){
return (function (state_25320){
var state_val_25321 = (state_25320[(1)]);
if((state_val_25321 === (7))){
var inst_25316 = (state_25320[(2)]);
var state_25320__$1 = state_25320;
var statearr_25322_25340 = state_25320__$1;
(statearr_25322_25340[(2)] = inst_25316);

(statearr_25322_25340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25321 === (1))){
var state_25320__$1 = state_25320;
var statearr_25323_25341 = state_25320__$1;
(statearr_25323_25341[(2)] = null);

(statearr_25323_25341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25321 === (4))){
var inst_25302 = (state_25320[(7)]);
var inst_25302__$1 = (state_25320[(2)]);
var inst_25303 = (inst_25302__$1 == null);
var state_25320__$1 = (function (){var statearr_25324 = state_25320;
(statearr_25324[(7)] = inst_25302__$1);

return statearr_25324;
})();
if(cljs.core.truth_(inst_25303)){
var statearr_25325_25342 = state_25320__$1;
(statearr_25325_25342[(1)] = (5));

} else {
var statearr_25326_25343 = state_25320__$1;
(statearr_25326_25343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25321 === (6))){
var inst_25302 = (state_25320[(7)]);
var inst_25307 = p.call(null,inst_25302);
var state_25320__$1 = state_25320;
if(cljs.core.truth_(inst_25307)){
var statearr_25327_25344 = state_25320__$1;
(statearr_25327_25344[(1)] = (8));

} else {
var statearr_25328_25345 = state_25320__$1;
(statearr_25328_25345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25321 === (3))){
var inst_25318 = (state_25320[(2)]);
var state_25320__$1 = state_25320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25320__$1,inst_25318);
} else {
if((state_val_25321 === (2))){
var state_25320__$1 = state_25320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25320__$1,(4),ch);
} else {
if((state_val_25321 === (11))){
var inst_25310 = (state_25320[(2)]);
var state_25320__$1 = state_25320;
var statearr_25329_25346 = state_25320__$1;
(statearr_25329_25346[(2)] = inst_25310);

(statearr_25329_25346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25321 === (9))){
var state_25320__$1 = state_25320;
var statearr_25330_25347 = state_25320__$1;
(statearr_25330_25347[(2)] = null);

(statearr_25330_25347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25321 === (5))){
var inst_25305 = cljs.core.async.close_BANG_.call(null,out);
var state_25320__$1 = state_25320;
var statearr_25331_25348 = state_25320__$1;
(statearr_25331_25348[(2)] = inst_25305);

(statearr_25331_25348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25321 === (10))){
var inst_25313 = (state_25320[(2)]);
var state_25320__$1 = (function (){var statearr_25332 = state_25320;
(statearr_25332[(8)] = inst_25313);

return statearr_25332;
})();
var statearr_25333_25349 = state_25320__$1;
(statearr_25333_25349[(2)] = null);

(statearr_25333_25349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25321 === (8))){
var inst_25302 = (state_25320[(7)]);
var state_25320__$1 = state_25320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25320__$1,(11),out,inst_25302);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___25339,out))
;
return ((function (switch__23705__auto__,c__23800__auto___25339,out){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_25334 = [null,null,null,null,null,null,null,null,null];
(statearr_25334[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_25334[(1)] = (1));

return statearr_25334;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_25320){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_25320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e25335){if((e25335 instanceof Object)){
var ex__23709__auto__ = e25335;
var statearr_25336_25350 = state_25320;
(statearr_25336_25350[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25351 = state_25320;
state_25320 = G__25351;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_25320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_25320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___25339,out))
})();
var state__23802__auto__ = (function (){var statearr_25337 = f__23801__auto__.call(null);
(statearr_25337[(6)] = c__23800__auto___25339);

return statearr_25337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___25339,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25353 = arguments.length;
switch (G__25353) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto__){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto__){
return (function (state_25416){
var state_val_25417 = (state_25416[(1)]);
if((state_val_25417 === (7))){
var inst_25412 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25418_25456 = state_25416__$1;
(statearr_25418_25456[(2)] = inst_25412);

(statearr_25418_25456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (20))){
var inst_25382 = (state_25416[(7)]);
var inst_25393 = (state_25416[(2)]);
var inst_25394 = cljs.core.next.call(null,inst_25382);
var inst_25368 = inst_25394;
var inst_25369 = null;
var inst_25370 = (0);
var inst_25371 = (0);
var state_25416__$1 = (function (){var statearr_25419 = state_25416;
(statearr_25419[(8)] = inst_25371);

(statearr_25419[(9)] = inst_25370);

(statearr_25419[(10)] = inst_25369);

(statearr_25419[(11)] = inst_25368);

(statearr_25419[(12)] = inst_25393);

return statearr_25419;
})();
var statearr_25420_25457 = state_25416__$1;
(statearr_25420_25457[(2)] = null);

(statearr_25420_25457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (1))){
var state_25416__$1 = state_25416;
var statearr_25421_25458 = state_25416__$1;
(statearr_25421_25458[(2)] = null);

(statearr_25421_25458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (4))){
var inst_25357 = (state_25416[(13)]);
var inst_25357__$1 = (state_25416[(2)]);
var inst_25358 = (inst_25357__$1 == null);
var state_25416__$1 = (function (){var statearr_25422 = state_25416;
(statearr_25422[(13)] = inst_25357__$1);

return statearr_25422;
})();
if(cljs.core.truth_(inst_25358)){
var statearr_25423_25459 = state_25416__$1;
(statearr_25423_25459[(1)] = (5));

} else {
var statearr_25424_25460 = state_25416__$1;
(statearr_25424_25460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (15))){
var state_25416__$1 = state_25416;
var statearr_25428_25461 = state_25416__$1;
(statearr_25428_25461[(2)] = null);

(statearr_25428_25461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (21))){
var state_25416__$1 = state_25416;
var statearr_25429_25462 = state_25416__$1;
(statearr_25429_25462[(2)] = null);

(statearr_25429_25462[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (13))){
var inst_25371 = (state_25416[(8)]);
var inst_25370 = (state_25416[(9)]);
var inst_25369 = (state_25416[(10)]);
var inst_25368 = (state_25416[(11)]);
var inst_25378 = (state_25416[(2)]);
var inst_25379 = (inst_25371 + (1));
var tmp25425 = inst_25370;
var tmp25426 = inst_25369;
var tmp25427 = inst_25368;
var inst_25368__$1 = tmp25427;
var inst_25369__$1 = tmp25426;
var inst_25370__$1 = tmp25425;
var inst_25371__$1 = inst_25379;
var state_25416__$1 = (function (){var statearr_25430 = state_25416;
(statearr_25430[(14)] = inst_25378);

(statearr_25430[(8)] = inst_25371__$1);

(statearr_25430[(9)] = inst_25370__$1);

(statearr_25430[(10)] = inst_25369__$1);

(statearr_25430[(11)] = inst_25368__$1);

return statearr_25430;
})();
var statearr_25431_25463 = state_25416__$1;
(statearr_25431_25463[(2)] = null);

(statearr_25431_25463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (22))){
var state_25416__$1 = state_25416;
var statearr_25432_25464 = state_25416__$1;
(statearr_25432_25464[(2)] = null);

(statearr_25432_25464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (6))){
var inst_25357 = (state_25416[(13)]);
var inst_25366 = f.call(null,inst_25357);
var inst_25367 = cljs.core.seq.call(null,inst_25366);
var inst_25368 = inst_25367;
var inst_25369 = null;
var inst_25370 = (0);
var inst_25371 = (0);
var state_25416__$1 = (function (){var statearr_25433 = state_25416;
(statearr_25433[(8)] = inst_25371);

(statearr_25433[(9)] = inst_25370);

(statearr_25433[(10)] = inst_25369);

(statearr_25433[(11)] = inst_25368);

return statearr_25433;
})();
var statearr_25434_25465 = state_25416__$1;
(statearr_25434_25465[(2)] = null);

(statearr_25434_25465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (17))){
var inst_25382 = (state_25416[(7)]);
var inst_25386 = cljs.core.chunk_first.call(null,inst_25382);
var inst_25387 = cljs.core.chunk_rest.call(null,inst_25382);
var inst_25388 = cljs.core.count.call(null,inst_25386);
var inst_25368 = inst_25387;
var inst_25369 = inst_25386;
var inst_25370 = inst_25388;
var inst_25371 = (0);
var state_25416__$1 = (function (){var statearr_25435 = state_25416;
(statearr_25435[(8)] = inst_25371);

(statearr_25435[(9)] = inst_25370);

(statearr_25435[(10)] = inst_25369);

(statearr_25435[(11)] = inst_25368);

return statearr_25435;
})();
var statearr_25436_25466 = state_25416__$1;
(statearr_25436_25466[(2)] = null);

(statearr_25436_25466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (3))){
var inst_25414 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25416__$1,inst_25414);
} else {
if((state_val_25417 === (12))){
var inst_25402 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25437_25467 = state_25416__$1;
(statearr_25437_25467[(2)] = inst_25402);

(statearr_25437_25467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (2))){
var state_25416__$1 = state_25416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25416__$1,(4),in$);
} else {
if((state_val_25417 === (23))){
var inst_25410 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25438_25468 = state_25416__$1;
(statearr_25438_25468[(2)] = inst_25410);

(statearr_25438_25468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (19))){
var inst_25397 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25439_25469 = state_25416__$1;
(statearr_25439_25469[(2)] = inst_25397);

(statearr_25439_25469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (11))){
var inst_25382 = (state_25416[(7)]);
var inst_25368 = (state_25416[(11)]);
var inst_25382__$1 = cljs.core.seq.call(null,inst_25368);
var state_25416__$1 = (function (){var statearr_25440 = state_25416;
(statearr_25440[(7)] = inst_25382__$1);

return statearr_25440;
})();
if(inst_25382__$1){
var statearr_25441_25470 = state_25416__$1;
(statearr_25441_25470[(1)] = (14));

} else {
var statearr_25442_25471 = state_25416__$1;
(statearr_25442_25471[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (9))){
var inst_25404 = (state_25416[(2)]);
var inst_25405 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25416__$1 = (function (){var statearr_25443 = state_25416;
(statearr_25443[(15)] = inst_25404);

return statearr_25443;
})();
if(cljs.core.truth_(inst_25405)){
var statearr_25444_25472 = state_25416__$1;
(statearr_25444_25472[(1)] = (21));

} else {
var statearr_25445_25473 = state_25416__$1;
(statearr_25445_25473[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (5))){
var inst_25360 = cljs.core.async.close_BANG_.call(null,out);
var state_25416__$1 = state_25416;
var statearr_25446_25474 = state_25416__$1;
(statearr_25446_25474[(2)] = inst_25360);

(statearr_25446_25474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (14))){
var inst_25382 = (state_25416[(7)]);
var inst_25384 = cljs.core.chunked_seq_QMARK_.call(null,inst_25382);
var state_25416__$1 = state_25416;
if(inst_25384){
var statearr_25447_25475 = state_25416__$1;
(statearr_25447_25475[(1)] = (17));

} else {
var statearr_25448_25476 = state_25416__$1;
(statearr_25448_25476[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (16))){
var inst_25400 = (state_25416[(2)]);
var state_25416__$1 = state_25416;
var statearr_25449_25477 = state_25416__$1;
(statearr_25449_25477[(2)] = inst_25400);

(statearr_25449_25477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25417 === (10))){
var inst_25371 = (state_25416[(8)]);
var inst_25369 = (state_25416[(10)]);
var inst_25376 = cljs.core._nth.call(null,inst_25369,inst_25371);
var state_25416__$1 = state_25416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25416__$1,(13),out,inst_25376);
} else {
if((state_val_25417 === (18))){
var inst_25382 = (state_25416[(7)]);
var inst_25391 = cljs.core.first.call(null,inst_25382);
var state_25416__$1 = state_25416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25416__$1,(20),out,inst_25391);
} else {
if((state_val_25417 === (8))){
var inst_25371 = (state_25416[(8)]);
var inst_25370 = (state_25416[(9)]);
var inst_25373 = (inst_25371 < inst_25370);
var inst_25374 = inst_25373;
var state_25416__$1 = state_25416;
if(cljs.core.truth_(inst_25374)){
var statearr_25450_25478 = state_25416__$1;
(statearr_25450_25478[(1)] = (10));

} else {
var statearr_25451_25479 = state_25416__$1;
(statearr_25451_25479[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto__))
;
return ((function (switch__23705__auto__,c__23800__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23706__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23706__auto____0 = (function (){
var statearr_25452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25452[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23706__auto__);

(statearr_25452[(1)] = (1));

return statearr_25452;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23706__auto____1 = (function (state_25416){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_25416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e25453){if((e25453 instanceof Object)){
var ex__23709__auto__ = e25453;
var statearr_25454_25480 = state_25416;
(statearr_25454_25480[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25481 = state_25416;
state_25416 = G__25481;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23706__auto__ = function(state_25416){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23706__auto____1.call(this,state_25416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23706__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23706__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto__))
})();
var state__23802__auto__ = (function (){var statearr_25455 = f__23801__auto__.call(null);
(statearr_25455[(6)] = c__23800__auto__);

return statearr_25455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto__))
);

return c__23800__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25483 = arguments.length;
switch (G__25483) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25486 = arguments.length;
switch (G__25486) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25489 = arguments.length;
switch (G__25489) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23800__auto___25536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___25536,out){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___25536,out){
return (function (state_25513){
var state_val_25514 = (state_25513[(1)]);
if((state_val_25514 === (7))){
var inst_25508 = (state_25513[(2)]);
var state_25513__$1 = state_25513;
var statearr_25515_25537 = state_25513__$1;
(statearr_25515_25537[(2)] = inst_25508);

(statearr_25515_25537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (1))){
var inst_25490 = null;
var state_25513__$1 = (function (){var statearr_25516 = state_25513;
(statearr_25516[(7)] = inst_25490);

return statearr_25516;
})();
var statearr_25517_25538 = state_25513__$1;
(statearr_25517_25538[(2)] = null);

(statearr_25517_25538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (4))){
var inst_25493 = (state_25513[(8)]);
var inst_25493__$1 = (state_25513[(2)]);
var inst_25494 = (inst_25493__$1 == null);
var inst_25495 = cljs.core.not.call(null,inst_25494);
var state_25513__$1 = (function (){var statearr_25518 = state_25513;
(statearr_25518[(8)] = inst_25493__$1);

return statearr_25518;
})();
if(inst_25495){
var statearr_25519_25539 = state_25513__$1;
(statearr_25519_25539[(1)] = (5));

} else {
var statearr_25520_25540 = state_25513__$1;
(statearr_25520_25540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (6))){
var state_25513__$1 = state_25513;
var statearr_25521_25541 = state_25513__$1;
(statearr_25521_25541[(2)] = null);

(statearr_25521_25541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (3))){
var inst_25510 = (state_25513[(2)]);
var inst_25511 = cljs.core.async.close_BANG_.call(null,out);
var state_25513__$1 = (function (){var statearr_25522 = state_25513;
(statearr_25522[(9)] = inst_25510);

return statearr_25522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25513__$1,inst_25511);
} else {
if((state_val_25514 === (2))){
var state_25513__$1 = state_25513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25513__$1,(4),ch);
} else {
if((state_val_25514 === (11))){
var inst_25493 = (state_25513[(8)]);
var inst_25502 = (state_25513[(2)]);
var inst_25490 = inst_25493;
var state_25513__$1 = (function (){var statearr_25523 = state_25513;
(statearr_25523[(10)] = inst_25502);

(statearr_25523[(7)] = inst_25490);

return statearr_25523;
})();
var statearr_25524_25542 = state_25513__$1;
(statearr_25524_25542[(2)] = null);

(statearr_25524_25542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (9))){
var inst_25493 = (state_25513[(8)]);
var state_25513__$1 = state_25513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25513__$1,(11),out,inst_25493);
} else {
if((state_val_25514 === (5))){
var inst_25493 = (state_25513[(8)]);
var inst_25490 = (state_25513[(7)]);
var inst_25497 = cljs.core._EQ_.call(null,inst_25493,inst_25490);
var state_25513__$1 = state_25513;
if(inst_25497){
var statearr_25526_25543 = state_25513__$1;
(statearr_25526_25543[(1)] = (8));

} else {
var statearr_25527_25544 = state_25513__$1;
(statearr_25527_25544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (10))){
var inst_25505 = (state_25513[(2)]);
var state_25513__$1 = state_25513;
var statearr_25528_25545 = state_25513__$1;
(statearr_25528_25545[(2)] = inst_25505);

(statearr_25528_25545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25514 === (8))){
var inst_25490 = (state_25513[(7)]);
var tmp25525 = inst_25490;
var inst_25490__$1 = tmp25525;
var state_25513__$1 = (function (){var statearr_25529 = state_25513;
(statearr_25529[(7)] = inst_25490__$1);

return statearr_25529;
})();
var statearr_25530_25546 = state_25513__$1;
(statearr_25530_25546[(2)] = null);

(statearr_25530_25546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___25536,out))
;
return ((function (switch__23705__auto__,c__23800__auto___25536,out){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_25531 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25531[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_25531[(1)] = (1));

return statearr_25531;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_25513){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_25513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e25532){if((e25532 instanceof Object)){
var ex__23709__auto__ = e25532;
var statearr_25533_25547 = state_25513;
(statearr_25533_25547[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25548 = state_25513;
state_25513 = G__25548;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_25513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_25513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___25536,out))
})();
var state__23802__auto__ = (function (){var statearr_25534 = f__23801__auto__.call(null);
(statearr_25534[(6)] = c__23800__auto___25536);

return statearr_25534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___25536,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25550 = arguments.length;
switch (G__25550) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23800__auto___25616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___25616,out){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___25616,out){
return (function (state_25588){
var state_val_25589 = (state_25588[(1)]);
if((state_val_25589 === (7))){
var inst_25584 = (state_25588[(2)]);
var state_25588__$1 = state_25588;
var statearr_25590_25617 = state_25588__$1;
(statearr_25590_25617[(2)] = inst_25584);

(statearr_25590_25617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (1))){
var inst_25551 = (new Array(n));
var inst_25552 = inst_25551;
var inst_25553 = (0);
var state_25588__$1 = (function (){var statearr_25591 = state_25588;
(statearr_25591[(7)] = inst_25553);

(statearr_25591[(8)] = inst_25552);

return statearr_25591;
})();
var statearr_25592_25618 = state_25588__$1;
(statearr_25592_25618[(2)] = null);

(statearr_25592_25618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (4))){
var inst_25556 = (state_25588[(9)]);
var inst_25556__$1 = (state_25588[(2)]);
var inst_25557 = (inst_25556__$1 == null);
var inst_25558 = cljs.core.not.call(null,inst_25557);
var state_25588__$1 = (function (){var statearr_25593 = state_25588;
(statearr_25593[(9)] = inst_25556__$1);

return statearr_25593;
})();
if(inst_25558){
var statearr_25594_25619 = state_25588__$1;
(statearr_25594_25619[(1)] = (5));

} else {
var statearr_25595_25620 = state_25588__$1;
(statearr_25595_25620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (15))){
var inst_25578 = (state_25588[(2)]);
var state_25588__$1 = state_25588;
var statearr_25596_25621 = state_25588__$1;
(statearr_25596_25621[(2)] = inst_25578);

(statearr_25596_25621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (13))){
var state_25588__$1 = state_25588;
var statearr_25597_25622 = state_25588__$1;
(statearr_25597_25622[(2)] = null);

(statearr_25597_25622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (6))){
var inst_25553 = (state_25588[(7)]);
var inst_25574 = (inst_25553 > (0));
var state_25588__$1 = state_25588;
if(cljs.core.truth_(inst_25574)){
var statearr_25598_25623 = state_25588__$1;
(statearr_25598_25623[(1)] = (12));

} else {
var statearr_25599_25624 = state_25588__$1;
(statearr_25599_25624[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (3))){
var inst_25586 = (state_25588[(2)]);
var state_25588__$1 = state_25588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25588__$1,inst_25586);
} else {
if((state_val_25589 === (12))){
var inst_25552 = (state_25588[(8)]);
var inst_25576 = cljs.core.vec.call(null,inst_25552);
var state_25588__$1 = state_25588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25588__$1,(15),out,inst_25576);
} else {
if((state_val_25589 === (2))){
var state_25588__$1 = state_25588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25588__$1,(4),ch);
} else {
if((state_val_25589 === (11))){
var inst_25568 = (state_25588[(2)]);
var inst_25569 = (new Array(n));
var inst_25552 = inst_25569;
var inst_25553 = (0);
var state_25588__$1 = (function (){var statearr_25600 = state_25588;
(statearr_25600[(7)] = inst_25553);

(statearr_25600[(10)] = inst_25568);

(statearr_25600[(8)] = inst_25552);

return statearr_25600;
})();
var statearr_25601_25625 = state_25588__$1;
(statearr_25601_25625[(2)] = null);

(statearr_25601_25625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (9))){
var inst_25552 = (state_25588[(8)]);
var inst_25566 = cljs.core.vec.call(null,inst_25552);
var state_25588__$1 = state_25588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25588__$1,(11),out,inst_25566);
} else {
if((state_val_25589 === (5))){
var inst_25553 = (state_25588[(7)]);
var inst_25561 = (state_25588[(11)]);
var inst_25556 = (state_25588[(9)]);
var inst_25552 = (state_25588[(8)]);
var inst_25560 = (inst_25552[inst_25553] = inst_25556);
var inst_25561__$1 = (inst_25553 + (1));
var inst_25562 = (inst_25561__$1 < n);
var state_25588__$1 = (function (){var statearr_25602 = state_25588;
(statearr_25602[(11)] = inst_25561__$1);

(statearr_25602[(12)] = inst_25560);

return statearr_25602;
})();
if(cljs.core.truth_(inst_25562)){
var statearr_25603_25626 = state_25588__$1;
(statearr_25603_25626[(1)] = (8));

} else {
var statearr_25604_25627 = state_25588__$1;
(statearr_25604_25627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (14))){
var inst_25581 = (state_25588[(2)]);
var inst_25582 = cljs.core.async.close_BANG_.call(null,out);
var state_25588__$1 = (function (){var statearr_25606 = state_25588;
(statearr_25606[(13)] = inst_25581);

return statearr_25606;
})();
var statearr_25607_25628 = state_25588__$1;
(statearr_25607_25628[(2)] = inst_25582);

(statearr_25607_25628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (10))){
var inst_25572 = (state_25588[(2)]);
var state_25588__$1 = state_25588;
var statearr_25608_25629 = state_25588__$1;
(statearr_25608_25629[(2)] = inst_25572);

(statearr_25608_25629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (8))){
var inst_25561 = (state_25588[(11)]);
var inst_25552 = (state_25588[(8)]);
var tmp25605 = inst_25552;
var inst_25552__$1 = tmp25605;
var inst_25553 = inst_25561;
var state_25588__$1 = (function (){var statearr_25609 = state_25588;
(statearr_25609[(7)] = inst_25553);

(statearr_25609[(8)] = inst_25552__$1);

return statearr_25609;
})();
var statearr_25610_25630 = state_25588__$1;
(statearr_25610_25630[(2)] = null);

(statearr_25610_25630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___25616,out))
;
return ((function (switch__23705__auto__,c__23800__auto___25616,out){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_25611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25611[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_25611[(1)] = (1));

return statearr_25611;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_25588){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_25588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e25612){if((e25612 instanceof Object)){
var ex__23709__auto__ = e25612;
var statearr_25613_25631 = state_25588;
(statearr_25613_25631[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25632 = state_25588;
state_25588 = G__25632;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_25588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_25588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___25616,out))
})();
var state__23802__auto__ = (function (){var statearr_25614 = f__23801__auto__.call(null);
(statearr_25614[(6)] = c__23800__auto___25616);

return statearr_25614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___25616,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25634 = arguments.length;
switch (G__25634) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23800__auto___25704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___25704,out){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___25704,out){
return (function (state_25676){
var state_val_25677 = (state_25676[(1)]);
if((state_val_25677 === (7))){
var inst_25672 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
var statearr_25678_25705 = state_25676__$1;
(statearr_25678_25705[(2)] = inst_25672);

(statearr_25678_25705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (1))){
var inst_25635 = [];
var inst_25636 = inst_25635;
var inst_25637 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25676__$1 = (function (){var statearr_25679 = state_25676;
(statearr_25679[(7)] = inst_25637);

(statearr_25679[(8)] = inst_25636);

return statearr_25679;
})();
var statearr_25680_25706 = state_25676__$1;
(statearr_25680_25706[(2)] = null);

(statearr_25680_25706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (4))){
var inst_25640 = (state_25676[(9)]);
var inst_25640__$1 = (state_25676[(2)]);
var inst_25641 = (inst_25640__$1 == null);
var inst_25642 = cljs.core.not.call(null,inst_25641);
var state_25676__$1 = (function (){var statearr_25681 = state_25676;
(statearr_25681[(9)] = inst_25640__$1);

return statearr_25681;
})();
if(inst_25642){
var statearr_25682_25707 = state_25676__$1;
(statearr_25682_25707[(1)] = (5));

} else {
var statearr_25683_25708 = state_25676__$1;
(statearr_25683_25708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (15))){
var inst_25666 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
var statearr_25684_25709 = state_25676__$1;
(statearr_25684_25709[(2)] = inst_25666);

(statearr_25684_25709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (13))){
var state_25676__$1 = state_25676;
var statearr_25685_25710 = state_25676__$1;
(statearr_25685_25710[(2)] = null);

(statearr_25685_25710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (6))){
var inst_25636 = (state_25676[(8)]);
var inst_25661 = inst_25636.length;
var inst_25662 = (inst_25661 > (0));
var state_25676__$1 = state_25676;
if(cljs.core.truth_(inst_25662)){
var statearr_25686_25711 = state_25676__$1;
(statearr_25686_25711[(1)] = (12));

} else {
var statearr_25687_25712 = state_25676__$1;
(statearr_25687_25712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (3))){
var inst_25674 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25676__$1,inst_25674);
} else {
if((state_val_25677 === (12))){
var inst_25636 = (state_25676[(8)]);
var inst_25664 = cljs.core.vec.call(null,inst_25636);
var state_25676__$1 = state_25676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25676__$1,(15),out,inst_25664);
} else {
if((state_val_25677 === (2))){
var state_25676__$1 = state_25676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25676__$1,(4),ch);
} else {
if((state_val_25677 === (11))){
var inst_25640 = (state_25676[(9)]);
var inst_25644 = (state_25676[(10)]);
var inst_25654 = (state_25676[(2)]);
var inst_25655 = [];
var inst_25656 = inst_25655.push(inst_25640);
var inst_25636 = inst_25655;
var inst_25637 = inst_25644;
var state_25676__$1 = (function (){var statearr_25688 = state_25676;
(statearr_25688[(7)] = inst_25637);

(statearr_25688[(11)] = inst_25654);

(statearr_25688[(8)] = inst_25636);

(statearr_25688[(12)] = inst_25656);

return statearr_25688;
})();
var statearr_25689_25713 = state_25676__$1;
(statearr_25689_25713[(2)] = null);

(statearr_25689_25713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (9))){
var inst_25636 = (state_25676[(8)]);
var inst_25652 = cljs.core.vec.call(null,inst_25636);
var state_25676__$1 = state_25676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25676__$1,(11),out,inst_25652);
} else {
if((state_val_25677 === (5))){
var inst_25640 = (state_25676[(9)]);
var inst_25644 = (state_25676[(10)]);
var inst_25637 = (state_25676[(7)]);
var inst_25644__$1 = f.call(null,inst_25640);
var inst_25645 = cljs.core._EQ_.call(null,inst_25644__$1,inst_25637);
var inst_25646 = cljs.core.keyword_identical_QMARK_.call(null,inst_25637,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25647 = ((inst_25645) || (inst_25646));
var state_25676__$1 = (function (){var statearr_25690 = state_25676;
(statearr_25690[(10)] = inst_25644__$1);

return statearr_25690;
})();
if(cljs.core.truth_(inst_25647)){
var statearr_25691_25714 = state_25676__$1;
(statearr_25691_25714[(1)] = (8));

} else {
var statearr_25692_25715 = state_25676__$1;
(statearr_25692_25715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (14))){
var inst_25669 = (state_25676[(2)]);
var inst_25670 = cljs.core.async.close_BANG_.call(null,out);
var state_25676__$1 = (function (){var statearr_25694 = state_25676;
(statearr_25694[(13)] = inst_25669);

return statearr_25694;
})();
var statearr_25695_25716 = state_25676__$1;
(statearr_25695_25716[(2)] = inst_25670);

(statearr_25695_25716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (10))){
var inst_25659 = (state_25676[(2)]);
var state_25676__$1 = state_25676;
var statearr_25696_25717 = state_25676__$1;
(statearr_25696_25717[(2)] = inst_25659);

(statearr_25696_25717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25677 === (8))){
var inst_25640 = (state_25676[(9)]);
var inst_25644 = (state_25676[(10)]);
var inst_25636 = (state_25676[(8)]);
var inst_25649 = inst_25636.push(inst_25640);
var tmp25693 = inst_25636;
var inst_25636__$1 = tmp25693;
var inst_25637 = inst_25644;
var state_25676__$1 = (function (){var statearr_25697 = state_25676;
(statearr_25697[(14)] = inst_25649);

(statearr_25697[(7)] = inst_25637);

(statearr_25697[(8)] = inst_25636__$1);

return statearr_25697;
})();
var statearr_25698_25718 = state_25676__$1;
(statearr_25698_25718[(2)] = null);

(statearr_25698_25718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23800__auto___25704,out))
;
return ((function (switch__23705__auto__,c__23800__auto___25704,out){
return (function() {
var cljs$core$async$state_machine__23706__auto__ = null;
var cljs$core$async$state_machine__23706__auto____0 = (function (){
var statearr_25699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25699[(0)] = cljs$core$async$state_machine__23706__auto__);

(statearr_25699[(1)] = (1));

return statearr_25699;
});
var cljs$core$async$state_machine__23706__auto____1 = (function (state_25676){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_25676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e25700){if((e25700 instanceof Object)){
var ex__23709__auto__ = e25700;
var statearr_25701_25719 = state_25676;
(statearr_25701_25719[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25720 = state_25676;
state_25676 = G__25720;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
cljs$core$async$state_machine__23706__auto__ = function(state_25676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23706__auto____1.call(this,state_25676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23706__auto____0;
cljs$core$async$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23706__auto____1;
return cljs$core$async$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___25704,out))
})();
var state__23802__auto__ = (function (){var statearr_25702 = f__23801__auto__.call(null);
(statearr_25702[(6)] = c__23800__auto___25704);

return statearr_25702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___25704,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1613265449653
