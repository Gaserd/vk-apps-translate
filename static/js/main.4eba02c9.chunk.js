(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/banner2.b6212216.png"},113:function(e,t,a){e.exports=a.p+"static/media/papich.d336c70e.png"},114:function(e,t,a){"use strict";a.r(t);a(64),a(89);var n=a(0),r=a.n(n),l=a(33),o=a.n(l),i=a(10),c=a.n(i),s=a(56),u=a(57),d=a(58),p=a(61),m=a(59),h=a(62),f=a(5),g=(a(111),a(60)),v=a.n(g),x=[{value:"en",text:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439"},{value:"ru",text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{value:"ar",text:"\u0410\u0440\u0430\u0431\u0441\u043a\u0438\u0439"},{value:"es",text:"\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439"},{value:"zh",text:"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439"},{value:"de",text:"\u041d\u0435\u043c\u0435\u0446\u043a\u0438\u0439"},{value:"tr",text:"\u0422\u0443\u0440\u0435\u0446\u043a\u0438\u0439"},{value:"uk",text:"\u0423\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0438\u0439"},{value:"fr",text:"\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439"}];var b=a(19);a(112),a(113);var y={externalLink:{display:"block",textAlign:"center",backgroundColor:"var(--header_background)",marginTop:"-1px",padding:10,color:"#fff",textDecoration:"none"},banner:{width:320,height:100},selectWrapper:{textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},select:{flexGrow:2,width:"45%"},reverseButton:{display:"inline-block",margin:"0 5px",color:"var(--button_primary_background)"}},k=function(){return"client_light"===window.document.body.getAttribute("scheme")?"#4a4a4a":"#fff"},E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={activePanel:"home",text:"",translateText:"",langFrom:"en",langTo:"ru",error:!1,matches:[],fetchedUser:null},a.onChangeText=function(e){var t=e.target.value;a.setState({text:t})},a.onClickTranslateButton=function(){var e=a.state.text.trim();if(b.a.event({category:"Translate",action:"onClickTranslateButton",value:JSON.stringify(a.state)}),""!==e){var t=a.state,n=t.langTo,r=t.langFrom;fetch("https://api.mymemory.translated.net/get?q=".concat(e,"&langpair=").concat(r,"|").concat(n)).then(function(e){return e.json()}).then(function(e){"undefined"!==typeof e.responseData&&a.setState({translateText:e.responseData.translatedText,matches:e.matches})}).catch(function(e){a.setState({translateText:"",error:!0})})}else a.setState({translateText:""})},a.onReverseLanguage=function(){b.a.event({category:"Translate",action:"onReverseLanguage"}),a.setState({langFrom:a.state.langTo,langTo:a.state.langFrom})},a.renderSelect=function(e){return r.a.createElement(f.Select,{style:y.select,value:a.state[e],onChange:function(t){return a.setState(Object(s.a)({},e,t.target.value))}},x.map(function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.text)}))},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":b.a.initialize("UA-83599084-6",{gaOptions:{userId:t.detail.data.id}}),e.setState({fetchedUser:t.detail.data});break;case"VKWebAppGetUserInfoFailed":b.a.initialize("UA-83599084-6");break;case"VKWebAppGetAdsResult":case"VKWebAppGetAdsFailed":console.log(t.detail);break;case"VKWebAppUpdateConfig":"undefined"!==typeof t.detail.data.scheme&&window.document.body.setAttribute("scheme",t.detail.data.scheme);break;default:console.log(t.detail.type)}}),c.a.send("VKWebAppGetUserInfo",{}),c.a.send("VKWebAppUpdateConfig",{}),c.a.send("VKWebAppGetAds",{});var t=function(){var e=window.location.hash.substring(1);return""===e?null:e.split("&").reduce(function(e,t,a,n){var r=t.split("=");return e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]),e},{})}();if(null!==t&&"undefined"!==typeof t.text){var a=t.text;this.setState({text:a})}}},{key:"render",value:function(){var e=this;return r.a.createElement(f.View,{activePanel:this.state.activePanel},r.a.createElement(f.Panel,{id:"home",theme:"white"},r.a.createElement(f.PanelHeader,null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a"),r.a.createElement(f.Div,{style:y.selectWrapper},this.renderSelect("langFrom"),r.a.createElement("div",{onClick:function(){return e.onReverseLanguage()},style:y.reverseButton},r.a.createElement(v.a,null)),this.renderSelect("langTo")),r.a.createElement(f.FormLayout,null,r.a.createElement(f.Textarea,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 (\u043c\u0430\u043a\u0441: 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432)",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438",value:this.state.text,onChange:this.onChangeText,maxLength:300}),r.a.createElement(f.Button,{size:"xl",onClick:function(){return e.onClickTranslateButton()}},"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438"),""!==this.state.translateText&&r.a.createElement("div",null,r.a.createElement(f.Div,{style:{color:k()}},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434:",r.a.createElement("p",null,this.state.translateText))),this.state.matches.length>0&&r.a.createElement("div",null,r.a.createElement(f.Div,{style:{color:k(),marginTop:5}},r.a.createElement("b",null,"\u0415\u0449\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430:"),this.state.matches.map(function(e,t){return r.a.createElement("p",{key:t},e.translation)}))),this.state.error&&r.a.createElement(f.Div,{style:{color:k()}},r.a.createElement("p",null,"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043d\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 2-3 \u043c\u0438\u043d\u0443\u0442\u044b.")))))}}]),t}(r.a.Component);c.a.send("VKWebAppInit",{}),o.a.render(r.a.createElement(E,null),document.getElementById("root"))},63:function(e,t,a){e.exports=a(114)}},[[63,1,2]]]);
//# sourceMappingURL=main.4eba02c9.chunk.js.map