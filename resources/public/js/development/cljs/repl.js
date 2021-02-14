// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28781){
var map__28782 = p__28781;
var map__28782__$1 = (((((!((map__28782 == null))))?(((((map__28782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28782):map__28782);
var m = map__28782__$1;
var n = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28784_28816 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28785_28817 = null;
var count__28786_28818 = (0);
var i__28787_28819 = (0);
while(true){
if((i__28787_28819 < count__28786_28818)){
var f_28820 = cljs.core._nth.call(null,chunk__28785_28817,i__28787_28819);
cljs.core.println.call(null,"  ",f_28820);


var G__28821 = seq__28784_28816;
var G__28822 = chunk__28785_28817;
var G__28823 = count__28786_28818;
var G__28824 = (i__28787_28819 + (1));
seq__28784_28816 = G__28821;
chunk__28785_28817 = G__28822;
count__28786_28818 = G__28823;
i__28787_28819 = G__28824;
continue;
} else {
var temp__5735__auto___28825 = cljs.core.seq.call(null,seq__28784_28816);
if(temp__5735__auto___28825){
var seq__28784_28826__$1 = temp__5735__auto___28825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28784_28826__$1)){
var c__4550__auto___28827 = cljs.core.chunk_first.call(null,seq__28784_28826__$1);
var G__28828 = cljs.core.chunk_rest.call(null,seq__28784_28826__$1);
var G__28829 = c__4550__auto___28827;
var G__28830 = cljs.core.count.call(null,c__4550__auto___28827);
var G__28831 = (0);
seq__28784_28816 = G__28828;
chunk__28785_28817 = G__28829;
count__28786_28818 = G__28830;
i__28787_28819 = G__28831;
continue;
} else {
var f_28832 = cljs.core.first.call(null,seq__28784_28826__$1);
cljs.core.println.call(null,"  ",f_28832);


var G__28833 = cljs.core.next.call(null,seq__28784_28826__$1);
var G__28834 = null;
var G__28835 = (0);
var G__28836 = (0);
seq__28784_28816 = G__28833;
chunk__28785_28817 = G__28834;
count__28786_28818 = G__28835;
i__28787_28819 = G__28836;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28837 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28837);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28837)))?cljs.core.second.call(null,arglists_28837):arglists_28837));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28788_28838 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28789_28839 = null;
var count__28790_28840 = (0);
var i__28791_28841 = (0);
while(true){
if((i__28791_28841 < count__28790_28840)){
var vec__28802_28842 = cljs.core._nth.call(null,chunk__28789_28839,i__28791_28841);
var name_28843 = cljs.core.nth.call(null,vec__28802_28842,(0),null);
var map__28805_28844 = cljs.core.nth.call(null,vec__28802_28842,(1),null);
var map__28805_28845__$1 = (((((!((map__28805_28844 == null))))?(((((map__28805_28844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28805_28844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28805_28844):map__28805_28844);
var doc_28846 = cljs.core.get.call(null,map__28805_28845__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28847 = cljs.core.get.call(null,map__28805_28845__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28843);

cljs.core.println.call(null," ",arglists_28847);

if(cljs.core.truth_(doc_28846)){
cljs.core.println.call(null," ",doc_28846);
} else {
}


var G__28848 = seq__28788_28838;
var G__28849 = chunk__28789_28839;
var G__28850 = count__28790_28840;
var G__28851 = (i__28791_28841 + (1));
seq__28788_28838 = G__28848;
chunk__28789_28839 = G__28849;
count__28790_28840 = G__28850;
i__28791_28841 = G__28851;
continue;
} else {
var temp__5735__auto___28852 = cljs.core.seq.call(null,seq__28788_28838);
if(temp__5735__auto___28852){
var seq__28788_28853__$1 = temp__5735__auto___28852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28788_28853__$1)){
var c__4550__auto___28854 = cljs.core.chunk_first.call(null,seq__28788_28853__$1);
var G__28855 = cljs.core.chunk_rest.call(null,seq__28788_28853__$1);
var G__28856 = c__4550__auto___28854;
var G__28857 = cljs.core.count.call(null,c__4550__auto___28854);
var G__28858 = (0);
seq__28788_28838 = G__28855;
chunk__28789_28839 = G__28856;
count__28790_28840 = G__28857;
i__28791_28841 = G__28858;
continue;
} else {
var vec__28807_28859 = cljs.core.first.call(null,seq__28788_28853__$1);
var name_28860 = cljs.core.nth.call(null,vec__28807_28859,(0),null);
var map__28810_28861 = cljs.core.nth.call(null,vec__28807_28859,(1),null);
var map__28810_28862__$1 = (((((!((map__28810_28861 == null))))?(((((map__28810_28861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28810_28861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28810_28861):map__28810_28861);
var doc_28863 = cljs.core.get.call(null,map__28810_28862__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28864 = cljs.core.get.call(null,map__28810_28862__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28860);

cljs.core.println.call(null," ",arglists_28864);

if(cljs.core.truth_(doc_28863)){
cljs.core.println.call(null," ",doc_28863);
} else {
}


var G__28865 = cljs.core.next.call(null,seq__28788_28853__$1);
var G__28866 = null;
var G__28867 = (0);
var G__28868 = (0);
seq__28788_28838 = G__28865;
chunk__28789_28839 = G__28866;
count__28790_28840 = G__28867;
i__28791_28841 = G__28868;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__28812 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28813 = null;
var count__28814 = (0);
var i__28815 = (0);
while(true){
if((i__28815 < count__28814)){
var role = cljs.core._nth.call(null,chunk__28813,i__28815);
var temp__5735__auto___28869__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28869__$1)){
var spec_28870 = temp__5735__auto___28869__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28870));
} else {
}


var G__28871 = seq__28812;
var G__28872 = chunk__28813;
var G__28873 = count__28814;
var G__28874 = (i__28815 + (1));
seq__28812 = G__28871;
chunk__28813 = G__28872;
count__28814 = G__28873;
i__28815 = G__28874;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__28812);
if(temp__5735__auto____$1){
var seq__28812__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28812__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28812__$1);
var G__28875 = cljs.core.chunk_rest.call(null,seq__28812__$1);
var G__28876 = c__4550__auto__;
var G__28877 = cljs.core.count.call(null,c__4550__auto__);
var G__28878 = (0);
seq__28812 = G__28875;
chunk__28813 = G__28876;
count__28814 = G__28877;
i__28815 = G__28878;
continue;
} else {
var role = cljs.core.first.call(null,seq__28812__$1);
var temp__5735__auto___28879__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28879__$2)){
var spec_28880 = temp__5735__auto___28879__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28880));
} else {
}


var G__28881 = cljs.core.next.call(null,seq__28812__$1);
var G__28882 = null;
var G__28883 = (0);
var G__28884 = (0);
seq__28812 = G__28881;
chunk__28813 = G__28882;
count__28814 = G__28883;
i__28815 = G__28884;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28885 = cljs.core.conj.call(null,via,t);
var G__28886 = cljs.core.ex_cause.call(null,t);
via = G__28885;
t = G__28886;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28889 = datafied_throwable;
var map__28889__$1 = (((((!((map__28889 == null))))?(((((map__28889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28889):map__28889);
var via = cljs.core.get.call(null,map__28889__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28889__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28889__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28890 = cljs.core.last.call(null,via);
var map__28890__$1 = (((((!((map__28890 == null))))?(((((map__28890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28890):map__28890);
var type = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28891 = data;
var map__28891__$1 = (((((!((map__28891 == null))))?(((((map__28891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28891):map__28891);
var problems = cljs.core.get.call(null,map__28891__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28891__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28891__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28892 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28892__$1 = (((((!((map__28892 == null))))?(((((map__28892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28892):map__28892);
var top_data = map__28892__$1;
var source = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28897 = phase;
var G__28897__$1 = (((G__28897 instanceof cljs.core.Keyword))?G__28897.fqn:null);
switch (G__28897__$1) {
case "read-source":
var map__28898 = data;
var map__28898__$1 = (((((!((map__28898 == null))))?(((((map__28898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28898):map__28898);
var line = cljs.core.get.call(null,map__28898__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28898__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28900 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28900__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28900,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28900);
var G__28900__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28900__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28900__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28900__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28900__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28901 = top_data;
var G__28901__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28901,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28901);
var G__28901__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28901__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28901__$1);
var G__28901__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28901__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28901__$2);
var G__28901__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28901__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28901__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28901__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28901__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28902 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28902,(0),null);
var method = cljs.core.nth.call(null,vec__28902,(1),null);
var file = cljs.core.nth.call(null,vec__28902,(2),null);
var line = cljs.core.nth.call(null,vec__28902,(3),null);
var G__28905 = top_data;
var G__28905__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28905,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28905);
var G__28905__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28905__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28905__$1);
var G__28905__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__28905__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28905__$2);
var G__28905__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28905__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28905__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28905__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28905__$4;
}

break;
case "execution":
var vec__28906 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28906,(0),null);
var method = cljs.core.nth.call(null,vec__28906,(1),null);
var file = cljs.core.nth.call(null,vec__28906,(2),null);
var line = cljs.core.nth.call(null,vec__28906,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__28906,source__$1,method,file,line,G__28897,G__28897__$1,map__28889,map__28889__$1,via,trace,phase,map__28890,map__28890__$1,type,message,data,map__28891,map__28891__$1,problems,fn,caller,map__28892,map__28892__$1,top_data,source){
return (function (p1__28888_SHARP_){
var or__4131__auto__ = (p1__28888_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28888_SHARP_);
}
});})(vec__28906,source__$1,method,file,line,G__28897,G__28897__$1,map__28889,map__28889__$1,via,trace,phase,map__28890,map__28890__$1,type,message,data,map__28891,map__28891__$1,problems,fn,caller,map__28892,map__28892__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28909 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28909__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28909,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28909);
var G__28909__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28909__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28909__$1);
var G__28909__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__28909__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28909__$2);
var G__28909__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28909__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28909__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28909__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28909__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28897__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28913){
var map__28914 = p__28913;
var map__28914__$1 = (((((!((map__28914 == null))))?(((((map__28914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28914):map__28914);
var triage_data = map__28914__$1;
var phase = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28916 = phase;
var G__28916__$1 = (((G__28916 instanceof cljs.core.Keyword))?G__28916.fqn:null);
switch (G__28916__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28917_28926 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28918_28927 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28919_28928 = true;
var _STAR_print_fn_STAR__temp_val__28920_28929 = ((function (_STAR_print_newline_STAR__orig_val__28917_28926,_STAR_print_fn_STAR__orig_val__28918_28927,_STAR_print_newline_STAR__temp_val__28919_28928,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28917_28926,_STAR_print_fn_STAR__orig_val__28918_28927,_STAR_print_newline_STAR__temp_val__28919_28928,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28919_28928;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28920_28929;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28917_28926,_STAR_print_fn_STAR__orig_val__28918_28927,_STAR_print_newline_STAR__temp_val__28919_28928,_STAR_print_fn_STAR__temp_val__28920_28929,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28917_28926,_STAR_print_fn_STAR__orig_val__28918_28927,_STAR_print_newline_STAR__temp_val__28919_28928,_STAR_print_fn_STAR__temp_val__28920_28929,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28911_SHARP_){
return cljs.core.dissoc.call(null,p1__28911_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28917_28926,_STAR_print_fn_STAR__orig_val__28918_28927,_STAR_print_newline_STAR__temp_val__28919_28928,_STAR_print_fn_STAR__temp_val__28920_28929,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28917_28926,_STAR_print_fn_STAR__orig_val__28918_28927,_STAR_print_newline_STAR__temp_val__28919_28928,_STAR_print_fn_STAR__temp_val__28920_28929,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28918_28927;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28917_28926;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28921_28930 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28922_28931 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28923_28932 = true;
var _STAR_print_fn_STAR__temp_val__28924_28933 = ((function (_STAR_print_newline_STAR__orig_val__28921_28930,_STAR_print_fn_STAR__orig_val__28922_28931,_STAR_print_newline_STAR__temp_val__28923_28932,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28921_28930,_STAR_print_fn_STAR__orig_val__28922_28931,_STAR_print_newline_STAR__temp_val__28923_28932,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28923_28932;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28924_28933;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28921_28930,_STAR_print_fn_STAR__orig_val__28922_28931,_STAR_print_newline_STAR__temp_val__28923_28932,_STAR_print_fn_STAR__temp_val__28924_28933,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28921_28930,_STAR_print_fn_STAR__orig_val__28922_28931,_STAR_print_newline_STAR__temp_val__28923_28932,_STAR_print_fn_STAR__temp_val__28924_28933,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28912_SHARP_){
return cljs.core.dissoc.call(null,p1__28912_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28921_28930,_STAR_print_fn_STAR__orig_val__28922_28931,_STAR_print_newline_STAR__temp_val__28923_28932,_STAR_print_fn_STAR__temp_val__28924_28933,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28921_28930,_STAR_print_fn_STAR__orig_val__28922_28931,_STAR_print_newline_STAR__temp_val__28923_28932,_STAR_print_fn_STAR__temp_val__28924_28933,sb__4661__auto__,G__28916,G__28916__$1,loc,class_name,simple_class,cause_type,format,map__28914,map__28914__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28922_28931;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28921_28930;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28916__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1613265453150
