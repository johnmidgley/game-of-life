// Compiled by ClojureScript 1.10.520 {}
goog.provide('game_of_life.game');
goog.require('cljs.core');
game_of_life.game.new_grid = (function game_of_life$game$new_grid(num_rows,num_cols){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,num_rows,cljs.core.vec.call(null,cljs.core.repeat.call(null,num_cols,(0))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),(1));
});
game_of_life.game.neighbor_vals = (function game_of_life$game$neighbor_vals(g,r,c){
var r_1 = (r - (1));
var r_PLUS_1 = (r + (1));
var c_1 = (c - (1));
var c_PLUS_1 = (c + (1));
return cljs.core.map.call(null,((function (r_1,r_PLUS_1,c_1,c_PLUS_1){
return (function (p1__21364_SHARP_){
return cljs.core.get_in.call(null,g,p1__21364_SHARP_);
});})(r_1,r_PLUS_1,c_1,c_PLUS_1))
,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1,c_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1,c_PLUS_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_PLUS_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_PLUS_1,c_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_PLUS_1,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_PLUS_1,c_PLUS_1], null)], null));
});
game_of_life.game.count_neighbors = (function game_of_life$game$count_neighbors(g,r,c){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__21365_SHARP_){
return (p1__21365_SHARP_ > (0));
}),game_of_life.game.neighbor_vals.call(null,g,r,c)));
});
game_of_life.game.iterate_grid = (function game_of_life$game$iterate_grid(g){
var num_rows = cljs.core.count.call(null,g);
var num_cols = cljs.core.count.call(null,cljs.core.first.call(null,g));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (num_rows,num_cols){
return (function game_of_life$game$iterate_grid_$_iter__21366(s__21367){
return (new cljs.core.LazySeq(null,((function (num_rows,num_cols){
return (function (){
var s__21367__$1 = s__21367;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21367__$1);
if(temp__5735__auto__){
var s__21367__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21367__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21367__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21369 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21368 = (0);
while(true){
if((i__21368 < size__4522__auto__)){
var r = cljs.core._nth.call(null,c__4521__auto__,i__21368);
cljs.core.chunk_append.call(null,b__21369,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (i__21368,r,c__4521__auto__,size__4522__auto__,b__21369,s__21367__$2,temp__5735__auto__,num_rows,num_cols){
return (function game_of_life$game$iterate_grid_$_iter__21366_$_iter__21370(s__21371){
return (new cljs.core.LazySeq(null,((function (i__21368,r,c__4521__auto__,size__4522__auto__,b__21369,s__21367__$2,temp__5735__auto__,num_rows,num_cols){
return (function (){
var s__21371__$1 = s__21371;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__21371__$1);
if(temp__5735__auto____$1){
var s__21371__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21371__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__21371__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__21373 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__21372 = (0);
while(true){
if((i__21372 < size__4522__auto____$1)){
var c = cljs.core._nth.call(null,c__4521__auto____$1,i__21372);
cljs.core.chunk_append.call(null,b__21373,(function (){var n = game_of_life.game.count_neighbors.call(null,g,r,c);
var v = cljs.core.get_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
if(((cljs.core._EQ_.call(null,(3),n)) || (((cljs.core._EQ_.call(null,(2),n)) && (cljs.core._EQ_.call(null,(0),v)))))){
return (1);
} else {
return (0);
}
})());

var G__21378 = (i__21372 + (1));
i__21372 = G__21378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21373),game_of_life$game$iterate_grid_$_iter__21366_$_iter__21370.call(null,cljs.core.chunk_rest.call(null,s__21371__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21373),null);
}
} else {
var c = cljs.core.first.call(null,s__21371__$2);
return cljs.core.cons.call(null,(function (){var n = game_of_life.game.count_neighbors.call(null,g,r,c);
var v = cljs.core.get_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
if(((cljs.core._EQ_.call(null,(3),n)) || (((cljs.core._EQ_.call(null,(2),n)) && (cljs.core._EQ_.call(null,(0),v)))))){
return (1);
} else {
return (0);
}
})(),game_of_life$game$iterate_grid_$_iter__21366_$_iter__21370.call(null,cljs.core.rest.call(null,s__21371__$2)));
}
} else {
return null;
}
break;
}
});})(i__21368,r,c__4521__auto__,size__4522__auto__,b__21369,s__21367__$2,temp__5735__auto__,num_rows,num_cols))
,null,null));
});})(i__21368,r,c__4521__auto__,size__4522__auto__,b__21369,s__21367__$2,temp__5735__auto__,num_rows,num_cols))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,num_cols));
})()));

var G__21379 = (i__21368 + (1));
i__21368 = G__21379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21369),game_of_life$game$iterate_grid_$_iter__21366.call(null,cljs.core.chunk_rest.call(null,s__21367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21369),null);
}
} else {
var r = cljs.core.first.call(null,s__21367__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (r,s__21367__$2,temp__5735__auto__,num_rows,num_cols){
return (function game_of_life$game$iterate_grid_$_iter__21366_$_iter__21374(s__21375){
return (new cljs.core.LazySeq(null,((function (r,s__21367__$2,temp__5735__auto__,num_rows,num_cols){
return (function (){
var s__21375__$1 = s__21375;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__21375__$1);
if(temp__5735__auto____$1){
var s__21375__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21375__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21375__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21377 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21376 = (0);
while(true){
if((i__21376 < size__4522__auto__)){
var c = cljs.core._nth.call(null,c__4521__auto__,i__21376);
cljs.core.chunk_append.call(null,b__21377,(function (){var n = game_of_life.game.count_neighbors.call(null,g,r,c);
var v = cljs.core.get_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
if(((cljs.core._EQ_.call(null,(3),n)) || (((cljs.core._EQ_.call(null,(2),n)) && (cljs.core._EQ_.call(null,(0),v)))))){
return (1);
} else {
return (0);
}
})());

var G__21380 = (i__21376 + (1));
i__21376 = G__21380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21377),game_of_life$game$iterate_grid_$_iter__21366_$_iter__21374.call(null,cljs.core.chunk_rest.call(null,s__21375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21377),null);
}
} else {
var c = cljs.core.first.call(null,s__21375__$2);
return cljs.core.cons.call(null,(function (){var n = game_of_life.game.count_neighbors.call(null,g,r,c);
var v = cljs.core.get_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
if(((cljs.core._EQ_.call(null,(3),n)) || (((cljs.core._EQ_.call(null,(2),n)) && (cljs.core._EQ_.call(null,(0),v)))))){
return (1);
} else {
return (0);
}
})(),game_of_life$game$iterate_grid_$_iter__21366_$_iter__21374.call(null,cljs.core.rest.call(null,s__21375__$2)));
}
} else {
return null;
}
break;
}
});})(r,s__21367__$2,temp__5735__auto__,num_rows,num_cols))
,null,null));
});})(r,s__21367__$2,temp__5735__auto__,num_rows,num_cols))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,num_cols));
})()),game_of_life$game$iterate_grid_$_iter__21366.call(null,cljs.core.rest.call(null,s__21367__$2)));
}
} else {
return null;
}
break;
}
});})(num_rows,num_cols))
,null,null));
});})(num_rows,num_cols))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,num_rows));
})());
});

//# sourceMappingURL=game.js.map?rel=1613265444386
