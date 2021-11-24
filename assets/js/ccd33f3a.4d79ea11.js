"use strict";(self.webpackChunkcheckout_sdk_java_docs=self.webpackChunkcheckout_sdk_java_docs||[]).push([[837],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),y=u(r),f=a,m=y["".concat(c,".").concat(f)]||y[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7211:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return y}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={id:"fawry",title:"Fawry"},c=void 0,u={unversionedId:"default_api/alternative-payments/fawry",id:"default_api/alternative-payments/fawry",isDocsHomePage:!1,title:"Fawry",description:"The full list of request body parameters and possible outcomes can be found here.",source:"@site/docs/default_api/alternative-payments/fawry.md",sourceDirName:"default_api/alternative-payments",slug:"/default_api/alternative-payments/fawry",permalink:"/checkout-sdk-java/docs/default_api/alternative-payments/fawry",version:"current",frontMatter:{id:"fawry",title:"Fawry"},sidebar:"tutorialSidebar",previous:{title:"Boleto",permalink:"/checkout-sdk-java/docs/default_api/alternative-payments/boleto"},next:{title:"Giropay",permalink:"/checkout-sdk-java/docs/default_api/alternative-payments/giropay"}},l=[{value:"Request a Fawry payment",id:"request-a-fawry-payment",children:[]},{value:"Approve a Fawry payment",id:"approve-a-fawry-payment",children:[]},{value:"Expire a Fawry payment",id:"expire-a-fawry-payment",children:[]}],s={toc:l};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The full list of request body parameters and possible outcomes can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.checkout.com/payments/payment-methods/cash-and-atm-payment/fawry"},"here"),"."),(0,o.kt)("h2",{id:"request-a-fawry-payment"},"Request a Fawry payment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"RequestFawrySource fawrySource = RequestFawrySource.builder()\n        .description()\n        .customerEmail()\n        .customerMobile()\n        .products(Collections.singletonList(\n                RequestFawrySource.Product.builder().build()\n        ))\n        .build();\n\nPaymentRequest request = PaymentRequest.fawry(fawrySource, Currency.EGP, 10L);\n\nPaymentResponse response = api.paymentsClient().requestAsync(request).get();\n")),(0,o.kt)("h2",{id:"approve-a-fawry-payment"},"Approve a Fawry payment"),(0,o.kt)("p",null,"This functionality only works in sandbox environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"api.fawryClient().approve(paymentReference).get();\n")),(0,o.kt)("h2",{id:"expire-a-fawry-payment"},"Expire a Fawry payment"),(0,o.kt)("p",null,"This functionality only works in sandbox environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"api.fawryClient().cancel(paymentReference).get();\n")))}y.isMDXComponent=!0}}]);