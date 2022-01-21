"use strict";(self.webpackChunkfirst_docusaurus=self.webpackChunkfirst_docusaurus||[]).push([[339],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,k=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2522:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],s={},i="Self-Hosting Backend",p={unversionedId:"developer_guide/self-hosted",id:"developer_guide/self-hosted",isDocsHomePage:!1,title:"Self-Hosting Backend",description:"No Data Loss",source:"@site/docs/developer_guide/self-hosted.md",sourceDirName:"developer_guide",slug:"/developer_guide/self-hosted",permalink:"/docs/developer_guide/self-hosted",editUrl:"https://github.com/athensresearch/docs/edit/main/docs/developer_guide/self-hosted.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running Athens Locally",permalink:"/docs/developer_guide/running"},next:{title:"REPL",permalink:"/docs/developer_guide/repl"}},u=[{value:"No Data Loss",id:"no-data-loss",children:[],level:2},{value:"Client",id:"client",children:[],level:2},{value:"Server",id:"server",children:[{value:"Custom Config",id:"custom-config",children:[],level:3},{value:"Running Athens Self-Hosted Server",id:"running-athens-self-hosted-server",children:[],level:3},{value:"Developing Athens Self-Hosted Server",id:"developing-athens-self-hosted-server",children:[],level:3}],level:2},{value:"Docker",id:"docker",children:[{value:"Updating Docker",id:"updating-docker",children:[],level:3}],level:2},{value:"DigitalOcean",id:"digitalocean",children:[],level:2},{value:"Backup your server",id:"backup-your-server",children:[{value:"Save (Backup) Your Server",id:"save-backup-your-server",children:[],level:3},{value:"Load (Restore) Your Server",id:"load-restore-your-server",children:[],level:3},{value:"Copy Your Backup to Your Local Machine",id:"copy-your-backup-to-your-local-machine",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"self-hosting-backend"},"Self-Hosting Backend"),(0,o.kt)("h2",{id:"no-data-loss"},"No Data Loss"),(0,o.kt)("p",null,"Our number one design principle is to never have data loss."),(0,o.kt)("p",null,"All accounts of data loss will be documented publicly on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/athensresearch/athens/discussions/categories/post-mortems"},"GitHub Discussions"),"."),(0,o.kt)("p",null,"Our last (and only) account of data loss was in February 2021 on our local-only version of Athens, before we made a public release, posted by a developer contributor."),(0,o.kt)("p",null,"When the self-hosted backend was in ",(0,o.kt)("inlineCode",{parentName:"p"},"alpha"),", we had known issues of data loss, crashing, and freezing because the distributed events system being incomplete. We discovered and solved these issues internally as a team. We did not invite others to use this build during this period."),(0,o.kt)("p",null,"Now we are in ",(0,o.kt)("inlineCode",{parentName:"p"},"beta"),", meaning we are ready to open up Athens for beta testers. We don't have known issues with data loss, crashing, and freezing anymore, and the first implementation of the distributed events system is complete. That said, we need to open this up to beta at this point because we need more real-world testing in a variety of contexts beyond our own team of six to go from ",(0,o.kt)("inlineCode",{parentName:"p"},"beta")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"stable"),"."),(0,o.kt)("p",null,"We invite feedback on anything and everything, don't be shy! We've created two new Discord channels, 2.0.0-beta and data loss at ",(0,o.kt)("strong",{parentName:"p"},"2.0.0-beta-feedback")," and ",(0,o.kt)("strong",{parentName:"p"},"#data-loss"),", respectively. ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/avzDmq3nah"},"Join us on Discord!")),(0,o.kt)("h2",{id:"client"},"Client"),(0,o.kt)("p",null,"To connect to an Athens server, you must know its remote address (an IP address, URL, or localhost) and its password. Skip to ",(0,o.kt)("a",{parentName:"p",href:"#server"},"server")," to setup a server first if you haven't yet."),(0,o.kt)("p",null,"You can connect to the backend through the DB Picker. Open the DB Picker with the button in the top left:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8952138/142514926-f61c4070-f3b5-4ded-b8a4-2219c410a64d.png",alt:"db-picker-button"})),(0,o.kt)("p",null,"Go the ",(0,o.kt)("strong",{parentName:"p"},"Join")," tab and add the database name (give whatever name you want, it is only stored on the client), the remote address (which you can get from the server administrator), and the password (leave empty if no password). Then press the ",(0,o.kt)("strong",{parentName:"p"},"Join")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8952138/142514744-c87d95b9-ee6d-4f39-839f-75d2f8f1c5f9.png",alt:"join-tab"})),(0,o.kt)("p",null,"If the address and password match, congrats! You should be in a collaborative, self-hosted Athens! Read more"),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("p",null,"You can run Athens in your local environment, ",(0,o.kt)("a",{parentName:"p",href:"#docker"},"Docker"),", or ",(0,o.kt)("a",{parentName:"p",href:"#digitalocean"},"DigitalOcean"),". Setup docs do not yet exist for AWS or GCP, but feel free to contribute and add these!"),(0,o.kt)("h3",{id:"custom-config"},"Custom Config"),(0,o.kt)("p",null,"The default configuration can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"config.edn"),".\nYou can customize it through the ",(0,o.kt)("inlineCode",{parentName:"p"},"config_edn")," environment variable."),(0,o.kt)("p",null,"Here's an example on how to configure the server password using ",(0,o.kt)("inlineCode",{parentName:"p"},"config_edn"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'config_edn: "{:password "YourServerPassword"}"\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"config_edn")," will be merged to other configs via deep merging."),(0,o.kt)("h3",{id:"running-athens-self-hosted-server"},"Running Athens Self-Hosted Server"),(0,o.kt)("p",null,"Run the following commands in two different terminals:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up fluree\nyarn server\n")),(0,o.kt)("p",null,"The first command starts the Fluree database using docker to persist data.\nIf you set ",(0,o.kt)("inlineCode",{parentName:"p"},":in-memory? false")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/clj/config.edn")," no data is persisted and this command is not needed."),(0,o.kt)("p",null,"The second command will start HTTP server on port 3010, unless you've modified ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/clj/config.edn"),"."),(0,o.kt)("p",null,"Also nREPL server is started on port 8877, unless you've modified ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/clj/config.edn"),"."),(0,o.kt)("h3",{id:"developing-athens-self-hosted-server"},"Developing Athens Self-Hosted Server"),(0,o.kt)("p",null,"This requires 3 or 4 terminals."),(0,o.kt)("p",null,"Start Fluree ledger:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn server:fluree\n")),(0,o.kt)("p",null,"Start Athens server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn server\n")),(0,o.kt)("p",null,"Start Athens client (same steps as ",(0,o.kt)("a",{parentName:"p",href:"running"},"Running Athens Locally"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn dev\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn client:electron\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clean the Fluree DB")),(0,o.kt)("p",null,"Stop Athens server, ","[ctrl+c]"," if using ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn server"),"."),(0,o.kt)("p",null,"Stop Fluree ledger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn server:fluree:down\n")),(0,o.kt)("p",null,"By default, Fluree ledger stores data in ",(0,o.kt)("inlineCode",{parentName:"p"},"./athens-data/fluree"),". Clean out this folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf ./athens-data/fluree/**\n")),(0,o.kt)("p",null,"Restart Athens server and Fluree ledger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn server:fluree\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn server\n")),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"You can create an Athens server without installing anything else via docker compose."),(0,o.kt)("p",null,"At any point, if any of the services fails to launch or something seems broken, you have two options to debug."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose ps"),"  to see all running services. You should see that services ",(0,o.kt)("inlineCode",{parentName:"li"},"fluree"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"athens"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx"),' are "up" and/or "healthy". ',(0,o.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/8952138/142656719-21c54b94-8f50-4091-9044-a72bac1988a2.png",alt:"docker-ps-output"})),(0,o.kt)("li",{parentName:"ol"},"Additionally, you can use ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose logs SERVICE_NAME")," to inspect what the problem is further.")),(0,o.kt)("p",null,"Pick a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/athensresearch/athens/releases"},"release")," you'd like to use and download the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". For example, for ",(0,o.kt)("inlineCode",{parentName:"p"},"v2.0.0-beta.6"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -L -o docker-compose.yml https://github.com/athensresearch/athens/releases/download/v2.0.0-beta.6/docker-compose.yml\n")),(0,o.kt)("p",null,"On Linux, ",(0,o.kt)("inlineCode",{parentName:"p"},"fluree")," fails to launch if it does not have enough permissions for the ",(0,o.kt)("inlineCode",{parentName:"p"},"./athens-data")," folder. The current workaround for this is to manually create the data folder and give all users of the machine read and write access. This is not a long-term workaround, and we will have more constrained permissions before Athens RTC is available for general release."),(0,o.kt)("p",null,"If you are on Mac, you can skip this workaround."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir -p ./athens-data/fluree\nchmod -R 777 ./athens-data/fluree\n")),(0,o.kt)("p",null,"Then, start Docker Compose!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose up --detach\n")),(0,o.kt)("p",null,"If you want to configure a password, you can override the app configuration via an environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'CONFIG_EDN="{:password \\"YourServerPassword\\"}" docker-compose up\n')),(0,o.kt)("p",null,"or via an ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file located in the same directory as the downloaded ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# .env\nCONFIG_EDN="{:password \\"YourServerPassword\\"}"\n')),(0,o.kt)("p",null,"Currently, the only server config we have is for the password. If you update the password, then clients that previously logged in will not have access unless. They must update the password on their end to get back in."),(0,o.kt)("h3",{id:"updating-docker"},"Updating Docker"),(0,o.kt)("p",null,"To update your deployment, curl the new ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and restart docker-compose entirely:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# curl a new version of Athens described by docker-compose\ncurl -L -o docker-compose.yml https://github.com/athensresearch/athens/releases/download/v2.0.0-beta.6/docker-compose.yml\n\n# restart docker-compose\ndocker-compose down\ndocker-compose pull\ndocker-compose up --detach\n")),(0,o.kt)("h2",{id:"digitalocean"},"DigitalOcean"),(0,o.kt)("p",null,"Athens the team has tested the backend beta server on DigitalOcean the most, and not as much yet on other cloud providers like AWS or GCP."),(0,o.kt)("p",null,"A minimum of 4gb of memory is needed."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8952138/141150237-dce5f183-f25c-4a9b-9526-dcc310c09a44.png",alt:"image"})),(0,o.kt)("p",null,"Use marketplace docker image: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker 19.03.12 on Ubuntu 20.04")," which has docker and docker-compose pre-installed."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8952138/141150155-7be8bce5-1804-431c-9cd0-4cf11e9c8d87.jpg",alt:"digital-ocean-docker-image"})),(0,o.kt)("p",null,"If you resize your droplet image and have trouble opening the console, just wait a few minutes and refresh the Digital Ocean dashboard."),(0,o.kt)("p",null,"Once your droplet has been created, open the console to ssh to the server, follow the instructions in ",(0,o.kt)("a",{parentName:"p",href:"#docker"},"Docker")," to start the server, and copy and paste the IP address to your Athens client to connect to the server (and add a password if you configured one)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8952138/141150925-9f8df004-faa0-4fbe-9875-c276d60c5118.jpg",alt:"digital-ocean-console-and-ip-address"})),(0,o.kt)("h2",{id:"backup-your-server"},"Backup your server"),(0,o.kt)("p",null,"The backup method is currently an MVP. Please feel free to reach out on Discord or through ",(0,o.kt)("a",{parentName:"p",href:"mailto:info@athensresearch.org"},"info@athensresearch.org")," for help, feedback, and questions."),(0,o.kt)("p",null,'We call "Backups" "Save-Load" because our backups have 2 parts: saving/backing up and loading/restoring.'),(0,o.kt)("p",null,"To backup your server, you need to have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/athensresearch/athens"},"Athens repo")," cloned locally. We refer to this as ",(0,o.kt)("strong",{parentName:"li"},"LC"),", short for ",(0,o.kt)("inlineCode",{parentName:"li"},"local computer"),", below."),(0,o.kt)("li",{parentName:"ul"},"A cloud server, for instance, hosted on ",(0,o.kt)("a",{parentName:"li",href:"#digitalocean"},"DigitalOcean"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh")," access to it. We refer to this as ",(0,o.kt)("strong",{parentName:"li"},"RS")," short for ",(0,o.kt)("inlineCode",{parentName:"li"},"remote server"),", below.")),(0,o.kt)("h3",{id:"save-backup-your-server"},"Save (Backup) Your Server"),(0,o.kt)("p",null,"To backup your Athens server you need to the following steps:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LC")),(0,o.kt)("p",null,"Clone Athens on your local computer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone git@github.com:athensresearch/athens.git\n")),(0,o.kt)("p",null,"Go to the Athens folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd athens\n")),(0,o.kt)("p",null,"Compile the ",(0,o.kt)("inlineCode",{parentName:"p"},"save-load")," command line utility."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn cli:compile\nyarn cli:uberjar\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RS")),(0,o.kt)("p",null,"Get the ",(0,o.kt)("strong",{parentName:"p"},"remote server")," address e.g ",(0,o.kt)("inlineCode",{parentName:"p"},"123.456.78.9"),"\nSend the uberjar and script to remote server. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},'"$REMOTE_IP"')," with the actual remote server address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'scp target/athens-cli.jar root@"$REMOTE_IP":~/athens-cli.jar\nscp script/save-cronjob.sh root@"$REMOTE_IP"~/:save-cronjob.sh\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LC")),(0,o.kt)("p",null,"ssh into the remote server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ssh root@"$REMOTE_IP"\n')),(0,o.kt)("p",null,"Check to see if ",(0,o.kt)("inlineCode",{parentName:"p"},"athens-cli.jar")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"save-cronjob.sh")," files are present on the remote server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ls\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# expected output\n")),(0,o.kt)("p",null,"Set up an hourly cronjob for the Save (Backup). This involves using crontab, a terminal user interface, to save your Fluree ledger, the source of truth (essentially the database) in self-hosted Athens."),(0,o.kt)("p",null,"Backups are stored to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/athens/backups/")," folder."),(0,o.kt)("p",null,"Open the crontab terminal user interface, which also contains documentation on its time parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"crontab -e\n")),(0,o.kt)("p",null,"Add the following line to the file: ",(0,o.kt)("inlineCode",{parentName:"p"},"0 */1 * * * ~/save-cronjob.sh")),(0,o.kt)("p",null,"To change the frequency of the backups, change the cronjob parameters accordingly, following the cronjob documentation shown after running ",(0,o.kt)("inlineCode",{parentName:"p"},"crontab -e"),"."),(0,o.kt)("p",null,"After at least an hour, check that backups are happening:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ls -l /var/lib/athens/backups/\n")),(0,o.kt)("p",null,"You should see a list of files such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-rw-r--r-- 1 root root 10785081 Jan  4 12:01 2022-01-04-12-00.edn\n-rw-r--r-- 1 root root 10785858 Jan  4 13:01 2022-01-04-13-00.edn\n")),(0,o.kt)("h3",{id:"load-restore-your-server"},"Load (Restore) Your Server"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LC")),(0,o.kt)("p",null,"ssh into the remote server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ssh root@"$REMOTE_IP"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RS")),(0,o.kt)("p",null,"Stop the Athens server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose stop athens\n")),(0,o.kt)("p",null,"Find the file that you want to restore from."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ls -l /var/lib/athens/backups\n")),(0,o.kt)("p",null,"You should see a list of files such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-rw-r--r-- 1 root root 10785081 Jan  4 12:01 2022-01-04-12-00.edn\n-rw-r--r-- 1 root root 10785858 Jan  4 13:01 2022-01-04-13-00.edn\n-rw-r--r-- 1 root root 10792868 Jan  4 14:01 2022-01-04-14-00.edn\n")),(0,o.kt)("p",null,"Load the file to Athens server, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},'"$FILENAME')," with the correct filename."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'java -jar ~/athens-cli.jar load -f "$FILENAME"\n')),(0,o.kt)("p",null,"Follow the instructions outputted by the above command."),(0,o.kt)("p",null,"Restart the Athens server\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose start athens"),"\nIf you are not able to load (Restore) the file please go through the steps again and if the problem still exists then let us know in our Discord server."),(0,o.kt)("h3",{id:"copy-your-backup-to-your-local-machine"},"Copy Your Backup to Your Local Machine"),(0,o.kt)("p",null,"Here we assume that you have gone through the Save (Backup) process"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RS")),(0,o.kt)("p",null,"ssh into the remote server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ssh root@"$REMOTE_IP"\n')),(0,o.kt)("p",null,"Find the name of file you want to get."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ls -l /var/lib/athens/backups\n")),(0,o.kt)("p",null,"You should see a list of files such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-rw-r--r-- 1 root root 10785081 Jan  4 12:01 2022-01-04-12-00.edn\n-rw-r--r-- 1 root root 10785858 Jan  4 13:01 2022-01-04-13-00.edn\n-rw-r--r-- 1 root root 10792868 Jan  4 14:01 2022-01-04-14-00.edn\n")),(0,o.kt)("p",null,"Get the server log to local machine."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},'"$REMOTE_IP"')," with the actual IP"),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},'"$FILENAME"')," with the actual filename.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'scp root@"$REMOTE_IP":/var/lib/athens/backups/"$FILENAME" ./\n')))}d.isMDXComponent=!0}}]);