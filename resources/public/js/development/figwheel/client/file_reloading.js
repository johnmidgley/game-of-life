// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27241_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27241_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27242 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27243 = null;
var count__27244 = (0);
var i__27245 = (0);
while(true){
if((i__27245 < count__27244)){
var n = cljs.core._nth.call(null,chunk__27243,i__27245);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27246 = seq__27242;
var G__27247 = chunk__27243;
var G__27248 = count__27244;
var G__27249 = (i__27245 + (1));
seq__27242 = G__27246;
chunk__27243 = G__27247;
count__27244 = G__27248;
i__27245 = G__27249;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27242);
if(temp__5735__auto__){
var seq__27242__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27242__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27242__$1);
var G__27250 = cljs.core.chunk_rest.call(null,seq__27242__$1);
var G__27251 = c__4550__auto__;
var G__27252 = cljs.core.count.call(null,c__4550__auto__);
var G__27253 = (0);
seq__27242 = G__27250;
chunk__27243 = G__27251;
count__27244 = G__27252;
i__27245 = G__27253;
continue;
} else {
var n = cljs.core.first.call(null,seq__27242__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27254 = cljs.core.next.call(null,seq__27242__$1);
var G__27255 = null;
var G__27256 = (0);
var G__27257 = (0);
seq__27242 = G__27254;
chunk__27243 = G__27255;
count__27244 = G__27256;
i__27245 = G__27257;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27258){
var vec__27259 = p__27258;
var _ = cljs.core.nth.call(null,vec__27259,(0),null);
var v = cljs.core.nth.call(null,vec__27259,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__27262){
var vec__27263 = p__27262;
var k = cljs.core.nth.call(null,vec__27263,(0),null);
var v = cljs.core.nth.call(null,vec__27263,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27275_27283 = cljs.core.seq.call(null,deps);
var chunk__27276_27284 = null;
var count__27277_27285 = (0);
var i__27278_27286 = (0);
while(true){
if((i__27278_27286 < count__27277_27285)){
var dep_27287 = cljs.core._nth.call(null,chunk__27276_27284,i__27278_27286);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27287;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27287));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27287,(depth + (1)),state);
} else {
}


var G__27288 = seq__27275_27283;
var G__27289 = chunk__27276_27284;
var G__27290 = count__27277_27285;
var G__27291 = (i__27278_27286 + (1));
seq__27275_27283 = G__27288;
chunk__27276_27284 = G__27289;
count__27277_27285 = G__27290;
i__27278_27286 = G__27291;
continue;
} else {
var temp__5735__auto___27292 = cljs.core.seq.call(null,seq__27275_27283);
if(temp__5735__auto___27292){
var seq__27275_27293__$1 = temp__5735__auto___27292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27275_27293__$1)){
var c__4550__auto___27294 = cljs.core.chunk_first.call(null,seq__27275_27293__$1);
var G__27295 = cljs.core.chunk_rest.call(null,seq__27275_27293__$1);
var G__27296 = c__4550__auto___27294;
var G__27297 = cljs.core.count.call(null,c__4550__auto___27294);
var G__27298 = (0);
seq__27275_27283 = G__27295;
chunk__27276_27284 = G__27296;
count__27277_27285 = G__27297;
i__27278_27286 = G__27298;
continue;
} else {
var dep_27299 = cljs.core.first.call(null,seq__27275_27293__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27299;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27299));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27299,(depth + (1)),state);
} else {
}


var G__27300 = cljs.core.next.call(null,seq__27275_27293__$1);
var G__27301 = null;
var G__27302 = (0);
var G__27303 = (0);
seq__27275_27283 = G__27300;
chunk__27276_27284 = G__27301;
count__27277_27285 = G__27302;
i__27278_27286 = G__27303;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27279){
var vec__27280 = p__27279;
var seq__27281 = cljs.core.seq.call(null,vec__27280);
var first__27282 = cljs.core.first.call(null,seq__27281);
var seq__27281__$1 = cljs.core.next.call(null,seq__27281);
var x = first__27282;
var xs = seq__27281__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27280,seq__27281,first__27282,seq__27281__$1,x,xs,get_deps__$1){
return (function (p1__27266_SHARP_){
return clojure.set.difference.call(null,p1__27266_SHARP_,x);
});})(vec__27280,seq__27281,first__27282,seq__27281__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27304 = cljs.core.seq.call(null,provides);
var chunk__27305 = null;
var count__27306 = (0);
var i__27307 = (0);
while(true){
if((i__27307 < count__27306)){
var prov = cljs.core._nth.call(null,chunk__27305,i__27307);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27316_27324 = cljs.core.seq.call(null,requires);
var chunk__27317_27325 = null;
var count__27318_27326 = (0);
var i__27319_27327 = (0);
while(true){
if((i__27319_27327 < count__27318_27326)){
var req_27328 = cljs.core._nth.call(null,chunk__27317_27325,i__27319_27327);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27328,prov);


var G__27329 = seq__27316_27324;
var G__27330 = chunk__27317_27325;
var G__27331 = count__27318_27326;
var G__27332 = (i__27319_27327 + (1));
seq__27316_27324 = G__27329;
chunk__27317_27325 = G__27330;
count__27318_27326 = G__27331;
i__27319_27327 = G__27332;
continue;
} else {
var temp__5735__auto___27333 = cljs.core.seq.call(null,seq__27316_27324);
if(temp__5735__auto___27333){
var seq__27316_27334__$1 = temp__5735__auto___27333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27316_27334__$1)){
var c__4550__auto___27335 = cljs.core.chunk_first.call(null,seq__27316_27334__$1);
var G__27336 = cljs.core.chunk_rest.call(null,seq__27316_27334__$1);
var G__27337 = c__4550__auto___27335;
var G__27338 = cljs.core.count.call(null,c__4550__auto___27335);
var G__27339 = (0);
seq__27316_27324 = G__27336;
chunk__27317_27325 = G__27337;
count__27318_27326 = G__27338;
i__27319_27327 = G__27339;
continue;
} else {
var req_27340 = cljs.core.first.call(null,seq__27316_27334__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27340,prov);


var G__27341 = cljs.core.next.call(null,seq__27316_27334__$1);
var G__27342 = null;
var G__27343 = (0);
var G__27344 = (0);
seq__27316_27324 = G__27341;
chunk__27317_27325 = G__27342;
count__27318_27326 = G__27343;
i__27319_27327 = G__27344;
continue;
}
} else {
}
}
break;
}


