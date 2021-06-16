(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(15),__webpack_require__(147);var randomDate=function randomDate(){return new Date(+new Date-Math.floor(1e10*Math.random())).toString()},randomSize=function randomSize(){return"".concat(Math.floor(10*Math.random())," GB")},data=[{children:[{children:[{id:"file_1_1_1",label:"File 1-1-1",lastEdit:randomDate(),size:randomSize(),type:"file"},{id:"file_1_1_2",label:"File 1-1-2",lastEdit:randomDate(),size:randomSize(),type:"file"}],id:"folder_1_1",label:"Folder 1-1",lastEdit:randomDate(),size:randomSize(),type:"directory"},{id:"file_1_2",label:"File 1-2",lastEdit:randomDate(),size:randomSize(),type:"file"}],id:"folder_1",label:"Folder 1",lastEdit:randomDate(),size:randomSize(),type:"directory"},{children:[{id:"file_2_1",label:"File 2-1",lastEdit:randomDate(),size:randomSize(),type:"file"}],id:"folder_2",label:"Folder 2",lastEdit:randomDate(),size:randomSize(),type:"directory"}];__webpack_exports__.a=data},167:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(23),__webpack_require__(65),__webpack_require__(47),__webpack_require__(57),__webpack_require__(15),__webpack_require__(63),__webpack_require__(30),__webpack_require__(26),__webpack_require__(31),__webpack_require__(58),__webpack_require__(36),__webpack_require__(79);var react=__webpack_require__(0),index_esm=__webpack_require__(164);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=arr&&("undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"]);if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var hooks_useWindowSize=function useWindowSize(ref){var _useState2=_slicedToArray(Object(react.useState)({width:0,height:0}),2),windowSize=_useState2[0],setWindowSize=_useState2[1],handleResize=function handleResize(){setWindowSize(function getSize(){return{width:ref.current.offsetWidth,height:ref.current.offsetHeight}}())};return Object(react.useEffect)((function(){return handleResize(),window.addEventListener("resize",handleResize),function(){return window.removeEventListener("resize",handleResize)}}),[ref]),windowSize};function useDebounce_slicedToArray(arr,i){return function useDebounce_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useDebounce_iterableToArrayLimit(arr,i){var _i=arr&&("undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"]);if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useDebounce_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useDebounce_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useDebounce_arrayLikeToArray(o,minLen)}(arr,i)||function useDebounce_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useDebounce_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var hooks_useDebounce=function useDebounce(_ref){var value=_ref.value,delay=_ref.delay,_useState2=useDebounce_slicedToArray(Object(react.useState)(value),2),debouncedValue=_useState2[0],setDebouncedValue=_useState2[1];return Object(react.useEffect)((function(){var handler=setTimeout((function(){setDebouncedValue(value)}),delay);return function(){clearTimeout(handler)}}),[value,delay]),debouncedValue},lodash_orderBy=(__webpack_require__(87),__webpack_require__(88),__webpack_require__(40),__webpack_require__(41),__webpack_require__(233)),orderBy_default=__webpack_require__.n(lodash_orderBy),memoize_one_esm=__webpack_require__(72);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return flattenObject_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function flattenObject_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return flattenObject_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return flattenObject_arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function flattenObject_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var utils_flattenObject=Object(memoize_one_esm.a)((function(_ref2){var data=_ref2.data,expanded=_ref2.expanded,orderBy=_ref2.orderBy,result=[],orderedData=_toConsumableArray(data);if(orderBy){var ids=orderBy.ids,orders=orderBy.orders;orderedData=orderBy_default()(orderedData,ids,orders)}return orderedData.forEach((function(node){!function flattenNode(_ref){var node=_ref.node,depth=_ref.depth,result=_ref.result,expanded=_ref.expanded,orderBy=_ref.orderBy,id=node.id,children=node.children,collapsed=!expanded.includes(id);if(result.push(Object.assign({},node,{hasChildren:!!(children&&children.length>0),depth:depth,collapsed:collapsed})),children){var orderedChildren=_toConsumableArray(children);if(orderBy){var ids=orderBy.ids,orders=orderBy.orders;orderedChildren=orderBy_default()(orderedChildren,ids,orders)}collapsed||orderedChildren.forEach((function(child){flattenNode({node:child,depth:depth+1,result:result,expanded:expanded,orderBy:orderBy})}))}}({node:node,depth:1,result:result,expanded:expanded,orderBy:orderBy})})),result})),jsx_runtime=__webpack_require__(5),ArrowIcon_ArrowIcon=function ArrowIcon(_ref){var className=_ref.className;return Object(jsx_runtime.jsx)("svg",{className:"o2xp-svg-icon ".concat(className),focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(jsx_runtime.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})};ArrowIcon_ArrowIcon.displayName="ArrowIcon",ArrowIcon_ArrowIcon.__docgenInfo={description:"",methods:[],displayName:"ArrowIcon"};var src_ArrowIcon_ArrowIcon=ArrowIcon_ArrowIcon;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ArrowIcon/ArrowIcon.js"]={name:"ArrowIcon",docgenInfo:ArrowIcon_ArrowIcon.__docgenInfo,path:"src/ArrowIcon/ArrowIcon.js"});var src_ArrowIcon=src_ArrowIcon_ArrowIcon,Row_Row=function Row(_ref){var index=_ref.index,node=_ref.node,style=_ref.style,RowContent=_ref.RowContent,_onClick=_ref.onClick,hasChildren=node.hasChildren,label=node.label,collapsed=node.collapsed,left=20*node.depth,className="".concat(String(!hasChildren&&"o2xp-invisible")," ").concat(String(collapsed&&"o2xp-collapsed"));return Object(jsx_runtime.jsx)("div",{className:"o2xp-tree-view-row",role:"button",tabIndex:index,style:style,onClick:function onClick(){return _onClick(node)},onKeyPress:function onKeyPress(){return _onClick(node)},children:Object(jsx_runtime.jsxs)("div",{className:"o2xp-tree-view-row-content",style:{paddingLeft:"".concat(left,"px"),width:"calc(100% - ".concat(left,"px)")},children:[Object(jsx_runtime.jsx)(src_ArrowIcon,{className:className}),RowContent?Object(jsx_runtime.jsx)(RowContent,Object.assign({},node)):label]})})};Row_Row.displayName="Row",Row_Row.__docgenInfo={description:"",methods:[],displayName:"Row"};var TreeView_Row_Row=Object(react.memo)(Row_Row,index_esm.b);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TreeView/Row/Row.js"]={name:"Row",docgenInfo:Row_Row.__docgenInfo,path:"src/TreeView/Row/Row.js"});var TreeView_Row=TreeView_Row_Row;__webpack_require__(816);function TreeView_toConsumableArray(arr){return function TreeView_arrayWithoutHoles(arr){if(Array.isArray(arr))return TreeView_arrayLikeToArray(arr)}(arr)||function TreeView_iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||TreeView_unsupportedIterableToArray(arr)||function TreeView_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function TreeView_slicedToArray(arr,i){return function TreeView_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function TreeView_iterableToArrayLimit(arr,i){var _i=arr&&("undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"]);if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||TreeView_unsupportedIterableToArray(arr,i)||function TreeView_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function TreeView_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return TreeView_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?TreeView_arrayLikeToArray(o,minLen):void 0}}function TreeView_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var TreeView_TreeView=function TreeView(_ref){var data=_ref.data,RowContent=_ref.Row,userExpanded=_ref.expanded,onClick=_ref.onClick,orderBy=_ref.orderBy,_ref$itemSize=_ref.itemSize,itemSize=void 0===_ref$itemSize?32:_ref$itemSize,_useState2=TreeView_slicedToArray(Object(react.useState)([]),2),flattenedData=_useState2[0],setFlattenedData=_useState2[1],_useState4=TreeView_slicedToArray(Object(react.useState)([]),2),expanded=_useState4[0],setExpanded=_useState4[1];Object(react.useEffect)((function(){userExpanded&&setExpanded(userExpanded)}),[userExpanded]);var handleClick=function handleClick(node){if(onClick&&onClick(node),!userExpanded){var collapsed=node.collapsed,id=node.id;setExpanded(collapsed?[].concat(TreeView_toConsumableArray(expanded),[id]):expanded.filter((function(expandedId){return expandedId!==id})))}},ref=Object(react.useRef)(),_useDebounce=hooks_useDebounce({value:hooks_useWindowSize(ref),delay:100}),width=_useDebounce.width,height=_useDebounce.height;return Object(react.useEffect)((function(){setFlattenedData(utils_flattenObject({data:data,expanded:expanded,orderBy:orderBy}))}),[data,expanded,orderBy]),Object(jsx_runtime.jsx)("div",{className:"o2xp-tree-view",ref:ref,children:Object(jsx_runtime.jsx)(index_esm.a,{height:height,itemCount:flattenedData.length,itemSize:itemSize,width:width,itemKey:function itemKey(index){return flattenedData[index].id},children:function children(_ref2){var index=_ref2.index,style=_ref2.style;return Object(jsx_runtime.jsx)(TreeView_Row,{index:index,node:flattenedData[index],style:style,RowContent:RowContent,onClick:handleClick})}})})};TreeView_TreeView.displayName="TreeView",TreeView_TreeView.__docgenInfo={description:"",methods:[],displayName:"TreeView",props:{itemSize:{defaultValue:{value:"32",computed:!1},required:!1}}};var src_TreeView_TreeView=TreeView_TreeView;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TreeView/TreeView.js"]={name:"TreeView",docgenInfo:TreeView_TreeView.__docgenInfo,path:"src/TreeView/TreeView.js"});__webpack_exports__.a=src_TreeView_TreeView},232:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(41),__webpack_require__(15),__webpack_require__(26),__webpack_require__(31);var _storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(124),req=__webpack_require__(806);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(199)(module))},338:function(module,exports,__webpack_require__){var api=__webpack_require__(336),content=__webpack_require__(818);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},481:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);var _src_TreeView__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(167),_static_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(165),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(338),__webpack_require__(5)),DefaultStory=function DefaultStory(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{height:"100%",width:"100%"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_TreeView__WEBPACK_IMPORTED_MODULE_1__.a,{data:_static_data__WEBPACK_IMPORTED_MODULE_2__.a,expanded:["folder_1","folder_1_2","folder_1_1"]})})};DefaultStory.displayName="DefaultStory",DefaultStory.__docgenInfo={description:"",methods:[],displayName:"DefaultStory"},__webpack_exports__.a=DefaultStory,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Basics/DefaultStory.js"]={name:"DefaultStory",docgenInfo:DefaultStory.__docgenInfo,path:"stories/Basics/DefaultStory.js"})},490:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(41),__webpack_require__(23),__webpack_require__(65),__webpack_require__(87),__webpack_require__(88),__webpack_require__(47),__webpack_require__(57),__webpack_require__(15),__webpack_require__(63),__webpack_require__(30),__webpack_require__(26),__webpack_require__(31),__webpack_require__(58),__webpack_require__(36),__webpack_require__(79);var react=__webpack_require__(0),moment_timezone=__webpack_require__(482),moment_timezone_default=__webpack_require__.n(moment_timezone),Typography=__webpack_require__(843),IconButton=__webpack_require__(845),Folder=__webpack_require__(487),Folder_default=__webpack_require__.n(Folder),Description=__webpack_require__(486),Description_default=__webpack_require__.n(Description),GetApp=__webpack_require__(489),GetApp_default=__webpack_require__.n(GetApp),Settings=__webpack_require__(488),Settings_default=__webpack_require__.n(Settings),TreeView=__webpack_require__(167),Button=(__webpack_require__(822),__webpack_require__(331),__webpack_require__(40),__webpack_require__(844)),UnfoldMore=__webpack_require__(483),UnfoldMore_default=__webpack_require__.n(UnfoldMore),KeyboardArrowDown=__webpack_require__(485),KeyboardArrowDown_default=__webpack_require__.n(KeyboardArrowDown),jsx_runtime=__webpack_require__(5);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Header_HeaderSorter=function HeaderSorter(_ref2){var sortingInfos=_ref2.sortingInfos,index=sortingInfos.index,order=sortingInfos.order;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[-1===index?Object(jsx_runtime.jsx)(UnfoldMore_default.a,{}):Object(jsx_runtime.jsx)(KeyboardArrowDown_default.a,{style:"asc"===order?{transform:"scaleY(-1"}:{}}),Object(jsx_runtime.jsx)(Typography.a,{variant:"subtitle1",style:{opacity:order?.5:0},children:index+1})]})},Header_Header=function Header(_ref3){var orderBy=_ref3.orderBy,setOrderBy=_ref3.setOrderBy,getInfos=function getInfos(_ref4){var id=_ref4.id,index=orderBy.findIndex((function(el){return el.id===id}));return Object.assign({id:id,index:index},orderBy[index])},handleCLick=function handleCLick(_ref5){var id=_ref5.id,index=_ref5.index;setOrderBy(function createOrderBy(_ref){var index=_ref.index,id=_ref.id,orderBy=_ref.orderBy;if(-1===index){var newOrder={id:id,order:"asc"};return[].concat(_toConsumableArray(orderBy),[newOrder])}var order=orderBy[index].order,newOrderBy=_toConsumableArray(orderBy);return"asc"===order?(newOrderBy[index].order="desc",newOrderBy):(newOrderBy.splice(index,1),newOrderBy)}({index:index,id:id,orderBy:orderBy}))};return Object(jsx_runtime.jsxs)("div",{className:"explorer-row",children:[Object(jsx_runtime.jsxs)(Button.a,{className:"label",onClick:function onClick(){return handleCLick(getInfos({id:"label"}))},children:[Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",children:"Label"}),Object(jsx_runtime.jsx)(Header_HeaderSorter,{sortingInfos:getInfos({id:"label"})})]}),Object(jsx_runtime.jsxs)(Button.a,{className:"lastEdit",onClick:function onClick(){return handleCLick(getInfos({id:"lastEdit"}))},children:[Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",children:"Last Edit"}),Object(jsx_runtime.jsx)(Header_HeaderSorter,{sortingInfos:getInfos({id:"lastEdit"})})]}),Object(jsx_runtime.jsxs)(Button.a,{className:"size",onClick:function onClick(){return handleCLick(getInfos({id:"size"}))},children:[Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",children:"Size"}),Object(jsx_runtime.jsx)(Header_HeaderSorter,{sortingInfos:getInfos({id:"size"})})]})]})};Header_Header.displayName="Header",Header_Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{orderBy:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: string,\n  order: string\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"order",value:{name:"string",required:!0}}]}}],raw:"OrderBy[]"},description:""},setOrderBy:{required:!0,flowType:{name:"signature",type:"function",raw:"(OrderBy[]) => void",signature:{arguments:[{name:"",type:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: string,\n  order: string\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"order",value:{name:"string",required:!0}}]}}],raw:"OrderBy[]"}}],return:{name:"void"}}},description:""}}};var Basics_Header=Header_Header;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Basics/Header.js"]={name:"Header",docgenInfo:Header_Header.__docgenInfo,path:"stories/Basics/Header.js"});var data=__webpack_require__(165);__webpack_require__(338);function OverideStory_toConsumableArray(arr){return function OverideStory_arrayWithoutHoles(arr){if(Array.isArray(arr))return OverideStory_arrayLikeToArray(arr)}(arr)||function OverideStory_iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||OverideStory_unsupportedIterableToArray(arr)||function OverideStory_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=arr&&("undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"]);if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||OverideStory_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function OverideStory_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return OverideStory_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?OverideStory_arrayLikeToArray(o,minLen):void 0}}function OverideStory_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var OverideStory_OverideStory=function OverideStory(){var _useState2=_slicedToArray(Object(react.useState)([]),2),expanded=_useState2[0],setExpanded=_useState2[1],_useState4=_slicedToArray(Object(react.useState)([]),2),orderBy=_useState4[0],setOrderBy=_useState4[1],_useState6=_slicedToArray(Object(react.useState)({ids:["size","label"],orders:["desc","asc"]}),2),orderByLodashParams=_useState6[0],setOrderByLodashParams=_useState6[1],_useState8=_slicedToArray(Object(react.useState)([]),2),fakeLoading=_useState8[0],setFakeLoading=_useState8[1];Object(react.useEffect)((function(){var ids=["type"],orders=["asc"];orderBy.forEach((function(_ref){var id=_ref.id,order=_ref.order;ids.push(id),orders.push(order)})),setOrderByLodashParams({ids:ids,orders:orders})}),[orderBy]);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Basics_Header,{orderBy:orderBy,setOrderBy:setOrderBy}),Object(jsx_runtime.jsx)("div",{style:{height:"calc(100% - 48px)",width:"100%"},children:Object(jsx_runtime.jsx)(TreeView.a,{data:data.a,expanded:expanded,Row:function Row(_ref3){var id=_ref3.id,type=_ref3.type,label=_ref3.label,lastEdit=_ref3.lastEdit,size=_ref3.size,isFile="file"===type,isLoading=fakeLoading.includes(id);return Object(jsx_runtime.jsxs)("div",{className:"explorer-row",children:[!isLoading&&(isFile?Object(jsx_runtime.jsx)(Description_default.a,{color:"primary"}):Object(jsx_runtime.jsx)(Folder_default.a,{color:"secondary"})),isLoading&&Object(jsx_runtime.jsx)(Settings_default.a,{className:"rotate"}),Object(jsx_runtime.jsx)(Typography.a,{className:"label",variant:"caption",children:label}),Object(jsx_runtime.jsx)(IconButton.a,{children:Object(jsx_runtime.jsx)(GetApp_default.a,{color:"primary",disabled:!isFile,style:{opacity:isFile?1:0}})}),Object(jsx_runtime.jsx)(Typography.a,{className:"lastEdit",variant:"caption",children:moment_timezone_default.a.tz(lastEdit,"Europe/Berlin").format("DD/MM/YYYY HH:mm")}),Object(jsx_runtime.jsx)(Typography.a,{className:"size",variant:"caption",children:size})]})},onClick:function onOpen(_ref2){var id=_ref2.id,collapsed=_ref2.collapsed;"directory"===_ref2.type&&(collapsed?(setFakeLoading([].concat(OverideStory_toConsumableArray(fakeLoading),[id])),setTimeout((function(){setFakeLoading(fakeLoading.filter((function(fakeLoadingId){return fakeLoadingId!==id}))),setExpanded([].concat(OverideStory_toConsumableArray(expanded),[id]))}),1e3)):setExpanded(expanded.filter((function(expandId){return expandId!==id}))))},orderBy:orderByLodashParams,itemSize:48})})]})};OverideStory_OverideStory.__docgenInfo={description:"",methods:[],displayName:"OverideStory"};__webpack_exports__.a=OverideStory_OverideStory;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Basics/OverideStory.js"]={name:"OverideStory",docgenInfo:OverideStory_OverideStory.__docgenInfo,path:"stories/Basics/OverideStory.js"})},499:function(module,exports,__webpack_require__){__webpack_require__(500),__webpack_require__(657),__webpack_require__(658),module.exports=__webpack_require__(803)},567:function(module,exports){},658:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(124)},803:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(49),__webpack_require__(47),__webpack_require__(65),__webpack_require__(804),__webpack_require__(41),__webpack_require__(805);var _home_runner_work_react_tree_view_react_tree_view_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(128),_home_runner_work_react_tree_view_react_tree_view_node_modules_storybook_client_logger__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6),_home_runner_work_react_tree_view_react_tree_view_storybook_config_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(232);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(_home_runner_work_react_tree_view_react_tree_view_storybook_config_js__WEBPACK_IMPORTED_MODULE_8__).forEach((function(key){var value=_home_runner_work_react_tree_view_react_tree_view_storybook_config_js__WEBPACK_IMPORTED_MODULE_8__[key];switch(key){case"args":case"argTypes":return _home_runner_work_react_tree_view_react_tree_view_node_modules_storybook_client_logger__WEBPACK_IMPORTED_MODULE_7__.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(_home_runner_work_react_tree_view_react_tree_view_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_6__.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(_home_runner_work_react_tree_view_react_tree_view_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_6__.c)(loader,!1)}));case"parameters":return Object(_home_runner_work_react_tree_view_react_tree_view_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_6__.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(_home_runner_work_react_tree_view_react_tree_view_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_6__.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(_home_runner_work_react_tree_view_react_tree_view_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_6__.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},806:function(module,exports,__webpack_require__){var map={"./index.stories.js":807};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=806},807:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(124),_Basics_DefaultStory__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(481),_Basics_OverideStory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(490),storiesBasics=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("React tree view|Basics",module);storiesBasics.add("Default",_Basics_DefaultStory__WEBPACK_IMPORTED_MODULE_1__.a),storiesBasics.add("Overide",_Basics_OverideStory__WEBPACK_IMPORTED_MODULE_2__.a)}.call(this,__webpack_require__(199)(module))},816:function(module,exports,__webpack_require__){var api=__webpack_require__(336),content=__webpack_require__(817);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},817:function(module,exports,__webpack_require__){(exports=__webpack_require__(337)(!1)).push([module.i,".o2xp-tree-view {\n  overflow-x: hidden;\n  overflow-y: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.o2xp-tree-view .o2xp-tree-view-row {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n}\n\n.o2xp-tree-view .o2xp-tree-view-row:hover {\n  background-color: rgba(207, 208, 209, 1);\n  cursor: pointer;\n}\n\n.o2xp-tree-view .o2xp-tree-view-row .o2xp-tree-view-row-content {\n  position: absolute;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n}\n\n.o2xp-invisible {\n  opacity: 0;\n}\n\n.o2xp-svg-icon {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  font-size: 1.5rem;\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n} \n\n.o2xp-svg-icon.o2xp-collapsed {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n} \n",""]),module.exports=exports},818:function(module,exports,__webpack_require__){(exports=__webpack_require__(337)(!1)).push([module.i,"#root{\n    margin: 0;\n    height: 100vh;\n}\n\n.sb-main-padded{\n    padding: 0!important;\n} \n\n.explorer-row {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center;\n    width: 100%;\n}\n  \n.explorer-row:hover {\n    background-color: lightgray;\n}\n  \n.size {\n    margin-left: 20px;\n    width: 200px;\n    text-align: center;\n}\n  \n.label {\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n}\n  \n.rotate {\n    -webkit-animation: rotateAnim 4s linear infinite;\n            animation: rotateAnim 4s linear infinite;\n}\n  \n@-webkit-keyframes rotateAnim {\n    from {\n      -webkit-transform: roate(0deg);\n              transform: roate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n}\n  \n@keyframes rotateAnim {\n    from {\n      -webkit-transform: roate(0deg);\n              transform: roate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n}\n  ",""]),module.exports=exports},820:function(module,exports,__webpack_require__){var map={"./af":339,"./af.js":339,"./ar":340,"./ar-dz":341,"./ar-dz.js":341,"./ar-kw":342,"./ar-kw.js":342,"./ar-ly":343,"./ar-ly.js":343,"./ar-ma":344,"./ar-ma.js":344,"./ar-sa":345,"./ar-sa.js":345,"./ar-tn":346,"./ar-tn.js":346,"./ar.js":340,"./az":347,"./az.js":347,"./be":348,"./be.js":348,"./bg":349,"./bg.js":349,"./bm":350,"./bm.js":350,"./bn":351,"./bn-bd":352,"./bn-bd.js":352,"./bn.js":351,"./bo":353,"./bo.js":353,"./br":354,"./br.js":354,"./bs":355,"./bs.js":355,"./ca":356,"./ca.js":356,"./cs":357,"./cs.js":357,"./cv":358,"./cv.js":358,"./cy":359,"./cy.js":359,"./da":360,"./da.js":360,"./de":361,"./de-at":362,"./de-at.js":362,"./de-ch":363,"./de-ch.js":363,"./de.js":361,"./dv":364,"./dv.js":364,"./el":365,"./el.js":365,"./en-au":366,"./en-au.js":366,"./en-ca":367,"./en-ca.js":367,"./en-gb":368,"./en-gb.js":368,"./en-ie":369,"./en-ie.js":369,"./en-il":370,"./en-il.js":370,"./en-in":371,"./en-in.js":371,"./en-nz":372,"./en-nz.js":372,"./en-sg":373,"./en-sg.js":373,"./eo":374,"./eo.js":374,"./es":375,"./es-do":376,"./es-do.js":376,"./es-mx":377,"./es-mx.js":377,"./es-us":378,"./es-us.js":378,"./es.js":375,"./et":379,"./et.js":379,"./eu":380,"./eu.js":380,"./fa":381,"./fa.js":381,"./fi":382,"./fi.js":382,"./fil":383,"./fil.js":383,"./fo":384,"./fo.js":384,"./fr":385,"./fr-ca":386,"./fr-ca.js":386,"./fr-ch":387,"./fr-ch.js":387,"./fr.js":385,"./fy":388,"./fy.js":388,"./ga":389,"./ga.js":389,"./gd":390,"./gd.js":390,"./gl":391,"./gl.js":391,"./gom-deva":392,"./gom-deva.js":392,"./gom-latn":393,"./gom-latn.js":393,"./gu":394,"./gu.js":394,"./he":395,"./he.js":395,"./hi":396,"./hi.js":396,"./hr":397,"./hr.js":397,"./hu":398,"./hu.js":398,"./hy-am":399,"./hy-am.js":399,"./id":400,"./id.js":400,"./is":401,"./is.js":401,"./it":402,"./it-ch":403,"./it-ch.js":403,"./it.js":402,"./ja":404,"./ja.js":404,"./jv":405,"./jv.js":405,"./ka":406,"./ka.js":406,"./kk":407,"./kk.js":407,"./km":408,"./km.js":408,"./kn":409,"./kn.js":409,"./ko":410,"./ko.js":410,"./ku":411,"./ku.js":411,"./ky":412,"./ky.js":412,"./lb":413,"./lb.js":413,"./lo":414,"./lo.js":414,"./lt":415,"./lt.js":415,"./lv":416,"./lv.js":416,"./me":417,"./me.js":417,"./mi":418,"./mi.js":418,"./mk":419,"./mk.js":419,"./ml":420,"./ml.js":420,"./mn":421,"./mn.js":421,"./mr":422,"./mr.js":422,"./ms":423,"./ms-my":424,"./ms-my.js":424,"./ms.js":423,"./mt":425,"./mt.js":425,"./my":426,"./my.js":426,"./nb":427,"./nb.js":427,"./ne":428,"./ne.js":428,"./nl":429,"./nl-be":430,"./nl-be.js":430,"./nl.js":429,"./nn":431,"./nn.js":431,"./oc-lnc":432,"./oc-lnc.js":432,"./pa-in":433,"./pa-in.js":433,"./pl":434,"./pl.js":434,"./pt":435,"./pt-br":436,"./pt-br.js":436,"./pt.js":435,"./ro":437,"./ro.js":437,"./ru":438,"./ru.js":438,"./sd":439,"./sd.js":439,"./se":440,"./se.js":440,"./si":441,"./si.js":441,"./sk":442,"./sk.js":442,"./sl":443,"./sl.js":443,"./sq":444,"./sq.js":444,"./sr":445,"./sr-cyrl":446,"./sr-cyrl.js":446,"./sr.js":445,"./ss":447,"./ss.js":447,"./sv":448,"./sv.js":448,"./sw":449,"./sw.js":449,"./ta":450,"./ta.js":450,"./te":451,"./te.js":451,"./tet":452,"./tet.js":452,"./tg":453,"./tg.js":453,"./th":454,"./th.js":454,"./tk":455,"./tk.js":455,"./tl-ph":456,"./tl-ph.js":456,"./tlh":457,"./tlh.js":457,"./tr":458,"./tr.js":458,"./tzl":459,"./tzl.js":459,"./tzm":460,"./tzm-latn":461,"./tzm-latn.js":461,"./tzm.js":460,"./ug-cn":462,"./ug-cn.js":462,"./uk":463,"./uk.js":463,"./ur":464,"./ur.js":464,"./uz":465,"./uz-latn":466,"./uz-latn.js":466,"./uz.js":465,"./vi":467,"./vi.js":467,"./x-pseudo":468,"./x-pseudo.js":468,"./yo":469,"./yo.js":469,"./zh-cn":470,"./zh-cn.js":470,"./zh-hk":471,"./zh-hk.js":471,"./zh-mo":472,"./zh-mo.js":472,"./zh-tw":473,"./zh-tw.js":473};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=820}},[[499,1,2]]]);