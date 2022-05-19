"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[403],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7387:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Migrating (Coming from other Repositories)",permalink:"/migrating/"},m=void 0,l={unversionedId:"migrating",id:"migrating",title:"Migrating (Coming from other Repositories)",description:"If you are coming from another repository, and want to come here, here is what you need to do",source:"@site/docs/migrating.md",sourceDirName:".",slug:"/migrating",permalink:"/docs/migrating",draft:!1,editUrl:"https://github.com/notAperson535/OneClick-macOS-Simple-KVM-docs/tree/main/packages/create-docusaurus/templates/shared/docs/migrating.md",tags:[],version:"current",frontMatter:{title:"Migrating (Coming from other Repositories)",permalink:"/migrating/"},sidebar:"docs",previous:{title:"FAQs",permalink:"/docs/FAQs"},next:{title:"Setting up the host machine",permalink:"/docs/category/setting-up-the-host-machine"}},s={},u=[{value:"Coming from macOS-Simple-KVM",id:"coming-from-macos-simple-kvm",level:3},{value:"Coming from OSX-KVM",id:"coming-from-osx-kvm",level:3},{value:"You&#39;re Done!",id:"youre-done",level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you are coming from another repository, and want to come here, here is what you need to do"),(0,i.kt)("h3",{id:"coming-from-macos-simple-kvm"},"Coming from macOS-Simple-KVM"),(0,i.kt)("p",null,"If you are coming from macOS-Simple-KVM, maybe to upgrade to Big Sur or Monterey, it will be very easy. All you have to do is place the BaseSystem file and the file that has macOS installed into the OneClick-macOS-Simple-KVM folder. Then rename the file that has macOS installed (usually MyDisk.qcow2) to macOS.qcow2. Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"./basic.sh")," and enjoy."),(0,i.kt)("h3",{id:"coming-from-osx-kvm"},"Coming from OSX-KVM"),(0,i.kt)("p",null,"If you want to come from OSX-KVM, maybe for stability, it will be a little harder and take a little longer. First, place the BaseSystem file and the file that has macOS installed into the OneClick-macOS-Simple-KVM folder. Then, rename the file that has macOS installed (usually mac_hdd_ng.img) to macOS.img. Then run this command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"qemu-img convert -f qcow2 -O qcow2 macOS.img macOS.qcow2\n")),(0,i.kt)("p",null,"Once that has completed, delete the macOS.img file. Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"./basic.sh")," and enjoy."),(0,i.kt)("h2",{id:"youre-done"},"You're Done!"),(0,i.kt)("p",null,"To fine-tune the system and improve performance, look in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," folder for more information on ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide-performance"},"adding memory"),", setting up ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide-networking"},"bridged networking"),", adding ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide-passthrough"},"passthrough hardware (for GPUs)"),", tweaking ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide-screen-resolution"},"screen resolution"),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide-passthrough"},"enabling sound features"),"."))}d.isMDXComponent=!0}}]);