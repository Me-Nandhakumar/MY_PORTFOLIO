const roles=["ML Engineer","Python Developer","Data Scientist"];
let r=0;const card=document.getElementById("role"),ct=document.getElementById("ct"),rg=document.getElementById("rings");for(let k=0;k<12;k++)rg.appendChild(document.createElement("span"));
function next(){card.classList.add("flip");setTimeout(()=>{r=(r+1)%roles.length;card.textContent=roles[r];ct.textContent="0"+(r+1)+" / 0"+roles.length;card.classList.remove("flip")},350)}
const root=document.documentElement;
const toggle=()=>{const dark=getComputedStyle(root).getPropertyValue("--bg").trim()==="#0e1311";root.dataset.theme=dark?"light":"dark";P[N-1].px+=10};
const cv=document.getElementById("cord"),cx=cv.getContext("2d"),dpr=devicePixelRatio||1,N=20,L=11,P=[];
cv.width=44*dpr;cv.height=300*dpr;cx.scale(dpr,dpr);
for(let i=0;i<N;i++)P.push({x:22,y:i*L,px:22,py:i*L});
let grab=false,mx=0,my=0,sx=0,sy=0;
const pos=e=>{const r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=Math.min(Math.max(e.clientY-r.top,0),290)};
cv.onpointerdown=e=>{pos(e);const k=P[N-1];if(Math.hypot(mx-k.x,my-k.y)<36){grab=true;sx=mx;sy=my;cv.setPointerCapture(e.pointerId);cv.style.cursor="grabbing"}else{k.px+=(mx<22?6:-6)}};
cv.onpointermove=e=>{pos(e);if(!grab)P[N-1].px-=(e.movementX||0)*.15};
cv.onpointerup=cv.onpointercancel=()=>{if(!grab)return;grab=false;cv.style.cursor="grab";if(Math.hypot(mx-sx,my-sy)<6||my>255)toggle()};
cv.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle()}};
(function loop(){
 for(let i=1;i<N;i++){const p=P[i],vx=(p.x-p.px)*.985,vy=(p.y-p.py)*.985;p.px=p.x;p.py=p.y;p.x+=vx;p.y+=vy+.5}
 for(let it=0;it<8;it++){P[0].x=22;P[0].y=0;for(let i=0;i<N-1;i++){const a=P[i],b=P[i+1],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1,f=(d-L)/d;if(i===0){b.x-=dx*f;b.y-=dy*f}else{a.x+=dx*f/2;a.y+=dy*f/2;b.x-=dx*f/2;b.y-=dy*f/2}}if(grab){const k=P[N-1];k.x=mx;k.y=my}}
 cx.clearRect(0,0,44,300);const rope=()=>{cx.beginPath();cx.moveTo(P[0].x,0);for(let i=1;i<N;i++)cx.lineTo(P[i].x,P[i].y);cx.stroke()};
 cx.lineCap="butt";cx.lineJoin="round";cx.setLineDash([]);cx.lineWidth=5;cx.strokeStyle="#d6c9a6";rope();cx.strokeStyle="#8f7d55";cx.setLineDash([1.6,2.4]);rope();cx.setLineDash([]);
 const k=P[N-1],q=P[N-2];cx.save();cx.translate(k.x,k.y);cx.rotate(Math.atan2(k.y-q.y,k.x-q.x)-Math.PI/2);
 cx.fillStyle="#6b5a3a";cx.fillRect(-3,-2,6,7);
 const g=cx.createRadialGradient(-3,14,2,0,18,16);g.addColorStop(0,"#a8693a");g.addColorStop(.55,"#6a3b1d");g.addColorStop(1,"#3a1e0e");
 cx.fillStyle=g;cx.beginPath();cx.moveTo(-3,3);cx.bezierCurveTo(-13,12,-12,30,0,32);cx.bezierCurveTo(12,30,13,12,3,3);cx.closePath();cx.fill();
 cx.fillStyle="rgba(255,225,180,.35)";cx.beginPath();cx.ellipse(-4,15,2,6,.15,0,7);cx.fill();cx.restore();
 requestAnimationFrame(loop)})();
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)setInterval(next,3200);

