// Compiled by ClojureScript 1.10.520 {}
goog.provide('game_of_life.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('game_of_life.game');
cljs.core.enable_console_print_BANG_.call(null);
game_of_life.core.pstr = (function game_of_life$core$pstr(v){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30800_30804 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30801_30805 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30802_30806 = true;
var _STAR_print_fn_STAR__temp_val__30803_30807 = ((function (_STAR_print_newline_STAR__orig_val__30800_30804,_STAR_print_fn_STAR__orig_val__30801_30805,_STAR_print_newline_STAR__temp_val__30802_30806,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30800_30804,_STAR_print_fn_STAR__orig_val__30801_30805,_STAR_print_newline_STAR__temp_val__30802_30806,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30802_30806;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30803_30807;

try{cljs.pprint.pprint.call(null,v);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30801_30805;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30800_30804;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
game_of_life.core.pprn = (function game_of_life$core$pprn(v){
return cljs.core.prn.call(null,game_of_life.core.pstr.call(null,v));
});
game_of_life.core.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-size","grid-size",2138480144),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(1000)], null)], null);
game_of_life.core.setup = (function game_of_life$core$setup(){
quil.core.frame_rate.call(null,(5));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-width","cell-width",1767835816),(cljs.core.first.call(null,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config)) / cljs.core.second.call(null,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config))),new cljs.core.Keyword(null,"cell-height","cell-height",776757236),(cljs.core.second.call(null,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config)) / cljs.core.first.call(null,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config))),new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.apply.call(null,game_of_life.game.new_grid,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config))], null);
});
game_of_life.core.update_state = (function game_of_life$core$update_state(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600)], null),game_of_life.game.iterate_grid);
});
game_of_life.core.draw_state = (function game_of_life$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.no_stroke.call(null);

var grid = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(state);
var seq__30808 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,grid));
var chunk__30813 = null;
var count__30814 = (0);
var i__30815 = (0);
while(true){
if((i__30815 < count__30814)){
var vec__30850 = cljs.core._nth.call(null,chunk__30813,i__30815);
var r = cljs.core.nth.call(null,vec__30850,(0),null);
var row = cljs.core.nth.call(null,vec__30850,(1),null);
var seq__30816_30880 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,row));
var chunk__30817_30881 = null;
var count__30818_30882 = (0);
var i__30819_30883 = (0);
while(true){
if((i__30819_30883 < count__30818_30882)){
var vec__30859_30884 = cljs.core._nth.call(null,chunk__30817_30881,i__30819_30883);
var c_30885 = cljs.core.nth.call(null,vec__30859_30884,(0),null);
var cell_30886 = cljs.core.nth.call(null,vec__30859_30884,(1),null);
var tr__26878__auto___30887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c_30885 * new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state)),(r * new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26878__auto___30887);

cljs.core.apply.call(null,quil.core.fill,(((cell_30886 > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(((cell_30886 < (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(100)], null)
)));

quil.core.rect.call(null,(1),(1),(new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state) - (1)),(new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state) - (1)));
}finally {quil.core.pop_matrix.call(null);
}

var G__30888 = seq__30816_30880;
var G__30889 = chunk__30817_30881;
var G__30890 = count__30818_30882;
var G__30891 = (i__30819_30883 + (1));
seq__30816_30880 = G__30888;
chunk__30817_30881 = G__30889;
count__30818_30882 = G__30890;
i__30819_30883 = G__30891;
continue;
} else {
var temp__5735__auto___30892 = cljs.core.seq.call(null,seq__30816_30880);
if(temp__5735__auto___30892){
var seq__30816_30893__$1 = temp__5735__auto___30892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30816_30893__$1)){
var c__4550__auto___30894 = cljs.core.chunk_first.call(null,seq__30816_30893__$1);
var G__30895 = cljs.core.chunk_rest.call(null,seq__30816_30893__$1);
var G__30896 = c__4550__auto___30894;
var G__30897 = cljs.core.count.call(null,c__4550__auto___30894);
var G__30898 = (0);
seq__30816_30880 = G__30895;
chunk__30817_30881 = G__30896;
count__30818_30882 = G__30897;
i__30819_30883 = G__30898;
continue;
} else {
var vec__30862_30899 = cljs.core.first.call(null,seq__30816_30893__$1);
var c_30900 = cljs.core.nth.call(null,vec__30862_30899,(0),null);
var cell_30901 = cljs.core.nth.call(null,vec__30862_30899,(1),null);
var tr__26878__auto___30902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c_30900 * new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state)),(r * new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26878__auto___30902);

