(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./lib/config.js":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("./node_modules/react-native-styler/index.js"),r=n("./node_modules/react-native-component-styler/index.js"),a={primary:"#4e4cc1",secondary:"#953495",body:"#000000",action:"#ffffff",error:"#900505",nav:"#333333",inactive:"#cccccc",sheet:"#fefefe",navInactiveItem:"#cccccc",navActiveItem:"#333333"},i={xs:2,s:4,m:8,l:16,xl:32};Object(o.c)({colors:a,spacing:i,fontSizes:{xxs:"8h4s",xs:"11h4s",s:"13h4s",m:"16h4s",l:"20h4s",xl:"24h4s",xxl:"32h4s"}}),Object(r.a)({spaceXS:{marginBottom:"".concat(i.xs,"h4s")},spaceS:{marginBottom:"".concat(i.s,"h4s")},spaceM:{marginBottom:"".concat(i.m,"h4s")},spaceL:{marginBottom:"".concat(i.l,"h4s")},spaceXL:{marginBottom:"".concat(i.xl,"h4s")}})},"./lib/range-input/range-input.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),u=n("./node_modules/react-native-styler/index.js"),s=(n("./lib/config.js"),n("./node_modules/react-native-web/dist/exports/PanResponder/index.js")),c=n("./node_modules/react-native-component-styler/index.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js");function p(e,t){return r.a.createElement(l.a,Object.assign({style:t("Container"),ref:e.attachContainerRef,testID:e.testID},e.panResponder.panHandlers),r.a.createElement(l.a,{style:t("Bar")}),r.a.createElement(l.a,{style:[t("Thumb"),{transform:[{translateX:e.thumbPosition}]},{shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5}],ref:e.attachThumbRef}))}var m=p;p.__docgenInfo={description:"",methods:[],displayName:"RangeInput"};var A=n("./lib/range-input/style.json");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=Object(c.b)(["DEFAULT"],A,m),v=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(o=g(t).call(this))||"object"!==f(o)&&"function"!==typeof o?b(n):o).attachContainerRef=e.attachContainerRef.bind(b(e)),e.attachThumbRef=e.attachThumbRef.bind(b(e)),e.handleThumbMove=e.handleThumbMove.bind(b(e)),e.moveThumbBasedOnValue=e.moveThumbBasedOnValue.bind(b(e)),e}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o["PureComponent"]),n=t,(r=[{key:"componentWillMount",value:function(){var e=this;this.setState({thumbPosition:0,value:this.props.value}),this.panResponder=s.a.create({onStartShouldSetPanResponder:function(){return!0},onPanResponderStart:function(t){"function"===typeof e.props.onSlidingStart&&e.props.onSlidingStart(),e.handleThumbMove(t)},onPanResponderMove:this.handleThumbMove,onPanResponderEnd:function(){"function"===typeof e.props.onSlidingComplete&&e.props.onSlidingComplete()}}),this.THUMB_WIDTH=Object(u.d)(B._name+"__Thumb__DEFAULT").width}},{key:"componentWillUpdate",value:function(e){e.value===this.state.value||this.state.isSliding||this.moveThumbBasedOnValue(e.value)}},{key:"attachContainerRef",value:function(e){this.container=e,this.moveThumbBasedOnValue(this.props.value)}},{key:"attachThumbRef",value:function(e){this.thumb=e}},{key:"handleThumbMove",value:function(e){var t=this,n=e.nativeEvent.locationX,o=this.props,r=o.minimumValue,a=o.maximumValue;e.nativeEvent.target===this.thumb._nativeTag&&(n+=this.state.thumbPosition-this.THUMB_WIDTH),this.container&&"function"===typeof this.container.measure&&this.container.measure(function(e,o,i){var u=Math.max(Math.min(n/i,1),0),s=r+(a-r)*u;t.setState({thumbPosition:u*i,value:s}),"function"===typeof t.props.onValueChange&&t.props.onValueChange(s)})}},{key:"moveThumbBasedOnValue",value:function(e){var t=this,n=(e-this.props.minimumValue)/(this.props.maximumValue-this.props.minimumValue);this.container&&"function"===typeof this.container.measure&&this.container.measure(function(o,r,a){t.setState({thumbPosition:n*a,value:e})})}},{key:"render",value:function(){return B(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){h(e,t,n[t])})}return e}({},this.props,this.state,{panResponder:this.panResponder,attachContainerRef:this.attachContainerRef,attachThumbRef:this.attachThumbRef}))}}])&&d(n.prototype,r),a&&d(n,a),t}();v.defaultProps={minimumValue:1,maximumValue:10,value:5};var w=v;function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}v.__docgenInfo={description:"",methods:[{name:"attachContainerRef",docblock:null,modifiers:[],params:[{name:"container",type:null}],returns:null},{name:"attachThumbRef",docblock:null,modifiers:[],params:[{name:"thumb",type:null}],returns:null},{name:"handleThumbMove",docblock:null,modifiers:[],params:[{name:"eventData",type:null}],returns:null},{name:"moveThumbBasedOnValue",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null}],displayName:"RangeInput",props:{minimumValue:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},maximumValue:{defaultValue:{value:"10",computed:!1},type:{name:"number"},required:!1,description:""},value:{defaultValue:{value:"5",computed:!1},type:{name:"number"},required:!1,description:""},onValueChange:{type:{name:"func"},required:!1,description:""},onSlidingStart:{type:{name:"func"},required:!1,description:""},onSlidingComplete:{type:{name:"func"},required:!1,description:""}}},n.d(t,"default",function(){return D});var D=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=O(this,E(t).call(this,e))).layout=null,n}var n,o,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=j(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"rangeinput"}},"RangeInput"),r.a.createElement(u.a,null,r.a.createElement("div",null)),r.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYZwCESWABAABSEP5p3YeQ3RNBVzQtVBojYGALVReCMn9AV7SmdpPSgCAPEBahIBSMjIPYUV3DSBpUBmcJMLlKjJBoujMlnQi0G4ghJFUbBmIo1itV400tXaO0NXYaDNB8DDjT4gABGAiBEAZUHorplIDVBdFRY5TgAL1gki7G4NT1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdPIAFn89gADZ_MC9YwBAgAxH1oESTz-GcQ5EUdTB2GQyh-CWAyfjgELEQSmskpoZwIBsy52AARgioL5HBCzqCsgBBOZ2CcyNoPIGwoHQcN0M5fqxHYaMa1jDhiNgbhgEPOy4OxeRt1rYBhugMbggAMgO8ZEnmShml20bxu4G75TAUILJ7VB2nYAB-DY9vDSNJquS79tQdq5t3WQzHfMxYVUzAwDCKApm-qaZpjXqVxrRMgylHBksyFJrwILbazrNiRM48T2C3VcpHRghMex3GtqkZHq3fb8QEE-jUEYgCtAoED9AYcjVKGs1aGsfTui091sKlXD8NYQjFtI1VUAFh1oNCgBxKBKA8eJHBoVw0AyAA1Vx-ncAg7AlrCzWlvCYjli1Pg3GgiPWxWOssqZ7F1AAZXVRWcfrnNR_t-lcjL5QAYgimAIvIcgmqqgm4C2ah0FNiP2kjgBOABWZMIrzpPay8dBM8jrzK6r4uLHNIzPMjsAm-bmuYQEIRyyj7PK9zrzc9bvDWAb5MR9H1u0DruWG_jmfyFbuBNjHBuwBgFeV4H1xWE4yeYGbfTp9nuegoJwfuqlAi96IYfR5Hqr5CVz2YMQ7r7AaAA5dWg-AVcsHudgACZj61j_q1VcV92AAA4gEWCgFcJqMVoHsCwLA3ygCzD3zMI_ZKuo36WAAPrOAaAALXPIHJy38Q5YF_p5CBeAIpwFbtQ-UTUmp0IYYgv-7QmrJjYa3cBXCYq8MQSg9o_8vJCJ_iI_-EUJGUOQZ5ZM_9eHoKVpg4WMBRbHkGquKgWsBB_29n7AOHCKoFCuM4Z-r8P6IJqgQOqDU_7YNwQQ4hpD0Gfg6hrLWOsoB6wIAbF0AgTZmxoHAbRIdyqShgAADWcFcaCrl3I3hEBEcBxQAAkwALEv3furHAv95BsOKOhExUS4lqXYIktAySbiRCuBkrJljck4DgIU-hxSlCrkiYifU8TKmmySSkup7AGnZKsXkogbS4AdNKYiH2fSqmoBqak-pmSxnNKgFMmZXSKoxPmRUxZyzhmjKaR_fJmyiklPcaol0WBZIUIJoY_2zhEHrOsauJx-DCEkOcCoswLM2bCTSBaMS4RJIRg0NzYCegwIQXuQVPoMB1zUFdFbPiNtXxKxVlMQqMxLCnXgApdoA5KAzAtHBeYDCsUsWgohdw4pyppwyOhIlGKZb2xgDJQWo47FuxZdpRSOE7YEVdiRAQXLVY9HUfZWA6BkWZimGiwVttZaESdiil2CtxXUtkjeU2MAiYcS4uEI2EAYBjAFfxQ1u9jWYpUg6BWRLPQKy5tQf0mCupinYja8SprzVB3INKt2cqnQaoILNAmABtdo2pzzJW6gAVR9pYdoABdDhbtEF6q6NakmJqzUjFBjc8gUB_B2FzbamEWBQLoDsIhRF8rXQPNrJ7dEUphTw2bQTCwDI4TfRud22sExbA4GiP44afiAkZHFM0Jyw64CjpuJKPAk7DYCBnTgDwqhIzzo8SHAm87F3jrwNYUIRAPAzqDoesdy7T3no3VujAO7CR7sHRYQ9fgMCwDvR4fUvxuhzsJPgSo368Bnt_f-zd27d1KzfQSEdBk5Y_r1SndAupUAmygIyK9QHEMaLA-elD2R0OYcZFBp9MHVyAx0aGhVAB1aAUA_0PXDZNLt3bD0p15VkcJcGD0EY8IhSg-QnpXC8oguDrB4iMiuIekldwcBSaw0yfdtZ5B7tXPxkdIVUAMudGhJydLdPwH0xkD46jeN8YsNQWCps7HDFCKNZwY4jN6aZZ3eG3BppokZBJt91BXMmfc7ZkUVxIwwDljQbU0RXCTS88HKzg6IDNB3QS868GF3yYXTZmiYUUghamDdJy7R7qPSMm-BLiW4NycHNl1AzhcsFAK_2zTiXqOqasx-kD-HwN_rluFyLOoYvviq50jr3aAv0qCxGAQfXGpda_T189c2_ODsm8ZxlM3zwYDC3F6a7GqvJZmhSmA6Waukrqw1rgBR1ywFoP1W6JWHrnzdWx1rVX31AayzgHL13Zy3bHDAFr424OA1G-9iaA632HssAACQTfqG8eC6MNG1HDoOZ4ZVA4rb6gtOA8F4WPOwAA1PKPBeCf3k9jfGpNKbOQ4FxOgCYsG1MdQJuq-jjGE0zHTrQSMtyCC4rgG98bR3-fYEF7VxT0nugAEJbqcf8bQaXyn2BHXYLLxXWQcC2Cu3lkXVXD14eQ5SNDGGZfi-rULlXjJX1vrB6z8yBMb0TpAlO9dq9Iy6H8Wug30OgPe_dwGt3a6WeDqN_-k3qGSMW_OwppTtuw_oTZ7WF3J6BMzufeBv34egOvHPTh8DSf2sE0_egUDvX_0Df0NF_xOfu13fYFrOIT1olBwizXmLOBhVy3PINnAzf8LUGiUn9nnqDloAFGe0jMASquCwFPogM-WWAe07VqHSWUsd6i13nvMA-8nn8W5McD3V8Lvz-8AnqrLCuBSPXuDg_W8k4Glr5XF-hMiaMuwC0GWcBw4R0jijmjrDnboOu1hDmLoeoHmumrsdCdmdgHiHoEjgMeP4IiqfndM9k9BVgdv7iOtAcgagQyF0JGJGFgEsIkEsIzhMHtpVh9kWKgFZHCIiPrGkEHPqNEHgCgfPpGBwRMCgWgJGI_kZG3pIPmFwBMEsE1JyEsF5KAR9o_AngBpUpPkQNPjLiTjNFEAvmoUvhoT_kQKoeocppNEYP2BkCwf4mkBvh9pxmOLZnztBO_sJi8PXOYQIJYbft0GYdQXgEsEoZDinvQZAWls0HHnVjPvYJ-mwUVpgWVq9nQfQUOl9lLtQJEdEUDkofIeDiDmptkY7gTCXrWMbgJkRmbjPpGFkYkWPowVMMwfoF4UHJUfob_t9oYcrLoTPpNGIc-mvhdtwTocYdhj_uEQIR0UMTABpqLillAUgcyurvAWEYgfrGuigRKMQQBo9qVi9s9PfngQugQWZkQYiqQeQS0FQRIXgLQbgZ1kBlxg4UDk4QJh_q4dQFcPUawd4eIUzn4ewAEepqPvbvkRYA7iCUEZOHQNOJ2hDl0AQH0OYDjvmuapZlZjgGieEatt2miTgK_rPhDgTDpm5jNrJl9lNpttOJic7kuq7isYEjOiSSOmnqunSavJSantSenuBvSb_mnj-jOpiQCVRugh1IidTFDDDJLhdl_GAkYXocpnAogtoYvjPnAuJquEoVcLnG1IGN6nmtTPJvipStKSHO0cqTLlcLioafAN3uBhkIqfPmafKQVIOFaQuqgLaQIIghqc6aSq6TaeenaauGkTLlEd6haS6QSgutsYgr9nlgVuGb6ZGTgNGUGfVo1v9k6Hdo1JaUmdsX8uZBDA6OKY5l6sTLakrACrRJIECqJLapIKKVzEBN7nzOBNinJOaKykpDqtyn6mMEqlLJaHvu6hzFgV_qKZGFlksMLokbCfCYjONowL2ficAm7MtGEu0MyaRJyKCXxl0GAMtN9kyXMR7mADudVvAAQKjgeVLrQKiKjmeW-sANid9oSdNtODgDprDt1vog-RYPjHxouQWsuYOgrGuU-Nmm-L-d2uTLkYmEubBd2qBcAJGsBXxuuT-m-GyVZk4cJHAElAIOApGjhe4HAKWrQNEu8Tec8S4U9OhKmlcghXBjcUkT2n4CcCMI4HolcPwBXJXMVKhVVgvJ2KMLqE3FxvEgJUkb4WJlhSxb4DABACkIQFcGgoxW1rJYJWxSJaYnBGJjgP_FqZJVZkJexWxCwHkFcMmDgBAqAmpVZguBFkPh5OwLnEZd2lBXBqmh5W-nudef0byRnqvN5RYDBXBlIL2f-Xuu1oWVMMWbDKxLqeWf8koKzFWTWSCnWS6poNQE2bzLCuxvwJuQIPwBJeNvwNTomsmiVdUW-vwEKJ_tQNVfwF0GRQRPxQhfwIsj7KvKIEgOwPwBAiMPQu1VVp1QMmgKKIpYQE1SAINcNSABDjuUoP1SHPwNmtVcxeVXGpVZYBtahfwDrDsCkEIA9CGnojNRMGLIgAOAKBnCNYlvwJsFNb1dxSAPAkNXAPdVZmNW5GgJYKSjNXNZ9SALJT9YMrUkQIDR9V9XxgdcKNOGZRAHkFDfNaDSAL4TNU1JXAAKT8CLVUaIL8A_p7VlUgAVW04k2jUgD1WvEBh9X8CuAeBwCUBYa0Aw1waPUKVKUvX9UgCKLQ0g37Xo2XEzX82o1C2wBgA838AWjvXi0dUgBeACAI2dhI3A2vVy3A1o0OVSZPTVXJho2HXbDHVtAYCcXCgXWbDHiIALxBC9X40hyAzyAswVTbBeGuqoC5UwoGDgTNr8CE5Mj03ATlAgjeAZAWi_jkiB1AL8Byz6JGQzVeQ4BJ1eT3X8DlCBoQAzB61B3dTsD5B_hVo-hR3HAwDkiUCJB5h5AFAQk4RAjEhVBh3FWC01hjVoAzVSSQpp0gCYDzARgWRmrq2JHNVajsoioc76CioIQzUAB6TUydOAAA7DDSPeaDNWRReSvYIKPdaOvVkKiHjTWE7SzA3dUB8AxIpR7V7aBD7SAN_CALQL6FkCVfwIGhKLQBaGyrMDMPwM7fIP_UAA",__position:1,__code:"<RangeInput />",__scope:{props:this?this.props:n,StylerProvider:u.a,RangeInput:w}},r.a.createElement(w,null)))}}])&&S(n.prototype,o),s&&S(n,s),t}();D.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./lib/range-input/style.json":function(e){e.exports={Container:{DEFAULT:{position:"relative",marginLeft:"8w4s",marginRight:"8w4s"}},Bar:{DEFAULT:{backgroundColor:"theme:primary",height:"16w4s",marginTop:"8w4s",marginBottom:"8w4s",borderRadius:"8w4s",width:"100%"}},Thumb:{DEFAULT:{position:"absolute",height:"32w4s",width:"32w4s",left:"-16w4s",borderRadius:"16w4s",elevation:3,backgroundColor:"theme:sheet"}}}}}]);
//# sourceMappingURL=lib-range-input-range-input.bb5015b357d257f312d7.js.map