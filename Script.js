javascript:(function(n,g,q,c,f)%7Bvar s=document,l=s.onclick,h="ws_cmbm-"+f,b=s.getElementById(h),d="ws_cmbms-"+f,p=s.getElementById(d),e=null,o,a=%7Btl:%7Bleft:"10px",top:"10px"%7D,tr:%7Bright:"10px",top:"10px"%7D,bl:%7Bleft:"10px",bottom:"10px"%7D,br:%7Bright:"10px",bottom:"10px"%7D%7D,k,m=".ws_cmbmc%7Bposition:fixed;z-index:10123456;width:200px;display:block;visibility:hidden;border:1px solid #b0b0b0;background:#fff;padding:3px 0 3px 3px;text-align:left;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:2px 2px 3px #777;-moz-box-shadow:2px 2px 3px #777;-webkit-box-shadow:2px 2px 3px #777;%7D.ws_cmbmc a%7Bdisplay:block;float:left;margin:0;width:191px;border:none;padding:8px 0 8px 6px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100%25 Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;%7D.ws_cmbmc a:hover%7Bbackground:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100%25 Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;%7D";function r()%7Bb.style.visibility="hidden"%7Dfunction j()%7Bb.style.visibility="visible"%7Dif(b)%7Bif(b.style.visibility=="visible")%7Br()%7Delse%7Bj()%7Dreturn%7Dif(!p)%7Bm=m.replace(/.ws_cmbmc/g,"#"+h);p=s.createElement("style");p.type="text/css";p.id=d;p.appendChild(s.createTextNode(m));s.getElementsByTagName("head")%5B0%5D.appendChild(p)%7Db=s.createElement("div");b.setAttribute("id",h);b.className="ws_cmbmc";for(o=0;o<n.length;o++)%7Be=s.createElement("a");e.appendChild(s.createTextNode(n%5Bo%5D.title));e.setAttribute("href",n%5Bo%5D.url);e.onclick=(function(i)%7Bif(q)%7Br()%7D%7D);b.appendChild(e)%7Ds.getElementsByTagName("body")%5B0%5D.appendChild(b);if(a.hasOwnProperty(g))%7Bfor(k in a%5Bg%5D)%7Bb.style%5Bk%5D=a%5Bg%5D%5Bk%5D%7D%7Delse%7Bif(g=="c")%7Bb.style.left=Math.round((window.innerWidth-b.offsetWidth)/2)+"px";b.style.top=Math.round((window.innerHeight-b.offsetHeight)/2)+"px"%7D%7Dif(c)%7Bs.onclick=(function()%7Br();if(typeof l=="function")%7Bl()%7D%7D);b.onclick=(function(i)%7Bi.stopPropagation()%7D)%7Dj()%7D)(%5B%7Btitle:"Snake",url:"javascript:(function()%257B(function()%257Bfunction e()%257Bvar e%253Ddocument.createElement(%5Cx22script%5Cx22)%253Be.src%253D%5Cx22https%253A%252F%252Frawgit.com%252Fjlkravitz%252Fsnake-js%252Fmaster%252Fsnake.js%5Cx22%253Be.onload%253Dfunction()%257BSnake.run()%257D%253Bdocument.body.appendChild(e)%257Dif(!(%2524%253Dwindow.jQuery))%257Bvar t%253Ddocument.createElement(%5Cx22script%5Cx22)%253Bt.src%253D%5Cx22https%253A%252F%252Fajax.googleapis.com%252Fajax%252Flibs%252Fjquery%252F1%252Fjquery.min.js%5Cx22%253Bt.onload%253De%253Bdocument.body.appendChild(t)%257Delse%257Be()%257D%257D)()%257D)()%253B"%7D,%7Btitle:"JS console",url:"javascript:(function()%257Bfunction grouped(e%252C n)%257B if(e !%253D null)%257B return e%255Bn%255D.toString()%253B %257Delse%257B return %5Cx27%5Cx27%253B %257D %257D function dragElement(elmnt) %257B var pos1 %253D 0%252C pos2 %253D 0%252C pos3 %253D 0%252C pos4 %253D 0%253B if (document.getElementById(elmnt.id %252B %5Cx22header%5Cx22)) %257B document.getElementById(elmnt.id %252B %5Cx22header%5Cx22).onmousedown %253D dragMouseDown%253B %257D else %257B elmnt.onmousedown %253D dragMouseDown%253B %257D function dragMouseDown(e) %257B e %253D e %257C%257C window.event%253B pos3 %253D e.clientX%253B pos4 %253D e.clientY%253B document.onmouseup %253D closeDragElement%253B document.onmousemove %253D elementDrag%253B %257D function elementDrag(e) %257B e %253D e %257C%257C window.event%253B pos1 %253D pos3 - e.clientX%253B pos2 %253D pos4 - e.clientY%253B pos3 %253D e.clientX%253B pos4 %253D e.clientY%253B elmnt.style.top %253D (elmnt.offsetTop - pos2) %252B %5Cx22px%5Cx22%253B elmnt.style.left %253D (elmnt.offsetLeft - pos1) %252B %5Cx22px%5Cx22%253B elmnt.style.opacity %253D %5Cx220.85%5Cx22%253B elmnt.style.background %253D %5Cx22DarkSlateGrey%5Cx22%253B elmnt.style.transition %253D %5Cx22opacity 1300ms%5Cx22 %257D function closeDragElement() %257B document.onmouseup %253D null%253B document.onmousemove %253D null%253B elmnt.style.opacity %253D %5Cx221%5Cx22%253B elmnt.style.background %253D %5Cx22DarkSlateGrey%5Cx22%253B %257D %257D function close() %257B document.body.removeChild(document.getElementById(%5Cx22pop_container%5Cx22))%253B %257D var cDiv %253D document.createElement(%5Cx22div%5Cx22)%253B cDiv.setAttribute(%5Cx22id%5Cx22%252C %5Cx22pop_container%5Cx22)%253B document.body.appendChild(cDiv)%253B cDiv.style.display %253D %5Cx22inline-block%5Cx22%253B cDiv.style.position %253D %5Cx22fixed%5Cx22%253B cDiv.style.top %253D %5Cx22300px%5Cx22%253B cDiv.style.left %253D %5Cx2250%2525%5Cx22%253B cDiv.style.width %253D %5Cx2235%2525%5Cx22%253B cDiv.style.height %253D %5Cx2243%2525%5Cx22%253B cDiv.style.border %253D %5Cx221px solid DarkSlateGrey %5Cx22%253B cDiv.style.background %253D %5Cx22DarkSlateGrey%5Cx22%253B cDiv.style.borderRadius %253D %5Cx221em%5Cx22%253B cDiv.style.padding %253D %5Cx223px%5Cx22%253B cDiv.style.zIndex %253D %5Cx2210000%5Cx22%253B cDiv.style.fontFamily %253D %5Cx27%5Cx22Courier New%5Cx22%252C monospace%5Cx27%253B var clsBtn %253D document.createElement(%5Cx22button%5Cx22)%253B document.getElementById(%5Cx22pop_container%5Cx22).appendChild(clsBtn)%253B clsBtn.setAttribute(%5Cx22id%5Cx22%252C %5Cx22btn_close%5Cx22)%253B document.getElementById(%5Cx22btn_close%5Cx22).innerText %253D %5Cx22%252B%5Cx22%253B clsBtn.style.position %253D %5Cx22absolute%5Cx22%253B clsBtn.style.background %253D %5Cx22transparent%5Cx22%253B clsBtn.style.height %253D %5Cx220px%5Cx22%253B clsBtn.style.width %253D %5Cx220px%5Cx22%253B clsBtn.style.display %253D %5Cx22inline-block%5Cx22%253B clsBtn.style.transform %253D %5Cx22scale(2.5%252C 2.5) translate(5px%252C -5px) rotate(45deg)%5Cx22%253B clsBtn.style.borderRadius %253D %5Cx221em%5Cx22%253B clsBtn.style.padding %253D %5Cx220px%5Cx22%253B clsBtn.style.boxShadow %253D %5Cx220px%5Cx22%253B clsBtn.style.border %253D %5Cx220px%5Cx22%253B clsBtn.style.cursor %253D %5Cx22pointer%5Cx22%253B clsBtn.style.userSelect %253D %5Cx22none%5Cx22%253B clsBtn.style.fontFamily %253D %5Cx27%5Cx22Courier New%5Cx22%252C monospace%5Cx27%253B clsBtn.style.fontWeight %253D %5Cx22bold%5Cx22%253B clsBtn.style.color %253D %5Cx22white%5Cx22%253B var textbox_1 %253D document.createElement(%5Cx22TEXTAREA%5Cx22)%253B textbox_1.setAttribute(%5Cx22id%5Cx22%252C %5Cx22textbox_code%5Cx22)%253B document.getElementById(%5Cx22pop_container%5Cx22).appendChild(textbox_1)%253B textbox_1.style.width %253D %5Cx2299%2525%5Cx22%253B textbox_1.style.height %253D %5Cx2283%2525%5Cx22%253B textbox_1.style.padding %253D %5Cx226px%5Cx22%253B textbox_1.style.border %253D %5Cx221px solid DarkSlateGrey%5Cx22%253B textbox_1.style.background %253D %5Cx22FloralWhite%5Cx22%253B textbox_1.style.borderRadius %253D %5Cx221em%5Cx22%253B textbox_1.style.display %253D %5Cx22block%5Cx22%253B textbox_1.style.fontSize %253D %5Cx221.2em%5Cx22%253B textbox_1.style.userSelect %253D %5Cx22none%5Cx22%253B textbox_1.style.transform %253D %5Cx22translate(0px%252C 5%2525)%5Cx22%253B textbox_1.style.fontFamily %253D %5Cx27%5Cx22Courier New%5Cx22%252C monospace%5Cx27%253B var evalBtn %253D document.createElement(%5Cx22button%5Cx22)%253B document.getElementById(%5Cx22pop_container%5Cx22).appendChild(evalBtn)%253B evalBtn.setAttribute(%5Cx22id%5Cx22%252C %5Cx22btn_box%5Cx22)%253B document.getElementById(%5Cx22btn_box%5Cx22).innerText %253D %5Cx22runTheCode%5Cx22%253B evalBtn.style.background %253D %5Cx22DarkCyan%5Cx22%253B evalBtn.style.border %253D %5Cx221px solid DarkSlateGrey%5Cx22%253B evalBtn.style.width %253D %5Cx22100%2525%5Cx22%253B evalBtn.style.height %253D %5Cx2233px%5Cx22%253B evalBtn.style.borderRadius %253D %5Cx221em%5Cx22%253B evalBtn.style.cursor %253D %5Cx22pointer%5Cx22%253B evalBtn.style.color %253D %5Cx22white%5Cx22%253B evalBtn.style.transform %253D %5Cx22translate(0px%252C 55%2525)%5Cx22%253B dragElement(document.getElementById((%5Cx22pop_container%5Cx22)))%253B document.getElementById(%5Cx22btn_box%5Cx22).addEventListener(%5Cx22click%5Cx22%252C execute)%253B document.getElementById(%5Cx22btn_close%5Cx22).addEventListener(%5Cx22click%5Cx22%252C close)%253B textbox_1.addEventListener(%5Cx27keyup%5Cx27%252C tabIs)%253B function tabIs()%257B if(%252F%255C%257B%255C%257D%252F.exec(this.value) %253D%253D %5Cx22%257B%257D%5Cx22)%257B this.value %253D this.value.replace(%252F%255C%257B%255C%257D%252F%252C %5Cx22%257B%255Cn %255Cn%257D%5Cx22)%253B this.selectionStart %253D this.selectionStart-2%253B this.selectionEnd %253D this.selectionEnd-2%253B this.focus()%253B %257D %257D function execute()%257B var code %253D document.getElementById(%5Cx22textbox_code%5Cx22).value%253B eval(code)%253B %257D%257D)()"%7D,%7Btitle:"Auto Click",url:"javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement(%5Cx22style%5Cx22);autoClickerStyleElement.innerHTML=%5Cx22*%7Bcursor: crosshair !important;%7D%5Cx22;document.body.appendChild(autoClickerStyleElement);function addClicker(e) %7Bif(!e.isTrusted) %7Breturn;%7Dif(e.target.classList.contains(%5Cx22auto-clicker-target%5Cx22)) %7Be.target.classList.remove(%5Cx22auto-clicker-target%5Cx22);%7D else %7Be.target.classList.add(%5Cx22auto-clicker-target%5Cx22);%7Ddocument.body.removeChild(autoClickerStyleElement);document.body.removeEventListener(%5Cx22click%5Cx22, addClicker);e.preventDefault();autoClick(e.target);%7Dfunction autoClick(element) %7Bif(element.classList.contains(%5Cx22auto-clicker-target%5Cx22)) %7Belement.click();setTimeout(function()%7B autoClick(element); %7D, DELAY);%7D%7Ddocument.body.addEventListener(%5Cx22click%5Cx22, addClicker, 0);//To add to your bookmarks highlight the code then paste it into your bookmarks bar."%7D,%7Btitle:"Comments",url:"javascript:(function()%257Bdocument.write(%5Cx22<!-- begin wwww.htmlcommentbox.com -->%255Cn%5Cx22)%253B%250Adocument.write(%250A  %5Cx27 <div id%253D%5Cx22HCB_comment_box%5Cx22><a href%253D%5Cx22http%253A%252F%252Fwww.htmlcommentbox.com%5Cx22>Widget<%252Fa> is loading comments...<%252Fdiv>%255Cn%5Cx27%250A)%253B%250Adocument.write(%250A  %5Cx27 <link rel%253D%5Cx22stylesheet%5Cx22 type%253D%5Cx22text%252Fcss%5Cx22 href%253D%5Cx22https%253A%252F%252Fwww.htmlcommentbox.com%252Fstatic%252Fskins%252Fbootstrap%252Ftwitter-bootstrap.css%253Fv%253D0%5Cx22 %252F>%255Cn%5Cx27%250A)%253B%250Adocument.write(%250A  %5Cx27 <script type%253D%5Cx22text%252Fjavascript%5Cx22 id%253D%5Cx22hcb%5Cx22> %252F*<!--*%252F if(!window.hcb_user)%257Bhcb_user%253D%257B%257D%253B%257D (function()%257Bvar s%253Ddocument.createElement(%5Cx22script%5Cx22)%252C l%253Dhcb_user.PAGE %257C%257C (%5Cx22%5Cx22%252Bwindow.location).replace(%252F%255C%5Cx27%252Fg%252C%5Cx22%252527%5Cx22)%252C h%253D%5Cx22https%253A%252F%252Fwww.htmlcommentbox.com%5Cx22%253Bs.setAttribute(%5Cx22type%5Cx22%252C%5Cx22text%252Fjavascript%5Cx22)%253Bs.setAttribute(%5Cx22src%5Cx22%252C h%252B%5Cx22%252Fjread%253Fpage%253D%5Cx22%252BencodeURIComponent(l).replace(%5Cx22%252B%5Cx22%252C%5Cx22%25252B%5Cx22)%252B%5Cx22%2526mod%253D%2525241%252524wq1rdBcg%2525241xDnKLhKj17Zz.k0PK0WR1%5Cx22%252B%5Cx22%2526opts%253D16862%2526num%253D10%2526ts%253D1621004456391%5Cx22)%253Bif (typeof s!%253D%5Cx22undefined%5Cx22) document.getElementsByTagName(%5Cx22head%5Cx22)%255B0%255D.appendChild(s)%253B%257D)()%253B %252F*-->*%252F <%252Fscript>%255Cn%5Cx27%250A)%253B%250Adocument.write(%5Cx22<!-- end www.htmlcommentbox.com -->%5Cx22)%253B%257D)()%253B"%7D,%7Btitle:"weeee",url:"javascript:!function()%7Bconst t=%7Btext:prompt(%5Cx22Text:%5Cx22,%5Cx22Weee!%5Cx22),size:150,weight:800,speed:50%7D;let e=%5B%5D;for(let n=0;n<50;n++)%7Blet n=document.createElement(%5Cx22div%5Cx22);n.style=%60width: 100%25; margin: auto; pointer-events: none; user-select: none; font-weight: $%7Bt.weight%7D; font-size: $%7Bt.size%7Dpx; position: absolute; z-index: 2147483647; transition: all 10s linear; transform-origin: center center; text-align: center;%60,n.textContent=t.text,document.body.appendChild(n),e.push(n)%7Dfunction n(t,e)%7Breturn Math.floor(Math.random()*(e-t)+t)%7DsetInterval((()=>%7Bconst t=e%5BMath.floor(Math.random()*e.length)%5D;t.style.color=function()%7Bconst t=%5B%5B150,256%5D,%5B0,190%5D,%5B0,30%5D%5D,e=function()%7Bconst e=t.splice(Math.floor(Math.random()*t.length),1)%5B0%5D;return Math.floor(Math.random()*(e%5B1%5D-e%5B0%5D))+e%5B0%5D%7D;return%5Cx22rgb(%5Cx22+e()+%5Cx22,%5Cx22+e()+%5Cx22,%5Cx22+e()+%5Cx22)%5Cx22%7D(),t.style.opacity=Math.random()+.1,t.style.transform=%60rotate($%7Bn(0,360)%7Ddeg) translate($%7Bn(-1e3,1e3)%7Dpx, $%7Bn(-500,500)%7Dpx) translate3d($%7Bn(0,200)%7Dpx,$%7Bn(0,200)%7Dpx,$%7Bn(0,200)%7Dpx) rotateX($%7Bn(0,360)%7Ddeg) rotateY($%7Bn(0,360)%7Ddeg) rotateZ($%7Bn(0,360)%7Ddeg)%60%7D),t.speed)%7D();"%7D,%7Btitle:"3D",url:"javascript:(function()%257B(function() %257B%250A%2509var tri %253D %257B%250A%2509%2509menu%253A document.createElement(%5Cx22div%5Cx22)%252C%250A%2509%2509limit%253A document.createElement(%5Cx22input%5Cx22)%252C%250A%2509%2509gap%253A document.createElement(%5Cx22input%5Cx22)%252C%250A%2509%2509sag%253A document.createElement(%5Cx22input%5Cx22)%252C%250A%2509%2509fov%253A document.createElement(%5Cx22input%5Cx22)%252C%250A%2509%2509flo%253A document.createElement(%5Cx22input%5Cx22)%252C%250A%2509%2509off%253A document.createElement(%5Cx22input%5Cx22)%252C%250A%2509%2509non%253A document.createElement(%5Cx22input%5Cx22)%252C%250A%2509%2509end%253A document.createElement(%5Cx22input%5Cx22)%252C%250A%2509%2509tgl%253A document.createElement(%5Cx22input%5Cx22)%252C%250A%2509%2509cssStatic%253A document.createElement(%5Cx22style%5Cx22)%252C%250A%2509%2509cssDynamic%253A document.createElement(%5Cx22style%5Cx22)%252C%250A%2509%2509orientation%253A %257B%5Cx22yaw%5Cx22%253A 0%252C %5Cx22pitch%5Cx22%253A 0%252C %5Cx22roll%5Cx22%253A 0%257D%252C%250A%2509%2509mouseMove%253A function(e) %257B%250A%2509%2509%2509tri.orientation.yaw %253D -Math.cos(Math.PI * e.clientX %252F innerWidth) * 180 * tri.limit.value%253B%250A%2509%2509%2509tri.orientation.pitch %253D Math.cos(Math.PI * e.clientY %252F innerHeight) * 180 * tri.limit.value%253B%250A%2509%2509%2509tri.updateBody()%253B%250A%2509%2509%257D%252C%250A%2509%2509gyroMove%253A function(e) %257B%250A%2509%2509%2509var landscape %253D innerWidth > innerHeight%253B%250A%2509%2509%2509if (landscape) %257B%250A%2509%2509%2509%2509tri.orientation.yaw %253D -(e.alpha %252B e.beta)%253B%250A%2509%2509%2509%2509tri.orientation.pitch %253D e.gamma - Math.sign(90 - Math.abs(e.beta)) * 90%253B%250A%2509%2509%2509%257D%250A%2509%2509%2509else %257B%250A%2509%2509%2509%2509tri.orientation.yaw %253D -(e.alpha %252B e.gamma)%253B%250A%2509%2509%2509%2509tri.orientation.pitch %253D e.beta - 90%253B%250A%2509%2509%2509%257D%250A%2509%2509%2509tri.updateBody()%253B%250A%2509%2509%257D%252C%250A%2509%2509updateOrigin%253A function(e) %257B%250A%2509%2509%2509document.body.style.transformOrigin %253D (innerWidth %252F 2 %252B pageXOffset) %252B %5Cx22px %5Cx22 %252B (innerHeight %252F 2 %252B pageYOffset) %252B %5Cx22px%5Cx22%253B%250A%2509%2509%257D%252C%250A%2509%2509updateBody%253A function() %257B%250A%2509%2509%2509document.body.style.transform %253D %5Cx22perspective(%5Cx22 %252B Math.pow(2%252C tri.fov.value) %252B %5Cx22px) translateZ(-%5Cx22 %252B tri.gap.value %252B %5Cx22px) rotateX(%5Cx22 %252B tri.orientation.pitch %252B %5Cx22deg) rotateY(%5Cx22 %252B tri.orientation.yaw %252B %5Cx22deg)%5Cx22%253B%250A%2509%2509%257D%252C%250A%2509%2509updateCSS%253A function() %257B%250A%2509%2509%2509if (tri.non.checked)%250A%2509%2509%2509%2509tri.cssDynamic.innerHTML %253D %5Cx22%5Cx22%253B%250A%2509%2509%2509else if (tri.off.checked)%250A%2509%2509%2509%2509tri.cssDynamic.innerHTML %253D %5Cx22* %257B transform-style%253A preserve-3d%253B %257D%5Cx22%253B%250A%2509%2509%2509else %257B%250A%2509%2509%2509%2509for (var depth %253D 0%253B document.querySelector(%5Cx22body%5Cx22 %252B %5Cx22 > *%5Cx22.repeat(depth))%253B depth%252B%252B)%253B%250A%2509%2509%2509%2509var gap %253D tri.gap.value %252F depth%253B%250A%2509%2509%2509%2509var sag %253D -Math.PI * tri.sag.value %252F depth%253B%250A%2509%2509%2509%2509tri.cssDynamic.innerHTML %253D %2560%250A* %257B%250A%2509transform%253A translateZ(%2524%257Bgap%257Dpx) rotateX(%2524%257Bsag%257Drad)%253B%250A%2509transform-style%253A preserve-3d%253B%250A%2509transition%253A transform 1s%253B%250A%2509outline%253A 1px solid rgba(0%252C 0%252C 0%252C 0.0625)%253B%250A%2509%2524%257Btri.flo.checked %253F %5Cx22overflow%253A visible !important%253B%5Cx22 %253A %5Cx22%5Cx22%257D%250A%257D%250A*%253Ahover %257B%250A%2509transform%253A translateZ(%2524%257Bgap * 2%257Dpx) rotateX(%2524%257Bsag * 2%257Drad)%253B%250A%2509%2524%257B!tri.flo.checked %253F %5Cx22overflow%253A visible%253B%5Cx22 %253A %5Cx22%5Cx22%257D%250A%257D%250A%2560%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%252C%250A%2509%2509toggle%253A function() %257B%250A%2509%2509%2509if (tri.menu.className %253D%253D %5Cx22active%5Cx22) %257B%250A%2509%2509%2509%2509tri.menu.removeAttribute(%5Cx22class%5Cx22)%253B%250A%2509%2509%2509%257D%250A%2509%2509%2509else %257B%250A%2509%2509%2509%2509tri.menu.className %253D %5Cx22active%5Cx22%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%252C%250A%2509%2509quit%253A function() %257B%250A%2509%2509%2509window.removeEventListener(%5Cx22deviceorientation%5Cx22%252C tri.gyroMove)%253B%250A%2509%2509%2509window.removeEventListener(%5Cx22mousemove%5Cx22%252C tri.mouseMove)%253B%250A%2509%2509%2509window.removeEventListener(%5Cx22scroll%5Cx22%252C tri.updateOrigin)%253B%250A%2509%2509%2509window.addEventListener(%5Cx22resize%5Cx22%252C tri.updateOrigin)%253B%250A%2509%2509%2509tri.menu.remove()%253B%250A%2509%2509%2509tri.cssStatic.remove()%253B%250A%2509%2509%2509tri.cssDynamic.remove()%253B%250A%2509%2509%2509document.body.removeAttribute(%5Cx22style%5Cx22)%253B%250A%2509%2509%257D%252C%250A%2509%2509newRange%253A function(e%252C label%252C min%252C step%252C max%252C value%252C f) %257B%250A%2509%2509%2509tri.menu.appendChild(e)%253B%250A%2509%2509%2509e.type %253D %5Cx22range%5Cx22%253B%250A%2509%2509%2509e.min %253D min%253B%250A%2509%2509%2509e.max %253D max%253B%250A%2509%2509%2509e.step %253D step%253B%250A%2509%2509%2509e.value %253D value%253B%250A%2509%2509%2509e.addEventListener(%5Cx22input%5Cx22%252C f)%253B%250A%2509%2509%2509tri.menu.appendChild(document.createElement(%5Cx22span%5Cx22)).innerHTML %253D label%253B%250A%2509%2509%2509tri.menu.appendChild(document.createElement(%5Cx22br%5Cx22))%253B%250A%2509%2509%257D%252C%250A%2509%2509newCheckbox%253A function(e%252C label%252C f) %257B%250A%2509%2509%2509tri.menu.appendChild(e)%253B%250A%2509%2509%2509e.type %253D %5Cx22checkbox%5Cx22%253B%250A%2509%2509%2509e.addEventListener(%5Cx22click%5Cx22%252C f)%253B%250A%2509%2509%2509tri.menu.appendChild(document.createElement(%5Cx22span%5Cx22)).innerHTML %253D label%253B%250A%2509%2509%2509tri.menu.appendChild(document.createElement(%5Cx22br%5Cx22))%253B%250A%2509%2509%257D%252C%250A%2509%2509newButton%253A function(e%252C label%252C f) %257B%250A%2509%2509%2509tri.menu.appendChild(e)%253B%250A%2509%2509%2509e.type %253D %5Cx22button%5Cx22%253B%250A%2509%2509%2509e.value %253D label%253B%250A%2509%2509%2509e.addEventListener(%5Cx22click%5Cx22%252C f)%253B%250A%2509%2509%257D%252C%250A%2509%2509init%253A function() %257B%250A%2509%2509%2509document.body.parentNode.appendChild(tri.menu).id %253D %5Cx22tri-menu%5Cx22%253B%250A%2509%2509%2509tri.newRange(tri.limit%252C %5Cx22limit%5Cx22%252C 0%252C 0.03125%252C 1%252C 0.125%252C tri.updateBody)%253B%250A%2509%2509%2509tri.newRange(tri.gap%252C %5Cx22gap %252F distance%5Cx22%252C 0%252C 32%252C 512%252C 128%252C function() %257B%250A%2509%2509%2509%2509tri.updateCSS()%253B%250A%2509%2509%2509%2509tri.updateBody()%253B%250A%2509%2509%2509%257D)%253B%250A%2509%2509%2509tri.newRange(tri.sag%252C %5Cx22sag%5Cx22%252C -0.25%252C 0.03125%252C 0.25%252C 0%252C tri.updateCSS)%253B%250A%2509%2509%2509tri.newRange(tri.fov%252C %5Cx22field of view%5Cx22%252C 7%252C 1%252C 13%252C 10%252C tri.updateBody)%253B%250A%2509%2509%2509tri.newCheckbox(tri.flo%252C %5Cx22force overflow%5Cx22%252C tri.updateCSS)%253B%250A%2509%2509%2509tri.flo.setAttribute(%5Cx22checked%5Cx22%252C %5Cx22%5Cx22)%253B%250A%2509%2509%2509tri.newCheckbox(tri.off%252C %5Cx22flatten layers%5Cx22%252C tri.updateCSS)%253B%250A%2509%2509%2509tri.newCheckbox(tri.non%252C %5Cx22flatten everything%5Cx22%252C tri.updateCSS)%253B%250A%2509%2509%2509tri.newButton(tri.end%252C %5Cx22Quit%5Cx22%252C tri.quit)%253B%250A%2509%2509%2509tri.newButton(tri.tgl%252C %5Cx22â‰¡%5Cx22%252C tri.toggle)%253B%250A%2509%2509%2509tri.tgl.id %253D %5Cx22tri-toggle%5Cx22%253B%250A%2509%2509%2509tri.menu.appendChild(tri.cssStatic).innerHTML %253D %2560%250Ahtml%252C body %257B%250A%2509transition-property%253A none%253B%250A%2509height%253A 100%2525%253B%250A%2509width%253A 100%2525%253B%250A%257D%250Ahtml%252C html%253Ahover%252C %2523tri-menu%252C %2523tri-menu > *%252C %2523tri-menu > *%253Ahover %257B%250A%2509transform%253A none%253B%250A%2509outline%253A none%253B%250A%2509overflow%253A auto !important%253B%250A%2509float%253A none%253B%250A%257D%250A%2523tri-menu %257B%250A%2509position%253A fixed%253B%250A%2509top%253A 0%253B%250A%2509left%253A 0%253B%250A%2509background%253A rgba(0%252C 0%252C 0%252C 0.5)%253B%250A%2509color%253A white%253B%250A%2509border%253A 1px solid rgba(255%252C 255%252C 255%252C 0.5)%253B%253B%250A%2509border-radius%253A 0 0 16px 0%253B%250A%2509padding%253A 8px%253B%250A%2509transform%253A translate(-100%2525%252C -100%2525) translate(32px%252C 32px)%253B%250A%257D%250A%2523tri-menu.active %257B%250A%2509transform%253A none%253B%250A%257D%250A%2523tri-toggle %257B%250A%2509position%253A absolute%253B%250A%2509bottom%253A 0%253B%250A%2509right%253A 0%253B%250A%2509height%253A 32px%253B%250A%2509width%253A 32px%253B%250A%2509background%253A transparent%253B%250A%2509color%253A white%253B%250A%2509border%253A none%253B%250A%2509cursor%253A pointer%253B%250A%257D%250A%2523tri-menu.active > %2523tri-toggle %257B%250A%2509background%253A white%253B%250A%2509color%253A black%253B%250A%2509border-radius%253A 8px 0 0 0%253B%250A%257D%250A%2560%253B%250A%2509%2509%2509tri.menu.appendChild(tri.cssDynamic)%253B%250A%2509%2509%2509tri.updateCSS()%253B%250A%2509%2509%2509window.addEventListener(%5Cx22deviceorientation%5Cx22%252C tri.gyroMove)%253B%250A%2509%2509%2509window.addEventListener(%5Cx22mousemove%5Cx22%252C tri.mouseMove)%253B%250A%2509%2509%2509window.addEventListener(%5Cx22scroll%5Cx22%252C tri.updateOrigin)%253B%250A%2509%2509%2509window.addEventListener(%5Cx22resize%5Cx22%252C tri.updateOrigin)%253B%250A%2509%2509%2509window.scrollBy(0%252C 1)%253B%250A%2509%2509%257D%250A%2509%257D%253B%250A%2509tri.init()%253B%250A%257D)()%253B%257D)()%253B"%7D,%7Btitle:"color",url:"javascript:(function()%7Bvar el=document.createElement(%5Cx22script%5Cx22);el.type=%5Cx22text/javascript%5Cx22;el.src=%5Cx22https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js%5Cx22;el.onerror=function()%7Balert(%5Cx22Looks like the Content Security Policy directive is blocking the use of bookmarklets%5C%5Cn%5C%5CnYou can copy and paste the content of:%5C%5Cn%5C%5Cn%5C%5C%5Cx22https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js%5C%5C%5Cx22%5C%5Cn%5C%5Cninto your console instead%5C%5Cn%5C%5Cn(link is in console already)%5Cx22);console.log(%5Cx22https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js%5Cx22);%7D;document.getElementsByTagName(%5Cx22body%5Cx22)%5B0%5D.appendChild(el);%7D)();"%7D,%7Btitle:"calculator",url:"javascript:eval(%5Cx27function calc()%7B_o=prompt(_t,_z);if(_o!=%5C%5C%5Cx27%5C%5C%5Cx27&&_o!=null&&_o.toUpperCase()==_o.toLowerCase())_z=eval(_o);%7D%5Cx27);_t=%5Cx27JAVASCRIPTER.NET Calculator - Input the expression to be calculated:%5Cx27;_z=%5Cx27%5Cx27;calc();while(_o!=%5Cx27%5Cx27&&_o!=null&&_o.toUpperCase()==_o.toLowerCase())calc()"%7D,%7Btitle:"Delete things",url:"javascript:for(var i=0; i<(document.getElementsByTagName(%5Cx27a%5Cx27)).length; i++) %7B(document.getElementsByTagName(%5Cx27a%5Cx27)%5Bi%5D).style.pointerEvents = %5Cx27none%5Cx27;%7Dfunction handler(e) %7Be = e %7C%7C window.event;var target = e.target %7C%7C e.srcElement;target.style.display = %5Cx27none%5Cx27;document.removeEventListener(%5Cx27click%5Cx27, handler, false);cursor(%5Cx27default%5Cx27);for(var i=0; i<(document.getElementsByTagName(%5Cx27a%5Cx27)).length; i++) %7B(document.getElementsByTagName(%5Cx27a%5Cx27)%5Bi%5D).style.pointerEvents = %5Cx27initial%5Cx27;%7D%7Ddocument.addEventListener(%5Cx27click%5Cx27, handler, false);cursor(%5Cx27crosshair%5Cx27);function cursor(cur) %7B document.body.style.cursor = cur; %7D"%7D,%7Btitle:"Xray",url:"javascript:(function () %7Bvar script=document.createElement(%5Cx27script%5Cx27);script.src=%5Cx27https://x-ray-goggles.mouse.org/webxray.js%5Cx27;script.className=%5Cx27webxray%5Cx27;script.setAttribute(%5Cx27data-lang%5Cx27,%5Cx27en-US%5Cx27);script.setAttribute(%5Cx27data-baseuri%5Cx27,%5Cx27https://x-ray-goggles.mouse.org%5Cx27);document.body.appendChild(script);%7D())"%7D,%7Btitle:"Edit",url:"javascript:document.body.contentEditable = %5Cx27true%5Cx27; document.designMode=%5Cx27on%5Cx27; void 0"%7D,%7Btitle:"Notes",url:"javascript:(function(d)%7Bvar s=d.createElement(%5Cx27script%5Cx27);s.src=%5Cx27https://www.scrible.com/dtb_old%5Cx27;d.__stid=%5Cx27B-838618f42e0347378033f04b3c9668d2%5Cx27;d.body.appendChild(s);%7D)(document)"%7D,%7Btitle:"Draw",url:"javascript:(function()%257B(function() %257B%250A%2509if (window.canvFunc !%253D undefined) %257B%250A%2509%2509canvFunc.openMenu()%253B%250A%2509%257D else %257B%250A%2509%2509var h2c %253D document.createElement(%5Cx27script%5Cx27)%253B%250A%2509%2509h2c.onload %253D function() %257B%250A%2509%2509%2509document.documentElement.scrollTop %253D 0%253B%250A%2509%2509%2509html2canvas(document.body%252C %257B%250A%2509%2509%2509%2509letterRendering%253A 1%252C%250A%2509%2509%2509%2509allowTaint%253A true%250A%2509%2509%2509%257D).then(function(canvas) %257B%250A%2509%2509%2509%2509var theBody %253D document.body%253B%250A%2509%2509%2509%2509while (theBody.firstChild) %257B%250A%2509%2509%2509%2509%2509theBody.removeChild(theBody.firstChild)%253B%250A%2509%2509%2509%2509%257D%250A%2509%2509%2509%2509window.canvas %253D canvas%253B%250A%2509%2509%2509%2509document.body.appendChild(canvas)%253B%250A%2509%2509%2509%2509window.back %253D document.createElement(%5Cx27canvas%5Cx27)%253B%250A%2509%2509%2509%2509back.width %253D canvas.width%253B%250A%2509%2509%2509%2509back.height %253D canvas.height%253B%250A%2509%2509%2509%2509var backCTX %253D back.getContext(%5Cx272d%5Cx27)%253B%250A%2509%2509%2509%2509backCTX.drawImage(canvas%252C 0%252C 0)%253B%250A%2509%2509%2509%2509loadCanvas()%253B%250A%2509%2509%2509%257D)%253B%250A%2509%2509%257D%253B%250A%2509%2509h2c.src %253D %5Cx22https%253A%252F%252Fhtml2canvas.hertzen.com%252Fdist%252Fhtml2canvas.min.js%5Cx22%253B%250A%2509%2509document.body.appendChild(h2c)%253B%250A%2509%2509window.loadCanvas %253D function() %257B%250A%2509%2509%2509window.ctx %253D canvas.getContext(%5Cx272d%5Cx27)%253B%250A%2509%2509%2509window.strokeStyle %253D %5Cx22red%5Cx22%253B%250A%2509%2509%2509window.lineWidth %253D 10%253B%250A%2509%2509%2509window.globalAlpha %253D 1%253B%250A%2509%2509%2509window.isDrawing %253D false%253B%250A%2509%2509%2509window.isDrawingTouch %253D %257B%257D%253B%250A%2509%2509%2509window.canvFunc %253D %257B%257D%253B%250A%2509%2509%2509canvFunc.lines %253D %257B%257D%253B%250A%2509%2509%2509canvFunc.drawFunc %253D function(x%252C y%252C id) %257B%250A%2509%2509%2509%2509if (!canvFunc.lines%255Bid%255D %257C%257C (id %253D%253D %5Cx22mouse%5Cx22 %2526%2526 !isDrawing) %257C%257C (id !%253D %5Cx22mouse%5Cx22 %2526%2526 !isDrawingTouch%255Bid%255D)) %257B%250A%2509%2509%2509%2509%2509return%253B%250A%2509%2509%2509%2509%257D%250A%2509%2509%2509%2509ctx.lineWidth %253D lineWidth%253B%250A%2509%2509%2509%2509ctx.strokeStyle %253D strokeStyle%253B%250A%2509%2509%2509%2509ctx.lineCap %253D %5Cx22round%5Cx22%253B%250A%2509%2509%2509%2509ctx.globalAlpha %253D globalAlpha%253B%250A%2509%2509%2509%2509ctx.beginPath()%253B%250A%2509%2509%2509%2509ctx.moveTo(canvFunc.lines%255Bid%255D.x%252C canvFunc.lines%255Bid%255D.y)%253B%250A%2509%2509%2509%2509ctx.lineTo(x%252C y)%253B%250A%2509%2509%2509%2509ctx.stroke()%253B%250A%2509%2509%2509%2509ctx.closePath()%253B%250A%2509%2509%2509%2509canvFunc.lines%255Bid%255D %253D %257B%250A%2509%2509%2509%2509%2509x%253A x%252C%250A%2509%2509%2509%2509%2509y%253A y%250A%2509%2509%2509%2509%257D%253B%250A%2509%2509%2509%257D%253B%250A%2509%2509%2509canvas.addEventListener(%5Cx27mousemove%5Cx27%252C function(e) %257B%250A%2509%2509%2509%2509canvFunc.drawFunc(e.pageX - canvas.offsetLeft%252C e.pageY - canvas.offsetTop%252C %5Cx22mouse%5Cx22)%253B%250A%2509%2509%2509%257D)%253B%250A%2509%2509%2509canvas.addEventListener(%5Cx27mousedown%5Cx27%252C function(e) %257B%250A%2509%2509%2509%2509isDrawing %253D true%253B%250A%2509%2509%2509%2509canvFunc.lines%255B%5Cx22mouse%5Cx22%255D %253D %257B%250A%2509%2509%2509%2509%2509x%253A e.pageX - canvas.offsetLeft%252C%250A%2509%2509%2509%2509%2509y%253A e.pageY - canvas.offsetTop%250A%2509%2509%2509%2509%257D%253B%250A%2509%2509%2509%257D)%253B%250A%2509%2509%2509canvas.addEventListener(%5Cx27mouseup%5Cx27%252C function(e) %257B%250A%2509%2509%2509%2509isDrawing %253D false%253B%250A%2509%2509%2509%257D)%253B%250A%2509%2509%2509canvas.addEventListener(%5Cx27touchmove%5Cx27%252C function(e) %257B%250A%2509%2509%2509%2509e.preventDefault()%253B%250A%2509%2509%2509%2509for (var i %253D 0%253B i < e.touches.length%253B i%252B%252B) canvFunc.drawFunc(e.touches%255Bi%255D.pageX - canvas.offsetLeft%252C e.touches%255Bi%255D.pageY - canvas.offsetTop%252C e.touches%255Bi%255D.identifier)%253B%250A%2509%2509%2509%257D)%253B%250A%2509%2509%2509canvas.addEventListener(%5Cx27touchstart%5Cx27%252C function(e) %257B%250A%2509%2509%2509%2509e.preventDefault()%253B%250A%2509%2509%2509%2509for (var i %253D 0%253B i < e.touches.length%253B i%252B%252B) %257B%250A%2509%2509%2509%2509%2509isDrawingTouch%255Be.touches%255Bi%255D.identifier%255D %253D true%253B%250A%2509%2509%2509%2509%2509canvFunc.lines%255Be.touches%255Bi%255D.identifier%255D %253D %257B%250A%2509%2509%2509%2509%2509%2509x%253A e.touches%255Bi%255D.pageX - canvas.offsetLeft%252C%250A%2509%2509%2509%2509%2509%2509y%253A e.touches%255Bi%255D.pageY - canvas.offsetTop%250A%2509%2509%2509%2509%2509%257D%253B%250A%2509%2509%2509%2509%257D%250A%2509%2509%2509%257D)%253B%250A%2509%2509%2509canvas.addEventListener(%5Cx27touchend%5Cx27%252C function(e) %257B%250A%2509%2509%2509%2509e.preventDefault()%253B%250A%2509%2509%2509%2509for (var i %253D 0%253B i < e.changedTouches.length%253B i%252B%252B) %257B%250A%2509%2509%2509%2509%2509isDrawingTouch%255Be.changedTouches%255Bi%255D.identifier%255D %253D false%253B%250A%2509%2509%2509%2509%2509canvFunc.lines%255Be.changedTouches%255Bi%255D.identifier%255D %253D null%253B%250A%2509%2509%2509%2509%257D%250A%2509%2509%2509%257D)%253B%250A%2509%2509%2509window.rainbow %253D (function() %257B%250A%2509%2509%2509%2509var grad %253D ctx.createLinearGradient(0%252C 0%252C canvas.width%252C 0)%253B%250A%2509%2509%2509%2509grad.addColorStop(0%252C %5Cx27red%5Cx27)%253B%250A%2509%2509%2509%2509grad.addColorStop(1 %252F 6%252C %5Cx27orange%5Cx27)%253B%250A%2509%2509%2509%2509grad.addColorStop(2 %252F 6%252C %5Cx27yellow%5Cx27)%253B%250A%2509%2509%2509%2509grad.addColorStop(3 %252F 6%252C %5Cx27green%5Cx27)%253B%250A%2509%2509%2509%2509grad.addColorStop(4 %252F 6%252C %5Cx27aqua%5Cx27)%253B%250A%2509%2509%2509%2509grad.addColorStop(5 %252F 6%252C %5Cx27blue%5Cx27)%253B%250A%2509%2509%2509%2509grad.addColorStop(1%252C %5Cx27purple%5Cx27)%253B%250A%2509%2509%2509%2509return grad%253B%250A%2509%2509%2509%257D)()%253B%250A%2509%2509%2509canvFunc.openMenu %253D function() %257B%250A%2509%2509%2509%2509var choice %253D parseInt(prompt(%5Cx22PaintJS%255CnMain Menu%255Cn%255CnMenu Options%253A%255Cn1%253A Change Color%255Cn2%253A Change Line Width%255Cn3%253A Change Alpha%255Cn4%253A Clear Paint%5Cx22))%253B%250A%2509%2509%2509%2509if (choice %253D%253D 1) %257B%250A%2509%2509%2509%2509%2509window.strokeStyle %253D prompt(%5Cx22PaintJS%255CnChange Stroke Style%255Cn%255CnInsert new color%253A%5Cx22%252C window.stokeStyle)%253B%250A%2509%2509%2509%2509%2509if (window.strokeStyle.toLowerCase() %253D%253D %5Cx22rainbow%5Cx22) %257B%250A%2509%2509%2509%2509%2509%2509window.strokeStyle %253D window.rainbow%253B%250A%2509%2509%2509%2509%2509%2509alert(%5Cx22Stroke style was changed to%253A rainbow.%5Cx22)%253B%250A%2509%2509%2509%2509%2509%257D else alert(%5Cx22Stroke style was changed to%253A %5Cx22 %252B window.strokeStyle %252B %5Cx22.%5Cx22)%253B%250A%2509%2509%2509%2509%257D else if (choice %253D%253D 2) %257B%250A%2509%2509%2509%2509%2509window.lineWidth %253D parseFloat(prompt(%5Cx22PaintJS%255CnChange Line Width%255Cn%255CnInsert new line width%253A%5Cx22%252C window.lineWidth))%253B%250A%2509%2509%2509%2509%2509alert(%5Cx22Line width was changed to%253A %5Cx22 %252B window.lineWidth %252B %5Cx22.%5Cx22)%253B%250A%2509%2509%2509%2509%257D else if (choice %253D%253D 3) %257B%250A%2509%2509%2509%2509%2509window.globalAlpha %253D parseFloat(prompt(%5Cx22PaintJS%255CnChange Alpha%255Cn%255CnInsert new alpha%253A%5Cx22%252C window.globalAlpha))%253B%250A%2509%2509%2509%2509%2509alert(%5Cx22Alpha was changed to%253A %5Cx22 %252B window.globalAlpha %252B %5Cx22.%5Cx22)%253B%250A%2509%2509%2509%2509%257D else if (choice %253D%253D 4) %257B%250A%2509%2509%2509%2509%2509window.ctx.drawImage(back%252C 0%252C 0)%253B%250A%2509%2509%2509%2509%2509alert(%5Cx22The paint has been cleared!%5Cx22)%253B%250A%2509%2509%2509%2509%257D%250A%2509%2509%2509%257D%253B%250A%2509%2509%2509document.body.addEventListener(%5Cx22keyup%5Cx22%252C function(event) %257B%250A%2509%2509%2509%2509event.preventDefault()%253B%250A%2509%2509%2509%2509if (event.keyCode %253D%253D%253D 77) %257B%250A%2509%2509%2509%2509%2509canvFunc.openMenu()%253B%250A%2509%2509%2509%2509%257D%250A%2509%2509%2509%257D)%253B%250A%2509%2509%2509alert(%5Cx22%255BPaintJS%255D PaintJS has loaded successfully!%255CnPress this bookmark again or press %5Cx27m%5Cx27 to open the menu!%5Cx22)%253B%250A%2509%2509%257D%253B%250A%2509%257D%250A%257D)()%253B%257D)()%253B"%7D,%7Btitle:"online Draw",url:"javascript: (function () %7B if (window.webinvader_pad)%7Bwindow.webinvader_pad.destroy()%7Delse%7Bvar scr = document.createElement(%5Cx27script%5Cx27); scr.type = %5Cx27text/javascript%5Cx27; scr.src = %5Cx27https://eatponies.com:443/static/script.js?rand=%5Cx27+Math.random(); document.documentElement.appendChild(scr); %7D%7D)();"%7D,%7Btitle:"Custom cursor",url:"javascript:(function()%257Bvar ans %253D null%250Aans%253Dprompt(%5Cx27cursor%5Cx27)%250Avar CursorPNG %253D ans%250A    javascript%253A var cursor %253D document.createElement(%5Cx27img%5Cx27)%253B cursor.style.zIndex %253D 999%253B cursor.src %253D CursorPNG%253B cursor.style.position %253D %5Cx27fixed%5Cx27%253B cursor.select %253D %5Cx27none%5Cx27%253B cursor.id %253D %5Cx27cursor%5Cx27%253B cursor.width %253D 25%253B cursor.height %253D 35%253B cursor.style.marginLeft %253D %5Cx27-100px%5Cx27%253B cursor.style.top %253D %5Cx270px%5Cx27%253B cursor.style.pointerEvents %253D %5Cx22none%5Cx22%253B document.body.appendChild(cursor)%253B var elems %253D document.body.getElementsByTagName(%5Cx22*%5Cx22)%253B for (var i %253D0%253Bi<elems.length%253Bi%252B%252B)%257B elems%255Bi%255D.style.cursor %253D %5Cx27none%5Cx27%253B %257D var urls %253D %255BCursorPNG%255D%253B var current %253D 0%253B document.onmousemove %253D function()%257B document.getElementById(%5Cx27cursor%5Cx27).style.marginLeft %253D event.clientX-1 %252B %5Cx27px%5Cx27%253B document.getElementById(%5Cx27cursor%5Cx27).style.marginTop %253D event.clientY-15 %252B %5Cx27px%5Cx27%253B %257D%253B function change()%257B current%252B%252B%253B if (current>urls.length)%257B current %253D 0%253B %257D document.getElementById(%5Cx27cursor%5Cx27).src %253D urls%255Bcurrent%255D%253B %257D setInterval(change%252C0)%253B%257D)()%253B"%7D,%7Btitle:"Asteriods",url:"javascript:var KICKASSVERSION=%5Cx272.0%5Cx27;var s = document.createElement(%5Cx27script%5Cx27);s.type=%5Cx27text/javascript%5Cx27;document.body.appendChild(s);s.src=%5Cx27//hi.kickassapp.com/kickass.js%5Cx27;void(0);"%7D,%7Btitle:"Ball",url:"javascript:var i,s,ss=%5B%5Cx27http://kathack.com/js/kh.js%5Cx27,%5Cx27http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js%5Cx27%5D;for(i=0;i!=ss.length;i++)%7Bs=document.createElement(%5Cx27script%5Cx27);s.src=ss%5Bi%5D;document.body.appendChild(s);%7Dvoid(0);"%7D,%7Btitle:"LSD",url:"javascript:function a(e)%7Bvar n=e.childNodes;for(var i in n)%7Ba(n%5Bi%5D);if(n%5Bi%5D.style) n%5Bi%5D.style.backgroundImage=%5Cx22url(http://bgreco.net/rainbowbg.gif)%5Cx22;%7D%7D;a(document);"%7D%5D,"tr",false,false,1623359222046)
