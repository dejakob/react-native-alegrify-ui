(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./lib/bottom-action/bottom-action.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),a=n.n(o),r=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),c=n("./node_modules/react-native-styler/index.js"),s=n("./node_modules/react-native-web/dist/exports/View/index.js"),l=(n("./lib/config.js"),n("./node_modules/react-native-component-styler/index.js"));function m(e,t){return a.a.createElement(s.a,{style:t("Container")},a.a.createElement(s.a,{style:t("Content")},e.children),a.a.createElement(s.a,{style:t("Footer")},e.action))}var A=m;m.__docgenInfo={description:"<ButtonAction />\n\n```jsx\n<BottomAction\n  action={<Button />}\n>\n    <View />\n</BottomAction>\n```",methods:[],displayName:"BottomAction",props:{action:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0,description:""},children:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0,description:""}}};var p=n("./lib/bottom-action/style.json"),d=Object(l.b)(["DEFAULT"],p,A),u=n("./lib/button/index.js");function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return D});var D=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,E(t).call(this,e))).layout=null,n}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=h(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:t},a.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"bottom-action"}},"Bottom Action"),a.a.createElement(c.a,null,a.a.createElement("div",null)),a.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYZwCESWABAABSEP5p3YeQ3RNBVzQtVBojYGALVReCMn9AV7Sg9gADUIBgMYMONOVsKlXD8NYGAyMgj1JCgCAPEBahIBSTiKPYG8RAiIgAEEpQGcxGO43j-K8G5Igtc05MkVRsBEjUxPCCJ5PddpPSUyQPAM6hdIdIMpUwpizSVO09OgzQfAY4yAAEYCIERNKoLp2nBVBdFRY5TgAL1gki7G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZzSgAWHL2AANhyvL1jAECADEfWgRI0v4ZxDkRR1MHYZDKH4JZfJ-OBCsRWqa3qmhnAgCLLnYABGUr8vkYLQqmKS5nYOLI2g8gbCgdBw3QzktrEdhoxrWMOGI2BuGAQ8org7F5G3WtgD26BDuCAAyb7xkSeZKGaD6DqO7hwflMBQhCntUHadgAH4Nk-8NIxOq4Qa-1AVsu3dZDMd8zFhPTMDAMIoCmNHTvOmMNpXGtE1sggcAazIUmvAhXtrOtxNU6TZJZDTqDuxgb0s8wBwFVwBESMRkKlmWQgF1ApDF1TUDEF7V25xgaLo9gbpgO7oLAWAsCuealg8SVthSIRofQRwoGFNKAGIgg49CMK3bW60kXnJJk2Gub9pmWbZjnXqkOnq3fb8QDM3QhIArQKBA_QGHIlyejNWhrB87oPKwxzLTwmJ2KIp7SNVVAs4daCioAcWd62oEcGhXDQDIqOliB3AIOwi4crVWPLwjPg3GhK5IgR_TMNaHF1AAZXVRWcLb4tXSWkta-VXdKmBSvIch5vG7m4C2ah0Gl3f2ldgBOABWZNSqfs_ay8dBb9d9Lf7_9-LBC1SnvMAoCwEAJhAIIQ5Y9731_o_dKj8IF4VYG7ZM6CMEQLQBpdibtj74PIEFbGNcF7OEQlJewDQAByjcN4JQZuwLA9x2AACZ8rnyuEtVcRArgAA52G1igBbSqAiLBYCEVlNhZh5AkOoGFBquoqGWAAPrOAaAALXPOvOK9DuZYCYWlXheBSpwAgQY-U815rGNMaIg2aV5rJmsRAnhFjKpONsRI9oLD0ruNXOItKLDSq-IYfozxyYWFOOkTXeeucYD52PDtVcVBnYCGYfYZeq9nC2JGpKAoVwyEUOoY3Wxk0CDTVmswhRSjVEaK0dIz8wUm4t3iO3AgncXQCB7v0fucBEkMJyYiAAGs4K40EkopQDpEK4xQAAkwACmUJoTgJh8hrHFHQtk0aMARnxXYOMtAkyXGzPmeQxZjccBwFWSY9ZShVwDJgPqUZezpYTIklM9gxyFlFJwEQK5cAbmbMlDAJeTz9moEOdMuZXyllQD-QCu5WzBkgt2WCiFHyoWnO-eIuFGz6nRJdFgUSujazpJXmvWx0LimriqSotRmjnBRLMPHMyKlJLqWVlpCMGhU7AT0GBCCRKc4SloNFWAjsnTUFdEPU0I8y4EQtBPSVU9DazxrnXKYhyg5yT1mMBSJl_ZvP5rDayUxDb2W4obFOVl8UL01crDe5BYmiuyOuJVBALrcwANrtG1OeBqUkACqS9LDtAALrZKrrYu1sMdUE3xcTB0pNyYasNVq6gNdmV8XMuLTlagU5AV0KBAw4F1W7MdcK7ZVdxUZilea5ipc2LjwlZmS0KqTX6XVjqutno1aGXbWavVnpLWaGtatORGrxYOqdVW11LaPW1m9b6_1QaQ1LHaIhUUDR9RSVFAATTyvKBqQal4HvaEvahABpU9N5V6-tFKe7UDRnBSRvEvc82ow0RpIlG8WsaPzxsJSTGAZNQgUw7YZDNSgE5ZtZWpIBBq-ZptQPm7QhaM4lq4kzOtJd219RmJYAG8A60DkoDMC0cF5imLVVxaCXbpX1tHgROeqBjCmHMEYHm4skPsB9ux9gRQOPFCE25ATPNU3K1E4A5WIte0si3DjdgHHtwcZ1l23jim_bRrkspj5QmBN8lQFDGGckxLidhpGEjdwlhwBOsSiwXQCB9HMPO7miY_2uY8wbKud1entFae00inIFOeZDp5us7mwuecNj5p8rT9BvmC5F9goWkvxUs3AD4-0saJci1IHVKWPO61oiMX2SXovAF8w1F8gWcthYK5F4A6WcBANq55vLxX6vtboiHBp2NgpaeoDgSzBHKN0NXEAq4eGRvwBwJK3UYBpuRk9aV3qg5psZelpkRI83IxTcIxln4mBOS2O5ntyjOBDtMgYaGzkOBbDigAI6hAgF0RYwVuaY3DJNtb-3Zsunm4t5bDDTs_fO5t1w22wC7dBzNy7x2Vtndh8WVcN27twEe8917jKAwEtEkm0DKbEPK0g8oFlhr2Ww0kMOuA1AC3p35XZ_jIB_NdwEPwUZK3-BLsDcG9nm9geef4KbbAfPLYre5vwTYEAUiED5_weav9WB4H4CtnLtyGH8DizQPnjOJcgG5yunX4vaxC7NqL1Xq51d66qyIMESB-dha536nnlgjcC48_wIU-RYZy8EAuRtKv3foUt9IzNykc2yeQ4BVD9Pi0Cr0lhvVOHqOCssG0PargPCwF1KNF4iQlg6qWJYbAUx6Ml0Y-xXDMO7B6ss-R_bzHWOidFpO9THHRPihSKB6W7ALLq1E6JoTxQRN8Zb_3vjFht431Ezp9gAAJCASwGjtDlK4fs_Qd69_FgAQnYIAHg3ACR-83_24sdND_02YIz9rI8WcHHAaztnVwOaczTIPjA0-hAz1nmAOfclwWNxYCwBUN_jwI1nfjgEAZnmKq1h5tQMhPAHAHdE1nAV0HAJcgAXsKgPAWgQ0KgEgeASgQgbgTAa5oQWgbqOEPgaRhlmQXABQQQCQfVqpsVhgefN5hVrFiBAFrPEFhgUwW1sXlgKIEHqll5iRDFu0IIa-LwSISFqwZ5mAdQZlijHQCQWFlIFIfwTuPlithoenn4N_r_uQHnj1jXDjGYJHkNtXmNjjtzE3sDhxpHuMCXjxlvurEWHysIa5ryEklll9qtqRuthcmiAUGjhji9tkPlKuPYd4ewNqLYFAdkAjNrD4QwpASAd9oEb9l4JQFAFEQwjEdzBxgOAgUrD7g4QZtzLQZkfhr9lfrYtESYCkevqUWgGUXJCkZUbWLQbgTUUEfUe9rWIUbWMUagXYPsO0dQJ0auLQfQX0XUdDOQMtABnjsBsmuBumkylBiyjmtTrTjHp4QwIzprlwazm7o7vrs7obvbrroLiANbDsHbG0BgE7MKL7hMAXIgEAgNBgZ7kVAUEvMBqIPbvwOEtYj8bIRYH8V2AUKKNLrLiCSAGCSYhCaIZLjAPCcCVcKCW4iiSACdnceoHkDEGAIkFrliUzoiHoGzvib8fccKNOKKJ2BAHkL7vNEYniargSVCSABulujuruucalvwA8bbPbC8bkW8YiR8ceIgFPjLIHmFlbncUekvEvEKUlvwLiOgBMGyYriViAFyZziAOelQhehqZFiKTbE8Q7K8TSdiSAGiO4DkuGMCUaUHvwDeqKHehaRcV4AINOHae8ZsLKd8bSZCUzv6dOAAOpcC6mIlBKclB5q4NEgBSG-km6XHLq843F0nJJSkOkymXAoKonCmOkl5SS8QpABiIlUm0A0ncmuZC4gTlJMjSkhmXBwCKmebKke68mbrbp7oZl9n5n2lM5FlfESaGnJmNn8Cmnmm5kRn8CjnBmfFhmNl66lLRkYky4Un8C8K_zdkea9lNn65PovpvrajDmnmkZ_6JB87pQ4CVQW4MI4zyDxyjTbCuBpBWqoB06HHgTEr8B4THi-5AjEhVDeAZAWi_jkhtkCL8DsSpIdGImPloWln8DlCOoQAzA-6IlSQGzkSwAwhYA-hwXHAwDkiUCJB5h5AFCTgjzgUghQUNnrD8BRBoC-7aTcoYUgCYDzARghS0RdmLl67l5yoVyKotrTwIS-4AB680OAj5AA7KWTySXL7lAFkKiGpUzuXtaJpdpW6TWG-fHBBdUB8IJNLr-f-UWkcfwLQL6FkOzsubEhaOXrMDMPwO-fIL5UAA",__position:1,__code:"<BottomAction action={<Button primary>Primary action</Button>}>\n  <View style={{ flex: 1, backgroundColor: '#eee' }} />\n</BottomAction>",__scope:{props:this?this.props:n,StylerProvider:c.a,View:s.a,BottomAction:d,Button:u.a}},a.a.createElement(d,{action:a.a.createElement(u.a,{primary:!0},"Primary action")},a.a.createElement(s.a,{style:{flex:1,backgroundColor:"#eee"}}))),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),a.a.createElement(r.MDXTag,{name:"table",components:t},a.a.createElement(r.MDXTag,{name:"thead",components:t,parentName:"table"},a.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"thead"},a.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Property"),a.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"),a.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Required?"),a.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Type"))),a.a.createElement(r.MDXTag,{name:"tbody",components:t,parentName:"table"},a.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},a.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"action"),a.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Bottom component"),a.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),a.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"React.Children")),a.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},a.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"children"),a.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Content"),a.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),a.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"React.Children")))))}}])&&B(n.prototype,o),l&&B(n,l),t}();D.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./lib/bottom-action/style.json":function(e){e.exports={Container:{DEFAULT:{flex:1,height:"100vh"}},Content:{DEFAULT:{flex:1}},Footer:{DEFAULT:{position:"relative"}}}},"./lib/button/index.js":function(e,t,n){"use strict";var o=n("./node_modules/react-native-component-styler/index.js"),a=n("./node_modules/react/index.js"),r=n.n(a),i=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),c=n("./node_modules/react-native-web/dist/exports/View/index.js"),s=n("./node_modules/react-native-web/dist/exports/Text/index.js");function l(e,t){return r.a.createElement(i.a,{disabled:e.disabled,onPress:e.onPress,onPressIn:e.onPressIn,onPressOut:e.onPressOut,testID:e.testID},r.a.createElement(c.a,{style:t("Container")},r.a.createElement(s.a,{style:t("Text")},e.children)))}var m=l;l.__docgenInfo={description:"<Button />\n\nRegular button\n\n```jsx\n<Button\n  primary\n>\n Hi, I'm a primary button! \ud83c\udf89\n</Button>\n```",methods:[],displayName:"Button",props:{children:{type:{name:"string"},required:!0,description:"Button text / button content"},disabled:{type:{name:"bool"},required:!1,description:"Disabled?"},onPress:{type:{name:"func"},required:!1,description:"press action"},onPressIn:{type:{name:"func"},required:!1,description:"press in action"},onPressOut:{type:{name:"func"},required:!1,description:"press out action"}}};var A=n("./lib/button/style.json"),p=Object(o.b)(["DEFAULT","PRIMARY","FULL","LINK","BORDER","DISABLED"],A,m);t.a=p},"./lib/button/style.json":function(e){e.exports={Container:{DEFAULT:{backgroundColor:"theme:action",paddingLeft:"32h4s",paddingRight:"32h4s",height:"36h4s",justifyContent:"center",borderRadius:"18h4s"},PRIMARY:{backgroundColor:"theme:primary"},FULL:{width:"100vw"},LINK:{backgroundColor:"transparent"},BORDER:{borderColor:"theme:action",borderWidth:"4h4s"}},Text:{DEFAULT:{color:"theme:nav",textAlign:"center",fontSize:"theme:s"},PRIMARY:{color:"theme:action"},LINK:{color:"theme:action",fontWeight:"800"},DISABLED:{opacity:.6}}}},"./lib/config.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n("./node_modules/react-native-styler/index.js"),a=n("./node_modules/react-native-component-styler/index.js"),r={primary:"#4e4cc1",secondary:"#953495",body:"#000000",action:"#ffffff",error:"#900505",nav:"#333333",inactive:"#cccccc",sheet:"#fefefe",navInactiveItem:"#cccccc",navActiveItem:"#333333"},i={xs:2,s:4,m:8,l:16,xl:32};Object(o.c)({colors:r,spacing:i,fontSizes:{xxs:"8h4s",xs:"11h4s",s:"13h4s",m:"16h4s",l:"20h4s",xl:"24h4s",xxl:"32h4s"}}),Object(a.a)({spaceXS:{marginBottom:"".concat(i.xs,"h4s")},spaceS:{marginBottom:"".concat(i.s,"h4s")},spaceM:{marginBottom:"".concat(i.m,"h4s")},spaceL:{marginBottom:"".concat(i.l,"h4s")},spaceXL:{marginBottom:"".concat(i.xl,"h4s")}})}}]);
//# sourceMappingURL=lib-bottom-action-bottom-action.bb5015b357d257f312d7.js.map