cljs.core.apply.call(null,quil.core.fill,(((cell_30901 > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(((cell_30901 < (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(100)], null)
)));

quil.core.rect.call(null,(1),(1),(new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state) - (1)),(new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state) - (1)));
}finally {quil.core.pop_matrix.call(null);
}

var G__30903 = cljs.core.next.call(null,seq__30816_30893__$1);
var G__30904 = null;
var G__30905 = (0);
var G__30906 = (0);
seq__30816_30880 = G__30903;
chunk__30817_30881 = G__30904;
count__30818_30882 = G__30905;
i__30819_30883 = G__30906;
continue;
}
} else {
}
}
break;
}

var G__30907 = seq__30808;
var G__30908 = chunk__30813;
var G__30909 = count__30814;
var G__30910 = (i__30815 + (1));
seq__30808 = G__30907;
chunk__30813 = G__30908;
count__30814 = G__30909;
i__30815 = G__30910;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30808);
if(temp__5735__auto__){
var seq__30808__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30808__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30808__$1);
var G__30911 = cljs.core.chunk_rest.call(null,seq__30808__$1);
var G__30912 = c__4550__auto__;
var G__30913 = cljs.core.count.call(null,c__4550__auto__);
var G__30914 = (0);
seq__30808 = G__30911;
chunk__30813 = G__30912;
count__30814 = G__30913;
i__30815 = G__30914;
continue;
} else {
var vec__30865 = cljs.core.first.call(null,seq__30808__$1);
var r = cljs.core.nth.call(null,vec__30865,(0),null);
var row = cljs.core.nth.call(null,vec__30865,(1),null);
var seq__30809_30915 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,row));
var chunk__30810_30916 = null;
var count__30811_30917 = (0);
var i__30812_30918 = (0);
while(true){
if((i__30812_30918 < count__30811_30917)){
var vec__30874_30919 = cljs.core._nth.call(null,chunk__30810_30916,i__30812_30918);
var c_30920 = cljs.core.nth.call(null,vec__30874_30919,(0),null);
var cell_30921 = cljs.core.nth.call(null,vec__30874_30919,(1),null);
var tr__26878__auto___30922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c_30920 * new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state)),(r * new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26878__auto___30922);

cljs.core.apply.call(null,quil.core.fill,(((cell_30921 > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(((cell_30921 < (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(100)], null)
)));

quil.core.rect.call(null,(1),(1),(new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state) - (1)),(new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state) - (1)));
}finally {quil.core.pop_matrix.call(null);
}

var G__30923 = seq__30809_30915;
var G__30924 = chunk__30810_30916;
var G__30925 = count__30811_30917;
var G__30926 = (i__30812_30918 + (1));
seq__30809_30915 = G__30923;
chunk__30810_30916 = G__30924;
count__30811_30917 = G__30925;
i__30812_30918 = G__30926;
continue;
} else {
var temp__5735__auto___30927__$1 = cljs.core.seq.call(null,seq__30809_30915);
if(temp__5735__auto___30927__$1){
var seq__30809_30928__$1 = temp__5735__auto___30927__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30809_30928__$1)){
var c__4550__auto___30929 = cljs.core.chunk_first.call(null,seq__30809_30928__$1);
var G__30930 = cljs.core.chunk_rest.call(null,seq__30809_30928__$1);
var G__30931 = c__4550__auto___30929;
var G__30932 = cljs.core.count.call(null,c__4550__auto___30929);
var G__30933 = (0);
seq__30809_30915 = G__30930;
chunk__30810_30916 = G__30931;
count__30811_30917 = G__30932;
i__30812_30918 = G__30933;
continue;
} else {
var vec__30877_30934 = cljs.core.first.call(null,seq__30809_30928__$1);
var c_30935 = cljs.core.nth.call(null,vec__30877_30934,(0),null);
var cell_30936 = cljs.core.nth.call(null,vec__30877_30934,(1),null);
var tr__26878__auto___30937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c_30935 * new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state)),(r * new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26878__auto___30937);

