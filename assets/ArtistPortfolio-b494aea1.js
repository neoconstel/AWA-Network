import{_ as y,o as d,c as g,f as w,W as k,m as C,r as m,a as s,t as j,b as i,g as c,n as p,h as e,v as o,F as h,i as f,u as A,j as x}from"./index-cd7fe557.js";import{_ as S,a as W,b as B,c as I,e as L,d as T}from"./iconmonstr-linkedin-1-35c023f8.js";const V={},q={class:"bg-gray-800 text-gray-200 inline-block pt-4 pb-3 text-center"},D=w('<img class="w-14 h-14 rounded-full mx-auto" src="https://i.imgur.com/40qCewV.jpg" alt=""><h3>Johnny Cage</h3><p class="mb-2 text-sm">Designer, Sculptor and Animation geek</p><div class="grid grid-cols-4 px-2 gap-x-2"><img class="aspect-square object-cover" src="https://i.imgur.com/40qCewV.jpg" alt=""><img class="aspect-square object-cover" src="https://i.imgur.com/40qCewV.jpg" alt=""><img class="aspect-square object-cover" src="https://i.imgur.com/40qCewV.jpg" alt=""><img class="aspect-square object-cover" src="https://i.imgur.com/40qCewV.jpg" alt=""></div>',4),F=[D];function M(l,t){return d(),g("div",q,F)}const R=y(V,[["render",M]]),N="/AWA-Network/icons/iconmonstr-location-19.svg",E="/AWA-Network/icons/iconmonstr-mail-thin.svg",G={name:"ArtistPortfolio",components:{WorksGallery:k,ArtistCard:R},data(){return{tab:"projects",works:[],worksUpperLimit:5}},computed:{...C(A)},methods:{projectTabColor(l){return this.tab==l?"text-yellow-300":"text-gray-300"},addMoreWorks(){this.works.length<this.worksDatabase.length&&this.works.push(this.worksDatabase[this.works.length]),this.worksUpperLimit++}},async mounted(){console.log("artistPortfolio view mounted"),this.dataStore.currentView=this.$options.name,this.$nextTick(()=>{setTimeout(()=>{window.scrollTo(0,0)},100)}),this.worksDatabase=this.dataStore.worksDatabase.filter(_=>_.user.username==this.$route.params.username);let l=5,t;t=setInterval(()=>{l-- >0?this.addMoreWorks():clearInterval(t)},100),console.log(this.works),console.log(`works: ${this.works.length}`)}},P={class:"header dashboard"},$={class:"grid grid-cols-2 pb-16"},O={class:"grid pl-16 pr-24",style:{"grid-template-rows":"5fr 3fr"}},U={class:"grid pt-10",style:{"grid-template-columns":"2fr 5fr"}},z=s("div",{class:"",style:{"aspect-ratio":"1/1"}},[s("img",{class:"w-full h-full rounded-full",src:"https://i.imgur.com/40qCewV.jpg",alt:""})],-1),J={class:"pl-20 text-gray-200"},K=w('<p><img class="inline w-4 mr-1" src="'+N+'" alt=""><span class="text-sm text-gray-400">Wysteria Lane, California</span></p><p class="mt-3">Tech support and Analyst, Visual Artist, Animator and 3D Generalist</p><p class="mt-2 text-yellow-300"><a href="http://www.animationwestafrica.com">www.animationwestafrica.com</a></p>',3),H={class:"grid grid-cols-2 gap-x-3 [&>*]:mt-auto"},Q=w('<div class="grid grid-rows-3 pl-24 pr-16 pt-10 text-gray-300"><div class="grid grid-cols-4 [&amp;&gt;*]:space-y-1 border-b-gray-500" style="border-bottom-width:1px;"><div><p class="text-2xl">435251</p><p><img class="inline w-4 mr-1" src="'+S+'" alt=""><span class="text-xs"><b>VIEWS</b></span></p></div><div><p class="text-2xl">234890</p><p><img class="inline w-4 mr-1" src="'+W+'" alt=""><span class="text-xs"><b>LIKES</b></span></p></div><div><p class="text-2xl">35465</p><p><img class="inline w-4 mr-1" src="'+x+'" alt=""><span class="text-xs"><b>FOLLOWERS</b></span></p></div><div><p class="text-2xl">5652</p><p><img class="inline w-4 mr-1" src="'+x+'" alt=""><span class="text-xs"><b>FOLLOWING</b></span></p></div></div><div class="grid grid-cols-5 [&amp;&gt;*]:w-8 [&amp;&gt;*]:h-8 gap-x-14 [&amp;&gt;*]:my-auto"><img src="'+E+'" alt=""><img src="'+B+'" alt=""><img src="'+I+'" alt=""><img src="'+L+'" alt=""><img src="'+T+'" alt=""></div><div class="flex items-center ali border-t-gray-500" style="border-top-width:1px;"><p class=""><b>Tools:</b> Maya, Cinema 4D, Blender, Photoshop, Illustrator, After Effects </p></div></div>',1),X={class:"tabs text-gray-300 sticky top-16 z-10"},Y={class:"grid gap-x-1",style:{"grid-template-columns":"2fr 1fr 1fr 5fr"}},Z={class:"relative"},ss={class:"bg-yellow-300 h-2 w-1/2 absolute right-0"},ts={class:"relative"},es={class:"bg-yellow-300 h-2 w-full absolute"},os={class:"relative"},rs={class:"bg-yellow-300 h-2 w-full absolute"},as={class:"relative"},is={class:"bg-yellow-300 h-2 w-1/4 absolute"},ls={class:"gallery stuff bg-gray-700 [&>div]:min-h-screen [&>div]:place-content-start"},ns={class:"grid grid-cols-4 gap-4 py-10 px-16"},cs={class:"grid grid-cols-4 gap-4 py-10 px-16"};function ps(l,t,_,ds,r,a){const u=m("RippleButton"),b=m("WorksGallery"),v=m("ArtistCard");return d(),g(h,null,[s("section",P,[s("div",$,[s("div",O,[s("div",U,[z,s("div",J,[s("h3",null,j(this.dataStore.work.user.name),1),K])]),s("div",H,[i(u,{class:"bg-yellow-300 text-gray-900",buttonText:"Follow"}),i(u,{class:"text-gray-900",buttonText:"Message"})])]),Q])]),s("section",X,[s("div",Y,[s("div",Z,[s("a",{onClick:t[0]||(t[0]=c(n=>this.tab="projects",["prevent"])),class:p(["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block text-right",a.projectTabColor("projects")]),href:""},"Projects",2),e(s("p",ss,null,512),[[o,r.tab=="projects"]])]),s("div",ts,[s("a",{onClick:t[1]||(t[1]=c(n=>this.tab="followers",["prevent"])),class:p(["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block text-center",a.projectTabColor("followers")]),href:""},"Followers",2),e(s("p",es,null,512),[[o,r.tab=="followers"]])]),s("div",os,[s("a",{onClick:t[2]||(t[2]=c(n=>this.tab="following",["prevent"])),class:p(["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block text-center",a.projectTabColor("following")]),href:""},"Following",2),e(s("p",rs,null,512),[[o,r.tab=="following"]])]),s("div",as,[s("a",{onClick:t[3]||(t[3]=c(n=>this.tab="likes",["prevent"])),class:p(["px-4 py-6 w-full bg-gray-900 hover:bg-gray-800 inline-block",a.projectTabColor("likes")]),href:""},"Likes",2),e(s("p",is,null,512),[[o,r.tab=="likes"]])])])]),s("section",ls,[e(s("div",null,[i(b,{works:r.works,infoBgCol:"bg-gray-800",startIndex:0,stopIndex:this.worksUpperLimit,onBottomReached:a.addMoreWorks,infiniteScroll:!0},null,8,["works","stopIndex","onBottomReached"])],512),[[o,this.tab=="projects"]]),e(s("div",ns,[(d(),g(h,null,f(19,n=>i(v)),64))],512),[[o,this.tab=="followers"]]),e(s("div",cs,[(d(),g(h,null,f(7,n=>i(v)),64))],512),[[o,this.tab=="following"]]),e(s("div",null,[i(b,{works:r.works,infoBgCol:"bg-gray-800",startIndex:0,stopIndex:this.worksUpperLimit,onBottomReached:a.addMoreWorks,infiniteScroll:!0},null,8,["works","stopIndex","onBottomReached"])],512),[[o,this.tab=="likes"]])])],64)}const hs=y(G,[["render",ps]]);export{hs as default};