const D=[
 {t:"NammaPred",s:"Bengaluru Metro Intelligence System",i:[
  "<b>What it does.</b> Predicts how many <b class='ml'>passengers</b> will ride and how <b class='ml'>crowded</b> each BMRCL line will be, across the Purple, Green and Yellow lines.",
  "<b>How it was built.</b> An <b class='ml'>end-to-end pipeline</b> in <b class='ml'>Python</b> with <b class='ml'>Scikit-learn</b> and <b class='ml'>XGBoost</b>. I compared <b class='ml'>6 algorithms</b>: the <b class='ml'>XGBoost Regressor</b> reached <b class='ml'>R² 0.96</b> for passenger counts, and the <b class='ml'>Random Forest Classifier</b> reached <b class='ml'>89.79% accuracy</b> for crowd levels."],k:["Python","Scikit-learn","XGBoost","Random Forest"]},
 {t:"Fake Instagram Detector",s:"Machine learning that spots fake profiles",i:[
  "<b>What it does.</b> Flags <b class='ml'>fake Instagram profiles</b> from signals such as the <b class='ml'>followers/following ratio</b> and <b class='ml'>profile completeness</b>.",
  "<b>How it was built.</b> A full <b class='ml'>classification pipeline</b>: <b class='ml'>data preprocessing</b>, <b class='ml'>feature engineering</b>, <b class='ml'>model training</b> and <b class='ml'>evaluation</b>. <b class='ml'>Logistic Regression</b> reached <b class='ml'>94.9% accuracy</b>."],k:["Python","Pandas","Scikit-learn","Logistic Regression"]},
 {t:"CareHub",s:"Smart Hospital Management &amp; Billing System",i:[
  "<b>What it does.</b> Manages patient records and appointments, and creates bills automatically with <b class='ml'>QR payment</b>.",
  "<b>How it was built.</b> <b class='ml'>Python</b> with a <b class='ml'>MySQL</b> database. I designed the <b class='ml'>relational schema</b>, and sending bills over WhatsApp with <b class='ml'>PyWhatKit</b> cut manual effort by about <b class='ml'>80%</b>."],k:["Python","MySQL","PyWhatKit"]},
 {t:"ChatBot",s:"Customer support chatbot with Python and Flask",i:[
  "<b>What it does.</b> Answers customer questions automatically with pre-defined replies, with animated message bubbles and a typing effect.",
  "<b>How it was built.</b> A <b class='ml'>Python Flask</b> backend with <b class='ml'>HTML, CSS and JavaScript</b> on the front end. Replies live in one <b class='ml'>responses file</b>, so they are easy to add or change. It works on desktop and mobile."],k:["Python","Flask","JavaScript","HTML","CSS"]}];
const SLUG=["nammapred","fake-instagram-detector","carehub","chatbot"];
const CL=[["Passenger count prediction (regression)","Crowd level classification","Purple, Green and Yellow metro lines","6 ML algorithms compared","Evaluated with R² and accuracy"],["Data preprocessing","Feature engineering","Followers/following ratio analysis","Profile completeness features","Model training and evaluation"],["Patient records","Appointment management","Automated billing","QR payment","WhatsApp bill delivery"],["Rule-based auto-replies","Typing animation","Animated message bubbles","Auto-scrolling chat","Responsive on desktop and mobile"]];
const MT=[[["0.96","R² · XGBoost Regressor"],["89.79%","accuracy · Random Forest"]],[["94.9%","accuracy · Logistic Regression"],["Ratio","followers vs following"]],[["~80%","less manual effort"],["MySQL","schema I designed"]],[["Live","hosted demo"],["Flask","Python backend"]]];
const GH=["https://github.com/Me-Nandhakumar/NammaPred-Bengaluru-Metro-Intelligence-System","https://github.com/Me-Nandhakumar/Fake-Instagram-Detector-App","https://github.com/Me-Nandhakumar/Me-Nandhakumar-CareHub-Smart-Hospital-Billing-System","https://github.com/Me-Nandhakumar/ChatBot"];
const LV=["","","","https://chatbot-6kgf.onrender.com/"];
const pg=document.getElementById("pg"),GHL=[[],[],[],[]];
/* ===== project illustrations (static isometric 3D, inline SVG) ===== */
const KK=15;
const isoP=(x,y,z,ox,oy)=>[(160+(x-y)*.866*KK+ox).toFixed(1),(oy+(x+y)*.5*KK-z*KK).toFixed(1)];
const shd=(c,f)=>{c=c.replace("#","");return"rgb("+[0,2,4].map(i=>Math.max(0,Math.min(255,Math.round(parseInt(c.substr(i,2),16)*f)))).join(",")+")"};
function bx(o,x,y,z,w,d,h,c){const P=(a,b,e)=>isoP(a,b,e,o.x,o.y).join(",");
 return `<polygon points="${P(x,y,z+h)} ${P(x+w,y,z+h)} ${P(x+w,y+d,z+h)} ${P(x,y+d,z+h)}" fill="${shd(c,1.12)}"/><polygon points="${P(x,y+d,z)} ${P(x+w,y+d,z)} ${P(x+w,y+d,z+h)} ${P(x,y+d,z+h)}" fill="${shd(c,.78)}"/><polygon points="${P(x+w,y,z)} ${P(x+w,y+d,z)} ${P(x+w,y+d,z+h)} ${P(x+w,y,z+h)}" fill="${shd(c,.58)}"/>`}
