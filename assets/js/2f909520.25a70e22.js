"use strict";(self.webpackChunkcheckout_sdk_java_docs=self.webpackChunkcheckout_sdk_java_docs||[]).push([[795],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(m,u(u({ref:t},p),{},{components:r})):n.createElement(m,u({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2317:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),u=["components"],i={id:"forex",title:"Forex"},c=void 0,s={unversionedId:"four_api/forex",id:"four_api/forex",isDocsHomePage:!1,title:"Forex",description:"The full list of request body parameters and possible outcomes can be found here.",source:"@site/docs/four_api/Forex.md",sourceDirName:"four_api",slug:"/four_api/forex",permalink:"/checkout-sdk-java/docs/four_api/forex",version:"current",frontMatter:{id:"forex",title:"Forex"},sidebar:"tutorialSidebar",previous:{title:"Webhooks",permalink:"/checkout-sdk-java/docs/default_api/webhooks"},next:{title:"iDEAL",permalink:"/checkout-sdk-java/docs/four_api/alternative-payments/ideal"}},p=[{value:"Request a quote",id:"request-a-quote",children:[]}],l={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The full list of request body parameters and possible outcomes can be found ",(0,a.kt)("a",{parentName:"p",href:"https://api-reference.checkout.com/preview/crusoe/#tag/Forex"},"here"),"."),(0,a.kt)("h2",{id:"request-a-quote"},"Request a quote"),(0,a.kt)("p",null,"Request an exchange rate between a source and destination currency pair that will be used to process one or more payouts. You must submit a payout with the FX quote identifier before the quote expires. If the FX quote identifier is omitted from a payout, and the source and destination currencies differ, the current market exchange rate will be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"QuoteRequest request = QuoteRequest.builder()\n        .sourceCurrency()\n        .sourceAmount()\n        .destinationCurrency()\n        .processChannelId()\n        .build();\n\nQuoteResponse response = fourApi.forexClient().requestQuote(request).get();\n")))}f.isMDXComponent=!0}}]);