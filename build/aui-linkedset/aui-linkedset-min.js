YUI.add("aui-linkedset",function(e,t){var n=e.Base.create("linkedset",e.Set,[],{_header:null,_entries:null,initializer:function(){var e=this;e._header={},e._entries={}},_defAddFn:function(t){var n=this,r=t.value,i=n._map._getHash(r),s=n._header,o;n.has(r,i)||(o={after:s.after,before:s,value:r},n._entries[i]=o,s.after&&(s.after.before=o),s.after=o),t.hash=i,e.LinkedSet.superclass._defAddFn.apply(this,arguments)},_defRemoveFn:function(t){var n=this,r=n._map._getHash(t.value),i=n._entries,s=i[r];delete i[r],s.before&&(s.before.after=s.after),s.after&&(s.after.before=s.before),t.hash=r,e.LinkedSet.superclass._defRemoveFn.apply(this,arguments)},values:function(){var e=this,t=e._header.after,n=[];while(t)n.unshift(t.value),t=t.after;return n}},{});e.LinkedSet=n},"3.0.3-deprecated.56",{requires:["aui-set"]});
