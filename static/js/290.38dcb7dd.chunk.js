"use strict";(self.webpackChunkportfolio_template=self.webpackChunkportfolio_template||[]).push([[290],{6177:(e,t,i)=>{i.r(t),i.d(t,{About:()=>y});var a=i(9737),s=i(7252),o=i(9020),n=i(6811),r=i(2255);const l=e=>{let{title:t,icon:i,...s}=e;return(0,r.jsxs)(a.kC,{children:[i&&(0,r.jsxs)("span",{style:{marginTop:"auto",marginBottom:"auto",marginRight:"8px"},children:[" ",i," "]}),(0,r.jsx)(a.X6,{fontSize:"2xl",fontWeight:"bold",...s,"data-aos":"fade-down",children:t})]})},c=e=>{let{title:t,...i}=e;return(0,r.jsx)(a.xv,{fontWeight:"semibold",fontSize:"lg",...i,"data-aos":"fade-down",dangerouslySetInnerHTML:{__html:t}})};var d=i(291);const p=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{icon:(0,r.jsx)(d.b0,{size:20}),title:"Blog"}),(0,r.jsx)("br",{}),n.rH.about.blog.map((e=>(0,r.jsx)(a.xu,{py:"2",children:(0,r.jsx)(a.rU,{href:e.link,target:"_blank",variant:"link",style:{boxShadow:"none"},children:e.title})},e.id)))]});var u=i(7621),h=i(5598);const m=e=>{let{expanded:t,id:i,idx:s,title:n,subTitle:l,date:d,content:p,onChange:m}=e;const g=(0,u.useMemo)((()=>t.includes(s)),[t,s]),[b,f]=(0,u.useState)(!1),x=(0,u.useMemo)((()=>p.length>1&&!g||!g&&b),[b,g,p]);return(0,u.useEffect)((()=>{const e="first-point-".concat(i),t=document.getElementById(e);var a;t&&(t.scrollWidth>=(null===(a=t.parentElement)||void 0===a?void 0:a.scrollWidth)?f(!0):f(!1))}),[i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.KF,{as:a.xu,p:"0",disabled:!0,onClick:void 0,_hover:{bg:"transparent"},overflow:"hidden",display:"block",children:[(0,r.jsx)(c,{title:n,fontWeight:"semibold"}),(0,r.jsx)(a.xv,{"data-aos":"fade",children:l}),(0,r.jsx)(a.xv,{color:"gray","data-aos":"fade-up",fontSize:"sm",fontWeight:"semibold",children:d}),p.length>0&&(0,r.jsxs)(a.kC,{pt:"2",justifyContent:"space-between","data-aos":"fade",children:[g&&1!==p.length?(0,r.jsx)(a.QI,{listStylePosition:"outside",pl:"1",children:(0,r.jsx)(a.xv,{as:"li",isTruncated:!t.includes(s),dangerouslySetInnerHTML:{__html:p[0]}})}):(0,r.jsx)(a.xv,{id:"first-point-".concat(i),isTruncated:!t.includes(s),dangerouslySetInnerHTML:{__html:p[0]}}),x&&(0,r.jsx)(o.zx,{flexShrink:0,id:"see-more-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.8",onClick:()=>{if(t.includes(s)){const e=t.filter((e=>e!==s));m(e)}else m([...t,s])},children:"See more"})]})]}),p.length>1&&(0,r.jsxs)(h.Hk,{p:"0",pl:"1",children:[(0,r.jsx)(a.QI,{listStylePosition:"outside",children:p.slice(1).map(((e,t)=>(0,r.jsx)(a.xv,{as:"li",dangerouslySetInnerHTML:{__html:e}},"".concat(n,"-cont-").concat(t))))}),t.includes(s)&&(0,r.jsx)(a.kC,{justifyContent:"flex-end",children:(0,r.jsx)(o.zx,{id:"see-less-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.7",onClick:()=>{const e=t.filter((e=>e!==s));m(e)},children:"See less"})})]})]})},g=()=>{const[e,t]=(0,u.useState)([0]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{icon:(0,r.jsx)(d.nGB,{size:28}),title:"Education"}),(0,r.jsx)("br",{}),(0,r.jsx)(h.UQ,{pt:"2",allowMultiple:!0,index:e,id:"education",children:n.rH.about.educations.map(((i,a)=>(0,r.jsx)(h.Qd,{p:"0",border:"0",mb:"4",children:(0,r.jsx)(m,{title:i.school,subTitle:i.degree,date:i.duration,content:i.content,id:i.id,idx:a,onChange:t,expanded:e})},"panel-".concat(i.school,"-").concat(i.degree))))})]})},b=e=>{let{title:t,experiences:i}=e;const[a,s]=(0,u.useState)([0]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{icon:(0,r.jsx)(d.qGN,{size:20}),title:t}),(0,r.jsx)("br",{}),(0,r.jsx)(h.UQ,{pt:"2",allowMultiple:!0,index:a,children:i.map(((e,t)=>(0,r.jsx)(h.Qd,{p:"0",border:"0",mb:"4",children:(0,r.jsx)(m,{id:e.id,title:e.company,subTitle:e.position,date:e.duration,content:e.description,idx:t,onChange:s,expanded:a})},"panel-".concat(e.company))))})]})};var f=i(1729);const x=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{icon:(0,r.jsx)(d.rU2,{size:20}),title:"Programming Skills",pb:"2"}),(0,r.jsx)("br",{}),n.rH.about.skills.map((e=>(0,r.jsxs)(a.xu,{p:"0",mb:"4",children:[(0,r.jsx)(c,{title:e.title}),(0,r.jsx)(f.$,{id:"skills-tags-".concat(e.title),tags:e.tools})]},"skills-".concat(e.title))))]}),y=()=>{const e=(0,n.r0)(n.nl.About);return(0,r.jsxs)(a.xu,{children:[(0,r.jsxs)(a.kC,{pt:"8",gap:{base:6,md:6,lg:12},direction:{base:"column",md:"row"},children:[(0,r.jsx)(a.xu,{flex:"0.35","data-aos":"fade-up",m:"auto",children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{type:"image/webp",srcSet:n.rH.common.mainPicture}),(0,r.jsx)("source",{type:"image/jpeg",srcSet:n.rH.common.mainPictureJPG}),(0,r.jsx)(s.Ee,{borderRadius:"xl",src:n.rH.common.mainPicture,w:"100%",alt:"profile image"})]})}),(0,r.jsxs)(a.xu,{flex:"0.85",children:[(0,r.jsx)(a.X6,{"data-aos":"fade-down",children:n.rH.common.name}),(0,r.jsxs)(a.kC,{alignItems:"center",children:[(0,r.jsx)(a.xv,{fontWeight:"bold",opacity:"0.5","data-aos":"fade","data-aos-delay":"200",children:n.rH.common.pronunciation}),(0,r.jsx)(o.zx,{size:"xs","aria-label":"pronunciation button",as:o.hU,variant:"icon",fontSize:"md",icon:(0,r.jsx)(d.rxG,{}),onClick:()=>{new Audio(n.rH.common.audioFile).play()},"data-aos":"fade","data-aos-delay":"400"})]}),(0,r.jsx)(a.xu,{pt:"4","data-aos":"fade-up","data-aos-delay":"400",children:(0,r.jsx)(n.VY,{fontSize:"lg",children:e.about})})]})]}),(0,r.jsxs)(a.kC,{direction:{base:"column",md:"row"},gap:{base:16,md:6,lg:12},mt:"16",justifyContent:"space-between",children:[(0,r.jsx)(a.xu,{flex:"0.6",flexShrink:{base:0},overflow:"hidden",children:(0,r.jsx)(g,{})}),(0,r.jsx)(a.xu,{flex:"0.6",overflow:"hidden",children:(0,r.jsx)(b,{title:"Experiences",experiences:n.rH.about.professionalExperiences})})]}),(0,r.jsx)(a.xu,{pt:"16",children:(0,r.jsx)(x,{})}),(0,r.jsxs)(a.kC,{direction:{base:"column",md:"row"},gap:{base:16,md:6,lg:12},mt:"16",justifyContent:"space-between",children:[(0,r.jsx)(a.xu,{flex:"1",flexShrink:{base:0},overflow:"hidden",children:(0,r.jsx)(b,{title:"Extra Curricular Activity",experiences:n.rH.about.extraActivities})}),(0,r.jsx)(a.xu,{flex:"0.5",overflow:"hidden",children:(0,r.jsx)(p,{})})]})]})}},6811:(e,t,i)=>{i.d(t,{VY:()=>x,nl:()=>g,rH:()=>m,r0:()=>f});var a=i(7621),s=i(9737),o=i(9204);const n=JSON.parse('{"name":"Mir Mursalin Ankur","logoType":{"mobile":"Mursalin Ankur","desktop":"Mursalin Ankur","role":"Lead Full-Stack Software Engineer"},"mainPicture":"/assets/me/cover-me.JPG","mainPictureJPG":"/assets/me/cover-me.JPG","pronunciation":"/mir-mur-salin-an-kur/","audioFile":"/assets/name-pro.m4a","cssVarPrefix":"ma","email":"mir.ankur.ruet13@gmail.com","linkedin":"https://www.linkedin.com/in/mir-mursalin-ankur","github":"https://github.com/Encryptioner","resume":"https://drive.google.com/file/d/1gJkTLyuS5b4pc2zsU4HWirpcYE5oAQ_v/view?usp=sharing","socials":[{"type":"linkedin","link":"https://www.linkedin.com/in/mir-mursalin-ankur"},{"type":"github","link":"https://github.com/Encryptioner"},{"type":"mail","link":"mailto:mir.ankur.ruet13@gmail.com"}]}'),r=JSON.parse('{"headline":"Hello, I\'m Mir Mursalin Ankur","picture":"/assets/me/profile-me.JPG","jpg":"/assets/me/profile-me.JPG"}'),l=JSON.parse('[{"id":"featured-app-project-nerddevs","title":"<a href=\\"https://app.aimate.online/\\" target=\\"_blank\\" class=\\"featured-title\\"><img style=\\"transform: scale(1.5)\\" src=\\"/assets/featured-projects/ai-mate-logo.png\\">AI Mate - GPT chat</a><a href=\\"https://app.pixelscraft.io/\\" target=\\"_blank\\" class=\\"featured-title\\"><img style=\\"transform: scale(1.5)\\" src=\\"/assets/featured-projects/pixels-craft-logo.png\\">PixelsCraft</a>","year":"February 2023 - Present","location":"NerdDevs, Dhaka","tags":["TypeScript","JavaScript","Flutter","Dart","NodeJS","ExpressJS","MongoDB","Redis","Artificial Intelligence","iOS","App Store","Push Notifications","VueJS 3","Tailwind CSS","AWS","S3","CloudFront","Nginx","CI/CD","Anonymous Login","Graphics Design","Best Practices"],"description":"As a leading member of a motivated team, worked on key challenges of these apps to reach thousands of active users. <br><br> <a href=\\"https://play.google.com/store/apps/details?id=com.aimate.app\\" target=\\"_blank\\"><b>AI Mate - GPT chat</b></a> is an advanced AI chat assistant powered by chatGPT. I have worked on developing this project from scratch. Solved various challenges for fronted, backend, deployment, and release using `Flutter`, `VueJS`,` NodeJs`, `Firebase`, `WebSocket`, `Pipeline`, `AWS`, `Nginx`, `Play Store`, `App Store`, etc. The implementation is battle-tasted with growing subscribed users with an easily maintainable codebase. <br><br> <a href=\\"https://apps.apple.com/us/app/pixelscraft/id6471664167\\" target=\\"_blank\\"><b>PixelsCraft</b></a> minimizes designing pain for logos, festival cards, artwork, memes, etc. with AI image generator from simple texts. My work and guidance helped the team to quickly ship the app to end users using cutting-edge technologies and best practices.","readMore":"https://play.google.com/store/apps/dev?id=6373554246189146920&hl=en_US","image":"/assets/featured-projects/nerddevs-apps.gif","jpg":"/assets/featured-projects/nerddevs-apps.gif"},{"id":"featured-project-alloy-studios","title":"<a href=\\"https://apps.apple.com/us/app/ai-chat-4-0-genius/id1665764663\\" target=\\"_blank\\" class=\\"featured-title\\"><img src=\\"/assets/featured-projects/genius-logo.png\\">AI Chat 4.0: Genius</a><a href=\\"https://apps.apple.com/us/app/second-line-2nd-phone-number/id1459896638\\" target=\\"_blank\\" class=\\"featured-title\\"><img src=\\"/assets/featured-projects/second-line-logo.png\\">Second Line 2nd Phone Number</a><a href=\\"https://apps.apple.com/us/app/second-texting-number/id1274216319\\" target=\\"_blank\\" class=\\"featured-title\\"><img src=\\"/assets/featured-projects/second-text-logo.jpg\\">Second Texting Number</a>","year":"December 2022 - Present","location":"NerdDevs, Dhaka","tags":["TypeScript","JavaScript","WebSocket","NodeJS","ExpressJS","MongoDB","Redis","Artificial Intelligence","iOS","App Store","Push Notifications","VueJS 3","Tailwind CSS","Anonymous Login","Clean Code"],"description":"As a key member of an amazing team, worked on the backend of these iOS apps which are downloaded and loved by millions of happy users. <br><br> <b>AI Chat 4.0: Genius</b> unleashes the power of ChatGPT to users with extended facilities. I have worked on building the backend of this project from the ground to scale multiple servers and deal with immediate responses for growing subscribers. My team also did frontend, backend and deployment of the admin web app which helped the client to expand the app even more. <br><br> <b>Second Line 2nd Phone Number</b> & <b>Second Texting Number</b> helps iOS users maintain a second phone number for calling and texting. I worked on integrating typescript and other technologies which helped maintain the codebase, scale better, and secure usage.","readMore":"https://apps.apple.com/us/developer/alloy-studios/id1274216318","image":"/assets/featured-projects/alloy-studios.gif","jpg":"/assets/featured-projects/alloy-studios.gif"},{"id":"featured-project-daency","title":"<div class=\\"featured-title\\"><img src=\\"/assets/featured-projects/daency-logo.png\\">Daency</div>","year":"June 2020 - December 2022","location":"NerdDevs, Dhaka","tags":["TypeScript","VueJS 2","Vuetify","NodeJS","ExpressJS","WebSocket","MongoDB","Redis","Docker","Jest","Class Validator","Jenkins","Online Payments","Stripe","CI/CD","Google, FB, WeChat Login","Agile Methodology"],"description":"Collaborating with scrum teammates and international clients, built this multi-user live group dance platform for mobile and web users from scratch. <br><br> During COVID, it helped users to stay motivated with groups of enthusiastic dancers. We\'ve implemented cross-platform online chat, and group dancing with the instructor & and moderator with the immediate scoring system using `WebSocket` and `WebRTC`. `Stripe` was used for global payment subscriptions. There was an admin part for monitoring and support. `Testing` and `CI/CD` helped the project scale better.","readMore":"https://www.youtube.com/@daency1020","image":"/assets/featured-projects/daency.png","jpg":"/assets/featured-projects/daency.png"},{"id":"featured-project-daily-stocks","title":"<div class=\\"featured-title\\"><img src=\\"/assets/featured-projects/daily-stocks-logo.png\\">Daily Stocks</div>","year":"January 2022 - November 2023","location":"NerdDevs, Dhaka","tags":["TypeScript","VueJS 3","Tailwind CSS","NodeJS","ExpressJS","Flask","MongoDB","Push Notifications","CI/CD","AWS","Nginx","Docker","Redis","Jest","Java","Play Store","Google Tag","Facebook login"],"description":"As a part of an amazing team, built this progressive stock notification web and mobile app from the ground to notify desired changes in stock price. Any person who is interested in stock can use the app to check the stock price, plan to sell or buy specific stocks, and many more. The web app is built with `Vue (Typescript)` and `Tailwind CSS`. The mobile app is built with `Java`. The backend uses `Typescript`, `NodeJS`, `Flask` etc. <br><br> My responsibilities allowed the projects to develop with cutting-edge technologies, and deploy immediately with `pipeline` and `reverse proxy` in `AWS server` and `S3 buckets`. Final releases for end users are done after extensive testing.","readMore":"https://www.facebook.com/DailyStocksInfo","image":"/assets/featured-projects/daily-stocks.jpg","jpg":"/assets/featured-projects/daily-stocks.jpg"},{"id":"featured-project-bikribatta","title":"<div class=\\"featured-title\\"><img src=\\"/assets/featured-projects/bikribatta-logo.png\\">Bikribatta</div>","year":"May 2019 - December 2022","location":"NerdDevs, Dhaka","demo":"https://app.bikribatta.com/signup","tags":["BackboneJS","ElectronJS","VueJS","i18n","NodeJS","ExpressJS","Go","Docker","Bootstrap","JQuery","Grunt","Bower","Mocha","E-Commerce","SSLCOMMERZ","Play Store"],"description":"With the guidance of senior engineers, this in-house ERP and e-commerce solution with online/offline sell, account, report, HR, and many more solutions has a multi-level user hierarchy with different authentication and menus <br><br> I have worked on building numerous features for online and offline solutions. Used `ElectronJs` for making offline apps. `Java` for mobile app. `Go` for faster calculations. With my implementation, the project supports different languages and custom changes with little change in settings and configurations.","readMore":"https://bikribatta.com/","image":"/assets/featured-projects/bikribatta.png","jpg":"/assets/featured-projects/bikribatta.png"}]'),c=JSON.parse('[{"id":"other-project-vue3-boilerplate","title":"Vue3 Boilerplate","year":"July 2022 - October 2022","demo":"https://encryptioner.github.io/frontend-vue3-boilerplate/","github":"https://github.com/Encryptioner/frontend-vue3-boilerplate","tags":["VueJS 3","Typescript","Vite","Tailwind CSS","pnpm","Vitest","Pinia","Github Action"],"description":"A starter template website for VueJS 3 with Vite and Tailwind CSS with multiple home page demos. Written in Typescript and built and deployed using GitHub action.","image":"/assets/other-projects/vite-vue-3-tailwind.png","jpg":"/assets/other-projects/vite-vue-3-tailwind.png"},{"id":"other-project-demo-site","title":"Demo Site","year":"August 2021 - November 2022","demo":"https://typescript-boilerplate-0.herokuapp.com/","tags":["NestJS","VueJS","Typescript","MongoDB","Docker","Redis","Heroku","Jest"],"description":"A demo site having user signup, login, account, settings, admin panel, etc. is primarily built using Vue.js in the frontend, NestJS in the backend, and numerous other tools.","image":"/assets/other-projects/VueJS-NestJS.png","jpg":"/assets/other-projects/VueJS-NestJS.png"},{"id":"other-project-graduation-thesis","title":"Facial Expression Recognition Based on LBP and CNN : A Comparative Study Using SVM Classifier","year":"January 2019 - February 2019","github":"https://github.com/Encryptioner/Thesis-FER-based-on-LBP-CNN-on-SVM","tags":["Machine Learning","Artificial Intelligence","Neural Network","Image Recognition","Python","Kaggle Dataset"],"description":"Graduation thesis work. It recognizes 6 facial image expressions from multiple datasets using multiple SVM classifiers. I contributed code to the 2020 <a href=\\"https://archiveprogram.github.com/\\" target=\\"_blank\\"><b>GitHub Archive Program</b></a> by sharing this thesis project publicly.","image":"/assets/other-projects/graduation-thesis.png","jpg":"/assets/other-projects/graduation-thesis.png"},{"id":"other-project-text-bomb","title":"Text Bomb","year":"January 2019 - February 2019","github":"https://github.com/Encryptioner/Text-Bomb","tags":["Python","Django","Celery","Docker","Redis","PostgreSQL"],"description":"Web Chatting Application with user registration, login, updating profile, chatting, hourly updates of new users, and email verification using Django, celery, etc.","image":"/assets/other-projects/text-bomb.png","jpg":"/assets/other-projects/text-bomb.png"},{"id":"other-project-e-examination","title":"E-Examination","year":"November 2017 - January 2018","github":"https://github.com/Encryptioner/E-Examination","tags":["HTML","CSS","PHP","JavaScript","MYSQL"],"description":"Online-based examination system with admin panel to control exams, user profile, and ranking system. Written in PHP, MySQL & Javascript","image":"/assets/other-projects/mcq-quiz.png","jpg":"/assets/other-projects/mcq-quiz.png"},{"id":"other-project-baghbondi-game","title":"Baghbondi Game","year":"November 2015 - December 2015","tags":["Java","Eclipse"],"description":"Two players popular board game with attractive menus with different options and good user interfaces.","image":"/assets/other-projects/bagh-bondi.JPG","jpg":"/assets/other-projects/bagh-bondi.JPG"}]'),d=JSON.parse('{"educations":[{"id":"edu-1","school":"<a href=\\"https://www.ruet.ac.bd/\\" target=\\"_blank\\" >Rajshahi University of Engineering & Technology, Rajshahi (RUET)</a>","degree":"Bachelor of Science in Computer Science & Engineering","duration":"April 2014 - December 2018","content":["Problem Solving: <a href=\\"https://leetcode.com/user1201B/\\" target=\\"_blank\\" ><i>Leetcode</i></a>, <a href=\\"https://uhunt.onlinejudge.org/id/648983\\" target=\\"_blank\\" ><i>UVa</i></a>, <a href=\\"https://lightoj.com/user/mir-ankur-ru\\" target=\\"_blank\\" ><i>LightOJ</i></a>, <a href=\\"https://codeforces.com/profile/Encryptioner\\" target=\\"_blank\\" ><i>Codeforces</i></a>","Courses:  Data Structures, OOP, Algorithms, Software Engineering, Computer Networks, Artificial Intelligence etc.","CGPA: 3.25/4.0"]}],"professionalExperiences":[{"id":"professional-experience-1","company":"<a href=\\"https://nerddevs.com/\\" target=\\"_blank\\" >NerdDevs Ltd.</a>","position":"Lead Software Engineer (Full-Stack)","duration":"January 2024 - Present","description":["Lead on multiple projects\u200b","Do analysis and estimation of project requirements and architect plans to deliver premium solutions on time","Break the project requirements into tickets and deploy them in steps for customer feedback","Assign tasks between ourselves after brainstorming with the team","R&D on software market and technological solutions"]},{"id":"professional-experience-2","company":"<a href=\\"https://nerddevs.com/\\" target=\\"_blank\\" >NerdDevs Ltd.</a>","position":"Software Engineer (Full-Stack)","duration":"March 2019 - December 2023","description":["Worked on frontend, backend, database to implement solutions for multiple projects using various technologies\u200b","Set up AWS server, deployed & built CI/CD pipeline","Followed best practices in software industry","Learned soft skills, trained intern & guided team"]}],"extraActivities":[{"id":"extra-activity-1","company":"<a href=\\"https://www.facebook.com/GKARUET\\" target=\\"_blank\\" >Greater Kushtia Association of RUET</a>","position":"President","duration":"2017 - 18","description":[]},{"id":"extra-activity-2","company":"<a href=\\"https://www.youtube.com/watch?v=3aqGxox8HWI\\" target=\\"_blank\\" >RUET Sahitto Songho</a>","position":"Organizing Secretary","duration":"2017 - 18","description":[]},{"id":"extra-activity-3","company":"<a href=\\"https://www.facebook.com/groups/436856396367511\\" target=\\"_blank\\" >RUET Shomanupatik - A Voluntary Organization</a>","position":"Volunteer","duration":"2014 - 18","description":[]},{"id":"extra-activity-4","company":"<a href=\\"https://www.facebook.com/groups/341771679363942\\" target=\\"_blank\\" >RUET Analytical Programming Lab</a>","position":"Member","duration":"2014 - 18","description":[]},{"id":"extra-activity-5","company":"<a href=\\"https://www.facebook.com/groups/374109086038856\\" target=\\"_blank\\" >Astronomy & Science Society of RUET (ASSR)</a>","position":"Member","duration":"2014 - 15","description":[]}],"skills":[{"title":"Language","tools":["Typescript","JavaScript","C/C++","Python","Go","Dart","Solidity","Java","PHP"]},{"title":"Backend","tools":["NodeJS","NestJS","ExpressJS","SocketIO","Handlebars","Tensorflow","Flask","Django"]},{"title":"Frontend","tools":["VueJS (2 & 3)","BackboneJS","Tailwind CSS","Vuetify","WebRTC","Bootstrap","jQuery","React","Material UI","CSS","HTML","React JS","Webpack","Vite","Bower","Babel","i18n"]},{"title":"Mobile Apps","tools":["Flutter","React Native","Java (Android)","Firebase","Play Store","App Store","Android","iOS","Push Notification"]},{"title":"Databases","tools":["MongoDB","Redis","SQLite","MySQL"]},{"title":"Tools","tools":["Agile (Scrum)","MVC","Git","pnpm","Yarn","npm","ESLint","Figma","Canva","Slack","Postman","Grunt","Jupyter","Latex","VScode","Matlab"]},{"title":"CI/CD","tools":["AWS","Heroku","Render","Jenkins","Nginx","Jira","Trello","Bitbucket","GitHub","Bash","SSH"]},{"title":"Environment","tools":["Docker","Unix"]},{"title":"Testing","tools":["Jest","Mocha"]}],"blog":[{"id":"blog-1","title":"DEV Community","link":"https://dev.to/mir_mursalin_ankur"},{"id":"blog-2","title":"Medium","link":"https://mir-mursalin-ankur.medium.com/"}]}'),p=i.p+"static/media/landing.55db4e216b46342130ae.md",u=i.p+"static/media/about.7f6df869a382d7eccb06.md";var h=i(2255);const m={common:n,landing:r,featuredProjects:l,otherProjects:c,about:d};let g=function(e){return e.Landing="landing",e.About="about",e}({});const b={[g.Landing]:p,[g.About]:u},f=e=>{const[t,i]=(0,a.useState)({landing:"",about:""});return(0,a.useEffect)((()=>{fetch(b[e]).then((e=>e.text())).then((t=>i((i=>({...i,[e]:t})))))}),[e]),t},x=e=>{let{children:t,...i}=e;return(0,h.jsx)(s.Kq,{spacing:"4",children:(0,h.jsx)(o.D,{components:{p:e=>{let{node:t,...a}=e;return(0,h.jsx)(s.xv,{...i,...a})},a:e=>{let{node:t,...i}=e;return(0,h.jsx)(s.rU,{href:i.href,target:"_blank",color:"primary.200",...i})},ul:e=>{let{node:t,...i}=e;const{ordered:a,...o}=i;return(0,h.jsx)(s.QI,{...o,"data-aos":"fade",listStylePosition:"inside",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",listStyleType:"'\u2023 '",fontWeight:"600"})},li:e=>{let{node:t,...i}=e;const{ordered:a,...s}=i;return(0,h.jsx)("li",{"data-aos":"flip-up","data-aos-delay":100*i.index+400,...s})}},children:t})})}},1729:(e,t,i)=>{i.d(t,{$:()=>o});var a=i(9737),s=i(2255);const o=e=>{let{id:t,tags:i,size:o="sm"}=e;return(0,s.jsx)(a.kC,{py:"2",wrap:"wrap",gap:"4",children:i.map(((e,i)=>(0,s.jsx)(a.xu,{"data-aos":"flip-left","data-aos-delay":50*i,children:(0,s.jsx)(a.Ct,{transition:"0.2s ease-in-out",transitionProperty:"background, color",_hover:{color:"white",bg:"primary.500"},textTransform:"none",colorScheme:"gray",borderRadius:"md",px:"8px",py:"4px",fontSize:o,fontWeight:"600",children:e})},"".concat(t,"-tag-").concat(e))))})}}}]);
//# sourceMappingURL=290.38dcb7dd.chunk.js.map