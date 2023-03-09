var e={methods:{now:()=>(new Date).getTime(),parse:e=>e},model:{},config:{},zones:{}};class t{constructor(t,r){Object.defineProperty(this,"world",{value:e});let n=e.methods.parse(t,r,e);this._epoch=n.epoch,this.tz=n.tz,Object.defineProperty(this,"isSpacetime",{value:!0})}get epoch(){if(this.isRunning&&null!==this.startEpoch){let e=this.world.now.epoch()-this.startEpoch;return this._epoch+e}return this._epoch}}t.prototype._from=function(e,r){let n=new t(e,r||this.tz);return n.started=this.started,n.world=this.world,n};var r=t;const n=(e,t)=>new r(e,t);n.world=e,n.plugin=function(e){Object.assign(n.world.zones,e.zones||{}),Object.assign(n.world.config,e.config||{}),Object.assign(n.world.model,e.model||{}),Object.assign(r.prototype,e.api||{}),Object.assign(n.world.methods,e.methods||{})},n.version="7.4.0",n.now=e=>new r(null,e),n.today=e=>n.now(e).startOf("day"),n.tomorrow=e=>n.today(e).add(1,"day"),n.yesterday=e=>n.today(e).minus(1,"day");var o=n;var a={months:[{long:"January",short:"Jan",len:31},{long:"February",short:"Feb",len:28},{long:"March",short:"Mar",len:31},{long:"April",short:"Apr",len:30},{long:"May",short:"May",len:31},{long:"June",short:"Jun",len:30},{long:"July",short:"Jul",len:31},{long:"August",short:"Aug",len:31},{long:"September",short:"Sep",len:30},{long:"October",short:"Oct",len:31},{long:"November",short:"Nov",len:30},{long:"December",short:"Dec",len:31}],days:[{long:"sunday",short:"sun"},{long:"monday",short:"mon"},{long:"tuesday",short:"tue"},{long:"wednesday",short:"wed"},{long:"thursday",short:"thu"},{long:"friday",short:"fri"},{long:"saturday",short:"sat"}],time:{am:"am",pm:"pm"},ms:{SECOND:1e3,MINUTE:6e4,HOUR:36e5,DAY:864e5,YEAR:31536e6}};let s={"Etc/GMT":{offset:0,hem:"n"}};for(let e=-14;e<=14;e+=.5){let t=e;t>0&&(t="+"+t);let r="Etc/GMT"+t;s[r]={offset:-1*e,hem:"n"},s["UTC/GMT"+t]=s[r]}s["Etc/GMT+0"]=s["Etc/GMT"],s["Etc/GMT-0"]=s["Etc/GMT"];var l=s;var i=function(e,t,r){let n=function(e){let t=e%100;return(t+parseInt(t/4,10))%7}(e),o=[null,0,3,3,6,1,4,6,2,5,0,3,5][t];let a=function(e){if(e<1752)return(18-parseInt(e/100,10))%7;let t=parseInt(e/100,10);return{17:4,18:2,19:0,20:6,21:4,22:2,23:0}[String(t)]||0}(e),s=r,l=function(e){return!0==(e%4==0&&e%100!=0||e%400==0)?-1:0}(e);return(n+o+a+s+l)%7};const u=e=>"number"==typeof e;let m={sept:9};var c=function(e){return u(e)?e:(e=e.toLowerCase().trim(),m[e])};const h=/^([+-])?([0-9]{1,2}):?([0-9]{2})?$/;var d=e=>{if(!e)return null;if("Z"===e||"z"===e)return 0;let t=e.match(h);if(null!==t){let[,e,r,n]=t;r=parseInt(r||"",10)||0,n=parseInt(n||"",10)||0,n/=60;let o=r+n;return"-"===e&&(o*=-1),o}return null};var f=function(e){if(u(e))return e;e=(e=(e=e.trim().toLowerCase()).replace(/^[0:]+/,"")).replace(/([0-9])h$/,"$1");let t=parseInt(e,10);if(t)return t;let r=e.match(/([0-9]+) ?(am|pm)$/);if(null!==r&&r[1]){let e=Number(r[1]);return"pm"===r[2]&&(e+=12),e}return 0};const p={hour:0,minute:0,second:0,millisecond:0};var g=(e="",t)=>{t=Object.assign({},p,t);let r=(e=e.replace(/^\s+/,"").toLowerCase()).match(/([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:.]?([0-9]{1,4})?/);if(null!==r){let n=Number(r[1]);if(n<0||n>24)return t;let o=Number(r[2]);if(r[2].length<2||o<0||o>59)return t;t.hour=n,t.minute=o,t.second=Number(r[3])||0,t.millisecond=function(e=""){return(e=String(e)).length>3?e=e.substring(0,3):1===e.length?e+="00":2===e.length&&(e+="0"),Number(e)||0}(r[4]);let a=e.match(/[\\b0-9] ?(am|pm)\b/);return null!==a&&"pm"===a[1]&&(t.hour+=12),t}let n=f(e);return null!==n&&(t.hour=n),t};var y=(e="")=>{if(u(e))return e;if(e=e.trim(),!0===/^'[0-9][0-9]$/.test(e)){let t=Number(e.replace(/'/,""));return t>50?1900+t:2e3+t}let t=parseInt(e,10);return t=t||(new Date).getFullYear(),t};var b=(e="")=>{if(u(e))return e;return e=(e=(e=e.trim()).replace(/^0+/,"")).replace(/([0-9])(st|nd|rd|th)$/i,"$1"),parseInt(e,10)||1},w=[].concat([{reg:/^(-?0{0,2}[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9\-+:]+)?$/i,parse:e=>{let t={year:y(e[1]),month:parseInt(e[2],10),date:b(e[3])};return t.offset=d(e[5]),t=g(e[4],t),t}},{reg:/^([0-9]{4})[-/. ]([0-9]{1,2})[-/. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,parse:e=>{let t={year:y(e[1]),month:parseInt(e[2],10),date:b(e[3])};return t.month>12&&(t.date=b(e[2]),t.month=parseInt(e[3],10)),t=g(e[4],t),t}},{reg:/^([0-9]{4})[-/. ]([a-z]+)[-/. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,parse:e=>{let t={year:y(e[1]),month:c(e[2]),date:b(e[3]||"")};return t=g(e[4],t),t}}],[{reg:/^([0-9]{1,2})[-/.]([0-9]{1,2})[-/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2} ?(am|pm|gmt))?$/i,parse:e=>{let t=parseInt(e[1],10);return{date:b(e[2]),month:t,year:y(e[3])}}},{reg:/^([a-z]+)[-/. ]([0-9]{1,2})[-/. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,parse:e=>{let t={year:y(e[3]),month:c(e[1]),date:b(e[2]||"")};return t=g(e[4],t),t}},{reg:/^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i,parse:e=>{let t={year:y(e[3]),month:c(e[1]),date:b(e[2]||"")};return t=g(e[4],t),t}},{reg:/^([a-z]+) ([0-9]{1,2})( [0-9:]+)?( \+[0-9]{4})?( [0-9]{4})?$/i,parse:e=>{let t={year:y(e[5]),month:c(e[1]),date:b(e[2]||"")};return t=g(e[4],t),t}}],[{reg:/^([0-9]{1,2})[-/]([a-z]+)[-/]?([0-9]{4})?$/i,parse:e=>{let t={year:y(e[3]),month:c(e[2]),date:b(e[1]||"")};return t=g(e[4],t),t}},{reg:/^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2} ?(am|pm|gmt))?$/i,parse:e=>{let t={year:y(e[3]),month:c(e[2]),date:b(e[1])};return t.month?(t=g(e[4],t),t):null}},{reg:/^([0-9]{1,2})[ /]([a-z]+)[ /]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,parse:e=>{let t={date:b(e[1]),month:c(e[2]),year:y(e[3])};return t=g(e[4],t),t}}],[{reg:/^([0-9]{4})[-/]([0-9]{2})$/,parse:e=>({year:y(e[1]),month:parseInt(e[2],10)})},{reg:/^([a-z]+) ([0-9]{4})$/i,parse:e=>({year:y(e[2]),month:c(e[1])})},{reg:/^(q[0-9])( of)?( [0-9]{4})?/i,parse:e=>{if(e[1],e[3]){return{year:y(e[3])}}return{}}},{reg:/^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i,parse:e=>{if(e[1],e[3]){return{year:y(e[3])}}return{}}},{reg:/^[0-9,]+ ?b\.?c\.?$/i,parse:e=>{let t=e[0]||"";return t=t.replace(/^([0-9,]+) ?b\.?c\.?$/i,"-$1").trim(),{year:parseInt(t.trim(),10)}}},{reg:/^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i,parse:e=>{let t=e[0]||"";return t=t.replace(/,/g,""),{year:parseInt(t.trim(),10)}}},{reg:/^[0-9]{4}( ?a\.?d\.?)?$/i,parse:e=>({year:y(e[0])})}]);const v=["year","month","date","hour","minute","second","millisecond"];var z=function(e,t,r){if(n=e,"[object Array]"===Object.prototype.toString.call(n)){let t=v.reduce(((t,r,n)=>(t[r]=e[n],t)),{});return t.month&&(t.month=c(t.month)),t}var n,o;if(e&&(o=e,"[object Object]"===Object.prototype.toString.call(o))){if(!0===e.isSpacetime)return e.clone();return Object.assign({},e)}if((e=>"string"==typeof e)(e)){let t=function(e,t){e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/([0-9])(th|rd|st|nd)\b/,"$1")).replace(/\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i,"")).replace(/,/g,"")).replace(/ +/g," ").trim()).trim();for(let t=0;t<w.length;t+=1){let r=e.match(w[t].reg);if(null!==r){let e=w[t].parse(r);if(e)return e}}return{}}(e);return null!==t.offset&&void 0!==t.offset&&(t.offset<0?Math.abs(t.offset):t.offset),t}return{}};var O=function(e,t,r){return!(!e.year&&0===!e.year)&&(!(!e.month||e.month<1||e.month>12)&&(!(!e.date||e.date<1||e.date>31)&&(!(e.hour&&e.hour<0&&e.hour>24)&&(!(e.minute&&e.minute<0&&e.minute>60)&&(!(e.second&&e.second<0&&e.second>60)&&(!(e.millisecond&&e.millisecond<0&&e.millisecond>1e3)&&!(e.offset&&e.offset<-14&&e.offset>14)))))))};var E=function(e,t,r){if(t=r.methods.parseTz(t,r),null==e)return{epoch:r.now.epoch(),tz:t};if("number"==typeof(n=e)&&isFinite(n))return r.config.minimumEpoch&&e<r.config.minimumEpoch&&e>0&&(e*=1e3),{epoch:e,tz:t};var n;let o=z(e);if(!1===O(o))throw new Error(`Error: invalid spacetime input: '${e}'`);if(!t){if(o.offset){let e=r.methods.parseTz(o.offset,r);r.zones.hasOwnProperty(e)&&(t=e)}t=t||r.methods.fallbackTz(r)}return{epoch:r.methods.getEpoch(o,t,r),tz:t}};var $=function(e,t){let r=t.zones||{};if(!0===("number"==typeof(n=e)&&isFinite(n))){let t=e;return 0===t?"Etc/GMT":t<0?`Etc/GMT+${Math.abs(t)}`:"Etc/GMT"+-1*t}var n;return e&&r.hasOwnProperty(e)?e:"z"===e||"Z"===e?"Etc/GMT":null};let T=(new Date).getTimezoneOffset()/60;var M=function(e){let t="Etc/GMT"+-1*T;return e.zones.hasOwnProperty(t)?t:e.config.fallbackTz||null};var I=function(e,t){const{HOUR:r}=t.model.ms;let n=t.zones;if(e&&n.hasOwnProperty(e)&&n[e]){let t=n[e],o=t.offset||0;return"s"===t.hem&&t.dst&&(o+=t.change||1),o*r}return 0};const j={};var N=function(e,t,r){let n=function(e,t){const{YEAR:r,DAY:n}=t.model.ms,o=t.methods.isLeapYear;if(j.hasOwnProperty(e))return j[e];let a=0;if(e>1970)for(let t=1970;t<e;t+=1)o(t)?a+=r+n:a+=r,j[t+1]=a;else{let t=1970;for(;t>e;)t-=1,o(t)?a-=r+n:a-=r,j[t]=a}return a}(e,r);return n-=I(t,r),n};var S=function(e,t){const r=t.methods.isLeapYear,n=t.model.months;return Object.keys(e).forEach((t=>{var r;void 0!==(r=e[t])&&Number(r)===r&&r%1!=0&&(e[t]=parseInt(e[t],10)),e[t]<0&&"year"!==t&&(e[t]=0)})),e.month=e.month||1,e.date=e.date||1,e.hour=e.hour||0,e.minute=e.minute||0,e.second=e.second||0,e.millisecond=e.millisecond||0,e.month&&e.month>12&&(e.month=12),e.date&&n[e.month-1]&&e.date>n[e.month-1].len&&(2===e.month&&r(e.year)?e.date=29:e.date=n[e.month-1].len),e.hour&&e.hour>24&&(e.month=24),e.minute&&e.minute>59&&(e.month=59),e.second&&e.second>59&&(e.second=59),e.millisecond&&e.millisecond>999&&(e.millisecond=999),e};var D=function(e,t,r,n){const{DAY:o,HOUR:a,MINUTE:s,SECOND:l}=n.model.ms;let i=function(e,t,r){const{isLeapYear:n}=r.methods,{months:o}=r.model;let a=0;for(let r=e.month;r<t.month;r+=1)a+=o[r-1].len,2===r&&n(e.year)&&(a+=1);return a+=t.date-e.date,a}(t,r,n);return e+=i*o,t.month=r.month,t.date=r.date,i=r.hour-t.hour,e+=i*a,t.hour+=i,i=r.minute-t.minute,e+=i*s,t.minute+=i,i=r.second-t.second,e+=i*l,t.second+=i,i=r.millisecond-t.millisecond,e+=i,t.millisecond+=i,function(e,t){const r=["year","month","date","hour","minute","second","millisecond"];for(let n=0;n<r.length;n+=1){let o=r[n];if(e[o]!==t[o])return console.error("\n----\nMis-matched unit in walk:",o),console.error(e,"\n",t),!1}}(t,r),e};const G={month:1,date:1,hour:0,minute:0,second:0,millisecond:0};var Y=function(e,t,r){const{yearStart:n,dstChanges:o}=r.methods;let a=n((e=S(e,r)).year,t,r),s=Object.assign({},G,{year:e.year}),l=o(t,e.year,r).reverse().find((t=>function(e,t){const r=["year","month","date","hour","minute","second","millisecond"];for(let n=0;n<r.length;n+=1){let o=r[n];if(e[o]>t[o])return!0;if(e[o]<t[o])return!1}return!0}(e,t.cal)));return l&&(a=l.epoch,s=Object.assign({},G,l.cal,{year:e.year})),a=D(a,s,e,r),a};var A={isLeapYear:e=>e%4==0&&(e%100!=0||e%400==0),getDay:e=>i(e.year,e.month,e.date),parse:E,parseTz:$,fallbackTz:M,yearStart:N,getEpoch:Y,dstChanges:()=>[]};o.plugin({model:a,config:{useTitleCase:!0,weekStart:1,fallbackTz:"Etc/Utc",fallbackHemisphere:"n",preferDMY:!1},zones:l,methods:A});export{o as default};
