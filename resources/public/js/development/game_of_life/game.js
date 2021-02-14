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
return (function (p1__30763_SHARP_){
return cljs.core.get_in.call(null,g,p1__30763_SHARP_);
});})(r_1,r_PLUS_1,c_1,c_PLUS_1))
,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1,c_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1,c_PLUS_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c_PLUS_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_PLUS_1,c_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_PLUS_1,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_PLUS_1,c_PLUS_1], null)], null));
});
game_of_life.game.count_neighbors = (function game_of_life$game$count_neighbors(g,r,c){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__30764_SHARP_){
return (p1__30764_SHARP_ > (0));
}),game_of_life.game.neighbor_vals.call(null,g,r,c)));
});
game_of_life.game.iterate_cell = (function game_of_life$game$iterate_cell(g,r,c,v){
var n = game_of_life.game.count_neighbors.call(null,g,r,c);
if(((cljs.core._EQ_.call(null,(3),n)) || (((cljs.core._EQ_.call(null,(2),n)) && ((v <= (0))))))){
return (1);
} else {
if((v > (0))){
return (-1);
} else {
return v;
}
}
});
game_of_life.game.iterate_grid = (function game_of_life$game$iterate_grid(g){
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function game_of_life$game$iterate_grid_$_iter__30765(s__30766){
return (new cljs.core.LazySeq(null,(function (){
var s__30766__$1 = s__30766;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__30766__$1);
if(temp__5735__auto__){
var s__30766__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30766__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30766__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30768 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30767 = (0);
while(true){
if((i__30767 < size__4522__auto__)){
var vec__30769 = cljs.core._nth.call(null,c__4521__auto__,i__30767);
var r = cljs.core.nth.call(null,vec__30769,(0),null);
var row = cljs.core.nth.call(null,vec__30769,(1),null);
cljs.core.chunk_append.call(null,b__30768,cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (i__30767,vec__30769,r,row,c__4521__auto__,size__4522__auto__,b__30768,s__30766__$2,temp__5735__auto__){
return (function game_of_life$game$iterate_grid_$_iter__30765_$_iter__30772(s__30773){
return (new cljs.core.LazySeq(null,((function (i__30767,vec__30769,r,row,c__4521__auto__,size__4522__auto__,b__30768,s__30766__$2,temp__5735__auto__){
return (function (){
var s__30773__$1 = s__30773;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__30773__$1);
if(temp__5735__auto____$1){
var s__30773__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30773__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__30773__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__30775 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__30774 = (0);
while(true){
if((i__30774 < size__4522__auto____$1)){
var vec__30776 = cljs.core._nth.call(null,c__4521__auto____$1,i__30774);
var c = cljs.core.nth.call(null,vec__30776,(0),null);
var v = cljs.core.nth.call(null,vec__30776,(1),null);
cljs.core.chunk_append.call(null,b__30775,game_of_life.game.iterate_cell.call(null,g,r,c,v));

var G__30795 = (i__30774 + (1));
i__30774 = G__30795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30775),game_of_life$game$iterate_grid_$_iter__30765_$_iter__30772.call(null,cljs.core.chunk_rest.call(null,s__30773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30775),null);
}
} else {
var vec__30779 = cljs.core.first.call(null,s__30773__$2);
var c = cljs.core.nth.call(null,vec__30779,(0),null);
var v = cljs.core.nth.call(null,vec__30779,(1),null);
return cljs.core.cons.call(null,game_of_life.game.iterate_cell.call(null,g,r,c,v),game_of_life$game$iterate_grid_$_iter__30765_$_iter__30772.call(null,cljs.core.rest.call(null,s__30773__$2)));
}
} else {
return null;
}
break;
}
});})(i__30767,vec__30769,r,row,c__4521__auto__,size__4522__auto__,b__30768,s__30766__$2,temp__5735__auto__))
,null,null));
});})(i__30767,vec__30769,r,row,c__4521__auto__,size__4522__auto__,b__30768,s__30766__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.list,row));
})()));

var G__30796 = (i__30767 + (1));
i__30767 = G__30796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30768),game_of_life$game$iterate_grid_$_iter__30765.call(null,cljs.core.chunk_rest.call(null,s__30766__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30768),null);
}
} else {
var vec__30782 = cljs.core.first.call(null,s__30766__$2);
var r = cljs.core.nth.call(null,vec__30782,(0),null);
var row = cljs.core.nth.call(null,vec__30782,(1),null);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (vec__30782,r,row,s__30766__$2,temp__5735__auto__){
return (function game_of_life$game$iterate_grid_$_iter__30765_$_iter__30785(s__30786){
return (new cljs.core.LazySeq(null,((function (vec__30782,r,row,s__30766__$2,temp__5735__auto__){
return (function (){
var s__30786__$1 = s__30786;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__30786__$1);
if(temp__5735__auto____$1){
var s__30786__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30786__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30786__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30788 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30787 = (0);
while(true){
if((i__30787 < size__4522__auto__)){
var vec__30789 = cljs.core._nth.call(null,c__4521__auto__,i__30787);
var c = cljs.core.nth.call(null,vec__30789,(0),null);
var v = cljs.core.nth.call(null,vec__30789,(1),null);
cljs.core.chunk_append.call(null,b__30788,game_of_life.game.iterate_cell.call(null,g,r,c,v));

var G__30797 = (i__30787 + (1));
i__30787 = G__30797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30788),game_of_life$game$iterate_grid_$_iter__30765_$_iter__30785.call(null,cljs.core.chunk_rest.call(null,s__30786__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30788),null);
}
} else {
var vec__30792 = cljs.core.first.call(null,s__30786__$2);
var c = cljs.core.nth.call(null,vec__30792,(0),null);
var v = cljs.core.nth.call(null,vec__30792,(1),null);
return cljs.core.cons.call(null,game_of_life.game.iterate_cell.call(null,g,r,c,v),game_of_life$game$iterate_grid_$_iter__30765_$_iter__30785.call(null,cljs.core.rest.call(null,s__30786__$2)));
}
} else {
return null;
}
break;
}
});})(vec__30782,r,row,s__30766__$2,temp__5735__auto__))
,null,null));
});})(vec__30782,r,row,s__30766__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.list,row));
})()),game_of_life$game$iterate_grid_$_iter__30765.call(null,cljs.core.rest.call(null,s__30766__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.list,g));
})());
});

//# sourceMappingURL=game.js.map?rel=1613269137773