var G__27345 = seq__27304;
var G__27346 = chunk__27305;
var G__27347 = count__27306;
var G__27348 = (i__27307 + (1));
seq__27304 = G__27345;
chunk__27305 = G__27346;
count__27306 = G__27347;
i__27307 = G__27348;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27304);
if(temp__5735__auto__){
var seq__27304__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27304__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27304__$1);
var G__27349 = cljs.core.chunk_rest.call(null,seq__27304__$1);
var G__27350 = c__4550__auto__;
var G__27351 = cljs.core.count.call(null,c__4550__auto__);
var G__27352 = (0);
seq__27304 = G__27349;
chunk__27305 = G__27350;
count__27306 = G__27351;
i__27307 = G__27352;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27304__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27320_27353 = cljs.core.seq.call(null,requires);
var chunk__27321_27354 = null;
var count__27322_27355 = (0);
var i__27323_27356 = (0);
while(true){
if((i__27323_27356 < count__27322_27355)){
var req_27357 = cljs.core._nth.call(null,chunk__27321_27354,i__27323_27356);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27357,prov);


var G__27358 = seq__27320_27353;
var G__27359 = chunk__27321_27354;
var G__27360 = count__27322_27355;
var G__27361 = (i__27323_27356 + (1));
seq__27320_27353 = G__27358;
chunk__27321_27354 = G__27359;
count__27322_27355 = G__27360;
i__27323_27356 = G__27361;
continue;
} else {
var temp__5735__auto___27362__$1 = cljs.core.seq.call(null,seq__27320_27353);
if(temp__5735__auto___27362__$1){
var seq__27320_27363__$1 = temp__5735__auto___27362__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27320_27363__$1)){
var c__4550__auto___27364 = cljs.core.chunk_first.call(null,seq__27320_27363__$1);
var G__27365 = cljs.core.chunk_rest.call(null,seq__27320_27363__$1);
var G__27366 = c__4550__auto___27364;
var G__27367 = cljs.core.count.call(null,c__4550__auto___27364);
var G__27368 = (0);
seq__27320_27353 = G__27365;
chunk__27321_27354 = G__27366;
count__27322_27355 = G__27367;
i__27323_27356 = G__27368;
continue;
} else {
var req_27369 = cljs.core.first.call(null,seq__27320_27363__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27369,prov);


var G__27370 = cljs.core.next.call(null,seq__27320_27363__$1);
var G__27371 = null;
var G__27372 = (0);
var G__27373 = (0);
seq__27320_27353 = G__27370;
chunk__27321_27354 = G__27371;
count__27322_27355 = G__27372;
i__27323_27356 = G__27373;
continue;
}
} else {
}
}
break;
}


