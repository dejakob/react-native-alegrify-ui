(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./lib/center/center.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js"),i=t("./node_modules/react-native-styler/index.js"),A=t("./node_modules/react-native-web/dist/exports/Text/index.js"),s=(t("./lib/config.js"),t("./node_modules/react-native-component-styler/index.js")),p=t("./node_modules/react-native-web/dist/exports/View/index.js");function m(e,n){return r.a.createElement(p.a,{style:n("Container")},e.children)}var l=m;m.__docgenInfo={description:"",methods:[],displayName:"Center",props:{children:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0,description:""}}};var u={Container:{DEFAULT:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"},HORIZONTAL:{flex:void 0,justifyContent:void 0},VERTICAL:{alignItems:void 0}}},d=Object(s.b)(["DEFAULT","HORIZONTAL","VERTICAL"],u,l);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function B(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,n){return!n||"object"!==g(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"default",function(){return T});var T=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=E(this,y(n).call(this,e))).layout=null,t}var t,o,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=f(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"center"}},"Center"),r.a.createElement(i.a,null,r.a.createElement("div",null)),r.a.createElement(c.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYZwCESWABAABSEP5p3YeQ3RNBVzQtVBojYGALVReCMn9AV7SgqxsCmDDjTlbCpVw_DWBgMjII9SQoAgDxAWoSAUjYiiHH0DJMPoz0uJ4xE9AESRVGwQSNXYIMpTE00tXaO0lOgzQfFo912gAARgIgRAGVBeK6TSA1QXRUWOU4AC9YJIuxuHYYB1iiARnlQK52gABnYZMZiwdp9xrGZOxYWd_IAFlC9gADZQvC9YwBAgAxH1oESfz-GcQ5EUdTB2GQyh-CWUyfjgKLETSmsMpoZwIEcy52AARjiiL5HBWzqHsgBBOZ2HcyNoPIGwoHQcN0M5UaxHYaMa1jDhiNgbhgEPZy4OxeRt1rYBJugGbggAMjO8ZEnmShmmO6bZu4J75TAUJbJ7VB2nYAB-DYTvDSN5que7TtQXqVt3WQzHfMxYSUzAwDCKApkBhalpjYaVxrRMVIIHBMsyFJrwIA7azXESBFJsm60saixEK48iz0GgpFprASdXHd7ApqmpFx_HCeJg6pEx6t32_EBJN41B-IArQKBA_QGHI7SejNWhrBM7p9Kws1GLwmIWKI3bSNVVAVYdaDooAcSgSgPHiRwaFcNAMgANVcfp3AIOwdfovXLQNgiLU-DcaGNkiBH9Mw7KmexdQAGV1UVnFGjzVwHAVPby-UAGI4pgOLyHIDqGrJuAtmodBs_83OAE4AFZkzixuy9rLx0Bz9pc4C3u-7bixzXM2uwFHseB5hAQhHLPO697huAobie8NYWvk3XjeJ7QIeWNr4v9_Iaz5DN2OYMQwb7AaAA5a20887H2Cwe52AAJgi8urm61ciCuAAOd_axQCuB1JKACLBYCAcFN-Zhj4xwGlMTKuor6WAAPrOAaAALXPKndy98yZYCfv5X-eA4pwAnoQ-UHUOokLIWA9gz92gdWTDQieP9KFJRYXQyB7QX4BU4auCB_kX5xX4Q_Ah3DkwvxYTAs2Md1YwE1secaq4qB2wEM_eOScU50NqpKAoVxnDn0vjfOhTUCAtTas_RByC0GYOwTAz8fUbZ2wdlAJ2BAXYugEB7L2NA4DKIfroxEAANZwVxoLeV8jeEQEQ2HFAACTAEMRfa-1scBP3kDQ4o6EdF1RgGEjy7BIloGiTcSIVwElJKMaknAcBMmkOyUoVcQSYD6nCUUz2USYnlPYJU5Jxi0lEHqXARpuTJQwATu04pqBSmxIqYk_pNSoDDNGc0vJwTJmFOmbMnpfTqk33ScsrJOSHGyJdFgISeDayaOTs4OhiyTGrmsag9BWDnAyLMBLKW0laCyXkhoeWwFmYGHAhbSi5B5EuVgOgdc1BXR-3UjhIORtQ5wvDutU2WkHTcxkm7CAMAxh0Q4ji35ikHQYrUu0T0GLo79VQPZElol3IQolLQKF2RYWZgIMtMmABtdo2pzyZUGgAVQTpYcK8oAASydMFIMsINBOkr2hu3PKKSwDR7CKvaAAXR0SbOhjLvH4pGNDM5cMHQIyRnHCmZsvncUBBTSQRq5ZAV0KBEFEEhK40pQHMllE8UEvQr6rUTFDasTNmCsqg5LDXXgJSgclAZgWjgvMMhZzXrvXMsJGSkZE13CWHAeaVyLBdAIH0cwPLqaJkDaah-1aLAYs2v49o7jPGkU5ODBt7AqbduAPmuAHwpqgy7Q2qQtaqaOLBn1F1-bY1prvio4d4YrjlRmPO-AOA4W6jABuyMvLOa1jXRuwdntMiJB3ZGY9cbB0_EwJyOhZNr1ppwHepkD8dWchwLYcUABHUIEAujoA-TZC1UwrWhGRjm35dqlCSwdT8jIkgMWuu0O6pW4EwPHBgIjSDUFVz8Dba7AQ_BwmHosPwQVwqxWWFI-netDb-BgFgFgOjHVH2MfACx7UgGtgfTo_wVRoQiABhABx6t_B4gQBSKgZsJk4ACZ0BTSq5Hqb8HUHkGIYBEjuP0IpxDJGQCqaaQxijIAZWijlcgxVdGS3dvYExljdG3oI1dosVTZN1OaYgNp3TNBnMRkgC6YDpmTmhf4Kq9VmqbNIHo_Z2skmuIybk0QBTsWXM4bc8Z1c4Nj4SzqtsVwaQ5bUDdYrMCIArn8DwsefTxZiRVG8BkC0v5yRMjE-sfgLF1HmUUwFHA_WAoqZrPwcoEKIAzH47F_gg16HkVgDCLAPo2vYfJJQRIeY8gFEnKGoEDXQSGYAfwKIaBFP_LlsNszmB5gRlsvitLZGH78ADmG4OqKuURwQopgAeh1AbOAADsl2EuCC1IpqAWRUTA7My9604PIeiCMzWXLEt9veA-HxaTJXUBleBQwTyIBaC-iyKRwT8iLQvdmDMfg8gFDyHkEAA",__position:1,__code:"<Center>\n  <Text>Some content</Text>\n</Center>",__scope:{props:this?this.props:t,StylerProvider:i.a,Text:A.a,Center:d}},r.a.createElement(d,null,r.a.createElement(A.a,null,"Some content"))),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"variants"}},"Variants"),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"horizontal"}},"Horizontal"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<Center\n    horizontal\n>\n    <Text>Some content</Text>\n</Center>\n")),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"vertical"}},"Vertical"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<Center\n    vertical\n>\n    <Text>Some content</Text>\n</Center>\n")),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"both"}},"Both"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<Center>\n    <Text>Some content</Text>\n</Center>\n")))}}])&&B(t.prototype,o),s&&B(t,s),n}();T.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./lib/config.js":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var o=t("./node_modules/react-native-styler/index.js"),r=t("./node_modules/react-native-component-styler/index.js"),a={primary:"#4e4cc1",secondary:"#953495",body:"#000000",action:"#ffffff",error:"#900505",nav:"#333333",inactive:"#cccccc",sheet:"#fefefe",navInactiveItem:"#cccccc",navActiveItem:"#333333"},c={xs:2,s:4,m:8,l:16,xl:32};Object(o.c)({colors:a,spacing:c,fontSizes:{xxs:"8h4s",xs:"11h4s",s:"13h4s",m:"16h4s",l:"20h4s",xl:"24h4s",xxl:"32h4s"}}),Object(r.a)({spaceXS:{marginBottom:"".concat(c.xs,"h4s")},spaceS:{marginBottom:"".concat(c.s,"h4s")},spaceM:{marginBottom:"".concat(c.m,"h4s")},spaceL:{marginBottom:"".concat(c.l,"h4s")},spaceXL:{marginBottom:"".concat(c.xl,"h4s")}})}}]);
//# sourceMappingURL=lib-center-center.bb5015b357d257f312d7.js.map