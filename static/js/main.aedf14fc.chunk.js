(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={text:"Statistics_text__17_4j"}},function(e,t,c){e.exports={list:"FeedbackOptions_list__26nQ1",item:"FeedbackOptions_item__2Yul1",button:"FeedbackOptions_button__1x9Jg"}},,,,function(e,t,c){e.exports={title:"Section_title__qPIgw"}},function(e,t,c){e.exports={text:"Notification_text__2dF7n"}},,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),i=c.n(s),o=(c(13),c(4)),r=c(3),u=c.n(r),b=c(0),l=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(b.jsx)("ul",{className:u.a.list,children:t.map((function(e){return Object(b.jsx)("li",{className:u.a.item,children:Object(b.jsx)("button",{className:u.a.button,type:"button",onClick:function(){c(e)},children:e})},e)}))})},d=c(2),j=c.n(d),x=function(e){var t=e.positiveFeedback,c=e.neutralFeedback,n=e.negativeFeedback,a=e.countSum,s=e.countPercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{className:j.a.text,children:["Good: ",t]}),Object(b.jsxs)("p",{className:j.a.text,children:["Neutral: ",c]}),Object(b.jsxs)("p",{className:j.a.text,children:["Bad: ",n]}),Object(b.jsxs)("p",{className:j.a.text,children:["Total: ",a]}),Object(b.jsxs)("p",{className:j.a.text,children:["Positive feedback: ",s,"%"]})]})},O=c(7),h=c.n(O),f=function(e){var t=e.children,c=e.title;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{className:h.a.title,children:c}),t]})},p=c(8),k=c.n(p),m=function(e){var t=e.message;return Object(b.jsx)("p",{className:k.a.text,children:t})};m.defaultProps={message:"No feedback given"};var _=["good","neutral","bad"];var v=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(o.a)(s,2),r=i[0],u=i[1],d=Object(n.useState)(0),j=Object(o.a)(d,2),O=j[0],h=j[1],p=c+r+O,k=Math.round(100*c/p);return Object(b.jsxs)(f,{title:"Please leave feedback",children:[Object(b.jsx)(l,{options:_,onLeaveFeedback:function(e){switch(e){case"good":a((function(){return c+1}));break;case"neutral":u((function(){return r+1}));break;case"bad":h((function(){return O+1}));break;default:return}}}),Object(b.jsx)(f,{title:"Statistics",children:p>0?Object(b.jsx)(x,{positiveFeedback:c,neutralFeedback:r,negativeFeedback:O,countSum:p,countPercentage:k}):Object(b.jsx)(m,{})})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.aedf14fc.chunk.js.map