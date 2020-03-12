(this["webpackJsonpgoit-react-hw-05-phonebook-ctx"]=this["webpackJsonpgoit-react-hw-05-phonebook-ctx"]||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n.n(o),u=n(18),i=n(8),l=n(3),m=n(4),s=n(6),h=n(5),f=n(7),d=n(13),p=n(1),b=n(2),g={light:{fontColor:"black",bodybg:"#fff"},dark:{fontColor:"white",bodybg:"#333333"}},v=a.a.createContext(),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).toggleTheme=function(){n.setState((function(e){return{type:"dark"===e.type?"light":"dark"}}))},n.state={type:"light",toggleTheme:n.toggleTheme,config:g},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement(v.Provider,{value:this.state},this.props.children)}}]),t}(r.Component);y.Consumer=v.Consumer;var C=function(e){return function(t){return a.a.createElement(y.Consumer,null,(function(n){return a.a.createElement(e,Object.assign({},t,{theme:n}))}))}};function x(){var e=Object(p.a)(["\nmax-width: 30%;\nborder-radius: 5px;\ncolor: ",";\nbackground-color: ",";\n"]);return x=function(){return e},e}function O(){var e=Object(p.a)(["\nmax-width: 40%;\nmargin-top: 10px;\nmargin-bottom: 30px;\ncolor: ",";\nbackground-color: ",";\n"]);return O=function(){return e},e}function j(){var e=Object(p.a)(["\nmax-width: 40%;\nfont-size: 20px;\ncolor: ","\n"]);return j=function(){return e},e}function E(){var e=Object(p.a)(["\nborder: 2px solid ",";\nmax-width: 400px;\npadding: 10px;\ndisplay: flex;\nflex-direction: column;\nbackground-color: ",";\n"]);return E=function(){return e},e}var k=b.a.form(E(),(function(e){return e.themeProps.fontColor}),(function(e){return e.themeProps.bodybg})),P=b.a.label(j(),(function(e){return e.themeProps.fontColor})),w=b.a.input(O(),(function(e){return e.themeProps.fontColor}),(function(e){return e.themeProps.bodybg})),S=b.a.button(x(),(function(e){return e.themeProps.fontColor}),(function(e){return e.themeProps.bodybg})),D=C(function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={name:"",number:""},n.handleChange=function(e){var t=e.target,r=t.name,a=t.value;n.setState(Object(i.a)({},r,a))},n.handleSubmit=function(e){e.preventDefault(),n.props.onAddContact(n.state.name,n.state.number),n.setState({name:"",number:""})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.theme.config[this.props.theme.type];return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{themeProps:e,onSubmit:this.handleSubmit},a.a.createElement(P,{themeProps:e,htmlFor:"name"},"Name"),a.a.createElement(w,{themeProps:e,type:"text",name:"name",id:"name",value:this.state.name,autoComplete:"off",onChange:this.handleChange}),a.a.createElement(P,{themeProps:e,htmlFor:"number"},"Number"),a.a.createElement(w,{themeProps:e,type:"tel",name:"number",id:"number",value:this.state.number,autoComplete:"off",onChange:this.handleChange}),a.a.createElement(S,{themeProps:e,type:"submit"},"Add contact")))}}]),t}(r.Component));function A(){var e=Object(p.a)(["\ndisplay: flex;\nmargin-bottom: 10px;\n"]);return A=function(){return e},e}function F(){var e=Object(p.a)(["\nmax-width: 50%;\nborder-radius: 5px;\ncolor: ",";\nbackground-color: ",";\n"]);return F=function(){return e},e}function T(){var e=Object(p.a)(["\nmargin-right: 30px;\nmin-width: 50%;\n\n"]);return T=function(){return e},e}var J=b.a.li(T()),L=b.a.button(F(),(function(e){return e.themeProps.fontColor}),(function(e){return e.themeProps.bodybg})),N=b.a.div(A());var I=C((function(e){var t=e.handleDelete,n=e.contact,r=n.id,o=n.name,c=n.number,u=e.theme;return a.a.createElement(N,null,a.a.createElement(J,{key:r},o,": ",c," "),a.a.createElement(L,{themeProps:u.config[u.type],onClick:function(){return t(r)}},"Delete"))}));function B(){var e=Object(p.a)(["\nmax-width: 400px;\ndisplay: flex;\nflex-direction: column;\n"]);return B=function(){return e},e}var z=b.a.ul(B());var M=C((function(e){var t=e.contacts,n=e.handleDelete;return a.a.createElement(z,null,t.map((function(e){return a.a.createElement(I,{key:e.id,contact:e,handleDelete:n})})))}));function U(){var e=Object(p.a)(["\nmax-width: 40%;\nmargin-top: 10px;\nmargin-bottom: 30px;\ncolor: ",";\nbackground-color: ",";\n"]);return U=function(){return e},e}var q=b.a.input(U(),(function(e){return e.themeProps.fontColor}),(function(e){return e.themeProps.bodybg}));var G=C((function(e){var t=e.handleChange,n=e.theme;return a.a.createElement(q,{themeProps:n.config[n.type],type:"text",onChange:t,name:"filter",autoComplete:"off"})})),H=(n(27),n(17)),K=n.n(H);function Q(){var e=Object(p.a)(["\nmargin: 10px;\n"]);return Q=function(){return e},e}var R=b.a.span(Q());var V=C((function(e){return a.a.createElement("label",null,a.a.createElement(R,null,e.theme.type),a.a.createElement(K.a,{type:"checkbox",checked:"dark"===e.theme.type,onChange:function(){return e.theme.toggleTheme()}}))}));function W(){var e=Object(p.a)(["\nmargin: 0;\npadding: 10px;\ncolor: ",";\nbackground-color: ",";\n"]);return W=function(){return e},e}var X=b.a.div(W(),(function(e){return e.themeProps.fontColor}),(function(e){return e.themeProps.bodybg}));var Y=C((function(e){var t=e.children,n=e.theme;return a.a.createElement(X,{themeProps:n.config[n.type]},t)})),Z=C(function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={contacts:[],filter:""},n.handleChange=function(e){var t=e.target,r=t.name,a=t.value;n.setState(Object(i.a)({},r,a))},n.onAddContact=function(e,t){var r={id:Object(d.uuid)(),name:e,number:t};return""===e||""===t?alert("Please fill all fields!"):n.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("This contact already added!"):void n.setState((function(e){return{contacts:[].concat(Object(u.a)(e.contacts),[r])}}))},n.handleDelete=function(e){var t=n.state.contacts.filter((function(t){return t.id!==e}));n.setState({contacts:t})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"getFilteredContacts",value:function(){var e=this.state,t=e.contacts,n=e.filter;return""===n?t:t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}))}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return a.a.createElement(Y,null,a.a.createElement(V,null),a.a.createElement("h2",null,"PhoneBook"),a.a.createElement(D,{onAddContact:this.onAddContact}),a.a.createElement("h3",null,"Contacts"),a.a.createElement(G,{handleChange:this.handleChange}),a.a.createElement(M,{contacts:this.getFilteredContacts(),handleDelete:this.handleDelete}))}}]),t}(r.Component));c.a.render(a.a.createElement(y,null," ",a.a.createElement(Z,null)," "),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b56128d3.chunk.js.map