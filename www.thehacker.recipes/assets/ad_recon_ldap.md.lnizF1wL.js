import{_ as k,c as p,j as s,a as i,G as t,w as e,a5 as r,B as h,o as d}from"./chunks/framework.B5CpDqM0.js";const m=JSON.parse('{"title":"LDAP","description":"","frontmatter":{"authors":"ShutdownRepo, mpgn, sckdev"},"headers":[],"relativePath":"ad/recon/ldap.md","filePath":"ad/recon/ldap.md","lastUpdated":1724982529000}'),o={name:"ad/recon/ldap.md"};function F(g,a,C,u,y,c){const l=h("PluginTabsTab"),n=h("PluginTabs");return d(),p("div",null,[a[6]||(a[6]=s("h1",{id:"ldap",tabindex:"-1"},[i("LDAP "),s("a",{class:"header-anchor",href:"#ldap","aria-label":'Permalink to "LDAP"'},"​")],-1)),a[7]||(a[7]=s("p",null,"A lot of information on an AD domain can be obtained through LDAP. Most of the information can only be obtained with an authenticated bind but metadata (naming contexts, DNS server name, Domain Functional Level (DFL)) can be obtainable anonymously, even with anonymous binding disabled.",-1)),t(n,null,{default:e(()=>[t(l,{label:"ldeep"},{default:e(()=>a[0]||(a[0]=[s("p",null,[i("The "),s("a",{href:"https://github.com/franc-pentest/ldeep",target:"_blank",rel:"noreferrer"},"ldeep"),i(" (Python) tool can be used to enumerate essential information like delegations, gpo, groups, machines, pso, trusts, users, and so on.")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# remotely dump information ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ldeep"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ldap"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$USER"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$PASSWORD"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -s"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' ldap://"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_IP"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," all"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "ldeepdump/'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# parse saved information (in this case, enumerate trusts)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ldeep"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," cache"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "ldeepdump"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," trusts")])])])],-1)])),_:1}),t(l,{label:"ldapsearch"},{default:e(()=>a[1]||(a[1]=[s("p",null,[i("The "),s("a",{href:"https://git.openldap.org/openldap/openldap",target:"_blank",rel:"noreferrer"},"ldapsearch"),i(" (C) tool can also be used.")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# list naming contexts")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ldapsearch"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -h"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_IP"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -x"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -s"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," base"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," namingcontexts")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ldapsearch"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -H"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "ldap://'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_IP"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -x"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -s"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," base"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," namingcontexts")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# enumerate info in a base (e.g. naming context = DC=DOMAIN,DC=LOCAL)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ldapsearch"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -h"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_IP"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -x"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -b"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "DC=DOMAIN,DC=LOCAL"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ldapsearch"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -H"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "ldap://'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$TARGET"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -x"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -b"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "DC=DOMAIN,DC=LOCAL"')])])])],-1)])),_:1}),t(l,{label:"ldapsearch-ad"},{default:e(()=>a[2]||(a[2]=[s("p",null,"The ldapsearch-ad Python script can also be used to enumerate essential information like domain admins that have their password set to never expire, default password policies and the ones found in GPOs, trusts, kerberoastable accounts, and so on.\\",-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ldapsearch-ad"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --type"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," all"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --server"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DOMAIN_CONTROLLER "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--domain"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DOMAIN "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--username"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $USER "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--password"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $PASSWORD"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\")])])])],-1),s("p",null,"The FFL (Forest Functional Level), DFL (Domain Functional Level), DCFL (Domain Controller Functionality Level) and naming contexts can be listed with the following command.\\",-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ldapsearch-ad"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --type"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," info"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --server"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DOMAIN_CONTROLLER "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--domain"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DOMAIN "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--username"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $USER "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--password"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $PASSWORD")])])])],-1)])),_:1}),t(l,{label:"windapsearch"},{default:e(()=>a[3]||(a[3]=[s("p",null,[i("The windapsearch script ("),s("a",{href:"https://github.com/ropnop/go-windapsearch",target:"_blank",rel:"noreferrer"},"Go"),i(" (preferred) or "),s("a",{href:"https://github.com/ropnop/windapsearch",target:"_blank",rel:"noreferrer"},"Python"),i(") can be used to enumerate basic but useful information.")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# enumerate users (authenticated bind)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"windapsearch"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DOMAIN "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"-u"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $USER "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"-p"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $PASSWORD "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--dc"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DomainController "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--module"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," users")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# enumerate users (anonymous bind)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"windapsearch"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --dc"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DomainController "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--module"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," users")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# obtain metadata (anonymous bind)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"windapsearch"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --dc"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DomainController "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--module"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," metadata")])])])],-1)])),_:1}),t(l,{label:"ldapdomaindump"},{default:e(()=>a[4]||(a[4]=[s("p",null,[s("a",{href:"https://github.com/dirkjanm/ldapdomaindump",target:"_blank",rel:"noreferrer"},"ldapdomaindump"),i(" is an Active Directory information dumper via LDAP, outputting information in human-readable HTML files.")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ldapdomaindump"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --user"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'DOMAIN\\USER'"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --password"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $PASSWORD "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"--outdir"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ldapdomaindump"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DOMAIN_CONTROLLER")])])])],-1)])),_:1}),t(l,{label:"ntlmrelayx"},{default:e(()=>a[5]||(a[5]=[s("p",null,[i("With "),s("a",{href:"https://github.com/SecureAuthCorp/impacket",target:"_blank",rel:"noreferrer"},"Impacket"),i("'s "),s("a",{href:"https://github.com/SecureAuthCorp/impacket/blob/master/examples/ntlmrelayx.py",target:"_blank",rel:"noreferrer"},"ntlmrelayx"),i(" (Python), it is possible to gather lots of information regarding the domain users and groups, the computers, "),s("a",{href:"./../movement/adcs/"},"ADCS"),i(", etc. through a "),s("a",{href:"./../movement/ntlm/relay"},"NTLM authentication relayed"),i(" within an LDAP session.")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ntlmrelayx"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -t"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "ldap://domaincontroller"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --dump-adcs"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --dump-laps"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --dump-gmsa")])])])],-1)])),_:1})]),_:1}),a[8]||(a[8]=r(`<p><a href="https://github.com/Pennyw0rth/NetExec" target="_blank" rel="noreferrer">NetExec</a> (Python) also has useful modules that can be used to</p><ul><li>map information regarding <a href="./../movement/adcs/">AD-CS (Active Directory Certificate Services)</a></li><li>show subnets listed in AD-SS (Active Directory Sites and Services)</li><li>list the users description</li><li>print the <a href="./../movement/builtins/machineaccountquota">Machine Account Quota</a> domain-level attribute&#39;s value</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># list PKIs/CAs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nxc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ldap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;domain_controller&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;domain&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;user&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;password&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> adcs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># list subnets referenced in AD-SS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nxc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ldap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;domain_controller&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;domain&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;user&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;password&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subnets</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># machine account quota</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nxc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ldap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;domain_controller&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;domain&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;user&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;password&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> maq</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># users description</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nxc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ldap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;domain_controller&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;domain&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;user&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;password&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get-desc-users</span></span></code></pre></div><p>The PowerShell equivalent to netexec&#39;s <code>subnets</code> modules is the following</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">System.DirectoryServices.ActiveDirectory.Forest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::GetCurrentForest().Sites.Subnets</span></span></code></pre></div><div class="tip custom-block"><p>LDAP anonymous binding is usually disabled but it&#39;s worth checking. It could be handy to list the users and test for <a href="./../movement/kerberos/asreproast">ASREProasting</a> (since this attack needs no authentication).</p></div><div class="success custom-block"><p>Automation and scripting</p><ul><li>A more advanced LDAP enumeration can be carried out with BloodHound (see <a href="./bloodhound/index">this</a>).</li><li>The enum4linux tool can also be used, among other things, for LDAP recon (see <a href="./enum4linux">this</a>).</li></ul></div>`,7))])}const B=k(o,[["render",F]]);export{m as __pageData,B as default};