var G__27374 = cljs.core.next.call(null,seq__27304__$1);
var G__27375 = null;
var G__27376 = (0);
var G__27377 = (0);
seq__27304 = G__27374;
chunk__27305 = G__27375;
count__27306 = G__27376;
i__27307 = G__27377;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27378_27382 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27379_27383 = null;
var count__27380_27384 = (0);
var i__27381_27385 = (0);
while(true){
if((i__27381_27385 < count__27380_27384)){
var ns_27386 = cljs.core._nth.call(null,chunk__27379_27383,i__27381_27385);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27386);


var G__27387 = seq__27378_27382;
var G__27388 = chunk__27379_27383;
var G__27389 = count__27380_27384;
var G__27390 = (i__27381_27385 + (1));
seq__27378_27382 = G__27387;
chunk__27379_27383 = G__27388;
count__27380_27384 = G__27389;
i__27381_27385 = G__27390;
continue;
} else {
var temp__5735__auto___27391 = cljs.core.seq.call(null,seq__27378_27382);
if(temp__5735__auto___27391){
var seq__27378_27392__$1 = temp__5735__auto___27391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27378_27392__$1)){
var c__4550__auto___27393 = cljs.core.chunk_first.call(null,seq__27378_27392__$1);
var G__27394 = cljs.core.chunk_rest.call(null,seq__27378_27392__$1);
var G__27395 = c__4550__auto___27393;
var G__27396 = cljs.core.count.call(null,c__4550__auto___27393);
var G__27397 = (0);
seq__27378_27382 = G__27394;
chunk__27379_27383 = G__27395;
count__27380_27384 = G__27396;
i__27381_27385 = G__27397;
continue;
} else {
var ns_27398 = cljs.core.first.call(null,seq__27378_27392__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27398);


var G__27399 = cljs.core.next.call(null,seq__27378_27392__$1);
var G__27400 = null;
var G__27401 = (0);
var G__27402 = (0);
seq__27378_27382 = G__27399;
chunk__27379_27383 = G__27400;
count__27380_27384 = G__27401;
i__27381_27385 = G__27402;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27403__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27404__i = 0, G__27404__a = new Array(arguments.length -  0);
while (G__27404__i < G__27404__a.length) {G__27404__a[G__27404__i] = arguments[G__27404__i + 0]; ++G__27404__i;}
  args = new cljs.core.IndexedSeq(G__27404__a,0,null);
} 
return G__27403__delegate.call(this,args);};
G__27403.cljs$lang$maxFixedArity = 0;
G__27403.cljs$lang$applyTo = (function (arglist__27405){
var args = cljs.core.seq(arglist__27405);
return G__27403__delegate(args);
});
G__27403.cljs$core$IFn$_invoke$arity$variadic = G__27403__delegate;
return G__27403;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27406_SHARP_,p2__27407_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27406_SHARP_)),p2__27407_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27408_SHARP_,p2__27409_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27408_SHARP_),p2__27409_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27410 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27410.addCallback(((function (G__27410){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27410))
);

G__27410.addErrback(((function (G__27410){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27410))
);

return G__27410;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27411){if((e27411 instanceof Error)){
var e = e27411;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27411;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27412){if((e27412 instanceof Error)){
var e = e27412;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27412;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27413 = cljs.core._EQ_;
var expr__27414 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27413.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27414))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27413.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27414))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27413.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27414))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27413,expr__27414){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27413,expr__27414))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27416,callback){
var map__27417 = p__27416;
var map__27417__$1 = (((((!((map__27417 == null))))?(((((map__27417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27417):map__27417);
var file_msg = map__27417__$1;
var request_url = cljs.core.get.call(null,map__27417__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27417,map__27417__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27417,map__27417__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto__){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto__){
return (function (state_27455){
var state_val_27456 = (state_27455[(1)]);
if((state_val_27456 === (7))){
var inst_27451 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27457_27483 = state_27455__$1;
(statearr_27457_27483[(2)] = inst_27451);

(statearr_27457_27483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (1))){
var state_27455__$1 = state_27455;
var statearr_27458_27484 = state_27455__$1;
(statearr_27458_27484[(2)] = null);

(statearr_27458_27484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (4))){
var inst_27421 = (state_27455[(7)]);
var inst_27421__$1 = (state_27455[(2)]);
var state_27455__$1 = (function (){var statearr_27459 = state_27455;
(statearr_27459[(7)] = inst_27421__$1);

return statearr_27459;
})();
if(cljs.core.truth_(inst_27421__$1)){
var statearr_27460_27485 = state_27455__$1;
(statearr_27460_27485[(1)] = (5));

} else {
var statearr_27461_27486 = state_27455__$1;
(statearr_27461_27486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (15))){
var inst_27436 = (state_27455[(8)]);
var inst_27434 = (state_27455[(9)]);
var inst_27438 = inst_27436.call(null,inst_27434);
var state_27455__$1 = state_27455;
var statearr_27462_27487 = state_27455__$1;
(statearr_27462_27487[(2)] = inst_27438);

(statearr_27462_27487[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (13))){
var inst_27445 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27463_27488 = state_27455__$1;
(statearr_27463_27488[(2)] = inst_27445);

(statearr_27463_27488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (6))){
var state_27455__$1 = state_27455;
var statearr_27464_27489 = state_27455__$1;
(statearr_27464_27489[(2)] = null);

(statearr_27464_27489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (17))){
var inst_27442 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27465_27490 = state_27455__$1;
(statearr_27465_27490[(2)] = inst_27442);

(statearr_27465_27490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (3))){
var inst_27453 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27455__$1,inst_27453);
} else {
if((state_val_27456 === (12))){
var state_27455__$1 = state_27455;
var statearr_27466_27491 = state_27455__$1;
(statearr_27466_27491[(2)] = null);

(statearr_27466_27491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (2))){
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27455__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27456 === (11))){
var inst_27426 = (state_27455[(10)]);
var inst_27432 = figwheel.client.file_reloading.blocking_load.call(null,inst_27426);
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27455__$1,(14),inst_27432);
} else {
if((state_val_27456 === (9))){
var inst_27426 = (state_27455[(10)]);
var state_27455__$1 = state_27455;
if(cljs.core.truth_(inst_27426)){
var statearr_27467_27492 = state_27455__$1;
(statearr_27467_27492[(1)] = (11));

} else {
var statearr_27468_27493 = state_27455__$1;
(statearr_27468_27493[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (5))){
var inst_27427 = (state_27455[(11)]);
var inst_27421 = (state_27455[(7)]);
var inst_27426 = cljs.core.nth.call(null,inst_27421,(0),null);
var inst_27427__$1 = cljs.core.nth.call(null,inst_27421,(1),null);
var state_27455__$1 = (function (){var statearr_27469 = state_27455;
(statearr_27469[(11)] = inst_27427__$1);

(statearr_27469[(10)] = inst_27426);

return statearr_27469;
})();
if(cljs.core.truth_(inst_27427__$1)){
var statearr_27470_27494 = state_27455__$1;
(statearr_27470_27494[(1)] = (8));

} else {
var statearr_27471_27495 = state_27455__$1;
(statearr_27471_27495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (14))){
var inst_27426 = (state_27455[(10)]);
var inst_27436 = (state_27455[(8)]);
var inst_27434 = (state_27455[(2)]);
var inst_27435 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27436__$1 = cljs.core.get.call(null,inst_27435,inst_27426);
var state_27455__$1 = (function (){var statearr_27472 = state_27455;
(statearr_27472[(8)] = inst_27436__$1);

(statearr_27472[(9)] = inst_27434);

return statearr_27472;
})();
if(cljs.core.truth_(inst_27436__$1)){
var statearr_27473_27496 = state_27455__$1;
(statearr_27473_27496[(1)] = (15));

} else {
var statearr_27474_27497 = state_27455__$1;
(statearr_27474_27497[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (16))){
var inst_27434 = (state_27455[(9)]);
var inst_27440 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27434);
var state_27455__$1 = state_27455;
var statearr_27475_27498 = state_27455__$1;
(statearr_27475_27498[(2)] = inst_27440);

(statearr_27475_27498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (10))){
var inst_27447 = (state_27455[(2)]);
var state_27455__$1 = (function (){var statearr_27476 = state_27455;
(statearr_27476[(12)] = inst_27447);

return statearr_27476;
})();
var statearr_27477_27499 = state_27455__$1;
(statearr_27477_27499[(2)] = null);

(statearr_27477_27499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (8))){
var inst_27427 = (state_27455[(11)]);
var inst_27429 = eval(inst_27427);
var state_27455__$1 = state_27455;
var statearr_27478_27500 = state_27455__$1;
(statearr_27478_27500[(2)] = inst_27429);

(statearr_27478_27500[(1)] = (10));


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
});})(c__23800__auto__))
;
return ((function (switch__23705__auto__,c__23800__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23706__auto__ = null;
var figwheel$client$file_reloading$state_machine__23706__auto____0 = (function (){
var statearr_27479 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27479[(0)] = figwheel$client$file_reloading$state_machine__23706__auto__);

(statearr_27479[(1)] = (1));

return statearr_27479;
});
var figwheel$client$file_reloading$state_machine__23706__auto____1 = (function (state_27455){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_27455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e27480){if((e27480 instanceof Object)){
var ex__23709__auto__ = e27480;
var statearr_27481_27501 = state_27455;
(statearr_27481_27501[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27502 = state_27455;
state_27455 = G__27502;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23706__auto__ = function(state_27455){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23706__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23706__auto____1.call(this,state_27455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23706__auto____0;
figwheel$client$file_reloading$state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23706__auto____1;
return figwheel$client$file_reloading$state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto__))
})();
var state__23802__auto__ = (function (){var statearr_27482 = f__23801__auto__.call(null);
(statearr_27482[(6)] = c__23800__auto__);

return statearr_27482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto__))
);

return c__23800__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27504 = arguments.length;
switch (G__27504) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27506,callback){
var map__27507 = p__27506;
var map__27507__$1 = (((((!((map__27507 == null))))?(((((map__27507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27507):map__27507);
var file_msg = map__27507__$1;
var namespace = cljs.core.get.call(null,map__27507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27507,map__27507__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27507,map__27507__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27509){
var map__27510 = p__27509;
var map__27510__$1 = (((((!((map__27510 == null))))?(((((map__27510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27510):map__27510);
var file_msg = map__27510__$1;
var namespace = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27512){
var map__27513 = p__27512;
var map__27513__$1 = (((((!((map__27513 == null))))?(((((map__27513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27513):map__27513);
var file_msg = map__27513__$1;
var namespace = cljs.core.get.call(null,map__27513__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27515,callback){
var map__27516 = p__27515;
var map__27516__$1 = (((((!((map__27516 == null))))?(((((map__27516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27516):map__27516);
var file_msg = map__27516__$1;
var request_url = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27516__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23800__auto___27566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto___27566,out){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto___27566,out){
return (function (state_27551){
var state_val_27552 = (state_27551[(1)]);
if((state_val_27552 === (1))){
var inst_27525 = cljs.core.seq.call(null,files);
var inst_27526 = cljs.core.first.call(null,inst_27525);
var inst_27527 = cljs.core.next.call(null,inst_27525);
var inst_27528 = files;
var state_27551__$1 = (function (){var statearr_27553 = state_27551;
(statearr_27553[(7)] = inst_27527);

(statearr_27553[(8)] = inst_27526);

(statearr_27553[(9)] = inst_27528);

return statearr_27553;
})();
var statearr_27554_27567 = state_27551__$1;
(statearr_27554_27567[(2)] = null);

(statearr_27554_27567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (2))){
var inst_27534 = (state_27551[(10)]);
var inst_27528 = (state_27551[(9)]);
var inst_27533 = cljs.core.seq.call(null,inst_27528);
var inst_27534__$1 = cljs.core.first.call(null,inst_27533);
var inst_27535 = cljs.core.next.call(null,inst_27533);
var inst_27536 = (inst_27534__$1 == null);
var inst_27537 = cljs.core.not.call(null,inst_27536);
var state_27551__$1 = (function (){var statearr_27555 = state_27551;
(statearr_27555[(11)] = inst_27535);

(statearr_27555[(10)] = inst_27534__$1);

return statearr_27555;
})();
if(inst_27537){
var statearr_27556_27568 = state_27551__$1;
(statearr_27556_27568[(1)] = (4));

} else {
var statearr_27557_27569 = state_27551__$1;
(statearr_27557_27569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (3))){
var inst_27549 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27551__$1,inst_27549);
} else {
if((state_val_27552 === (4))){
var inst_27534 = (state_27551[(10)]);
var inst_27539 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27534);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(7),inst_27539);
} else {
if((state_val_27552 === (5))){
var inst_27545 = cljs.core.async.close_BANG_.call(null,out);
var state_27551__$1 = state_27551;
var statearr_27558_27570 = state_27551__$1;
(statearr_27558_27570[(2)] = inst_27545);

(statearr_27558_27570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (6))){
var inst_27547 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27559_27571 = state_27551__$1;
(statearr_27559_27571[(2)] = inst_27547);

(statearr_27559_27571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (7))){
var inst_27535 = (state_27551[(11)]);
var inst_27541 = (state_27551[(2)]);
var inst_27542 = cljs.core.async.put_BANG_.call(null,out,inst_27541);
var inst_27528 = inst_27535;
var state_27551__$1 = (function (){var statearr_27560 = state_27551;
(statearr_27560[(12)] = inst_27542);

(statearr_27560[(9)] = inst_27528);

return statearr_27560;
})();
var statearr_27561_27572 = state_27551__$1;
(statearr_27561_27572[(2)] = null);

(statearr_27561_27572[(1)] = (2));


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
});})(c__23800__auto___27566,out))
;
return ((function (switch__23705__auto__,c__23800__auto___27566,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto____0 = (function (){
var statearr_27562 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27562[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto__);

(statearr_27562[(1)] = (1));

return statearr_27562;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto____1 = (function (state_27551){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_27551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e27563){if((e27563 instanceof Object)){
var ex__23709__auto__ = e27563;
var statearr_27564_27573 = state_27551;
(statearr_27564_27573[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27574 = state_27551;
state_27551 = G__27574;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto__ = function(state_27551){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto____1.call(this,state_27551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto___27566,out))
})();
var state__23802__auto__ = (function (){var statearr_27565 = f__23801__auto__.call(null);
(statearr_27565[(6)] = c__23800__auto___27566);

return statearr_27565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto___27566,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27575,opts){
var map__27576 = p__27575;
var map__27576__$1 = (((((!((map__27576 == null))))?(((((map__27576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27576):map__27576);
var eval_body = cljs.core.get.call(null,map__27576__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27578){var e = e27578;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27579_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27579_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27580){
var vec__27581 = p__27580;
var k = cljs.core.nth.call(null,vec__27581,(0),null);
var v = cljs.core.nth.call(null,vec__27581,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27584){
var vec__27585 = p__27584;
var k = cljs.core.nth.call(null,vec__27585,(0),null);
var v = cljs.core.nth.call(null,vec__27585,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27591,p__27592){
var map__27593 = p__27591;
var map__27593__$1 = (((((!((map__27593 == null))))?(((((map__27593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27593):map__27593);
var opts = map__27593__$1;
var before_jsload = cljs.core.get.call(null,map__27593__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27593__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27593__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27594 = p__27592;
var map__27594__$1 = (((((!((map__27594 == null))))?(((((map__27594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27594):map__27594);
var msg = map__27594__$1;
var files = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23801__auto__ = (function (){var switch__23705__auto__ = ((function (c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27748){
var state_val_27749 = (state_27748[(1)]);
if((state_val_27749 === (7))){
var inst_27608 = (state_27748[(7)]);
var inst_27609 = (state_27748[(8)]);
var inst_27610 = (state_27748[(9)]);
var inst_27611 = (state_27748[(10)]);
var inst_27616 = cljs.core._nth.call(null,inst_27609,inst_27611);
var inst_27617 = figwheel.client.file_reloading.eval_body.call(null,inst_27616,opts);
var inst_27618 = (inst_27611 + (1));
var tmp27750 = inst_27608;
var tmp27751 = inst_27609;
var tmp27752 = inst_27610;
var inst_27608__$1 = tmp27750;
var inst_27609__$1 = tmp27751;
var inst_27610__$1 = tmp27752;
var inst_27611__$1 = inst_27618;
var state_27748__$1 = (function (){var statearr_27753 = state_27748;
(statearr_27753[(7)] = inst_27608__$1);

(statearr_27753[(11)] = inst_27617);

(statearr_27753[(8)] = inst_27609__$1);

(statearr_27753[(9)] = inst_27610__$1);

(statearr_27753[(10)] = inst_27611__$1);

return statearr_27753;
})();
var statearr_27754_27837 = state_27748__$1;
(statearr_27754_27837[(2)] = null);

(statearr_27754_27837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (20))){
var inst_27651 = (state_27748[(12)]);
var inst_27659 = figwheel.client.file_reloading.sort_files.call(null,inst_27651);
var state_27748__$1 = state_27748;
var statearr_27755_27838 = state_27748__$1;
(statearr_27755_27838[(2)] = inst_27659);

(statearr_27755_27838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (27))){
var state_27748__$1 = state_27748;
var statearr_27756_27839 = state_27748__$1;
(statearr_27756_27839[(2)] = null);

(statearr_27756_27839[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (1))){
var inst_27600 = (state_27748[(13)]);
var inst_27597 = before_jsload.call(null,files);
var inst_27598 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27599 = (function (){return ((function (inst_27600,inst_27597,inst_27598,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27588_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27588_SHARP_);
});
;})(inst_27600,inst_27597,inst_27598,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27600__$1 = cljs.core.filter.call(null,inst_27599,files);
var inst_27601 = cljs.core.not_empty.call(null,inst_27600__$1);
var state_27748__$1 = (function (){var statearr_27757 = state_27748;
(statearr_27757[(14)] = inst_27598);

(statearr_27757[(15)] = inst_27597);

(statearr_27757[(13)] = inst_27600__$1);

return statearr_27757;
})();
if(cljs.core.truth_(inst_27601)){
var statearr_27758_27840 = state_27748__$1;
(statearr_27758_27840[(1)] = (2));

} else {
var statearr_27759_27841 = state_27748__$1;
(statearr_27759_27841[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (24))){
var state_27748__$1 = state_27748;
var statearr_27760_27842 = state_27748__$1;
(statearr_27760_27842[(2)] = null);

(statearr_27760_27842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (39))){
var inst_27701 = (state_27748[(16)]);
var state_27748__$1 = state_27748;
var statearr_27761_27843 = state_27748__$1;
(statearr_27761_27843[(2)] = inst_27701);

(statearr_27761_27843[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (46))){
var inst_27743 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27762_27844 = state_27748__$1;
(statearr_27762_27844[(2)] = inst_27743);

(statearr_27762_27844[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (4))){
var inst_27645 = (state_27748[(2)]);
var inst_27646 = cljs.core.List.EMPTY;
var inst_27647 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27646);
var inst_27648 = (function (){return ((function (inst_27645,inst_27646,inst_27647,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27589_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27589_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27589_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27589_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27645,inst_27646,inst_27647,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27649 = cljs.core.filter.call(null,inst_27648,files);
var inst_27650 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27651 = cljs.core.concat.call(null,inst_27649,inst_27650);
var state_27748__$1 = (function (){var statearr_27763 = state_27748;
(statearr_27763[(12)] = inst_27651);

(statearr_27763[(17)] = inst_27647);

(statearr_27763[(18)] = inst_27645);

return statearr_27763;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27764_27845 = state_27748__$1;
(statearr_27764_27845[(1)] = (16));

} else {
var statearr_27765_27846 = state_27748__$1;
(statearr_27765_27846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (15))){
var inst_27635 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27766_27847 = state_27748__$1;
(statearr_27766_27847[(2)] = inst_27635);

(statearr_27766_27847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (21))){
var inst_27661 = (state_27748[(19)]);
var inst_27661__$1 = (state_27748[(2)]);
var inst_27662 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27661__$1);
var state_27748__$1 = (function (){var statearr_27767 = state_27748;
(statearr_27767[(19)] = inst_27661__$1);

return statearr_27767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27748__$1,(22),inst_27662);
} else {
if((state_val_27749 === (31))){
var inst_27746 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27748__$1,inst_27746);
} else {
if((state_val_27749 === (32))){
var inst_27701 = (state_27748[(16)]);
var inst_27706 = inst_27701.cljs$lang$protocol_mask$partition0$;
var inst_27707 = (inst_27706 & (64));
var inst_27708 = inst_27701.cljs$core$ISeq$;
var inst_27709 = (cljs.core.PROTOCOL_SENTINEL === inst_27708);
var inst_27710 = ((inst_27707) || (inst_27709));
var state_27748__$1 = state_27748;
if(cljs.core.truth_(inst_27710)){
var statearr_27768_27848 = state_27748__$1;
(statearr_27768_27848[(1)] = (35));

} else {
var statearr_27769_27849 = state_27748__$1;
(statearr_27769_27849[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (40))){
var inst_27723 = (state_27748[(20)]);
var inst_27722 = (state_27748[(2)]);
var inst_27723__$1 = cljs.core.get.call(null,inst_27722,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27724 = cljs.core.get.call(null,inst_27722,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27725 = cljs.core.not_empty.call(null,inst_27723__$1);
var state_27748__$1 = (function (){var statearr_27770 = state_27748;
(statearr_27770[(20)] = inst_27723__$1);

(statearr_27770[(21)] = inst_27724);

return statearr_27770;
})();
if(cljs.core.truth_(inst_27725)){
var statearr_27771_27850 = state_27748__$1;
(statearr_27771_27850[(1)] = (41));

} else {
var statearr_27772_27851 = state_27748__$1;
(statearr_27772_27851[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (33))){
var state_27748__$1 = state_27748;
var statearr_27773_27852 = state_27748__$1;
(statearr_27773_27852[(2)] = false);

(statearr_27773_27852[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (13))){
var inst_27621 = (state_27748[(22)]);
var inst_27625 = cljs.core.chunk_first.call(null,inst_27621);
var inst_27626 = cljs.core.chunk_rest.call(null,inst_27621);
var inst_27627 = cljs.core.count.call(null,inst_27625);
var inst_27608 = inst_27626;
var inst_27609 = inst_27625;
var inst_27610 = inst_27627;
var inst_27611 = (0);
var state_27748__$1 = (function (){var statearr_27774 = state_27748;
(statearr_27774[(7)] = inst_27608);

(statearr_27774[(8)] = inst_27609);

(statearr_27774[(9)] = inst_27610);

(statearr_27774[(10)] = inst_27611);

return statearr_27774;
})();
var statearr_27775_27853 = state_27748__$1;
(statearr_27775_27853[(2)] = null);

(statearr_27775_27853[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (22))){
var inst_27664 = (state_27748[(23)]);
var inst_27665 = (state_27748[(24)]);
var inst_27669 = (state_27748[(25)]);
var inst_27661 = (state_27748[(19)]);
var inst_27664__$1 = (state_27748[(2)]);
var inst_27665__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27664__$1);
var inst_27666 = (function (){var all_files = inst_27661;
var res_SINGLEQUOTE_ = inst_27664__$1;
var res = inst_27665__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27664,inst_27665,inst_27669,inst_27661,inst_27664__$1,inst_27665__$1,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27590_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27590_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27664,inst_27665,inst_27669,inst_27661,inst_27664__$1,inst_27665__$1,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27667 = cljs.core.filter.call(null,inst_27666,inst_27664__$1);
var inst_27668 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27669__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27668);
var inst_27670 = cljs.core.not_empty.call(null,inst_27669__$1);
var state_27748__$1 = (function (){var statearr_27776 = state_27748;
(statearr_27776[(23)] = inst_27664__$1);

(statearr_27776[(24)] = inst_27665__$1);

(statearr_27776[(26)] = inst_27667);

(statearr_27776[(25)] = inst_27669__$1);

return statearr_27776;
})();
if(cljs.core.truth_(inst_27670)){
var statearr_27777_27854 = state_27748__$1;
(statearr_27777_27854[(1)] = (23));

} else {
var statearr_27778_27855 = state_27748__$1;
(statearr_27778_27855[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (36))){
var state_27748__$1 = state_27748;
var statearr_27779_27856 = state_27748__$1;
(statearr_27779_27856[(2)] = false);

(statearr_27779_27856[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (41))){
var inst_27723 = (state_27748[(20)]);
var inst_27727 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27728 = cljs.core.map.call(null,inst_27727,inst_27723);
var inst_27729 = cljs.core.pr_str.call(null,inst_27728);
var inst_27730 = ["figwheel-no-load meta-data: ",inst_27729].join('');
var inst_27731 = figwheel.client.utils.log.call(null,inst_27730);
var state_27748__$1 = state_27748;
var statearr_27780_27857 = state_27748__$1;
(statearr_27780_27857[(2)] = inst_27731);

(statearr_27780_27857[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (43))){
var inst_27724 = (state_27748[(21)]);
var inst_27734 = (state_27748[(2)]);
var inst_27735 = cljs.core.not_empty.call(null,inst_27724);
var state_27748__$1 = (function (){var statearr_27781 = state_27748;
(statearr_27781[(27)] = inst_27734);

return statearr_27781;
})();
if(cljs.core.truth_(inst_27735)){
var statearr_27782_27858 = state_27748__$1;
(statearr_27782_27858[(1)] = (44));

} else {
var statearr_27783_27859 = state_27748__$1;
(statearr_27783_27859[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (29))){
var inst_27664 = (state_27748[(23)]);
var inst_27701 = (state_27748[(16)]);
var inst_27665 = (state_27748[(24)]);
var inst_27667 = (state_27748[(26)]);
var inst_27669 = (state_27748[(25)]);
var inst_27661 = (state_27748[(19)]);
var inst_27697 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27700 = (function (){var all_files = inst_27661;
var res_SINGLEQUOTE_ = inst_27664;
var res = inst_27665;
var files_not_loaded = inst_27667;
var dependencies_that_loaded = inst_27669;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27701,inst_27665,inst_27667,inst_27669,inst_27661,inst_27697,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27699){
var map__27784 = p__27699;
var map__27784__$1 = (((((!((map__27784 == null))))?(((((map__27784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27784):map__27784);
var namespace = cljs.core.get.call(null,map__27784__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27701,inst_27665,inst_27667,inst_27669,inst_27661,inst_27697,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27701__$1 = cljs.core.group_by.call(null,inst_27700,inst_27667);
var inst_27703 = (inst_27701__$1 == null);
var inst_27704 = cljs.core.not.call(null,inst_27703);
var state_27748__$1 = (function (){var statearr_27786 = state_27748;
(statearr_27786[(16)] = inst_27701__$1);

(statearr_27786[(28)] = inst_27697);

return statearr_27786;
})();
if(inst_27704){
var statearr_27787_27860 = state_27748__$1;
(statearr_27787_27860[(1)] = (32));

} else {
var statearr_27788_27861 = state_27748__$1;
(statearr_27788_27861[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (44))){
var inst_27724 = (state_27748[(21)]);
var inst_27737 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27724);
var inst_27738 = cljs.core.pr_str.call(null,inst_27737);
var inst_27739 = ["not required: ",inst_27738].join('');
var inst_27740 = figwheel.client.utils.log.call(null,inst_27739);
var state_27748__$1 = state_27748;
var statearr_27789_27862 = state_27748__$1;
(statearr_27789_27862[(2)] = inst_27740);

(statearr_27789_27862[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (6))){
var inst_27642 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27790_27863 = state_27748__$1;
(statearr_27790_27863[(2)] = inst_27642);

(statearr_27790_27863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (28))){
var inst_27667 = (state_27748[(26)]);
var inst_27694 = (state_27748[(2)]);
var inst_27695 = cljs.core.not_empty.call(null,inst_27667);
var state_27748__$1 = (function (){var statearr_27791 = state_27748;
(statearr_27791[(29)] = inst_27694);

return statearr_27791;
})();
if(cljs.core.truth_(inst_27695)){
var statearr_27792_27864 = state_27748__$1;
(statearr_27792_27864[(1)] = (29));

} else {
var statearr_27793_27865 = state_27748__$1;
(statearr_27793_27865[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (25))){
var inst_27665 = (state_27748[(24)]);
var inst_27681 = (state_27748[(2)]);
var inst_27682 = cljs.core.not_empty.call(null,inst_27665);
var state_27748__$1 = (function (){var statearr_27794 = state_27748;
(statearr_27794[(30)] = inst_27681);

return statearr_27794;
})();
if(cljs.core.truth_(inst_27682)){
var statearr_27795_27866 = state_27748__$1;
(statearr_27795_27866[(1)] = (26));

} else {
var statearr_27796_27867 = state_27748__$1;
(statearr_27796_27867[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (34))){
var inst_27717 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
if(cljs.core.truth_(inst_27717)){
var statearr_27797_27868 = state_27748__$1;
(statearr_27797_27868[(1)] = (38));

} else {
var statearr_27798_27869 = state_27748__$1;
(statearr_27798_27869[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (17))){
var state_27748__$1 = state_27748;
var statearr_27799_27870 = state_27748__$1;
(statearr_27799_27870[(2)] = recompile_dependents);

(statearr_27799_27870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (3))){
var state_27748__$1 = state_27748;
var statearr_27800_27871 = state_27748__$1;
(statearr_27800_27871[(2)] = null);

(statearr_27800_27871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (12))){
var inst_27638 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27801_27872 = state_27748__$1;
(statearr_27801_27872[(2)] = inst_27638);

(statearr_27801_27872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (2))){
var inst_27600 = (state_27748[(13)]);
var inst_27607 = cljs.core.seq.call(null,inst_27600);
var inst_27608 = inst_27607;
var inst_27609 = null;
var inst_27610 = (0);
var inst_27611 = (0);
var state_27748__$1 = (function (){var statearr_27802 = state_27748;
(statearr_27802[(7)] = inst_27608);

(statearr_27802[(8)] = inst_27609);

(statearr_27802[(9)] = inst_27610);

(statearr_27802[(10)] = inst_27611);

return statearr_27802;
})();
var statearr_27803_27873 = state_27748__$1;
(statearr_27803_27873[(2)] = null);

(statearr_27803_27873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (23))){
var inst_27664 = (state_27748[(23)]);
var inst_27665 = (state_27748[(24)]);
var inst_27667 = (state_27748[(26)]);
var inst_27669 = (state_27748[(25)]);
var inst_27661 = (state_27748[(19)]);
var inst_27672 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27674 = (function (){var all_files = inst_27661;
var res_SINGLEQUOTE_ = inst_27664;
var res = inst_27665;
var files_not_loaded = inst_27667;
var dependencies_that_loaded = inst_27669;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27665,inst_27667,inst_27669,inst_27661,inst_27672,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27673){
var map__27804 = p__27673;
var map__27804__$1 = (((((!((map__27804 == null))))?(((((map__27804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27804):map__27804);
var request_url = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27665,inst_27667,inst_27669,inst_27661,inst_27672,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27675 = cljs.core.reverse.call(null,inst_27669);
var inst_27676 = cljs.core.map.call(null,inst_27674,inst_27675);
var inst_27677 = cljs.core.pr_str.call(null,inst_27676);
var inst_27678 = figwheel.client.utils.log.call(null,inst_27677);
var state_27748__$1 = (function (){var statearr_27806 = state_27748;
(statearr_27806[(31)] = inst_27672);

return statearr_27806;
})();
var statearr_27807_27874 = state_27748__$1;
(statearr_27807_27874[(2)] = inst_27678);

(statearr_27807_27874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (35))){
var state_27748__$1 = state_27748;
var statearr_27808_27875 = state_27748__$1;
(statearr_27808_27875[(2)] = true);

(statearr_27808_27875[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (19))){
var inst_27651 = (state_27748[(12)]);
var inst_27657 = figwheel.client.file_reloading.expand_files.call(null,inst_27651);
var state_27748__$1 = state_27748;
var statearr_27809_27876 = state_27748__$1;
(statearr_27809_27876[(2)] = inst_27657);

(statearr_27809_27876[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (11))){
var state_27748__$1 = state_27748;
var statearr_27810_27877 = state_27748__$1;
(statearr_27810_27877[(2)] = null);

(statearr_27810_27877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (9))){
var inst_27640 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27811_27878 = state_27748__$1;
(statearr_27811_27878[(2)] = inst_27640);

(statearr_27811_27878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (5))){
var inst_27610 = (state_27748[(9)]);
var inst_27611 = (state_27748[(10)]);
var inst_27613 = (inst_27611 < inst_27610);
var inst_27614 = inst_27613;
var state_27748__$1 = state_27748;
if(cljs.core.truth_(inst_27614)){
var statearr_27812_27879 = state_27748__$1;
(statearr_27812_27879[(1)] = (7));

} else {
var statearr_27813_27880 = state_27748__$1;
(statearr_27813_27880[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (14))){
var inst_27621 = (state_27748[(22)]);
var inst_27630 = cljs.core.first.call(null,inst_27621);
var inst_27631 = figwheel.client.file_reloading.eval_body.call(null,inst_27630,opts);
var inst_27632 = cljs.core.next.call(null,inst_27621);
var inst_27608 = inst_27632;
var inst_27609 = null;
var inst_27610 = (0);
var inst_27611 = (0);
var state_27748__$1 = (function (){var statearr_27814 = state_27748;
(statearr_27814[(7)] = inst_27608);

(statearr_27814[(8)] = inst_27609);

(statearr_27814[(9)] = inst_27610);

(statearr_27814[(32)] = inst_27631);

(statearr_27814[(10)] = inst_27611);

return statearr_27814;
})();
var statearr_27815_27881 = state_27748__$1;
(statearr_27815_27881[(2)] = null);

(statearr_27815_27881[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (45))){
var state_27748__$1 = state_27748;
var statearr_27816_27882 = state_27748__$1;
(statearr_27816_27882[(2)] = null);

(statearr_27816_27882[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (26))){
var inst_27664 = (state_27748[(23)]);
var inst_27665 = (state_27748[(24)]);
var inst_27667 = (state_27748[(26)]);
var inst_27669 = (state_27748[(25)]);
var inst_27661 = (state_27748[(19)]);
var inst_27684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27686 = (function (){var all_files = inst_27661;
var res_SINGLEQUOTE_ = inst_27664;
var res = inst_27665;
var files_not_loaded = inst_27667;
var dependencies_that_loaded = inst_27669;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27665,inst_27667,inst_27669,inst_27661,inst_27684,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27685){
var map__27817 = p__27685;
var map__27817__$1 = (((((!((map__27817 == null))))?(((((map__27817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27817):map__27817);
var namespace = cljs.core.get.call(null,map__27817__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27817__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27665,inst_27667,inst_27669,inst_27661,inst_27684,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27687 = cljs.core.map.call(null,inst_27686,inst_27665);
var inst_27688 = cljs.core.pr_str.call(null,inst_27687);
var inst_27689 = figwheel.client.utils.log.call(null,inst_27688);
var inst_27690 = (function (){var all_files = inst_27661;
var res_SINGLEQUOTE_ = inst_27664;
var res = inst_27665;
var files_not_loaded = inst_27667;
var dependencies_that_loaded = inst_27669;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27665,inst_27667,inst_27669,inst_27661,inst_27684,inst_27686,inst_27687,inst_27688,inst_27689,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27665,inst_27667,inst_27669,inst_27661,inst_27684,inst_27686,inst_27687,inst_27688,inst_27689,state_val_27749,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27691 = setTimeout(inst_27690,(10));
var state_27748__$1 = (function (){var statearr_27819 = state_27748;
(statearr_27819[(33)] = inst_27684);

(statearr_27819[(34)] = inst_27689);

return statearr_27819;
})();
var statearr_27820_27883 = state_27748__$1;
(statearr_27820_27883[(2)] = inst_27691);

(statearr_27820_27883[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (16))){
var state_27748__$1 = state_27748;
var statearr_27821_27884 = state_27748__$1;
(statearr_27821_27884[(2)] = reload_dependents);

(statearr_27821_27884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (38))){
var inst_27701 = (state_27748[(16)]);
var inst_27719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27701);
var state_27748__$1 = state_27748;
var statearr_27822_27885 = state_27748__$1;
(statearr_27822_27885[(2)] = inst_27719);

(statearr_27822_27885[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (30))){
var state_27748__$1 = state_27748;
var statearr_27823_27886 = state_27748__$1;
(statearr_27823_27886[(2)] = null);

(statearr_27823_27886[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (10))){
var inst_27621 = (state_27748[(22)]);
var inst_27623 = cljs.core.chunked_seq_QMARK_.call(null,inst_27621);
var state_27748__$1 = state_27748;
if(inst_27623){
var statearr_27824_27887 = state_27748__$1;
(statearr_27824_27887[(1)] = (13));

} else {
var statearr_27825_27888 = state_27748__$1;
(statearr_27825_27888[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (18))){
var inst_27655 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
if(cljs.core.truth_(inst_27655)){
var statearr_27826_27889 = state_27748__$1;
(statearr_27826_27889[(1)] = (19));

} else {
var statearr_27827_27890 = state_27748__$1;
(statearr_27827_27890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (42))){
var state_27748__$1 = state_27748;
var statearr_27828_27891 = state_27748__$1;
(statearr_27828_27891[(2)] = null);

(statearr_27828_27891[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (37))){
var inst_27714 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27829_27892 = state_27748__$1;
(statearr_27829_27892[(2)] = inst_27714);

(statearr_27829_27892[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (8))){
var inst_27608 = (state_27748[(7)]);
var inst_27621 = (state_27748[(22)]);
var inst_27621__$1 = cljs.core.seq.call(null,inst_27608);
var state_27748__$1 = (function (){var statearr_27830 = state_27748;
(statearr_27830[(22)] = inst_27621__$1);

return statearr_27830;
})();
if(inst_27621__$1){
var statearr_27831_27893 = state_27748__$1;
(statearr_27831_27893[(1)] = (10));

} else {
var statearr_27832_27894 = state_27748__$1;
(statearr_27832_27894[(1)] = (11));

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
}
});})(c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23705__auto__,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto____0 = (function (){
var statearr_27833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27833[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto__);

(statearr_27833[(1)] = (1));

return statearr_27833;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto____1 = (function (state_27748){
while(true){
var ret_value__23707__auto__ = (function (){try{while(true){
var result__23708__auto__ = switch__23705__auto__.call(null,state_27748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23708__auto__;
}
break;
}
}catch (e27834){if((e27834 instanceof Object)){
var ex__23709__auto__ = e27834;
var statearr_27835_27895 = state_27748;
(statearr_27835_27895[(5)] = ex__23709__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27896 = state_27748;
state_27748 = G__27896;
continue;
} else {
return ret_value__23707__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto__ = function(state_27748){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto____1.call(this,state_27748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23706__auto__;
})()
;})(switch__23705__auto__,c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23802__auto__ = (function (){var statearr_27836 = f__23801__auto__.call(null);
(statearr_27836[(6)] = c__23800__auto__);

return statearr_27836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23802__auto__);
});})(c__23800__auto__,map__27593,map__27593__$1,opts,before_jsload,on_jsload,reload_dependents,map__27594,map__27594__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23800__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27899,link){
var map__27900 = p__27899;
var map__27900__$1 = (((((!((map__27900 == null))))?(((((map__27900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27900):map__27900);
var file = cljs.core.get.call(null,map__27900__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__27900,map__27900__$1,file){
return (function (p1__27897_SHARP_,p2__27898_SHARP_){
if(cljs.core._EQ_.call(null,p1__27897_SHARP_,p2__27898_SHARP_)){
return p1__27897_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__27900,map__27900__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27903){
var map__27904 = p__27903;
var map__27904__$1 = (((((!((map__27904 == null))))?(((((map__27904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27904):map__27904);
var match_length = cljs.core.get.call(null,map__27904__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27904__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27902_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27902_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27906_SHARP_,p2__27907_SHARP_){
return cljs.core.assoc.call(null,p1__27906_SHARP_,cljs.core.get.call(null,p2__27907_SHARP_,key),p2__27907_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27908 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27908);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27908);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27909,p__27910){
var map__27911 = p__27909;
var map__27911__$1 = (((((!((map__27911 == null))))?(((((map__27911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27911):map__27911);
var on_cssload = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27912 = p__27910;
var map__27912__$1 = (((((!((map__27912 == null))))?(((((map__27912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27912):map__27912);
var files_msg = map__27912__$1;
var files = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1613265451713
