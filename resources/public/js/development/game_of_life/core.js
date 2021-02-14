// Compiled by ClojureScript 1.10.520 {}
goog.provide('game_of_life.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('game_of_life.game');
cljs.core.enable_console_print_BANG_.call(null);
game_of_life.core.pstr = (function game_of_life$core$pstr(v){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21895_21899 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21896_21900 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21897_21901 = true;
var _STAR_print_fn_STAR__temp_val__21898_21902 = ((function (_STAR_print_newline_STAR__orig_val__21895_21899,_STAR_print_fn_STAR__orig_val__21896_21900,_STAR_print_newline_STAR__temp_val__21897_21901,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21895_21899,_STAR_print_fn_STAR__orig_val__21896_21900,_STAR_print_newline_STAR__temp_val__21897_21901,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21897_21901;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21898_21902;

try{cljs.pprint.pprint(v);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21896_21900;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21895_21899;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
game_of_life.core.pprn = (function game_of_life$core$pprn(v){
return cljs.core.prn.call(null,game_of_life.core.pstr.call(null,v));
});
game_of_life.core.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-size","grid-size",2138480144),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50)], null),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(1000)], null)], null);
game_of_life.core.setup = (function game_of_life$core$setup(){
quil.core.frame_rate.call(null,(1));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-width","cell-width",1767835816),(cljs.core.first.call(null,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config)) / cljs.core.second.call(null,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config))),new cljs.core.Keyword(null,"cell-height","cell-height",776757236),(cljs.core.second.call(null,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config)) / cljs.core.first.call(null,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config))),new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.apply.call(null,game_of_life.game.new_grid,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config))], null);
});
game_of_life.core.update_state = (function game_of_life$core$update_state(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600)], null),game_of_life.game.iterate_grid);
});
game_of_life.core.draw_state = (function game_of_life$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.no_stroke.call(null);

var grid = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(state);
var seq__21903 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,grid));
var chunk__21908 = null;
var count__21909 = (0);
var i__21910 = (0);
while(true){
if((i__21910 < count__21909)){
var vec__21945 = cljs.core._nth.call(null,chunk__21908,i__21910);
var r = cljs.core.nth.call(null,vec__21945,(0),null);
var row = cljs.core.nth.call(null,vec__21945,(1),null);
var seq__21911_21975 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,row));
var chunk__21912_21976 = null;
var count__21913_21977 = (0);
var i__21914_21978 = (0);
while(true){
if((i__21914_21978 < count__21913_21977)){
var vec__21954_21979 = cljs.core._nth.call(null,chunk__21912_21976,i__21914_21978);
var c_21980 = cljs.core.nth.call(null,vec__21954_21979,(0),null);
var cell_21981 = cljs.core.nth.call(null,vec__21954_21979,(1),null);
var tr__21780__auto___21982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c_21980 * new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state)),(r * new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21780__auto___21982);

if((cell_21981 === (0))){
quil.core.fill.call(null,(100),(100),(100));
} else {
quil.core.fill.call(null,(0),(255),(0));
}

quil.core.rect.call(null,(1),(1),(new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state) - (1)),(new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state) - (1)));
}finally {quil.core.pop_matrix.call(null);
}

var G__21983 = seq__21911_21975;
var G__21984 = chunk__21912_21976;
var G__21985 = count__21913_21977;
var G__21986 = (i__21914_21978 + (1));
seq__21911_21975 = G__21983;
chunk__21912_21976 = G__21984;
count__21913_21977 = G__21985;
i__21914_21978 = G__21986;
continue;
} else {
var temp__5735__auto___21987 = cljs.core.seq.call(null,seq__21911_21975);
if(temp__5735__auto___21987){
var seq__21911_21988__$1 = temp__5735__auto___21987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21911_21988__$1)){
var c__4550__auto___21989 = cljs.core.chunk_first.call(null,seq__21911_21988__$1);
var G__21990 = cljs.core.chunk_rest.call(null,seq__21911_21988__$1);
var G__21991 = c__4550__auto___21989;
var G__21992 = cljs.core.count.call(null,c__4550__auto___21989);
var G__21993 = (0);
seq__21911_21975 = G__21990;
chunk__21912_21976 = G__21991;
count__21913_21977 = G__21992;
i__21914_21978 = G__21993;
continue;
} else {
var vec__21957_21994 = cljs.core.first.call(null,seq__21911_21988__$1);
var c_21995 = cljs.core.nth.call(null,vec__21957_21994,(0),null);
var cell_21996 = cljs.core.nth.call(null,vec__21957_21994,(1),null);
var tr__21780__auto___21997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c_21995 * new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state)),(r * new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21780__auto___21997);

