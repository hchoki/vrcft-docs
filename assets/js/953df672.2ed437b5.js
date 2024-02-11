"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[5868],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},65130:(e,t,a)=>{a.d(t,{b:()=>i,k:()=>l});var n=a(67294),r=a(902);const o=n.createContext(null);function i(e){let{children:t,content:a}=e;const r=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(o.Provider,{value:r},t)}function l(){const e=(0,n.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}},90351:(e,t,a)=>{a.d(t,{F4:()=>i,d9:()=>s,gm:()=>c,xb:()=>l,y$:()=>d});var n=a(65130),r=a(67294),o=a(52263);function i(e){let{children:t}=e;const{metadata:a}=(0,n.k)(),{editUrl:o}=a;return r.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},t)}function l(e){let{children:t,to:a,append:n=""}=e;const{siteConfig:i}=(0,o.Z)(),l=i.customFields[a.toLowerCase()];return r.createElement("a",{href:l.href+n,target:"_blank",rel:"noopener noreferrer"},t??l.label)}function c(e){let{children:t,cause:a}=e;return r.createElement("div",null,r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Cause")),r.createElement("td",{style:{textAlign:"left",width:"100vh"}},a)),r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Solution")),r.createElement("td",{style:{textAlign:"left",width:"100vh"}},t)))))}const s=e=>{let{children:t,color:a}=e;return r.createElement("span",{style:{color:a}},t)},d=e=>{let{children:t,color:a}=e;return r.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},78506:(e,t,a)=>{a.r(t),a.d(t,{TextColor:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(90351);const i={},l="VRCFaceTracking Program",c={unversionedId:"vrcft-software/vrcft",id:"version-v4.0/vrcft-software/vrcft",title:"VRCFaceTracking Program",description:"VRChat has no native implementation of Vive' SRanipal software needed to interface with the Facial Tracker nor Vive Pro Eye, or any other face tracking hardware,",source:"@site/versioned_docs/version-v4.0/vrcft-software/vrcft.mdx",sourceDirName:"vrcft-software",slug:"/vrcft-software/vrcft",permalink:"/docs/v4.0/vrcft-software/vrcft",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/versioned_docs/version-v4.0/vrcft-software/vrcft.mdx",tags:[],version:"v4.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tracking Module SDK",permalink:"/docs/v4.0/vrcft-software/vrcft-sdk/tracking-module"},next:{title:"Hardware Guides",permalink:"/docs/v4.0/category/hardware-guides"}},s={},d=[{value:"Getting started with VRCFaceTracking",id:"getting-started-with-vrcfacetracking",level:2},{value:"VRCFaceTracking &quot;Housekeeping&quot;",id:"vrcfacetracking-housekeeping",level:2},{value:"Changing the OSC IP and Ports",id:"changing-the-osc-ip-and-ports",level:3},{value:"Unblocking Downloaded Dynamic Link Libraries (.dlls)",id:"unblocking-downloaded-dynamic-link-libraries-dlls",level:3},{value:"Resetting VRChat OSC Configs",id:"resetting-vrchat-osc-configs",level:3},{value:"Common Problems and How to Solve Them",id:"common-problems-and-how-to-solve-them",level:2}],u=e=>{let{children:t,color:a}=e;return(0,r.kt)("span",{style:{color:a}},t)},p={toc:d,TextColor:u},h="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vrcfacetracking-program"},"VRCFaceTracking Program"),(0,r.kt)("p",null,'VRChat has no native implementation of Vive\' SRanipal software needed to interface with the Facial Tracker nor Vive Pro Eye, or any other face tracking hardware,\nwhich means there must be an intermediary software accessing the face tracking data and sending it to VRC via OSC.\nVRCFaceTracking fulfills this intermediary role, creating a standard face-tracking parameter set for use with VRChat avatars.\nVRCFaceTracking works by the concept of "modules", which are add-on files that let the program pull eye and face tracking data from different sources.\nVRCFaceTracking has the SRanipal module built-in as default, but other modules for other headsets or hardware can be added. '),(0,r.kt)("h2",{id:"getting-started-with-vrcfacetracking"},"Getting started with VRCFaceTracking"),(0,r.kt)("p",null,"Download the latest version of the program from the ",(0,r.kt)(o.xb,{to:"github",append:"/tree/v4.0.0",mdxType:"CustomLink"})," repo!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are using a Vive Facial Tracker or other Vive hardware that relies on SRanipal, simply launch the downloaded VRCFaceTracking executable.\nIt will prompt you to start SRanipal if it wasn't running already. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are using some other hardware such as a Varjo headset or HP Reverb Omnicept, you will need to download the respective module, add it to the VRCFaceTracking CustomLibs folder, then run the program.\nYou can find more instructions specific to your hardware on its documentation page here or Github page. "))),(0,r.kt)("p",null,'To be able to use VRCFT, OSC must be enabled in VRChat.\nVRCFaceTracking will automatically set OSC to "Enabled" if it detects that it was not already, but you can (and should) also enable it manually to avoid having to restart the game for the automatic switch to take effect.'),(0,r.kt)("h2",{id:"vrcfacetracking-housekeeping"},'VRCFaceTracking "Housekeeping"'),(0,r.kt)("p",null,"These are a few small things that are good to be aware of when using face tracking with VRCFT and VRChat."),(0,r.kt)("h3",{id:"changing-the-osc-ip-and-ports"},"Changing the OSC IP and Ports"),(0,r.kt)("p",null,"Generally, you shouldn't need to change the default OSC address and ports to use VRCFaceTracking.\nHowever, there are situations where you might want to, so in case you do: "),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--osc=[output port]:[ip address]:[input port]")," as launch argument."),(0,r.kt)("p",null,"For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"--osc=9000:127.0.0.1:9100")," is the common option when using VRCFaceTracking with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SutekhVRC/VOR"},"VRChatOSCRouter")),(0,r.kt)("p",null,'For an easy way to handle with command argument, create a shortcut to the VRCFaceTracking program, right-click the newly-created shortcut and open "Properties", and add the line to the shortcut "Target".\nMake sure to maintain a space between the flags and what was in the box already, and keep the flags outside of the quotation marks of the file path if they exist.\nRun VRCFaceTracking using this shortcut will start the program using the given OSC address and port settings. '),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"VRCFT shortcut example",src:a(72024).Z,width:"360",height:"222"})),(0,r.kt)("h3",{id:"unblocking-downloaded-dynamic-link-libraries-dlls"},"Unblocking Downloaded Dynamic Link Libraries (.dlls)"),(0,r.kt)("p",null,"When downloading ",(0,r.kt)("inlineCode",{parentName:"p"},".dll")," files from the Internet, Windows may block them from being able to be used for security reasons.\nIn case this happens, follow these simple steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Right-click on the .dll file, open "Properties"'),(0,r.kt)("li",{parentName:"ol"},"Down at the bottom of the Properties window check the checkbox option for 'Security' to \"Unblock\".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'   If you don\'t see a checkbox to "Unblock", then it was not blocked automatically by Windows and you can safely continue.')),(0,r.kt)("h3",{id:"resetting-vrchat-osc-configs"},"Resetting VRChat OSC Configs"),(0,r.kt)("p",null,"Because of the sheer number of possible face tracking parameter configurations, VRCFaceTracking does not blindly send OSC messages for every possible parameter.\nUntil VRChat releases the ",(0,r.kt)("a",{parentName:"p",href:"https://ask.vrchat.com/t/developer-update-2-september-2022/13470#oscquery-9"},'"OSC Query" update'),", which is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vrchat-community/osc/issues/143#issuecomment-1304419543"},"currently in closed beta"),",\nVRCFaceTracking will rely on the static OSC config .json generated for each avatar to know what parameters to send.\nThis configuration file is ",(0,r.kt)("strong",{parentName:"p"},"never")," updated automatically, it must be reset manually to force VRC to generate an up-to-date version or manually edited yourself."),(0,r.kt)("p",null,"There are two ways of resetting the configs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using the OSC Radial Menu (In-game)"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"While in VRC, open the Radial Menu."),(0,r.kt)("li",{parentName:"ol"},"Navigate to Options -> OSC "),(0,r.kt)("li",{parentName:"ol"},'Make sure that "Enabled" is set to True (white bar on the right side). Setting this will cause an avatar refresh. '))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deleting the config .json files"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Navigate to your AppData folder. You can get to ",(0,r.kt)("inlineCode",{parentName:"li"},"AppData\\Roaming")," by typing ",(0,r.kt)("inlineCode",{parentName:"li"},"%appdata%")," into the search bar in the Windows Start Menu, or in the address bar of any Explorer window."),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"..\\AppData\\LocalLow\\VRChat\\VRChat\\")," and delete the OSC folder."),(0,r.kt)("li",{parentName:"ol"},"Restart VRC or refresh your avatar (by resetting or swapping avatar)")))),(0,r.kt)("h2",{id:"common-problems-and-how-to-solve-them"},"Common Problems and How to Solve Them"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"VRCFaceTracking isn't starting at all")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cause: VRCFaceTracking is likely trying to access a module library (.dll) that is blocked by Windows Security."),(0,r.kt)("li",{parentName:"ul"},"Solution: ",(0,r.kt)("a",{parentName:"li",href:"#unblocking-downloaded-dynamic-link-libraries-dlls"},"unblocking downloaded dynamic link libraries")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"VRCFaceTracking is crashing when I join a world / change avatars")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cause: VRCFaceTracking failed to parse an invalid avatar OSC config."),(0,r.kt)("li",{parentName:"ul"},"Solution: Clear out your VRChat Avatar OSC folder. Follow option 2 in ",(0,r.kt)("a",{parentName:"li",href:"#resetting-vrchat-osc-configs"},"resetting OSC config")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"My personally uploaded Avatar loads 0 parameters!")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cause: Your avatar either doesn't have face tracking parameters, or is using an old OSC config that didn't have the face tracking parameters."),(0,r.kt)("li",{parentName:"ul"},"Solution: Follow option 1 and/or 2 in ",(0,r.kt)("a",{parentName:"li",href:"#resetting-vrchat-osc-configs"},"resetting OSC config"),". If completely clearing the OSC configs still results in loading 0 parameters, the avatar does not use VRCFT-compatible parameters.")))),(0,r.kt)("p",null,"Don't see your problem here? Make sure to check the page(s) specific to your hardware setup.\nIf you still cannot find an answer to your specific problem, create a help request in the ",(0,r.kt)(u,{color:"#5763ee",mdxType:"TextColor"},"#setup-help-forum")," in the ",(0,r.kt)(o.xb,{to:"discord",mdxType:"CustomLink"}),"."))}m.isMDXComponent=!0},72024:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vrcft_shortcut_example-4130e280bbff268603b1f59206726aff.png"}}]);