const bxs=(o,base,objs)=>base.map(b=>bx(o,...b)).join("")+objs.slice().sort((a,b)=>(a[0]+a[3]+a[1]+a[4])-(b[0]+b[3]+b[1]+b[4])).map(b=>bx(o,...b)).join("");
/* planes: top (u along x, v along y), face (u along x on y=const plane, v up) */
const topM=(o,x,y,z)=>{const q=isoP(x,y,z,o.x,o.y);return`matrix(${.866*KK} ${.5*KK} ${-.866*KK} ${.5*KK} ${q[0]} ${q[1]})`};
const faceM=(o,x,y,z)=>{const q=isoP(x,y,z,o.x,o.y);return`matrix(${.866*KK} ${.5*KK} 0 ${-KK} ${q[0]} ${q[1]})`};
const T=(x,y,t,c,s)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${s||11}" font-weight="700" style="fill:${c||"var(--mute)"}" font-family="system-ui,sans-serif">${t}</text>`;
const svg=b=>`<svg viewBox="0 0 320 240" role="img" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:auto"><defs><filter id="sd" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-opacity=".25"/></filter></defs>${b}</svg>`;
const SL="#a9b0a6";
function pipe(labels,cols,o){const n=labels.length,gap=2.6,base=[[-.8,1.2,-.5,gap*n+.4,3.4,.5,SL]];const objs=labels.map((l,i)=>[i*gap,1.9,0,1.8,1.8,1.5+i*.35,cols[i]]);
 let t=labels.map((l,i)=>{const p=isoP(i*gap+.9,3.7,0,o.x,o.y);return T(p[0],+p[1]+14,l,"var(--ink)",11)}).join("");
 let ar=labels.slice(1).map((l,i)=>{const p=isoP(i*gap+2.35+.1,2.8,1,o.x,o.y);return`<polygon points="${p[0]-5},${+p[1]-5} ${+p[0]+6},${p[1]} ${p[0]-5},${+p[1]+5}" style="fill:var(--ink)" opacity=".7"/>`}).join("");
 return svg(`<g filter="url(#sd)">${bxs(o,base,objs)}</g>${ar}${t}`)}
