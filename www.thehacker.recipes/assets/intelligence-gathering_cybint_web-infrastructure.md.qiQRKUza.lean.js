import{_ as a,c as t,a5 as r,o as n}from"./chunks/framework.B5CpDqM0.js";const u=JSON.parse('{"title":"Web infrastructure","description":"","frontmatter":{"authors":"Bnder1, ShutdownRepo"},"headers":[],"relativePath":"intelligence-gathering/cybint/web-infrastructure.md","filePath":"intelligence-gathering/cybint/web-infrastructure.md","lastUpdated":1724982529000}'),s={name:"intelligence-gathering/cybint/web-infrastructure.md"};function i(o,e,c,l,h,p){return n(),t("div",null,e[0]||(e[0]=[r(`<h1 id="web-infrastructure" tabindex="-1">Web infrastructure <a class="header-anchor" href="#web-infrastructure" aria-label="Permalink to &quot;Web infrastructure&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><p>shodan : net:&quot;SUBNET/MASK&quot;</p><p>zoomeye : IP/MASK</p><p>fofa.so</p><p>Get the DNS servers, their records, and map the domain:<br> -<a href="https://dnsdumpster.com/" target="_blank" rel="noreferrer">https://dnsdumpster.com/</a><br> IP énumération + response header from domain name:<br> -<a href="https://zoomeye.org" target="_blank" rel="noreferrer">https://zoomeye.org</a><br> Find subdomains:<br> -<a href="https://findsubdomains.com" target="_blank" rel="noreferrer">https://findsubdomains.com</a><br> Find technologies used and versions of a webapp:<br> -<a href="https://github.com/urbanadventurer/WhatWeb" target="_blank" rel="noreferrer">https://github.com/urbanadventurer/WhatWeb</a></p><p>Website caching platforms:<br> -<a href="https://archive.org/" target="_blank" rel="noreferrer">https://archive.org/</a><br> -<a href="https://archive.fo/" target="_blank" rel="noreferrer">https://archive.fo/</a></p><p>Google Analytics:</p><ul><li>The last piece of information that is really interesting is to check if the same Google Analytics / Adsense ID is used in several websites. This technique was discovered in 2015 and is well described here by <a href="https://www.bellingcat.com/resources/how-tos/2015/07/23/unveiling-hidden-connections-with-google-analytics-ids/" target="_blank" rel="noreferrer">Bellingcat</a>.</li><li>Certificats?</li></ul><p>Using Google Dorks to find subdomains</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># find subdomains</span></span>
<span class="line"><span>site:&quot;something.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># without www and subd1</span></span>
<span class="line"><span>site:&quot;something.com&quot; -www -subd1</span></span></code></pre></div>`,12)]))}const b=a(s,[["render",i]]);export{u as __pageData,b as default};