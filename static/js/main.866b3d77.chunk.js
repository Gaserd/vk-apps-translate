(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),l=a.n(n),r=a(33),o=a.n(r),c=a(16),i=a.n(c),u=a(56),s=a(57),d=a(60),g=a(58),m=a(61),v=a(5),f=(a(110),a(59)),h=a.n(f),p=[{value:"en",text:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439"},{value:"ru",text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{value:"ar",text:"\u0410\u0440\u0430\u0431\u0441\u043a\u0438\u0439"},{value:"es",text:"\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439"},{value:"kk",text:"\u041a\u0430\u0437\u0430\u0445\u0441\u043a\u0438\u0439"},{value:"zh",text:"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439"},{value:"ko",text:"\u041a\u043e\u0440\u0435\u0439\u0441\u043a\u0438\u0439"},{value:"de",text:"\u041d\u0435\u043c\u0435\u0446\u043a\u0438\u0439"},{value:"pl",text:"\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439"},{value:"pt",text:"\u041f\u043e\u0440\u0442\u0443\u0433\u0430\u043b\u044c\u0441\u043a\u0438\u0439"},{value:"tr",text:"\u0422\u0443\u0440\u0435\u0446\u043a\u0438\u0439"},{value:"uk",text:"\u0423\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0438\u0439"},{value:"fr",text:"\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439"},{value:"hi",text:"\u0425\u0438\u043d\u0434\u0438"}];var x=a(19),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).onChangeText=function(e){var t=e.target.value;a.setState({text:t})},a.onClickTranslateButton=function(){var e=a.state.text.trim();if(x.a.event({category:"Translate",action:"onClickTranslateButton",value:JSON.stringify(a.state)}),""!==e){var t=a.state,n=t.accountId,l=t.apiKey,r=t.langTo;fetch("https://api.multillect.com/translate/json/1.0/".concat(n,"?method=translate/api/translate&to=").concat(r,"&text=").concat(e,"&sig=").concat(l)).then(function(e){return e.json()}).then(function(e){if("undefined"!==typeof e.result.language&&null!==e.result.language.code){var t=e.result.language.code;a.state.langFrom!==t&&function(e){for(var t=!1,a=0;a<p.length;a++)if(p[a].value===e){t=!0;break}return t}(t)&&a.setState({langFrom:t})}a.setState({translateText:e.result.translated})}).catch(function(e){a.setState({translateText:"",error:!0})})}else a.setState({translateText:""})},a.onReverseLanguage=function(){x.a.event({category:"Translate",action:"onReverseLanguage"}),a.setState({langFrom:a.state.langTo,langTo:a.state.langFrom})},a.state={activePanel:"home",accountId:"1086",apiKey:"5ad374573f56fbca9889cd71b0536db3",text:"",translateText:"",langFrom:"en",langTo:"ru",error:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppUpdateConfig":"undefined"!==typeof t.detail.data.scheme&&window.document.body.setAttribute("scheme",t.detail.data.scheme);break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{}),i.a.send("VKWebAppUpdateConfig",{})}},{key:"render",value:function(){var e=this;return l.a.createElement(v.View,{activePanel:this.state.activePanel},l.a.createElement(v.Panel,{id:"home",theme:"white"},l.a.createElement(v.PanelHeader,null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a"),l.a.createElement(v.Div,{style:{textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},l.a.createElement(v.Select,{style:{flexGrow:2,width:"45%"},value:this.state.langFrom,onChange:function(t){return e.setState({langFrom:t.target.value})}},p.map(function(e,t){return l.a.createElement("option",{key:t,value:e.value},e.text)})),l.a.createElement("div",{onClick:function(){return e.onReverseLanguage()},style:{display:"inline-block",margin:"0 5px",color:"var(--button_primary_background)"}},l.a.createElement(h.a,null)),l.a.createElement(v.Select,{style:{flexGrow:2,width:"45%"},value:this.state.langTo,onChange:function(t){return e.setState({langTo:t.target.value})}},p.map(function(e,t){return l.a.createElement("option",{key:t,value:e.value},e.text)}))),l.a.createElement(v.FormLayout,null,l.a.createElement(v.Textarea,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 (\u043c\u0430\u043a\u0441: 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432)",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438",value:this.state.text,onChange:this.onChangeText,maxLength:300}),l.a.createElement(v.Button,{size:"xl",onClick:function(){return e.onClickTranslateButton()}},"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438"),""!==this.state.translateText&&l.a.createElement(v.Div,{style:{color:"client_light"===window.document.body.getAttribute("scheme")?"#4a4a4a":"#fff"}},l.a.createElement("p",null,this.state.translateText)),this.state.error&&l.a.createElement(v.Div,{style:{color:"client_light"===window.document.body.getAttribute("scheme")?"#4a4a4a":"#fff"}},l.a.createElement("p",null,"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043d\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 2-3 \u043c\u0438\u043d\u0443\u0442\u044b.")))))}}]),t}(l.a.Component);x.a.initialize("UA-83599084-6"),i.a.send("VKWebAppInit",{}),o.a.render(l.a.createElement(b,null),document.getElementById("root"))},62:function(e,t,a){e.exports=a(111)}},[[62,1,2]]]);
//# sourceMappingURL=main.866b3d77.chunk.js.map