const VIZ=[
 [ /* NammaPred: metro map */ ()=>{const o={x:0,y:62};
   const base=[[0,0,-.6,8,8,.6,SL],[0,2.6,0,8,.8,.14,"#8e5bd6"],[3.6,0,0,.8,8,.14,"#3fae6a"],[3.6,5.6,0,4.4,.8,.14,"#e0b030"]];
   const objs=[[3.4,2.4,.14,1.2,1.2,.4,"#f1eee4"],[3.4,5.4,.14,1.2,1.2,.4,"#f1eee4"],[1,2.8,.14,.5,.5,2.1,"#8e5bd6"],[6.2,2.8,.14,.5,.5,3.4,"#8e5bd6"],[3.8,.8,.14,.5,.5,1.4,"#3fae6a"],[3.8,7,.14,.5,.5,2.6,"#3fae6a"],[6.6,5.8,.14,.5,.5,1.8,"#e0b030"],[.8,2.65,.14,1.8,.7,.75,"#f1eee4"]];
   return svg(`<g filter="url(#sd)">${bxs(o,base,objs)}</g>${T(60,214,"Purple","#8e5bd6")}${T(160,222,"Green","#3fae6a")}${T(262,214,"Yellow","#e0b030")}`)},
  ()=>{const o={x:-6,y:84};const base=[[-.5,-.5,-.6,9.2,4,.6,SL]];
   const hs=[3.9,3.1,2.4,2.0,1.6,1.2],cs=["#2fbf8a","#4a90d9","#8d968f","#8d968f","#8d968f","#8d968f"];
   const objs=hs.map((h,i)=>[i*1.45,1.1,0,1,1,h,cs[i]]);
   const p0=isoP(.5,1.6,hs[0],o.x,o.y),p1=isoP(1.95,1.6,hs[1],o.x,o.y);
   return svg(`<g filter="url(#sd)">${bxs(o,base,objs)}</g>${T(p0[0],p0[1]-16,"XGBoost","var(--ink)")}${T(p1[0],p1[1]-16,"Random Forest","var(--ink)",10)}${T(160,228,"6 algorithms compared · bars illustrative","var(--mute)",10)}`)}],
 [ /* Fake Instagram */ ()=>{const o={x:-4,y:70};
   const base=[[-.5,-.5,-.6,10,6.4,.6,SL]];const objs=[[.4,.6,0,5,4,.5,"#ece8dc"],[6.4,1,0,.9,.9,1.3,"#3fae6a"],[7.7,1,0,.9,.9,3.5,"#e5484d"]];
   const top=`<g transform="${topM(o,.4,.6,.5)}"><circle cx="1.4" cy="1.4" r=".75" fill="#b9b2a0"/><rect x="2.5" y=".9" width="2" height=".34" rx=".17" fill="#c9c3b3"/><rect x="2.5" y="1.5" width="1.5" height=".3" rx=".15" fill="#d8d3c5"/><rect x=".5" y="2.7" width="4" height=".3" rx=".15" fill="#d8d3c5"/><rect x=".5" y="3.2" width="2.6" height=".3" rx=".15" fill="#d8d3c5"/></g>`;
   const f1=isoP(6.85,1.5,1.3,o.x,o.y),f2=isoP(8.15,1.5,3.5,o.x,o.y);
   return svg(`<g filter="url(#sd)">${bxs(o,base,objs)}</g>${top}${T(f1[0],f1[1]-10,"followers","#3fae6a",10)}${T(f2[0],f2[1]-10,"following","#e5484d",10)}<rect x="226" y="30" width="62" height="24" rx="12" fill="#e5484d"/>${T(257,46,"FAKE?","#fff",11)}${T(160,228,"followers / following ratio","var(--mute)",10)}`)},
  ()=>pipe(["Preprocess","Features","Train","Evaluate"],["#4a90d9","#8e5bd6","#2fbf8a","#e0b030"],{x:-30,y:70})],
 [ /* CareHub */ ()=>{const o={x:-6,y:72};
   const base=[[-.5,-.5,-.6,9.4,6.4,.6,SL]];const objs=[[.6,.6,0,3.4,3.4,3.6,"#ece8dc"],[5.6,2.6,0,2.6,2.6,.4,"#f5f2e8"]];
   const cross=`<g transform="${faceM(o,.6,4,0)}"><rect x="1.4" y="1.1" width=".6" height="1.8" fill="#e5484d"/><rect x=".8" y="1.7" width="1.8" height=".6" fill="#e5484d"/></g>`;
   const qr=[...Array(25)].map((_,i)=>[i%5,Math.floor(i/5)]).filter(([a,b])=>((a*7+b*3+a*b)%3)!==0).map(([a,b])=>`<rect x="${.2+a*.44}" y="${.2+b*.44}" width=".36" height=".36" fill="#14171a"/>`).join("");
   return svg(`<g filter="url(#sd)">${bxs(o,base,objs)}</g>${cross}<g transform="${topM(o,5.6,2.6,.4)}">${qr}</g><rect x="224" y="26" width="76" height="26" rx="13" fill="#25d366"/>${T(262,43,"Bill sent","#06311a",11)}${T(96,228,"Records","var(--mute)",10)}${T(246,228,"QR payment","var(--mute)",10)}`)},
  ()=>{const o={x:-24,y:60};const base=[[-.5,-.5,-.6,10.6,8,.6,SL]];
   const objs=[[0,0,0,3,1.8,.9,"#4a90d9"],[3.4,2.4,0,3.4,1.8,.9,"#2fbf8a"],[7,4.8,0,2.8,1.8,.9,"#e0b030"]];
   const a=isoP(1.5,.9,.9,o.x,o.y),b=isoP(5.1,3.3,.9,o.x,o.y),c=isoP(8.4,5.7,.9,o.x,o.y);
   return svg(`<g filter="url(#sd)">${bxs(o,base,objs)}</g><path d="M${a[0]},${a[1]} L${b[0]},${b[1]} L${c[0]},${c[1]}" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity=".6"/>${T(a[0],a[1]-12,"patients","var(--ink)")}${T(b[0],b[1]-12,"appointments","var(--ink)")}${T(c[0],c[1]-12,"billing","var(--ink)")}${T(160,228,"MySQL relational schema","var(--mute)",10)}`)}],
 [ /* ChatBot */ ()=>{const L=(x,y,w,h,f,t,c)=>[3,2,1].map(k=>`<rect x="${x+k*2}" y="${y+k*2.5}" width="${w}" height="${h}" rx="16" fill="${shd("#8d968f",1-k*.12)}"/>`).join("")+`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="${f}"/>`+T(x+w/2,y+h/2+4,t,c,12);
   return svg(`<g filter="url(#sd)">${L(36,42,150,46,"#f1eee4","Hi! How can I help?","#14171a")}${L(124,112,160,46,"#2fbf8a","Where is my order?","#06311a")}</g><g><circle cx="60" cy="190" r="6" fill="#8d968f"/><circle cx="80" cy="190" r="6" fill="#8d968f" opacity=".7"/><circle cx="100" cy="190" r="6" fill="#8d968f" opacity=".4"/></g>${T(220,196,"typing effect","var(--mute)",10)}`)},
  ()=>pipe(["HTML·CSS·JS","Flask","Replies file"],["#4a90d9","#2fbf8a","#e0b030"],{x:-4,y:70})]
];
const viz=(i,j)=>{try{return VIZ[i][j]()}catch(e){return""}};

