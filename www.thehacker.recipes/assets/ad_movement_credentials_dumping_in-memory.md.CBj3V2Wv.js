import{_ as l,c as m,a5 as h,G as s,w as n,B as i,o as d,j as e,a}from"./chunks/framework.B5CpDqM0.js";const v=JSON.parse('{"title":"In-memory secrets","description":"","frontmatter":{"authors":"ShutdownRepo, sckdev"},"headers":[],"relativePath":"ad/movement/credentials/dumping/in-memory.md","filePath":"ad/movement/credentials/dumping/in-memory.md","lastUpdated":1724982529000}'),c={name:"ad/movement/credentials/dumping/in-memory.md"};function p(u,t,g,k,b,y){const r=i("PluginTabsTab"),o=i("PluginTabs");return d(),m("div",null,[t[2]||(t[2]=h('<h1 id="in-memory-secrets" tabindex="-1">In-memory secrets <a class="header-anchor" href="#in-memory-secrets" aria-label="Permalink to &quot;In-memory secrets&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>Just like the LSASS process on Windows systems allowing for <a href="./lsass">LSASS dumping</a>, some programs sometimes handle credentials in the memory allocated to their processes, sometimes allowing attackers to dump them.</p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><div class="tip custom-block"><p>Just like <a href="./lsass">LSASS dumping</a>, this technique needs the attacker to have admin access on the target machine since it involves dumping and handling volatile memory.</p></div>',5)),s(o,null,{default:n(()=>[s(r,{label:"UNIX-like"},{default:n(()=>t[0]||(t[0]=[e("p",null,[a("On UNIX-like systems, tools like "),e("a",{href:"https://github.com/huntergregal/mimipenguin",target:"_blank",rel:"noreferrer"},"mimipenguin"),a(" (C, Shell, Python), "),e("a",{href:"https://github.com/n1nj4sec/mimipy",target:"_blank",rel:"noreferrer"},"mimipy"),a(" (Python) and "),e("a",{href:"https://github.com/AlessandroZ/LaZagne",target:"_blank",rel:"noreferrer"},"LaZagne"),a(" (Python) can be used to extract passwords from memory.")],-1),e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mimipenguin")]),a(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"laZagne"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," memory")])])])],-1)])),_:1}),s(r,{label:"Windows"},{default:n(()=>t[1]||(t[1]=[e("p",null,[a("On Windows systems, tools like "),e("a",{href:"https://github.com/AlessandroZ/LaZagne",target:"_blank",rel:"noreferrer"},"LaZagne"),a(" (Python) and "),e("a",{href:"https://github.com/gentilkiwi/mimikatz",target:"_blank",rel:"noreferrer"},"mimikatz"),a(" (C) can be used to extract passwords from memory but they focus on "),e("a",{href:"./lsass"},"LSASS dumping"),a(".")],-1)])),_:1})]),_:1})])}const _=l(c,[["render",p]]);export{v as __pageData,_ as default};