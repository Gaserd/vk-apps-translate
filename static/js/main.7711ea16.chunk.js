(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);a(65),a(90);var n=a(0),r=a.n(n),l=a(33),o=a.n(l),i=a(16),c=a.n(i),s=a(56),u=a(57),d=a(58),p=a(62),f=a(59),g=a(63),m=a(6),v=(a(112),a(60)),h=a.n(v),x=[{value:"en",text:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439"},{value:"ru",text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{value:"ar",text:"\u0410\u0440\u0430\u0431\u0441\u043a\u0438\u0439"},{value:"es",text:"\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439"},{value:"zh",text:"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439"},{value:"de",text:"\u041d\u0435\u043c\u0435\u0446\u043a\u0438\u0439"},{value:"tr",text:"\u0422\u0443\u0440\u0435\u0446\u043a\u0438\u0439"},{value:"uk",text:"\u0423\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0438\u0439"},{value:"fr",text:"\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439"}];var b=a(19),y=a(61),k=a.n(y);var w="5ad374573f56fbca9889cd71b0536db3",E="1086",T={externalLink:{display:"block",textAlign:"center",backgroundColor:"#3075f3",marginTop:"-1px"},banner:{width:320,height:100},selectWrapper:{textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},select:{flexGrow:2,width:"45%"},reverseButton:{display:"inline-block",margin:"0 5px",color:"var(--button_primary_background)"}},C=function(){return"client_light"===window.document.body.getAttribute("scheme")?"#4a4a4a":"#fff"},S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={activePanel:"home",text:"",translateText:"",langFrom:"en",langTo:"ru",error:!1,fetchedUser:null},a.onChangeText=function(e){var t=e.target.value;a.setState({text:t})},a.onClickTranslateButton=function(){var e=a.state.text.trim();if(b.a.event({category:"Translate",action:"onClickTranslateButton",value:JSON.stringify(a.state)}),""!==e){var t=a.state.langTo;fetch("https://api.multillect.com/translate/json/1.0/".concat(E,"?method=translate/api/translate&to=").concat(t,"&text=").concat(e,"&sig=").concat(w)).then(function(e){return e.json()}).then(function(e){if("undefined"!==typeof e.result.language&&null!==e.result.language.code){var t=e.result.language.code;a.state.langFrom!==t&&(n=t,x.some(function(e){return e.value===n})&&a.setState({langFrom:t}))}var n;a.setState({translateText:e.result.translated})}).catch(function(e){a.setState({translateText:"",error:!0})})}else a.setState({translateText:""})},a.onReverseLanguage=function(){b.a.event({category:"Translate",action:"onReverseLanguage"}),a.setState({langFrom:a.state.langTo,langTo:a.state.langFrom})},a.renderSelect=function(e){return r.a.createElement(m.Select,{style:T.select,value:a.state[e],onChange:function(t){return a.setState(Object(s.a)({},e,t.target.value))}},x.map(function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.text)}))},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":b.a.initialize("UA-83599084-6",{gaOptions:{userId:t.detail.data.id}}),e.setState({fetchedUser:t.detail.data});break;case"VKWebAppGetUserInfoFailed":b.a.initialize("UA-83599084-6");break;case"VKWebAppUpdateConfig":"undefined"!==typeof t.detail.data.scheme&&window.document.body.setAttribute("scheme",t.detail.data.scheme);break;default:console.log(t.detail.type)}}),c.a.send("VKWebAppGetUserInfo",{}),c.a.send("VKWebAppUpdateConfig",{});var t=function(){var e=window.location.hash.substring(1);return""===e?null:e.split("&").reduce(function(e,t,a,n){var r=t.split("=");return e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]),e},{})}();if(null!==t&&"undefined"!==typeof t.text){var a=t.text;this.setState({text:a})}}},{key:"render",value:function(){var e=this;return r.a.createElement(m.View,{activePanel:this.state.activePanel},r.a.createElement(m.Panel,{id:"home",theme:"white"},r.a.createElement(m.PanelHeader,null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a"),r.a.createElement("a",{style:T.externalLink,href:"https://skyeng.ru/go/translate_vk",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{style:T.banner,src:k.a,alt:""})),r.a.createElement(m.Div,{style:T.selectWrapper},this.renderSelect("langFrom"),r.a.createElement("div",{onClick:function(){return e.onReverseLanguage()},style:T.reverseButton},r.a.createElement(h.a,null)),this.renderSelect("langTo")),r.a.createElement(m.FormLayout,null,r.a.createElement(m.Textarea,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 (\u043c\u0430\u043a\u0441: 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432)",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438",value:this.state.text,onChange:this.onChangeText,maxLength:300}),r.a.createElement(m.Button,{size:"xl",onClick:function(){return e.onClickTranslateButton()}},"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438"),""!==this.state.translateText&&r.a.createElement("div",null,r.a.createElement(m.Div,{style:{color:C()}},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434:",r.a.createElement("p",null,this.state.translateText))),this.state.error&&r.a.createElement(m.Div,{style:{color:C()}},r.a.createElement("p",null,"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043d\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 2-3 \u043c\u0438\u043d\u0443\u0442\u044b.")))))}}]),t}(r.a.Component);c.a.send("VKWebAppInit",{}),o.a.render(r.a.createElement(S,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a.p+"static/media/banner.43a50add.png"},64:function(e,t,a){e.exports=a(113)}},[[64,1,2]]]);
//# sourceMappingURL=main.7711ea16.chunk.js.map