if((cell_21996 === (0))){
quil.core.fill.call(null,(100),(100),(100));
} else {
quil.core.fill.call(null,(0),(255),(0));
}

quil.core.rect.call(null,(1),(1),(new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state) - (1)),(new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state) - (1)));
}finally {quil.core.pop_matrix.call(null);
}

var G__21998 = cljs.core.next.call(null,seq__21911_21988__$1);
var G__21999 = null;
var G__22000 = (0);
var G__22001 = (0);
seq__21911_21975 = G__21998;
chunk__21912_21976 = G__21999;
count__21913_21977 = G__22000;
i__21914_21978 = G__22001;
continue;
}
} else {
}
}
break;
}

var G__22002 = seq__21903;
var G__22003 = chunk__21908;
var G__22004 = count__21909;
var G__22005 = (i__21910 + (1));
seq__21903 = G__22002;
chunk__21908 = G__22003;
count__21909 = G__22004;
i__21910 = G__22005;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__21903);
if(temp__5735__auto__){
var seq__21903__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21903__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21903__$1);
var G__22006 = cljs.core.chunk_rest.call(null,seq__21903__$1);
var G__22007 = c__4550__auto__;
var G__22008 = cljs.core.count.call(null,c__4550__auto__);
var G__22009 = (0);
seq__21903 = G__22006;
chunk__21908 = G__22007;
count__21909 = G__22008;
i__21910 = G__22009;
continue;
} else {
var vec__21960 = cljs.core.first.call(null,seq__21903__$1);
var r = cljs.core.nth.call(null,vec__21960,(0),null);
var row = cljs.core.nth.call(null,vec__21960,(1),null);
var seq__21904_22010 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,row));
var chunk__21905_22011 = null;
var count__21906_22012 = (0);
var i__21907_22013 = (0);
while(true){
if((i__21907_22013 < count__21906_22012)){
var vec__21969_22014 = cljs.core._nth.call(null,chunk__21905_22011,i__21907_22013);
var c_22015 = cljs.core.nth.call(null,vec__21969_22014,(0),null);
var cell_22016 = cljs.core.nth.call(null,vec__21969_22014,(1),null);
var tr__21780__auto___22017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c_22015 * new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state)),(r * new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21780__auto___22017);

if((cell_22016 === (0))){
quil.core.fill.call(null,(100),(100),(100));
} else {
quil.core.fill.call(null,(0),(255),(0));
}

quil.core.rect.call(null,(1),(1),(new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state) - (1)),(new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state) - (1)));
}finally {quil.core.pop_matrix.call(null);
}

var G__22018 = seq__21904_22010;
var G__22019 = chunk__21905_22011;
var G__22020 = count__21906_22012;
var G__22021 = (i__21907_22013 + (1));
seq__21904_22010 = G__22018;
chunk__21905_22011 = G__22019;
count__21906_22012 = G__22020;
i__21907_22013 = G__22021;
continue;
} else {
var temp__5735__auto___22022__$1 = cljs.core.seq.call(null,seq__21904_22010);
if(temp__5735__auto___22022__$1){
var seq__21904_22023__$1 = temp__5735__auto___22022__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21904_22023__$1)){
var c__4550__auto___22024 = cljs.core.chunk_first.call(null,seq__21904_22023__$1);
var G__22025 = cljs.core.chunk_rest.call(null,seq__21904_22023__$1);
var G__22026 = c__4550__auto___22024;
var G__22027 = cljs.core.count.call(null,c__4550__auto___22024);
var G__22028 = (0);
seq__21904_22010 = G__22025;
chunk__21905_22011 = G__22026;
count__21906_22012 = G__22027;
i__21907_22013 = G__22028;
continue;
} else {
var vec__21972_22029 = cljs.core.first.call(null,seq__21904_22023__$1);
var c_22030 = cljs.core.nth.call(null,vec__21972_22029,(0),null);
var cell_22031 = cljs.core.nth.call(null,vec__21972_22029,(1),null);
var tr__21780__auto___22032 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c_22030 * new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state)),(r * new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21780__auto___22032);

