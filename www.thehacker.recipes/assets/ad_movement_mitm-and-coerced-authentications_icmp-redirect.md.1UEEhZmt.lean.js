import{_ as e,c as i,a5 as t,o as a}from"./chunks/framework.B5CpDqM0.js";const k=JSON.parse('{"title":"🛠️ ICMP Redirect","description":"","frontmatter":{"authors":"ShutdownRepo"},"headers":[],"relativePath":"ad/movement/mitm-and-coerced-authentications/icmp-redirect.md","filePath":"ad/movement/mitm-and-coerced-authentications/icmp-redirect.md","lastUpdated":1724982529000}'),n={name:"ad/movement/mitm-and-coerced-authentications/icmp-redirect.md"};function r(p,s,d,h,o,c){return a(),i("div",null,s[0]||(s[0]=[t('<h1 id="🛠️-icmp-redirect" tabindex="-1">🛠️ ICMP Redirect <a class="header-anchor" href="#🛠️-icmp-redirect" aria-label="Permalink to &quot;🛠️ ICMP Redirect&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tools/Icmp-Redirect.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --interface</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --ip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $my_ip </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--gateway</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $gateway </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $target </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--route</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $dnsserver1 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--secondaryroute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $dnsserver2</span></span></code></pre></div><p>need iptable</p><p><a href="https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/nx-os-software/213841-understanding-icmp-redirect-messages.html" target="_blank" rel="noreferrer">https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/nx-os-software/213841-understanding-icmp-redirect-messages.html</a></p><p>Responder/tools/ICMP_Redirect.py</p>',5)]))}const m=e(n,[["render",r]]);export{k as __pageData,m as default};