// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29128){if((e29128 instanceof Error)){
var e = e29128;
return "Error: Unable to stringify";
} else {
throw e29128;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29131 = arguments.length;
switch (G__29131) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29129_SHARP_){
if(typeof p1__29129_SHARP_ === 'string'){
return p1__29129_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29129_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29134 = arguments.length;
var i__4731__auto___29135 = (0);
while(true){
if((i__4731__auto___29135 < len__4730__auto___29134)){
args__4736__auto__.push((arguments[i__4731__auto___29135]));

var G__29136 = (i__4731__auto___29135 + (1));
i__4731__auto___29135 = G__29136;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29133){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29133));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29138 = arguments.length;
var i__4731__auto___29139 = (0);
while(true){
if((i__4731__auto___29139 < len__4730__auto___29138)){
args__4736__auto__.push((arguments[i__4731__auto___29139]));

var G__29140 = (i__4731__auto___29139 + (1));
i__4731__auto___29139 = G__29140;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29137){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29137));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29141){
var map__29142 = p__29141;
var map__29142__$1 = (((((!((map__29142 == null))))?(((((map__29142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29142):map__29142);
var message = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23800__auto___29221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___29221,ch){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___29221,ch){
return (function (state_29193){
var state_val_29194 = (state_29193[(1)]);
if((state_val_29194 === (7))){
var inst_29189 = (state_29193[(2)]);
var state_29193__$1 = state_29193;
var statearr_29195_29222 = state_29193__$1;
(statearr_29195_29222[(2)] = inst_29189);

(statearr_29195_29222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (1))){
var state_29193__$1 = state_29193;
var statearr_29196_29223 = state_29193__$1;
(statearr_29196_29223[(2)] = null);

(statearr_29196_29223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (4))){
var inst_29146 = (state_29193[(7)]);
var inst_29146__$1 = (state_29193[(2)]);
var state_29193__$1 = (function (){var statearr_29197 = state_29193;
(statearr_29197[(7)] = inst_29146__$1);

return statearr_29197;
})();
if(cljs.core.truth_(inst_29146__$1)){
var statearr_29198_29224 = state_29193__$1;
(statearr_29198_29224[(1)] = (5));

} else {
var statearr_29199_29225 = state_29193__$1;
(statearr_29199_29225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (15))){
var inst_29153 = (state_29193[(8)]);
var inst_29168 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29153);
var inst_29169 = cljs.core.first.call(null,inst_29168);
var inst_29170 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29169);
var inst_29171 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29170)].join('');
var inst_29172 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29171);
var state_29193__$1 = state_29193;
var statearr_29200_29226 = state_29193__$1;
(statearr_29200_29226[(2)] = inst_29172);

(statearr_29200_29226[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (13))){
var inst_29177 = (state_29193[(2)]);
var state_29193__$1 = state_29193;
var statearr_29201_29227 = state_29193__$1;
(statearr_29201_29227[(2)] = inst_29177);

(statearr_29201_29227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (6))){
var state_29193__$1 = state_29193;
var statearr_29202_29228 = state_29193__$1;
(statearr_29202_29228[(2)] = null);

(statearr_29202_29228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (17))){
var inst_29175 = (state_29193[(2)]);
var state_29193__$1 = state_29193;
var statearr_29203_29229 = state_29193__$1;
(statearr_29203_29229[(2)] = inst_29175);

(statearr_29203_29229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (3))){
var inst_29191 = (state_29193[(2)]);
var state_29193__$1 = state_29193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29193__$1,inst_29191);
} else {
if((state_val_29194 === (12))){
var inst_29152 = (state_29193[(9)]);
var inst_29166 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29152,opts);
var state_29193__$1 = state_29193;
if(inst_29166){
var statearr_29204_29230 = state_29193__$1;
(statearr_29204_29230[(1)] = (15));

} else {
var statearr_29205_29231 = state_29193__$1;
(statearr_29205_29231[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (2))){
var state_29193__$1 = state_29193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29193__$1,(4),ch);
} else {
if((state_val_29194 === (11))){
var inst_29153 = (state_29193[(8)]);
var inst_29158 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29159 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29153);
var inst_29160 = cljs.core.async.timeout.call(null,(1000));
var inst_29161 = [inst_29159,inst_29160];
var inst_29162 = (new cljs.core.PersistentVector(null,2,(5),inst_29158,inst_29161,null));
var state_29193__$1 = state_29193;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29193__$1,(14),inst_29162);
} else {
if((state_val_29194 === (9))){
var inst_29153 = (state_29193[(8)]);
var inst_29179 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29180 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29153);
var inst_29181 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29180);
var inst_29182 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29181)].join('');
var inst_29183 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29182);
var state_29193__$1 = (function (){var statearr_29206 = state_29193;
(statearr_29206[(10)] = inst_29179);

return statearr_29206;
})();
var statearr_29207_29232 = state_29193__$1;
(statearr_29207_29232[(2)] = inst_29183);

(statearr_29207_29232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (5))){
var inst_29146 = (state_29193[(7)]);
var inst_29148 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29149 = (new cljs.core.PersistentArrayMap(null,2,inst_29148,null));
var inst_29150 = (new cljs.core.PersistentHashSet(null,inst_29149,null));
var inst_29151 = figwheel.client.focus_msgs.call(null,inst_29150,inst_29146);
var inst_29152 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29151);
var inst_29153 = cljs.core.first.call(null,inst_29151);
var inst_29154 = figwheel.client.autoload_QMARK_.call(null);
var state_29193__$1 = (function (){var statearr_29208 = state_29193;
(statearr_29208[(9)] = inst_29152);

(statearr_29208[(8)] = inst_29153);

return statearr_29208;
})();
if(cljs.core.truth_(inst_29154)){
var statearr_29209_29233 = state_29193__$1;
(statearr_29209_29233[(1)] = (8));

} else {
var statearr_29210_29234 = state_29193__$1;
(statearr_29210_29234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (14))){
var inst_29164 = (state_29193[(2)]);
var state_29193__$1 = state_29193;
var statearr_29211_29235 = state_29193__$1;
(statearr_29211_29235[(2)] = inst_29164);

(statearr_29211_29235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (16))){
var state_29193__$1 = state_29193;
var statearr_29212_29236 = state_29193__$1;
(statearr_29212_29236[(2)] = null);

(statearr_29212_29236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (10))){
var inst_29185 = (state_29193[(2)]);
var state_29193__$1 = (function (){var statearr_29213 = state_29193;
(statearr_29213[(11)] = inst_29185);

return statearr_29213;
})();
var statearr_29214_29237 = state_29193__$1;
(statearr_29214_29237[(2)] = null);

(statearr_29214_29237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29194 === (8))){
var inst_29152 = (state_29193[(9)]);
var inst_29156 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29152,opts);
var state_29193__$1 = state_29193;
if(cljs.core.truth_(inst_29156)){
var statearr_29215_29238 = state_29193__$1;
(statearr_29215_29238[(1)] = (11));

} else {
var statearr_29216_29239 = state_29193__$1;
(statearr_29216_29239[(1)] = (12));

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
});})(c__23800__auto___29221,ch))
;
return ((function (switch__23705__auto__,c__23800__auto___29221,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23706__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23706__auto____0 = (function (){
var statearr_29217 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29217[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23706__auto__);

(statearr_29217[(1)] = (1));

return statearr_29217;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23706__auto____1 = (function (state_29193){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_29193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e29218){if((e29218 instanceof Object)){
var ex__23709__auto__ = e29218;
var statearr_29219_29240 = state_29193;
(statearr_29219_29240[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29241 = state_29193;
state_29193 = G__29241;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23706__auto__ = function(state_29193){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23706__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23706__auto____1.call(this,state_29193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23706__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23706__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___29221,ch))
})();
var state__23802__auto__ = (function (){var statearr_29220 = f__23801__auto__.call(null);
(statearr_29220[(6)] = c__23800__auto___29221);

return statearr_29220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___29221,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29242_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29242_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29248 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29248){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29244 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29245 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29246 = true;
var _STAR_print_fn_STAR__temp_val__29247 = ((function (_STAR_print_newline_STAR__orig_val__29244,_STAR_print_fn_STAR__orig_val__29245,_STAR_print_newline_STAR__temp_val__29246,sb,base_path_29248){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29244,_STAR_print_fn_STAR__orig_val__29245,_STAR_print_newline_STAR__temp_val__29246,sb,base_path_29248))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29246;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29247;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29245;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29244;
}}catch (e29243){if((e29243 instanceof Error)){
var e = e29243;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29248], null));
} else {
var e = e29243;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29248))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29249){
var map__29250 = p__29249;
var map__29250__$1 = (((((!((map__29250 == null))))?(((((map__29250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29250):map__29250);
var opts = map__29250__$1;
var build_id = cljs.core.get.call(null,map__29250__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29250,map__29250__$1,opts,build_id){
return (function (p__29252){
var vec__29253 = p__29252;
var seq__29254 = cljs.core.seq.call(null,vec__29253);
var first__29255 = cljs.core.first.call(null,seq__29254);
var seq__29254__$1 = cljs.core.next.call(null,seq__29254);
var map__29256 = first__29255;
var map__29256__$1 = (((((!((map__29256 == null))))?(((((map__29256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29256):map__29256);
var msg = map__29256__$1;
var msg_name = cljs.core.get.call(null,map__29256__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29254__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29253,seq__29254,first__29255,seq__29254__$1,map__29256,map__29256__$1,msg,msg_name,_,map__29250,map__29250__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29253,seq__29254,first__29255,seq__29254__$1,map__29256,map__29256__$1,msg,msg_name,_,map__29250,map__29250__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29250,map__29250__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29258){
var vec__29259 = p__29258;
var seq__29260 = cljs.core.seq.call(null,vec__29259);
var first__29261 = cljs.core.first.call(null,seq__29260);
var seq__29260__$1 = cljs.core.next.call(null,seq__29260);
var map__29262 = first__29261;
var map__29262__$1 = (((((!((map__29262 == null))))?(((((map__29262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29262):map__29262);
var msg = map__29262__$1;
var msg_name = cljs.core.get.call(null,map__29262__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29260__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29264){
var map__29265 = p__29264;
var map__29265__$1 = (((((!((map__29265 == null))))?(((((map__29265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29265):map__29265);
var on_compile_warning = cljs.core.get.call(null,map__29265__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29265__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29265,map__29265__$1,on_compile_warning,on_compile_fail){
return (function (p__29267){
var vec__29268 = p__29267;
var seq__29269 = cljs.core.seq.call(null,vec__29268);
var first__29270 = cljs.core.first.call(null,seq__29269);
var seq__29269__$1 = cljs.core.next.call(null,seq__29269);
var map__29271 = first__29270;
var map__29271__$1 = (((((!((map__29271 == null))))?(((((map__29271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29271):map__29271);
var msg = map__29271__$1;
var msg_name = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29269__$1;
var pred__29273 = cljs.core._EQ_;
var expr__29274 = msg_name;
if(cljs.core.truth_(pred__29273.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29274))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29273.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29274))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29265,map__29265__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto__,msg_hist,msg_names,msg){
return (function (state_29363){
var state_val_29364 = (state_29363[(1)]);
if((state_val_29364 === (7))){
var inst_29283 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
if(cljs.core.truth_(inst_29283)){
var statearr_29365_29412 = state_29363__$1;
(statearr_29365_29412[(1)] = (8));

} else {
var statearr_29366_29413 = state_29363__$1;
(statearr_29366_29413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (20))){
var inst_29357 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29367_29414 = state_29363__$1;
(statearr_29367_29414[(2)] = inst_29357);

(statearr_29367_29414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (27))){
var inst_29353 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29368_29415 = state_29363__$1;
(statearr_29368_29415[(2)] = inst_29353);

(statearr_29368_29415[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (1))){
var inst_29276 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29363__$1 = state_29363;
if(cljs.core.truth_(inst_29276)){
var statearr_29369_29416 = state_29363__$1;
(statearr_29369_29416[(1)] = (2));

} else {
var statearr_29370_29417 = state_29363__$1;
(statearr_29370_29417[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (24))){
var inst_29355 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29371_29418 = state_29363__$1;
(statearr_29371_29418[(2)] = inst_29355);

(statearr_29371_29418[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (4))){
var inst_29361 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29363__$1,inst_29361);
} else {
if((state_val_29364 === (15))){
var inst_29359 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29372_29419 = state_29363__$1;
(statearr_29372_29419[(2)] = inst_29359);

(statearr_29372_29419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (21))){
var inst_29312 = (state_29363[(2)]);
var inst_29313 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29314 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29313);
var state_29363__$1 = (function (){var statearr_29373 = state_29363;
(statearr_29373[(7)] = inst_29312);

return statearr_29373;
})();
var statearr_29374_29420 = state_29363__$1;
(statearr_29374_29420[(2)] = inst_29314);

(statearr_29374_29420[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (31))){
var inst_29342 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29363__$1 = state_29363;
if(inst_29342){
var statearr_29375_29421 = state_29363__$1;
(statearr_29375_29421[(1)] = (34));

} else {
var statearr_29376_29422 = state_29363__$1;
(statearr_29376_29422[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (32))){
var inst_29351 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29377_29423 = state_29363__$1;
(statearr_29377_29423[(2)] = inst_29351);

(statearr_29377_29423[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (33))){
var inst_29338 = (state_29363[(2)]);
var inst_29339 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29340 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29339);
var state_29363__$1 = (function (){var statearr_29378 = state_29363;
(statearr_29378[(8)] = inst_29338);

return statearr_29378;
})();
var statearr_29379_29424 = state_29363__$1;
(statearr_29379_29424[(2)] = inst_29340);

(statearr_29379_29424[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (13))){
var inst_29297 = figwheel.client.heads_up.clear.call(null);
var state_29363__$1 = state_29363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29363__$1,(16),inst_29297);
} else {
if((state_val_29364 === (22))){
var inst_29318 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29319 = figwheel.client.heads_up.append_warning_message.call(null,inst_29318);
var state_29363__$1 = state_29363;
var statearr_29380_29425 = state_29363__$1;
(statearr_29380_29425[(2)] = inst_29319);

(statearr_29380_29425[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (36))){
var inst_29349 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29381_29426 = state_29363__$1;
(statearr_29381_29426[(2)] = inst_29349);

(statearr_29381_29426[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (29))){
var inst_29329 = (state_29363[(2)]);
var inst_29330 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29331 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29330);
var state_29363__$1 = (function (){var statearr_29382 = state_29363;
(statearr_29382[(9)] = inst_29329);

return statearr_29382;
})();
var statearr_29383_29427 = state_29363__$1;
(statearr_29383_29427[(2)] = inst_29331);

(statearr_29383_29427[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (6))){
var inst_29278 = (state_29363[(10)]);
var state_29363__$1 = state_29363;
var statearr_29384_29428 = state_29363__$1;
(statearr_29384_29428[(2)] = inst_29278);

(statearr_29384_29428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (28))){
var inst_29325 = (state_29363[(2)]);
var inst_29326 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29327 = figwheel.client.heads_up.display_warning.call(null,inst_29326);
var state_29363__$1 = (function (){var statearr_29385 = state_29363;
(statearr_29385[(11)] = inst_29325);

return statearr_29385;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29363__$1,(29),inst_29327);
} else {
if((state_val_29364 === (25))){
var inst_29323 = figwheel.client.heads_up.clear.call(null);
var state_29363__$1 = state_29363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29363__$1,(28),inst_29323);
} else {
if((state_val_29364 === (34))){
var inst_29344 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29363__$1 = state_29363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29363__$1,(37),inst_29344);
} else {
if((state_val_29364 === (17))){
var inst_29303 = (state_29363[(2)]);
var inst_29304 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29305 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29304);
var state_29363__$1 = (function (){var statearr_29386 = state_29363;
(statearr_29386[(12)] = inst_29303);

return statearr_29386;
})();
var statearr_29387_29429 = state_29363__$1;
(statearr_29387_29429[(2)] = inst_29305);

(statearr_29387_29429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (3))){
var inst_29295 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29363__$1 = state_29363;
if(inst_29295){
var statearr_29388_29430 = state_29363__$1;
(statearr_29388_29430[(1)] = (13));

} else {
var statearr_29389_29431 = state_29363__$1;
(statearr_29389_29431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (12))){
var inst_29291 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29390_29432 = state_29363__$1;
(statearr_29390_29432[(2)] = inst_29291);

(statearr_29390_29432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (2))){
var inst_29278 = (state_29363[(10)]);
var inst_29278__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29363__$1 = (function (){var statearr_29391 = state_29363;
(statearr_29391[(10)] = inst_29278__$1);

return statearr_29391;
})();
if(cljs.core.truth_(inst_29278__$1)){
var statearr_29392_29433 = state_29363__$1;
(statearr_29392_29433[(1)] = (5));

} else {
var statearr_29393_29434 = state_29363__$1;
(statearr_29393_29434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (23))){
var inst_29321 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29363__$1 = state_29363;
if(inst_29321){
var statearr_29394_29435 = state_29363__$1;
(statearr_29394_29435[(1)] = (25));

} else {
var statearr_29395_29436 = state_29363__$1;
(statearr_29395_29436[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (35))){
var state_29363__$1 = state_29363;
var statearr_29396_29437 = state_29363__$1;
(statearr_29396_29437[(2)] = null);

(statearr_29396_29437[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (19))){
var inst_29316 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29363__$1 = state_29363;
if(inst_29316){
var statearr_29397_29438 = state_29363__$1;
(statearr_29397_29438[(1)] = (22));

} else {
var statearr_29398_29439 = state_29363__$1;
(statearr_29398_29439[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (11))){
var inst_29287 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29399_29440 = state_29363__$1;
(statearr_29399_29440[(2)] = inst_29287);

(statearr_29399_29440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (9))){
var inst_29289 = figwheel.client.heads_up.clear.call(null);
var state_29363__$1 = state_29363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29363__$1,(12),inst_29289);
} else {
if((state_val_29364 === (5))){
var inst_29280 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29363__$1 = state_29363;
var statearr_29400_29441 = state_29363__$1;
(statearr_29400_29441[(2)] = inst_29280);

(statearr_29400_29441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (14))){
var inst_29307 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29363__$1 = state_29363;
if(inst_29307){
var statearr_29401_29442 = state_29363__$1;
(statearr_29401_29442[(1)] = (18));

} else {
var statearr_29402_29443 = state_29363__$1;
(statearr_29402_29443[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (26))){
var inst_29333 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29363__$1 = state_29363;
if(inst_29333){
var statearr_29403_29444 = state_29363__$1;
(statearr_29403_29444[(1)] = (30));

} else {
var statearr_29404_29445 = state_29363__$1;
(statearr_29404_29445[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (16))){
var inst_29299 = (state_29363[(2)]);
var inst_29300 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29301 = figwheel.client.heads_up.display_exception.call(null,inst_29300);
var state_29363__$1 = (function (){var statearr_29405 = state_29363;
(statearr_29405[(13)] = inst_29299);

return statearr_29405;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29363__$1,(17),inst_29301);
} else {
if((state_val_29364 === (30))){
var inst_29335 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29336 = figwheel.client.heads_up.display_warning.call(null,inst_29335);
var state_29363__$1 = state_29363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29363__$1,(33),inst_29336);
} else {
if((state_val_29364 === (10))){
var inst_29293 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29406_29446 = state_29363__$1;
(statearr_29406_29446[(2)] = inst_29293);

(statearr_29406_29446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (18))){
var inst_29309 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29310 = figwheel.client.heads_up.display_exception.call(null,inst_29309);
var state_29363__$1 = state_29363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29363__$1,(21),inst_29310);
} else {
if((state_val_29364 === (37))){
var inst_29346 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29407_29447 = state_29363__$1;
(statearr_29407_29447[(2)] = inst_29346);

(statearr_29407_29447[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (8))){
var inst_29285 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29363__$1 = state_29363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29363__$1,(11),inst_29285);
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
});})(c__23800__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23705__auto__,c__23800__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto____0 = (function (){
var statearr_29408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29408[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto__);

(statearr_29408[(1)] = (1));

return statearr_29408;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto____1 = (function (state_29363){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_29363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e29409){if((e29409 instanceof Object)){
var ex__23709__auto__ = e29409;
var statearr_29410_29448 = state_29363;
(statearr_29410_29448[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29449 = state_29363;
state_29363 = G__29449;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto__ = function(state_29363){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto____1.call(this,state_29363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto__,msg_hist,msg_names,msg))
})();
var state__23802__auto__ = (function (){var statearr_29411 = f__23801__auto__.call(null);
(statearr_29411[(6)] = c__23800__auto__);

return statearr_29411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto__,msg_hist,msg_names,msg))
);

return c__23800__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23800__auto___29478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___29478,ch){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___29478,ch){
return (function (state_29464){
var state_val_29465 = (state_29464[(1)]);
if((state_val_29465 === (1))){
var state_29464__$1 = state_29464;
var statearr_29466_29479 = state_29464__$1;
(statearr_29466_29479[(2)] = null);

(statearr_29466_29479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29465 === (2))){
var state_29464__$1 = state_29464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29464__$1,(4),ch);
} else {
if((state_val_29465 === (3))){
var inst_29462 = (state_29464[(2)]);
var state_29464__$1 = state_29464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29464__$1,inst_29462);
} else {
if((state_val_29465 === (4))){
var inst_29452 = (state_29464[(7)]);
var inst_29452__$1 = (state_29464[(2)]);
var state_29464__$1 = (function (){var statearr_29467 = state_29464;
(statearr_29467[(7)] = inst_29452__$1);

return statearr_29467;
})();
if(cljs.core.truth_(inst_29452__$1)){
var statearr_29468_29480 = state_29464__$1;
(statearr_29468_29480[(1)] = (5));

} else {
var statearr_29469_29481 = state_29464__$1;
(statearr_29469_29481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29465 === (5))){
var inst_29452 = (state_29464[(7)]);
var inst_29454 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29452);
var state_29464__$1 = state_29464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29464__$1,(8),inst_29454);
} else {
if((state_val_29465 === (6))){
var state_29464__$1 = state_29464;
var statearr_29470_29482 = state_29464__$1;
(statearr_29470_29482[(2)] = null);

(statearr_29470_29482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29465 === (7))){
var inst_29460 = (state_29464[(2)]);
var state_29464__$1 = state_29464;
var statearr_29471_29483 = state_29464__$1;
(statearr_29471_29483[(2)] = inst_29460);

(statearr_29471_29483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29465 === (8))){
var inst_29456 = (state_29464[(2)]);
var state_29464__$1 = (function (){var statearr_29472 = state_29464;
(statearr_29472[(8)] = inst_29456);

return statearr_29472;
})();
var statearr_29473_29484 = state_29464__$1;
(statearr_29473_29484[(2)] = null);

(statearr_29473_29484[(1)] = (2));


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
});})(c__23800__auto___29478,ch))
;
return ((function (switch__23705__auto__,c__23800__auto___29478,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23706__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23706__auto____0 = (function (){
var statearr_29474 = [null,null,null,null,null,null,null,null,null];
(statearr_29474[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23706__auto__);

(statearr_29474[(1)] = (1));

return statearr_29474;
});
var figwheel$client$heads_up_plugin_$_state_machine__23706__auto____1 = (function (state_29464){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_29464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e29475){if((e29475 instanceof Object)){
var ex__23709__auto__ = e29475;
var statearr_29476_29485 = state_29464;
(statearr_29476_29485[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29486 = state_29464;
state_29464 = G__29486;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23706__auto__ = function(state_29464){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23706__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23706__auto____1.call(this,state_29464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23706__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23706__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___29478,ch))
})();
var state__23802__auto__ = (function (){var statearr_29477 = f__23801__auto__.call(null);
(statearr_29477[(6)] = c__23800__auto___29478);

return statearr_29477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___29478,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto__){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto__){
return (function (state_29492){
var state_val_29493 = (state_29492[(1)]);
if((state_val_29493 === (1))){
var inst_29487 = cljs.core.async.timeout.call(null,(3000));
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29492__$1,(2),inst_29487);
} else {
if((state_val_29493 === (2))){
var inst_29489 = (state_29492[(2)]);
var inst_29490 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29492__$1 = (function (){var statearr_29494 = state_29492;
(statearr_29494[(7)] = inst_29489);

return statearr_29494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29492__$1,inst_29490);
} else {
return null;
}
}
});})(c__23800__auto__))
;
return ((function (switch__23705__auto__,c__23800__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23706__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23706__auto____0 = (function (){
var statearr_29495 = [null,null,null,null,null,null,null,null];
(statearr_29495[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23706__auto__);

(statearr_29495[(1)] = (1));

return statearr_29495;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23706__auto____1 = (function (state_29492){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_29492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e29496){if((e29496 instanceof Object)){
var ex__23709__auto__ = e29496;
var statearr_29497_29499 = state_29492;
(statearr_29497_29499[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29500 = state_29492;
state_29492 = G__29500;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23706__auto__ = function(state_29492){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23706__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23706__auto____1.call(this,state_29492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23706__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23706__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto__))
})();
var state__23802__auto__ = (function (){var statearr_29498 = f__23801__auto__.call(null);
(statearr_29498[(6)] = c__23800__auto__);

return statearr_29498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto__))
);

return c__23800__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto__,figwheel_version,temp__5735__auto__){
return (function (state_29507){
var state_val_29508 = (state_29507[(1)]);
if((state_val_29508 === (1))){
var inst_29501 = cljs.core.async.timeout.call(null,(2000));
var state_29507__$1 = state_29507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29507__$1,(2),inst_29501);
} else {
if((state_val_29508 === (2))){
var inst_29503 = (state_29507[(2)]);
var inst_29504 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29505 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29504);
var state_29507__$1 = (function (){var statearr_29509 = state_29507;
(statearr_29509[(7)] = inst_29503);

return statearr_29509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29507__$1,inst_29505);
} else {
return null;
}
}
});})(c__23800__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23705__auto__,c__23800__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto____0 = (function (){
var statearr_29510 = [null,null,null,null,null,null,null,null];
(statearr_29510[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto__);

(statearr_29510[(1)] = (1));

return statearr_29510;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto____1 = (function (state_29507){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_29507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e29511){if((e29511 instanceof Object)){
var ex__23709__auto__ = e29511;
var statearr_29512_29514 = state_29507;
(statearr_29512_29514[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29515 = state_29507;
state_29507 = G__29515;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto__ = function(state_29507){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto____1.call(this,state_29507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto__,figwheel_version,temp__5735__auto__))
})();
var state__23802__auto__ = (function (){var statearr_29513 = f__23801__auto__.call(null);
(statearr_29513[(6)] = c__23800__auto__);

return statearr_29513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto__,figwheel_version,temp__5735__auto__))
);

return c__23800__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29516){
var map__29517 = p__29516;
var map__29517__$1 = (((((!((map__29517 == null))))?(((((map__29517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29517):map__29517);
var file = cljs.core.get.call(null,map__29517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29517__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29517__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29519 = "";
var G__29519__$1 = (cljs.core.truth_(file)?[G__29519,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29519);
var G__29519__$2 = (cljs.core.truth_(line)?[G__29519__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29519__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29519__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29519__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29520){
var map__29521 = p__29520;
var map__29521__$1 = (((((!((map__29521 == null))))?(((((map__29521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29521):map__29521);
var ed = map__29521__$1;
var exception_data = cljs.core.get.call(null,map__29521__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29521__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29524 = (function (){var G__29523 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29523)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29523;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29524);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29525){
var map__29526 = p__29525;
var map__29526__$1 = (((((!((map__29526 == null))))?(((((map__29526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29526):map__29526);
var w = map__29526__$1;
var message = cljs.core.get.call(null,map__29526__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29528 = cljs.core.seq.call(null,plugins);
var chunk__29529 = null;
var count__29530 = (0);
var i__29531 = (0);
while(true){
if((i__29531 < count__29530)){
var vec__29538 = cljs.core._nth.call(null,chunk__29529,i__29531);
var k = cljs.core.nth.call(null,vec__29538,(0),null);
var plugin = cljs.core.nth.call(null,vec__29538,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29544 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29528,chunk__29529,count__29530,i__29531,pl_29544,vec__29538,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29544.call(null,msg_hist);
});})(seq__29528,chunk__29529,count__29530,i__29531,pl_29544,vec__29538,k,plugin))
);
} else {
}


var G__29545 = seq__29528;
var G__29546 = chunk__29529;
var G__29547 = count__29530;
var G__29548 = (i__29531 + (1));
seq__29528 = G__29545;
chunk__29529 = G__29546;
count__29530 = G__29547;
i__29531 = G__29548;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29528);
if(temp__5735__auto__){
var seq__29528__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29528__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29528__$1);
var G__29549 = cljs.core.chunk_rest.call(null,seq__29528__$1);
var G__29550 = c__4550__auto__;
var G__29551 = cljs.core.count.call(null,c__4550__auto__);
var G__29552 = (0);
seq__29528 = G__29549;
chunk__29529 = G__29550;
count__29530 = G__29551;
i__29531 = G__29552;
continue;
} else {
var vec__29541 = cljs.core.first.call(null,seq__29528__$1);
var k = cljs.core.nth.call(null,vec__29541,(0),null);
var plugin = cljs.core.nth.call(null,vec__29541,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29553 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29528,chunk__29529,count__29530,i__29531,pl_29553,vec__29541,k,plugin,seq__29528__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29553.call(null,msg_hist);
});})(seq__29528,chunk__29529,count__29530,i__29531,pl_29553,vec__29541,k,plugin,seq__29528__$1,temp__5735__auto__))
);
} else {
}


var G__29554 = cljs.core.next.call(null,seq__29528__$1);
var G__29555 = null;
var G__29556 = (0);
var G__29557 = (0);
seq__29528 = G__29554;
chunk__29529 = G__29555;
count__29530 = G__29556;
i__29531 = G__29557;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29559 = arguments.length;
switch (G__29559) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29560_29565 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29561_29566 = null;
var count__29562_29567 = (0);
var i__29563_29568 = (0);
while(true){
if((i__29563_29568 < count__29562_29567)){
var msg_29569 = cljs.core._nth.call(null,chunk__29561_29566,i__29563_29568);
figwheel.client.socket.handle_incoming_message.call(null,msg_29569);


var G__29570 = seq__29560_29565;
var G__29571 = chunk__29561_29566;
var G__29572 = count__29562_29567;
var G__29573 = (i__29563_29568 + (1));
seq__29560_29565 = G__29570;
chunk__29561_29566 = G__29571;
count__29562_29567 = G__29572;
i__29563_29568 = G__29573;
continue;
} else {
var temp__5735__auto___29574 = cljs.core.seq.call(null,seq__29560_29565);
if(temp__5735__auto___29574){
var seq__29560_29575__$1 = temp__5735__auto___29574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29560_29575__$1)){
var c__4550__auto___29576 = cljs.core.chunk_first.call(null,seq__29560_29575__$1);
var G__29577 = cljs.core.chunk_rest.call(null,seq__29560_29575__$1);
var G__29578 = c__4550__auto___29576;
var G__29579 = cljs.core.count.call(null,c__4550__auto___29576);
var G__29580 = (0);
seq__29560_29565 = G__29577;
chunk__29561_29566 = G__29578;
count__29562_29567 = G__29579;
i__29563_29568 = G__29580;
continue;
} else {
var msg_29581 = cljs.core.first.call(null,seq__29560_29575__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29581);


var G__29582 = cljs.core.next.call(null,seq__29560_29575__$1);
var G__29583 = null;
var G__29584 = (0);
var G__29585 = (0);
seq__29560_29565 = G__29582;
chunk__29561_29566 = G__29583;
count__29562_29567 = G__29584;
i__29563_29568 = G__29585;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29590 = arguments.length;
var i__4731__auto___29591 = (0);
while(true){
if((i__4731__auto___29591 < len__4730__auto___29590)){
args__4736__auto__.push((arguments[i__4731__auto___29591]));

var G__29592 = (i__4731__auto___29591 + (1));
i__4731__auto___29591 = G__29592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29587){
var map__29588 = p__29587;
var map__29588__$1 = (((((!((map__29588 == null))))?(((((map__29588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29588):map__29588);
var opts = map__29588__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29586){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29586));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29593){if((e29593 instanceof Error)){
var e = e29593;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29593;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29594){
var map__29595 = p__29594;
var map__29595__$1 = (((((!((map__29595 == null))))?(((((map__29595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29595):map__29595);
var msg_name = cljs.core.get.call(null,map__29595__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1613265453570