function render(i){const x=D[i];pg.innerHTML=`<div class="pgin"><h1>${x.t}</h1><p class="lede">${x.s}</p><ul class="ck">${CL[i].map(a=>`<li>${a}</li>`).join("")}</ul><h2 style="text-align:left;margin:60px 0 24px;font-size:32px">Work</h2>${x.i.map((a,j)=>`<article class="pj"><div class="scr">${viz(i,j)}<div class="cap"><b>${MT[i][j][0]}</b><span>${MT[i][j][1]}</span></div></div><div>${a}${GHL[i][j]?`<br><a class="gh" href="${GHL[i][j]}" target="_blank" rel="noopener">View on GitHub ↗</a>`:""}</div></article>`).join("")}<div>${x.k.map(a=>`<span class="tag">${a}</span>`).join("")}</div><div class="btns">${GH[i]?`<a class="btn main" href="${GH[i]}" target="_blank" rel="noopener">View on GitHub ↗</a>`:""}${LV[i]?`<a class="btn" href="${LV[i]}" target="_blank" rel="noopener">Live demo ↗</a>`:""}<button class="btn" type="button" id="rsp">Start a project<i class="ar">→</i></button><button class="btn" type="button" data-resume>Resume<i class="dl">↓</i></button></div></div>`;
 document.getElementById("rsp").onclick=e=>openMsg(e.currentTarget);bindResume(pg);}
const fb=document.createElement("button");fb.className="fl bk2";fb.textContent="← Back to the doors";fb.id="bk";fb.onclick=()=>{location.hash="doors"};
const fn=document.createElement("button");fn.className="fl nx";fn.textContent="→";fn.setAttribute("aria-label","Next room");document.body.append(fb,fn);let curRoom=0;fn.onclick=()=>{location.hash=SLUG[(curRoom+1)%SLUG.length]};
function route(){const h=location.hash.slice(1),i=SLUG.indexOf(h);document.querySelectorAll("#nav a").forEach(a=>a.classList.toggle("on",i>=0&&a.getAttribute("href")==="#"+h));
 const lg=document.getElementById("lg");if(h==="privacy"){lg.hidden=false;lg.scrollTop=0;pg.hidden=true;document.body.classList.remove("room");document.body.style.overflow="hidden";return}lg.hidden=true;if(i<0){pg.hidden=true;document.body.classList.remove("room");document.body.style.overflow="";return}curRoom=i;render(i);pg.hidden=false;pg.scrollTop=0;document.body.classList.add("room");document.body.style.overflow="hidden";document.getElementById("nav").classList.add("sc")}
