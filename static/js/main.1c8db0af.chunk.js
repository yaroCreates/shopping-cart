(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),r=a(20),n=a.n(r),s=a(24),d=a(10),m=a(25),l={productItems:[{id:"1",name:"Liverpool FC - Home",price:4999,image:"/images/liverpool2.jpg"},{id:"2",name:"Liverpool FC - Away",price:4999,image:"/images/liverpool.jpg"},{id:"3",name:"Manchester City FC - Home",price:4999,image:"/images/city2.jpg"},{id:"4",name:"Manchester City FC - Away",price:4999,image:"/images/city.jpg"},{id:"5",name:"FC Barcelona - Home",price:4999,image:"/images/fcb.jpg"},{id:"6",name:"Manchester United FC - Home",price:4999,image:"/images/Manutd.png"},{id:"7",name:"Manchester United FC - Away",price:4999,image:"/images/manutd2.jpg"},{id:"8",name:"Real Madrid - Home",price:4999,image:"/images/real.jpg"},{id:"9",name:"Atletico Madrid FC - Home",price:4999,image:"/images/atletico.jpg"},{id:"10",name:"Atletico Madrid FC - Away",price:4999,image:"/images/atletico2.jpg"},{id:"11",name:"PSG - Home",price:4999,image:"/images/psg.jpg"},{id:"12",name:"PSG - Away",price:4999,image:"/images/psg2.jpg"},{id:"13",name:"Chelesa FC - Home",price:4999,image:"/images/chelsea3.jpg"},{id:"14",name:"Chelsea FC - Away",price:4999,image:"/images/chelsea2.jpg"},{id:"15",name:"Ajax FC - Away",price:4999,image:"/images/ajax2.png"},{id:"16",name:"Arsenal FC - Home",price:4999,image:"/images/arsenal.png"},{id:"17",name:"Tottenham Hotspur FC - Home",price:4999,image:"/images/tottenham.jpg"},{id:"18",name:"Tottenham Hotspur FC - Away",price:4999,image:"/images/tottenham2.jpg"}]},j=a(8),o=a(21),u=a(23),h=a(0);var p=function(e){var t=e.countCartItems;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:Object(h.jsx)(j.b,{to:"/",className:"logo",children:"JerseyStoreOH"})})}),Object(h.jsx)("div",{className:"header-links",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(j.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(j.b,{to:"/signup",children:"Signup"})}),Object(h.jsx)("li",{children:Object(h.jsxs)(j.b,{className:"badge-parent",to:"/cart",children:[Object(h.jsx)(o.a,{icon:u.a}),t?Object(h.jsx)("button",{className:"badge",children:t}):""]})})]})})]})},b=a(3);var g=function(e){var t=e.productItems,a=e.handleAddProduct;return Object(h.jsx)("div",{className:"products",children:t.map((function(e){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"product-img",src:e.image,alt:e.name})}),Object(h.jsx)("div",{className:"product-name",children:Object(h.jsx)("h3",{children:e.name})}),Object(h.jsxs)("div",{className:"product-price",children:["N",e.price]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"product-add-btn",onClick:function(){return a(e)},children:"Add to Cart"})})]},e.id)}))})};var O=function(){return Object(h.jsx)("div",{className:"signup",children:"Signup"})};var x=function(e){var t=e.cartItems,a=e.handleAddProduct,c=e.handleRemoveProduct,i=e.handleClearCart,r=e.countCartItems,n=t.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(h.jsxs)("div",{className:"cart-items",children:[Object(h.jsx)("h2",{className:"cart-items-header",children:"Cart items"}),Object(h.jsx)("div",{className:"clear-cart",children:t.length>=1&&Object(h.jsx)("button",{className:"clear-cart-button",onClick:i,children:"Clear Cart"})}),0===t.length&&Object(h.jsx)("div",{className:"cart-items-empty",children:" No items added"}),Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsxs)("div",{className:"cart-items-list",children:[Object(h.jsx)("img",{className:"cart-items-image",src:e.image,alt:e.name}),Object(h.jsx)("div",{className:"cart-items-name",children:e.name}),Object(h.jsxs)("div",{className:"cart-items-function",children:[Object(h.jsx)("button",{className:"cart-items-add",onClick:function(){return a(e)},children:"+"}),Object(h.jsx)("button",{className:"cart-items-remove",onClick:function(){return c(e)},children:"-"})]}),Object(h.jsxs)("div",{className:"cart-items-price",children:[e.quantity," * N",e.price]})]},e.id)}))}),Object(h.jsxs)("div",{className:"cart-items-total-price-name",children:["Total price",Object(h.jsxs)("div",{className:"cart-items-total-price",children:[" N",n]})]}),Object(h.jsx)("div",{className:"checkout",children:r?Object(h.jsx)("button",{className:"checkout-btn",children:"Checkout"}):""})]})};var v=function(e){var t=e.productItems,a=e.cartItems,c=e.handleAddProduct,i=e.handleRemoveProduct,r=e.handleClearCart;return Object(h.jsx)("div",{children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/",exact:!0,children:Object(h.jsx)(g,{productItems:t,handleAddProduct:c})}),Object(h.jsx)(b.a,{path:"/signup",children:Object(h.jsx)(O,{})}),Object(h.jsx)(b.a,{path:"/cart",children:Object(h.jsx)(x,{cartItems:a,handleAddProduct:c,handleRemoveProduct:i,handleClearCart:r,countCartItems:a.length})})]})})};a(38);var C=function(){var e=l.productItems;console.log(e);var t=Object(c.useState)([]),a=Object(m.a)(t,2),i=a[0],r=a[1];return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(p,{countCartItems:i.length}),Object(h.jsx)(v,{productItems:e,cartItems:i,handleAddProduct:function(e){var t=i.find((function(t){return t.id===e.id}));r(t?i.map((function(a){return a.id===e.id?Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity+1}):a})):[].concat(Object(s.a)(i),[Object(d.a)(Object(d.a)({},e),{},{quantity:1})]))},handleRemoveProduct:function(e){var t=i.find((function(t){return t.id===e.id}));1===t.quantity?r(i.filter((function(t){return t.id!==e.id}))):r(i.map((function(a){return a.id===e.id?Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity-1}):a})))},handleClearCart:function(){r([])}})]})};n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1c8db0af.chunk.js.map