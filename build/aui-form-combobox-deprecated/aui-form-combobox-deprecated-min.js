YUI.add("aui-form-combobox-deprecated",function(e,t){var n=e.Lang,r=e.getClassName,i="arrow",s="circle",o="down",u="icon",t="combobox",a=r(t),f=r(u,s,i,o),l=e.Component.create({NAME:t,ATTRS:{field:{},fieldWidget:{value:e.Textfield},node:{getter:function(){var e=this;if(e._field)return e._field.get("node")}},icons:{value:[f],validator:n.isArray}},prototype:{renderUI:function(){var e=this;l.superclass.renderUI.call(e),e._renderField(),e._renderIcons()},_renderField:function(){var e=this,t=e.get("contentBox"),n=e.get("field"),r=e.get("fieldWidget");e._field=(new r(n)).render(),t.appendChild(e._field.get("boundingBox"))},_renderIcons:function(){var t=this,n=t.get("icons");if(n.length){var r=(new e.Toolbar({children:[n]})).render(t.get("contentBox"));t.icons=r}}}});e.Combobox=l},"3.0.3-deprecated.56",{requires:["aui-form-textarea-deprecated","aui-toolbar"],skinnable:!0});