const veil=document.createElement("div");veil.id="veil";document.body.appendChild(veil);let entering=false;
function enter(i){if(entering)return;const f=document.getElementById("doorRow").querySelectorAll(".frame")[i];
 if(matchMedia("(prefers-reduced-motion:reduce)").matches){location.hash=SLUG[i];return}
 entering=true;f.classList.add("opening");
 setTimeout(()=>veil.classList.add("on"),380);
 setTimeout(()=>{location.hash=SLUG[i];f.classList.remove("opening");setTimeout(()=>{veil.classList.remove("on");entering=false},150)},820)}
const doors=[...document.querySelectorAll(".door")];
const row=document.getElementById("doorRow");
doors.forEach(d=>d.onclick=()=>enter(+d.dataset.i));

const dots=document.getElementById("dots"),frames=[...row.querySelectorAll(".frame")];
let cur=0,hold=0;
const mob=()=>matchMedia("(max-width:760px)").matches;
const mark=()=>{[...dots.children].forEach((d,k)=>d.classList.toggle("on",k===cur));frames.forEach((f,k)=>f.classList.toggle("act",k===cur))};
function go(i){cur=i;if(mob()){const f=frames[i];row.scrollTo({left:f.offsetLeft-(row.clientWidth-f.offsetWidth)/2,behavior:"smooth"})}mark()}
frames.forEach((f,i)=>{const b=document.createElement("button");b.setAttribute("aria-label","Door "+(i+1));b.onclick=()=>{hold=Date.now()+6000;go(i)};dots.appendChild(b)});
mark();
row.addEventListener("scroll",()=>{if(!mob())return;const c=row.scrollLeft+row.clientWidth/2;let b=0,m=1e9;frames.forEach((f,i)=>{const d=Math.abs(f.offsetLeft+f.offsetWidth/2-c);if(d<m){m=d;b=i}});cur=b;mark()},{passive:true});
["touchstart","pointerdown","wheel","focusin","mouseenter"].forEach(t=>row.addEventListener(t,()=>{hold=Date.now()+6000},{passive:true}));
const still=matchMedia("(prefers-reduced-motion:reduce)").matches;
setInterval(()=>{if(still||row.classList.contains("focus")||Date.now()<hold||document.hidden||!pg.hidden)return;const r=row.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;go((cur+1)%frames.length)},3200);
addEventListener("hashchange",route);route();
addEventListener("scroll",()=>document.getElementById("nav").classList.toggle("sc",scrollY>10||document.body.classList.contains("room")),{passive:true});
const nv=document.getElementById("nav"),mb=document.getElementById("mb");
mb.onclick=()=>{const o=nv.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nv.querySelectorAll("a").forEach(a=>a.onclick=()=>{nv.classList.remove("open");mb.setAttribute("aria-expanded","false")});
const clk=document.getElementById("clk");
function tick(){const n=new Date(),o={timeZone:"Asia/Kolkata"};clk.innerHTML=`<span class="loc">Bengaluru, India</span><span class="sp">·</span>Local time <b>${n.toLocaleTimeString("en-IN",{...o,hour:"numeric",minute:"2-digit"}).replace(" ","")}</b> <span class="dt">· ${n.toLocaleDateString("en-GB",{...o,day:"numeric",month:"long",year:"numeric"})}</span>`}
function tick2(){const e=document.getElementById("clk2");if(e)e.textContent=new Date().toLocaleTimeString("en-IN",{timeZone:"Asia/Kolkata",hour:"numeric",minute:"2-digit"}).replace(" ","")}tick();tick2();setInterval(()=>{tick();tick2()},20000);

const yr=document.getElementById("yr"),evs=[...document.querySelectorAll(".ev")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){evs.forEach(v=>v.classList.remove("on"));e.target.classList.add("on");yr.textContent=e.target.dataset.y}}),{rootMargin:"-40% 0px -40% 0px"});
evs.forEach(e=>io.observe(e));evs[0].classList.add("on");

/* colour reveal only while dragging the photo */
const pt=document.getElementById("pt");let dragging=false;
const spot=(x,y)=>{pt.style.setProperty("--mx",x+"px");pt.style.setProperty("--my",y+"px")};
const at=e=>{const b=pt.getBoundingClientRect();spot(e.clientX-b.left,e.clientY-b.top)};
pt.addEventListener("pointerdown",e=>{dragging=true;pt.classList.add("drag","used");try{pt.setPointerCapture(e.pointerId)}catch(_){}at(e)});
pt.addEventListener("pointermove",e=>{if(dragging)at(e)});
const stopDrag=()=>{dragging=false;pt.classList.remove("drag")};
["pointerup","pointercancel","lostpointercapture"].forEach(t=>pt.addEventListener(t,stopDrag));
pt.addEventListener("dragstart",e=>e.preventDefault());

