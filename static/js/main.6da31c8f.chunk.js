(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{143:function(e,t,n){},445:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),c=n(23),s=n.n(c),i=(n(143),n(138)),r=n(4),u=n(5),l=o.a.createContext(),p=n.p+"static/media/logo-mesto.bbe2a6ea.svg",d=(n.p,n.p,n(16)),h=n(1);function _(e){return Object(h.jsxs)("div",{className:"header__items ".concat(e.isOpen),children:[Object(h.jsx)("p",{className:"header__text",children:e.mail}),Object(h.jsx)(d.b,{className:"header__link header__link_type_main-page",onClick:e.signOut,to:"/sign-in",children:"\u0412\u044b\u0439\u0442\u0438"})]})}var j=function(e){var t=e.signOut,n=e.userEmail,a=e.handleMobileMenu,o=e.isOpen;return Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"/sign-in",children:Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto",className:"header__logo"}),Object(h.jsx)(d.b,{className:"header__link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})}),Object(h.jsx)(u.b,{path:"/sign-up",children:Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto",className:"header__logo"}),Object(h.jsx)(d.b,{className:"header__link",to:"/sign-in",children:"\u0412\u0445\u043e\u0434"})]})}),Object(h.jsxs)(u.b,{path:"/react-mesto-auth",children:[o&&Object(h.jsx)(_,{mail:n,signOut:t,isOpen:o}),Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto",className:"header__logo"}),Object(h.jsx)("div",{className:o?"header__close-button ":"header__menu-mobile",onClick:a}),Object(h.jsx)(_,{mail:n,signOut:t})]})]})]})};n(149);var m=function(e){var t=o.a.useContext(l),n=e.likes.some((function(e){return e._id===t._id})),a="element__button ".concat(n?"element__button_active":" "),c=e.owner._id===t._id,s="element__delete-button ".concat(c?"element__delete-button_type_visible":"element__delete-button_type_hidden");return Object(h.jsxs)("li",{className:"element",children:[Object(h.jsx)("button",{type:"button",className:s,onClick:function(){e.onCardDelete(e)}}),Object(h.jsx)("img",{className:"element__photo",src:e.link,alt:e.title,onClick:function(){e.onCardClick(e)}}),Object(h.jsxs)("div",{className:"element__description",children:[Object(h.jsx)("h2",{className:"element__title",children:e.title}),Object(h.jsx)("button",{type:"button",className:a,onClick:function(){e.onCardLike(e)}}),Object(h.jsx)("span",{className:"element__count-like",children:e.likes.length})]})]})};var b=function(e){var t=o.a.useContext(l);return Object(h.jsxs)("main",{children:[Object(h.jsxs)("section",{className:"profile",children:[Object(h.jsx)("div",{className:"profile__items",children:Object(h.jsx)("div",{className:"profile__avatar-overlay",children:Object(h.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar",onClick:e.onEditAvatar})})}),Object(h.jsxs)("div",{className:"profile__info",children:[Object(h.jsx)("h1",{className:"profile__title",children:t.name}),Object(h.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile}),Object(h.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(h.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(h.jsx)("section",{className:"elements",children:Object(h.jsx)("ul",{className:"elements__grid",children:e.cards.map((function(t){return Object(h.jsx)(m,{id:t._id,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,link:t.link,title:t.name,likes:t.likes,owner:t.owner},t._id)}))})})]})};var f=function(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var O=function(e){return Object(h.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen),onClick:function(t){t.target.classList.contains(e.isOpen)&&e.onClose()},children:Object(h.jsxs)("form",{className:"popup__items popup__items_".concat(e.name),name:e.name,onSubmit:e.onSubmit,children:[Object(h.jsx)("button",{className:"popup__close-button popup__close-button_type_".concat(e.name),onClick:e.onClose,type:"button"}),Object(h.jsx)("h3",{className:"popup__title popup__title_type_".concat(e.name),children:e.title}),e.children]})})};var v=function(e){return Object(h.jsx)("div",{className:"popup popup_type_open-photo ".concat(e.isOpen),onClick:function(t){t.target.classList.contains(e.isOpen)&&e.onClose()},children:Object(h.jsxs)("div",{className:"popup__items popup__items_type_open-photo",name:"openPhotoForm",children:[Object(h.jsx)("button",{className:"popup__close-button popup__close-button_type_open-photo",type:"button",onClick:e.onClose}),Object(h.jsx)("img",{className:"popup__big-photo",src:e.card.link,alt:"#"}),Object(h.jsx)("p",{className:"popup__description",children:e.card.title})]})})},x=n(136),g=n(137),C=new(function(){function e(t){var n=t.address,a=t.token,o=t.cohortId;Object(x.a)(this,e),this._address=n,this._token=a,this._cohort=o}return Object(g.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._getResponse(t)}))}},{key:"getInitialCard",value:function(){var e=this;return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._getResponse(t)}))}},{key:"editUserData",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:n,about:a})}).then((function(e){return t._getResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:n,link:a})}).then((function(e){return t._getResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._getResponse(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this._address,"/v1/").concat(this._cohort,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return n._getResponse(e)})):fetch("".concat(this._address,"/v1/").concat(this._cohort,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return n._getResponse(e)}))}},{key:"changeAvatar",value:function(e){var t=this,n=e.avatar;return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:n})}).then((function(e){return t._getResponse(e)}))}}]),e}())({address:"https://mesto.nomoreparties.co",token:"78cfcf12-b1ee-4c9f-922c-0fac77943b1b",cohortId:"cohort-19"});var N=function(e){var t=e.onClose,n=e.isOpen,a=e.onUpdateUser,c=o.a.useState(""),s=Object(r.a)(c,2),i=s[0],u=s[1],p=o.a.useState(""),d=Object(r.a)(p,2),_=d[0],j=d[1],m=o.a.useContext(l);return o.a.useEffect((function(){u(m.name),j(m.about)}),[m]),Object(h.jsx)(O,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClose:t,isOpen:n&&"popup_opened",onSubmit:function(e){e.preventDefault(),a({name:i,about:_})},children:Object(h.jsxs)("fieldset",{className:"popup__item popup__item_type_edit-popup",children:[Object(h.jsx)("input",{id:"firstname",className:"popup__text popup__text_type_name",type:"text",name:"firstname",value:i||"",onChange:function(e){u(e.target.value)},required:!0,minLength:"2",maxLength:"40"}),Object(h.jsx)("span",{id:"firstname-error",className:"popup__error"}),Object(h.jsx)("input",{id:"job",className:"popup__text popup__text_type_job",name:"job",type:"text",value:_||"",onChange:function(e){j(e.target.value)},required:!0,minLength:"2",maxLength:"200"}),Object(h.jsx)("span",{id:"job-error",className:"popup__error"}),Object(h.jsx)("button",{className:"popup__submit-button popup__submit-button_type_edit-profile",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var y=function(e){var t=e.onClose,n=e.isOpen,a=e.onUpdateAvatar,c=o.a.useRef();return o.a.useEffect((function(){n||(c.current.value="")}),[n]),Object(h.jsx)(O,{name:"avatar",isOpen:n&&"popup_opened",onClose:t,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onSubmit:function(e){e.preventDefault(),a({avatar:c.current.value})},children:Object(h.jsxs)("fieldset",{className:"popup__item popup__item_type_avatar",children:[Object(h.jsx)("input",{ref:c,id:"urlAvatar",className:"popup__text popup__text_type_avatar",type:"url",name:"urlAvatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(h.jsx)("span",{id:"urlAvatar-error",className:"popup__error"}),Object(h.jsx)("button",{className:"popup__submit-button popup__submit-button_type_avatar",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,c=o.a.useState(""),s=Object(r.a)(c,2),i=s[0],u=s[1],l=o.a.useState(""),p=Object(r.a)(l,2),d=p[0],_=p[1];return o.a.useEffect((function(){t||(u(""),_(""))}),[t]),Object(h.jsx)(O,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t&&"popup_opened",onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,link:d})},children:Object(h.jsxs)("fieldset",{className:"popup__item popup__item_type_add-card",children:[Object(h.jsx)("input",{id:"titleCard",className:"popup__text popup__text_type_title-card",type:"text",name:"titleCard",value:i,onChange:function(e){u(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30"}),Object(h.jsx)("span",{id:"titleCard-error",className:"popup__error"}),Object(h.jsx)("input",{id:"urlCard",className:"popup__text popup__text_type_url-card",type:"url",name:"urlCard",onChange:function(e){_(e.target.value)},value:d,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(h.jsx)("span",{id:"urlCard-error",className:"popup__error"}),Object(h.jsx)("button",{className:"popup__submit-button popup__submit-button_type_add-form",type:"submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})},w=n(38),S=n(29);function E(e){var t=e.data,n=e.onChange,a=e.onSubmit,o=e.title,c=e.children;return Object(h.jsx)("div",{className:"auth-form",children:Object(h.jsxs)("form",{className:"auth-form__items",onSubmit:a,children:[Object(h.jsx)("h3",{className:"auth-form__title",children:o}),Object(h.jsx)("input",{id:"email",onChange:n,className:"auth-form__input",type:"email",name:"email",value:t.email,placeholder:"Email"}),Object(h.jsx)("input",{id:"password",onChange:n,className:"auth-form__input",value:t.password,name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),c]})})}function L(e){var t=e.signIn,n=Object(u.g)(),a=o.a.useState({email:"",password:""}),c=Object(r.a)(a,2),s=c[0],i=c[1];return Object(h.jsx)(E,{onChange:function(e){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(w.a)({},n,a))}))},onSubmit:function(e){e.preventDefault(),s.email&&s.password&&t(s).then((function(){i({email:"",password:""})})).then((function(){return n.push("/")}))},title:"\u0412\u0445\u043e\u0434",data:s,children:Object(h.jsx)("button",{className:"auth-form__submit-button auth-form__submit-button_type_login",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})})}var T=n.p+"static/media/fail-register.df8eddf6.svg",P=n.p+"static/media/success-register.1b6082f8.svg";function A(e){var t=e.handleSignUp,n=e.handleInfoToolTip,a=o.a.useState({email:"",password:""}),c=Object(r.a)(a,2),s=c[0],i=c[1],l=Object(u.g)();return Object(h.jsxs)(E,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onChange:function(e){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(w.a)({},n,a))}))},onSubmit:function(e){e.preventDefault(),s.email&&s.password&&t(s).then((function(e){"undefined"!=typeof e?(n({title:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",icon:P}),i({email:"",password:""}),l.push("/sign-in")):n({title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",icon:T})}))},data:s,children:[Object(h.jsx)("button",{className:"auth-form__submit-button auth-form__submit-button_type_register",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(h.jsxs)("p",{className:"auth-form__redirect",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(h.jsx)(d.b,{className:"auth-form__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}var D=n(139);var I=function(e){var t=e.component,n=Object(D.a)(e,["component"]);return Object(h.jsx)(u.b,{children:function(){return n.loggedIn?Object(h.jsx)(t,Object(S.a)({},n)):Object(h.jsx)(u.a,{to:"/sign-in"})}})};var U=function(e){return Object(h.jsx)("div",{className:"popup ".concat(e.isOpen),onClick:function(t){t.target.classList.contains(e.isOpen)&&e.onClose()},children:Object(h.jsxs)("div",{className:"popup__items popup__items_type_info-tool-tip",children:[Object(h.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(h.jsx)("img",{className:"popup-icon",src:e.data.icon,alt:"#"}),Object(h.jsx)("p",{className:"popup__title popup__title_type_info-tool-tip",children:e.data.title})]})})},z="https://auth.nomoreparties.co",R=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))};var M=function(){var e=Object(u.g)(),t=o.a.useState({}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=o.a.useState(!1),p=Object(r.a)(s,2),d=p[0],_=p[1],m=o.a.useState(!1),x=Object(r.a)(m,2),g=x[0],w=x[1],S=o.a.useState(!1),E=Object(r.a)(S,2),T=E[0],P=E[1],D=o.a.useState(!1),M=Object(r.a)(D,2),J=M[0],q=M[1],F=o.a.useState({}),B=Object(r.a)(F,2),H=B[0],W=B[1],G=o.a.useState([]),K=Object(r.a)(G,2),Q=K[0],V=K[1],X=o.a.useState(!1),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=o.a.useState(!1),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],oe=o.a.useState({title:"",icon:""}),ce=Object(r.a)(oe,2),se=ce[0],ie=ce[1],re=o.a.useState(""),ue=Object(r.a)(re,2),le=ue[0],pe=ue[1];o.a.useEffect((function(){var e=function(e){"Escape"===e.key&&de()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[d,g,T,J,ne]),o.a.useEffect((function(){C.getUserData().then((function(e){return c(e)})).catch((function(e){return"\u043e\u0448\u0438\u0431\u043a\u0430 ".concat(e," \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}),[]);var de=function(){_(!1),w(!1),P(!1),q(!1),ae(!1)};o.a.useEffect((function(){C.getInitialCard().then((function(e){return V(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e," \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"))}))}),[]),o.a.useEffect((function(){!function(){var t=localStorage.getItem("jwt");t&&function(e){var t=e.jwt;return fetch("".concat(z,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(R).then((function(e){return e}))}({jwt:t}).then((function(t){t&&(pe(t.data.email),$(!0),e.push("/"))})).catch((function(){return e.push("/sign-in")}))}()}),[]);var he=o.a.useState(!1),_e=Object(r.a)(he,2),je=_e[0],me=_e[1],be=o.a.useState({width:0}),fe=Object(r.a)(be,2),Oe=fe[0],ve=fe[1];function xe(){ve({width:window.innerWidth}),Oe.width>767&&me(!1)}return o.a.useEffect((function(){return window.addEventListener("resize",xe),function(){return window.removeEventListener("resize",xe)}})),Object(h.jsx)("div",{className:"page",children:Object(h.jsx)("div",{className:"page__container",children:Object(h.jsxs)(l.Provider,{value:a,children:[Object(h.jsx)(j,{isOpen:je&&"header__items_opened",handleMobileMenu:function(){me(!je)},signOut:function(){localStorage.removeItem("jwt"),pe(""),$(!1),me(!1)},userEmail:le,widthWindow:Oe}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"/sign-in",children:Object(h.jsx)(L,{signIn:function(e){var t=e.password,n=e.email;return function(e){var t=e.password,n=e.email;return fetch("".concat(z,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(R).then((function(e){return e}))}({password:t,email:n}).then((function(e){e.token&&(pe(n),$(!0),localStorage.setItem("jwt",e.token))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e," \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"))}))}})}),Object(h.jsx)(u.b,{path:"/sign-up",children:Object(h.jsx)(A,{handleInfoToolTip:function(e){var t=e.title,n=e.icon;ie({title:t,icon:n}),ae(!0)},handleSignUp:function(e){return function(e){var t=e.password,n=e.email;return fetch("".concat(z,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(R).then((function(e){return e}))}({password:e.password,email:e.email}).then((function(e){if(!e||400===e.statusCode)throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");return e})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e," \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"))}))}})}),Object(h.jsx)(I,{path:"/react-mesto-auth",loggedIn:Z,component:b,onEditAvatar:function(){P(!0)},onEditProfile:function(){_(!0)},onAddPlace:function(){w(!0)},onCardClick:function(e){q(!0),W(e)},cards:Q,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));C.changeLikeCardStatus(e.id,!t).then((function(t){var n=Q.map((function(n){return n._id===e.id?t:n}));V(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e," \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043b\u0430\u0439\u043a\u0430"))}))},onCardDelete:function(e){C.deleteCard(e.id).then((function(){var t=Q.filter((function(t){return t._id!==e.id}));V(t)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e," \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"))}))}}),Object(h.jsx)(u.b,{path:"/",children:Z?Object(h.jsx)(u.a,{to:"/react-mesto-auth"}):Object(h.jsx)(u.a,{to:"/sign-in"})})]}),Object(h.jsx)(f,{}),Object(h.jsx)(U,{isOpen:ne&&"popup_opened",onClose:de,data:se}),Object(h.jsx)(v,{isOpen:J&&"popup_opened",onClose:de,card:H}),Object(h.jsx)(N,{isOpen:d,onClose:de,onUpdateUser:function(e){var t=e.name,n=e.about;C.editUserData({name:t,about:n}).then((function(e){c(e),de()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e," \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"))}))}}),Object(h.jsx)(k,{isOpen:g,onClose:de,onAddPlace:function(e){var t=e.name,n=e.link;C.addNewCard({name:t,link:n}).then((function(e){V([e].concat(Object(i.a)(Q))),de()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e," \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"))}))}}),Object(h.jsx)(y,{isOpen:T,onClose:de,onUpdateAvatar:function(e){var t=e.avatar;C.changeAvatar({avatar:t}).then((function(e){c(e),de()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e," \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430"))}))}}),Object(h.jsx)(O,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",children:Object(h.jsx)("div",{className:"popup__item",children:Object(h.jsx)("button",{className:"popup__submit-button",type:"submit",children:"\u0414\u0430"})})})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,446)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(d.a,{children:Object(h.jsx)(M,{})})}),document.getElementById("root")),J()}},[[445,1,2]]]);
//# sourceMappingURL=main.6da31c8f.chunk.js.map