cljs.core.apply.call(null,quil.core.fill,(((cell_30936 > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(((cell_30936 < (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(100)], null)
)));

quil.core.rect.call(null,(1),(1),(new cljs.core.Keyword(null,"cell-width","cell-width",1767835816).cljs$core$IFn$_invoke$arity$1(state) - (1)),(new cljs.core.Keyword(null,"cell-height","cell-height",776757236).cljs$core$IFn$_invoke$arity$1(state) - (1)));
}finally {quil.core.pop_matrix.call(null);
}

var G__30938 = cljs.core.next.call(null,seq__30809_30928__$1);
var G__30939 = null;
var G__30940 = (0);
var G__30941 = (0);
seq__30809_30915 = G__30938;
chunk__30810_30916 = G__30939;
count__30811_30917 = G__30940;
i__30812_30918 = G__30941;
continue;
}
} else {
}
}
break;
}

var G__30942 = cljs.core.next.call(null,seq__30808__$1);
var G__30943 = null;
var G__30944 = (0);
var G__30945 = (0);
seq__30808 = G__30942;
chunk__30813 = G__30943;
count__30814 = G__30944;
i__30815 = G__30945;
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
var G__30946__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.core.update_state,args);
};
var G__30946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30947__i = 0, G__30947__a = new Array(arguments.length -  0);
while (G__30947__i < G__30947__a.length) {G__30947__a[G__30947__i] = arguments[G__30947__i + 0]; ++G__30947__i;}
  args = new cljs.core.IndexedSeq(G__30947__a,0,null);
} 
return G__30946__delegate.call(this,args);};
G__30946.cljs$lang$maxFixedArity = 0;
G__30946.cljs$lang$applyTo = (function (arglist__30948){
var args = cljs.core.seq(arglist__30948);
return G__30946__delegate(args);
});
G__30946.cljs$core$IFn$_invoke$arity$variadic = G__30946__delegate;
return G__30946;
})()
:game_of_life.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475).cljs$core$IFn$_invoke$arity$1(game_of_life.core.config),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,game_of_life.core.setup))?(function() { 
var G__30949__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.core.setup,args);
};
var G__30949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30950__i = 0, G__30950__a = new Array(arguments.length -  0);
while (G__30950__i < G__30950__a.length) {G__30950__a[G__30950__i] = arguments[G__30950__i + 0]; ++G__30950__i;}
  args = new cljs.core.IndexedSeq(G__30950__a,0,null);
} 
return G__30949__delegate.call(this,args);};
G__30949.cljs$lang$maxFixedArity = 0;
G__30949.cljs$lang$applyTo = (function (arglist__30951){
var args = cljs.core.seq(arglist__30951);
return G__30949__delegate(args);
});
G__30949.cljs$core$IFn$_invoke$arity$variadic = G__30949__delegate;
return G__30949;
})()
:game_of_life.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,game_of_life.core.draw_state))?(function() { 
var G__30952__delegate = function (args){
return cljs.core.apply.call(null,game_of_life.core.draw_state,args);
};
var G__30952 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30953__i = 0, G__30953__a = new Array(arguments.length -  0);
while (G__30953__i < G__30953__a.length) {G__30953__a[G__30953__i] = arguments[G__30953__i + 0]; ++G__30953__i;}
  args = new cljs.core.IndexedSeq(G__30953__a,0,null);
} 
return G__30952__delegate.call(this,args);};
G__30952.cljs$lang$maxFixedArity = 0;
G__30952.cljs$lang$applyTo = (function (arglist__30954){
var args = cljs.core.seq(arglist__30954);
return G__30952__delegate(args);
});
G__30952.cljs$core$IFn$_invoke$arity$variadic = G__30952__delegate;
return G__30952;
})()
:game_of_life.core.draw_state));
});
goog.exportSymbol('game_of_life.core.game_of_life', game_of_life.core.game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26472__26473__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26472__26473__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),game_of_life.core.game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-of-life"], null));
}
});
goog.exportSymbol('game_of_life.core.run_sketch', game_of_life.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1613269137851