/* start a project popup */
const mm=document.getElementById("msgm"),mf=document.getElementById("mf"),merr=document.getElementById("merr"),mst=document.getElementById("mst");
const MAIL="nandhakumar.s.jnandhu@gmail.com";let lastBtn=null;
function openMsg(b){lastBtn=b;mm.hidden=false;merr.textContent="";document.getElementById("mn").focus()}
function closeMsg(){mm.hidden=true;if(lastBtn)lastBtn.focus()}
["sp","sp2"].forEach(id=>{const b=document.getElementById(id);if(b)b.onclick=()=>openMsg(b)});
document.getElementById("mxc").onclick=closeMsg;
mm.addEventListener("click",e=>{if(e.target===mm)closeMsg()});
addEventListener("keydown",e=>{if(e.key==="Escape"&&!mm.hidden)closeMsg()});
mf.addEventListener("submit",e=>{e.preventDefault();
 const n=document.getElementById("mn").value.trim(),em=document.getElementById("me2").value.trim(),p=document.getElementById("mp").value.trim();
 if(!n||!/^\S+@\S+\.\S+$/.test(em)||!p){merr.textContent=!n?"Add your name.":!/^\S+@\S+\.\S+$/.test(em)?"Add a valid email address.":"Tell me a little about the project.";return}
 merr.textContent="";
 const subj="Portfolio enquiry from "+n,body=p+"\n\n— "+n+"\n"+em;
 const g="https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(MAIL)+"&su="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body);
 const mt="mailto:"+MAIL+"?subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body);
 const a=document.createElement("a");a.href=g;a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove();
 mst.innerHTML="";mst.append("Gmail is opening with your message. No Gmail? ");const l=document.createElement("a");l.href=mt;l.textContent="Use your email app";l.style.fontWeight="600";l.style.color="inherit";mst.append(l);mst.append(" or write to "+MAIL+".");
});

/* resume download */
function bindResume(root){root.querySelectorAll("[data-resume]").forEach(b=>{if(b.dataset.b)return;b.dataset.b=1;
 if(b.tagName!=="BUTTON")return; /* links use the native download attribute */
 b.addEventListener("click",()=>{const a=document.createElement("a");a.href="resume/Nandhakumar-Fresher_2026.pdf";a.download="Nandhakumar-Fresher_2026.pdf";document.body.appendChild(a);a.click();a.remove()})})}
bindResume(document);

(function(){var s=document.getElementById("skill-levels");if(!s||!("IntersectionObserver" in window))return;s.classList.add("pre");new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){s.classList.remove("pre");o.disconnect()}})},{threshold:.25}).observe(s)})();

(function(){
var GA_ID="G-XXXXXXXXXX"; /* paste your Google Analytics 4 Measurement ID here */
var KEY="ns-consent",ck=document.getElementById("ck"),lg=document.getElementById("lg");
function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
function put(v){try{if(v)localStorage.setItem(KEY,v);else localStorage.removeItem(KEY)}catch(e){}}
function load(){if(GA_ID==="G-XXXXXXXXXX"||!/^G-[A-Z0-9]{6,}$/.test(GA_ID)||window.__gaOn)return;window.__gaOn=1;window["ga-disable-"+GA_ID]=false;
 var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+GA_ID;document.head.appendChild(s);
 window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",GA_ID,{anonymize_ip:true})}
document.getElementById("cka").onclick=function(){put("yes");ck.hidden=true;load()};
document.getElementById("ckn").onclick=function(){put("no");ck.hidden=true;window["ga-disable-"+GA_ID]=true};
document.getElementById("lgch").onclick=function(){put(null);ck.hidden=false;ck.querySelector("#cka").focus()};
addEventListener("keydown",function(e){if(e.key==="Escape"&&!lg.hidden)location.hash="top"});
var ready=/^G-[A-Z0-9]{6,}$/.test(GA_ID)&&GA_ID!=="G-XXXXXXXXXX";
if(!ready){ck.hidden=true}else{var v=get();if(v==="yes")load();else if(v!=="no")ck.hidden=false}
})();