if((cell_22031 === (0))){
quil.core.fill.call(null,(100),(100),(100));
} else {
quil.core.fill.call(null,(0),(255),(0));
}

quil.core.rect.call(null,(1),(1),(new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state) - (1)),(new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state) - (1)));
}finally {quil.core.pop_matrix.call(null);
}

var G__22033 = cljs.core.next.call(null,seq__21904_22023__$1);
var G__22034 = null;
var G__22035 = (0);
var G__22036 = (0);
seq__21904_22010 = G__22033;
chunk__21905_22011 = G__22034;
count__21906_22012 = G__22035;
i__21907_22013 = G__22036;
continue;
}
} else {
}
}
break;
}

var G__22037 = cljs.core.next.call(null,seq__21903__$1);
var G__22038 = null;
var G__22039 = (0);
var G__22040 = (0);
seq__21903 = G__22037;
chunk__21908 = G__22038;
count__21909 = G__22039;
i__21910 = G__22040;
continue;
}
} else {
return null;
}
}
break;
}
});
game_of_life.core.run_sketch = (function game_of_life$core$run_sketch(){
game_of_life.core.game_of_life = (function game_of_life$core$run_sketch_$_game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-of-life",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,game_of_life.core.update_state))?(function() { 
var G__22041__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.core.update_state,args);
};
var G__22041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22042__i = 0, G__22042__a = new Array(arguments.length -  0);
while (G__22042__i < G__22042__a.length) {G__22042__a[G__22042__i] = arguments[G__22042__i + 0]; ++G__22042__i;}
  args = new cljs.core.IndexedSeq(G__22042__a,0,null);
} 
return G__22041__delegate.call(this,args);};
G__22041.cljs$lang$maxFixedArity = 0;
G__22041.cljs$lang$applyTo = (function (arglist__22043){
var args = cljs.core.seq(arglist__22043);
return G__22041__delegate(args);
});
G__22041.cljs$core$IFn$_invoke$arity$variadic = G__22041__delegate;
return G__22041;
})()
:game_of_life.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,game_of_life.core.setup))?(function() { 
var G__22044__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.core.setup,args);
};
var G__22044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22045__i = 0, G__22045__a = new Array(arguments.length -  0);
while (G__22045__i < G__22045__a.length) {G__22045__a[G__22045__i] = arguments[G__22045__i + 0]; ++G__22045__i;}
  args = new cljs.core.IndexedSeq(G__22045__a,0,null);
} 
return G__22044__delegate.call(this,args);};
G__22044.cljs$lang$maxFixedArity = 0;
G__22044.cljs$lang$applyTo = (function (arglist__22046){
var args = cljs.core.seq(arglist__22046);
return G__22044__delegate(args);
});
G__22044.cljs$core$IFn$_invoke$arity$variadic = G__22044__delegate;
return G__22044;
})()
:game_of_life.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,game_of_life.core.draw_state))?(function() { 
var G__22047__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.core.draw_state,args);
};
var G__22047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22048__i = 0, G__22048__a = new Array(arguments.length -  0);
while (G__22048__i < G__22048__a.length) {G__22048__a[G__22048__i] = arguments[G__22048__i + 0]; ++G__22048__i;}
  args = new cljs.core.IndexedSeq(G__22048__a,0,null);
} 
return G__22047__delegate.call(this,args);};
G__22047.cljs$lang$maxFixedArity = 0;
G__22047.cljs$lang$applyTo = (function (arglist__22049){
var args = cljs.core.seq(arglist__22049);
return G__22047__delegate(args);
});
G__22047.cljs$core$IFn$_invoke$arity$variadic = G__22047__delegate;
return G__22047;
})()
:game_of_life.core.draw_state));
});
goog.exportSymbol('game_of_life.core.game_of_life', game_of_life.core.game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20916__20917__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),game_of_life.core.game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}
});
goog.exportSymbol('game_of_life.core.run_sketch', game_of_life.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1613265445585
