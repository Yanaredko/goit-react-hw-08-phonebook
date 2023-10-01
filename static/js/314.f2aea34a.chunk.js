"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[314],{6314:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,o,a,i,s,c,d,u,p,l,x,m,f=t(9439),b=t(2791),g=t(9434),h=t(5568),Z=(t(5462),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}),j=t(168),v=t(6487),y=v.ZP.form(r||(r=(0,j.Z)(["\n  margin-top: 20px;\n  margin-left: 40px;\n  box-sizing: border-box;\n  width: 400px;\n"]))),k=v.ZP.label(o||(o=(0,j.Z)(["\n  display: block;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),w=v.ZP.span(a||(a=(0,j.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  color: #254E58;\n"]))),P=v.ZP.input(i||(i=(0,j.Z)(["\n  width: 300px;\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin-bottom: 15px;\n"]))),z=v.ZP.button(s||(s=(0,j.Z)(["\n  background-color: #254E58;\n  color: #fff;\n  border: none;\n  padding: 12px 20px;\n  font-size: 18px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n\n  &:active {\n    background-color: #254E58;\n  }\n"]))),C=t(3661),A=t(3871),E=t(3329),F=function(){var n=(0,g.I0)(),e=(0,g.v9)(C.K2),t=(0,b.useState)(""),r=(0,f.Z)(t,2),o=r[0],a=r[1],i=(0,b.useState)(""),s=(0,f.Z)(i,2),c=s[0],d=s[1];return(0,E.jsxs)(y,{onSubmit:function(t){t.preventDefault(),e.some((function(n){return n.name===o}))?h.Am.warn("".concat(o," is already in contacts")):(n((0,A.uK)({id:Z(),name:o,number:c})),a(""),d(""))},children:[(0,E.jsxs)(k,{children:[(0,E.jsx)(w,{children:" Name"}),(0,E.jsx)(P,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:o,onChange:function(n){return a(n.currentTarget.value)},required:!0})]}),(0,E.jsxs)(k,{children:[(0,E.jsx)(w,{children:" Number"}),(0,E.jsx)(P,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:c,onChange:function(n){return d(n.currentTarget.value)},required:!0})]}),(0,E.jsx)(z,{type:"submit",children:"Add contact"})]})},K=v.ZP.ul(c||(c=(0,j.Z)(["\n  padding: 0;\n  margin-top: 20px;\n  margin-left: 40px;\n"]))),S=v.ZP.li(d||(d=(0,j.Z)(["\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  font-style: italic;\n\n"]))),_=v.ZP.span(u||(u=(0,j.Z)(["\n  font-weight: bold;\n"]))),I=v.ZP.button(p||(p=(0,j.Z)(["\n  background-color: #254E58;\n  color: #fff;\n  border: none;\n  padding: 5px 10px;\n  font-size: 14px;\n  border-radius: 3px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #112D32;\n  }\n"]))),D=function(){var n=(0,g.v9)(C.K2),e=(0,g.v9)((function(n){return n.filter})),t=(0,g.I0)(),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(K,{children:r.map((function(n){return(0,E.jsxs)(S,{children:[(0,E.jsxs)("span",{children:[(0,E.jsx)(_,{children:n.name}),": ",n.number]}),(0,E.jsx)(I,{type:"button",onClick:function(){return e=n.id,void t((0,A.GK)(e));var e},children:"Delete"})]},n.id)}))})})},N=v.ZP.label(l||(l=(0,j.Z)(["\n  display: block;\n  margin-top: 60px;\n  margin-left: 40px;\n  width: 400px;\n  margin-bottom: 10px;\n  color: #254E58;\n"]))),T=v.ZP.span(x||(x=(0,j.Z)(["\n  display: block;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]))),q=v.ZP.input(m||(m=(0,j.Z)(["\n  width: 300px;\n  padding: 10px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n"]))),J=t(6895),L=function(){var n=(0,g.v9)((function(n){return n.filter})),e=(0,g.I0)();return(0,E.jsxs)(N,{children:[(0,E.jsx)(T,{children:"Find contacts by name"}),(0,E.jsx)(q,{type:"text",value:n,onChange:function(n){e((0,J.KJ)(n.currentTarget.value))}})]})},U=function(){var n=(0,g.I0)();return(0,b.useEffect)((function(){n((0,A.yF)())}),[n]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(F,{}),(0,E.jsx)(L,{}),(0,E.jsx)(D,{})]})}}}]);
//# sourceMappingURL=314.f2aea34a.chunk.js.map