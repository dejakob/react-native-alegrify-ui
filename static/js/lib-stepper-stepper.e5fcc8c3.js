(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./lib/config.js":function(e,n,t){"use strict";t.d(n,"a",function(){return i});var o=t("./node_modules/react-native-styler/index.js"),r=t("./node_modules/react-native-component-styler/index.js"),i={primary:"#4e4cc1",secondary:"#953495",body:"#000000",action:"#ffffff",error:"#900505",nav:"#333333",inactive:"#cccccc",sheet:"#fefefe",navInactiveItem:"#cccccc",navActiveItem:"#333333"},a={xs:2,s:4,m:8,l:16,xl:32};Object(o.c)({colors:i,spacing:a,fontSizes:{xxs:"8h4s",xs:"11h4s",s:"13h4s",m:"16h4s",l:"20h4s",xl:"24h4s",xxl:"32h4s"}}),Object(r.a)({spaceXS:{marginBottom:"".concat(a.xs,"h4s")},spaceS:{marginBottom:"".concat(a.s,"h4s")},spaceM:{marginBottom:"".concat(a.m,"h4s")},spaceL:{marginBottom:"".concat(a.l,"h4s")},spaceXL:{marginBottom:"".concat(a.xl,"h4s")}})},"./lib/stepper/stepper.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),i=t("./node_modules/@mdx-js/tag/dist/index.js"),a=(t("./node_modules/docz/dist/index.m.js"),t("./node_modules/react-native-styler/index.js")),l=(t("./lib/config.js"),t("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),c=t("./node_modules/react-native-web/dist/exports/Platform/index.js"),s=t("./node_modules/react-native-component-styler/index.js"),u=t("./node_modules/react-native-web/dist/exports/ScrollView/index.js"),p=t("./node_modules/react-native-web/dist/exports/View/index.js");function d(e,n){var t="function"===typeof e.children.map?e.children:r.a.Children.toArray(e.children);return r.a.createElement(u.a,{horizontal:!0,pagingEnabled:!0,onScrollBeginDrag:e.handleScrollStart,onScrollEndDrag:e.handleScrollEnd,showsHorizontalScrollIndicator:!1,scrollEventThrottle:16,style:n("ScrollContent"),contentContainerStyle:n("ScrollContent"),ref:e.attachScrollView},t.map(function(t,o){return r.a.createElement(p.a,{key:o,style:n("Item")},r.a.cloneElement(t,{addAnimation:function(n){return e.handleAddAnimationComponentForIndex(o,n)}}))}))}var m=d;d.__docgenInfo={description:"<StepperView />",methods:[],displayName:"StepperView"};var f=t("./lib/stepper/style.json");function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,n){return(S=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=Object(s.b)(["DEFAULT","BLEED"],f,m),x=function(e){function n(){var e,t,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t=this,(e=!(o=w(n).call(this))||"object"!==y(o)&&"function"!==typeof o?v(t):o).methods={attachScrollView:e.attachScrollView.bind(v(e)),handleScrollStart:e.handleScrollStart.bind(v(e)),handleScrollEnd:e.handleScrollEnd.bind(v(e)),handleAddAnimationComponentForIndex:e.handleAddAnimationComponentForIndex.bind(v(e))},e}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&S(e,n)}(n,o["PureComponent"]),t=n,(r=[{key:"componentWillMount",value:function(){this.animationComponents={},this.setState({index:0})}},{key:"attachScrollView",value:function(e){this.scrollView=e}},{key:"goToStep",value:function(e){this.scrollView&&"function"===typeof this.scrollView.scrollTo&&this.scrollView.scrollTo({x:e*l.a.get("window").width,y:0,animated:!0})}},{key:"handleAddAnimationComponentForIndex",value:function(e,n){this.animationComponents[e]=n}},{key:"handleScrollStart",value:function(e){var n=this;Object.keys(this.animationComponents).forEach(function(e){n.animationComponents[e]&&"function"===typeof n.animationComponents[e].hideHalfway&&n.animationComponents[e].hideHalfway()})}},{key:"handleScrollEnd",value:function(e){var n=this,t=l.a.get("window").width,o="android"===c.a.OS?e.nativeEvent.position+Math.round(e.nativeEvent.offset):Math.round(e.nativeEvent.contentOffset.x/t);o!==this.state.index&&this.setState({index:o}),Object.keys(this.animationComponents).forEach(function(e){n.animationComponents[e]&&"function"===typeof n.animationComponents[e].show&&n.animationComponents[e].show()})}},{key:"render",value:function(){return g(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){h(e,n,t[n])})}return e}({},this.props,this.methods))}}])&&b(t.prototype,r),i&&b(t,i),n}();function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function E(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,n){return!n||"object"!==j(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,n){return(k=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}x.__docgenInfo={description:"Stepper\n Animation components should be immediate child\n\n```jsx\n<Stepper></Stepper>\n```",methods:[{name:"attachScrollView",docblock:null,modifiers:[],params:[{name:"scrollView",type:null}],returns:null},{name:"goToStep",docblock:null,modifiers:[],params:[{name:"index",type:null}],returns:null},{name:"handleAddAnimationComponentForIndex",docblock:null,modifiers:[],params:[{name:"index",type:null},{name:"component",type:null}],returns:null},{name:"handleScrollStart",docblock:null,modifiers:[],params:[{name:"eventData",type:null}],returns:null},{name:"handleScrollEnd",docblock:null,modifiers:[],params:[{name:"eventData",type:null}],returns:null}],displayName:"Stepper",props:{children:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0,description:""}}},t.d(n,"default",function(){return V});var V=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=_(this,C(n).call(this,e))).layout=null,t}var t,o,l;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&k(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;O(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:n},r.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"stepper"}},"Stepper"),r.a.createElement(a.a,null,r.a.createElement("div",null)),r.a.createElement(i.MDXTag,{name:"pre",components:n},r.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<Stepper>\n    <View style={{ backgroundColor: 'green' }}></View>\n    <View style={{ backgroundColor: 'red' }}></View>\n    <View style={{ backgroundColor: 'blue' }}></View>\n</Stepper>\n")))}}])&&E(t.prototype,o),l&&E(t,l),n}();V.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./lib/stepper/style.json":function(e){e.exports={Item:{DEFAULT:{width:"100vw"}},Scroll:{DEFAULT:{flex:1}},ScrollContent:{DEFAULT:{paddingTop:"16h4s",paddingBottom:"16h4s"},BLEED:{paddingTop:0,paddingBottom:0}}}}}]);
//# sourceMappingURL=lib-stepper-stepper.bb5015b357d257f312d7.js.map