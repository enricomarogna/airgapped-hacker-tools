import{_ as i,c as a,a5 as e,o as n}from"./chunks/framework.B5CpDqM0.js";const t="/assets/ps-sieve.DK5MHyIg.png",c=JSON.parse('{"title":"🛠️ Loader","description":"","frontmatter":{"authors":"Jenaye, ShutdownRepo"},"headers":[],"relativePath":"evasion/av/loader.md","filePath":"evasion/av/loader.md","lastUpdated":1725525074000}'),l={name:"evasion/av/loader.md"};function h(p,s,r,k,d,o){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="🛠️-loader" tabindex="-1">🛠️ Loader <a class="header-anchor" href="#🛠️-loader" aria-label="Permalink to &quot;🛠️ Loader&quot;">​</a></h1><div class="warning custom-block"><p>This is a work-in-progress. It&#39;s indicated with the 🛠️ emoji in the page name or in the category name. Wanna help? Please reach out to me: <a href="https://twitter.com/_nwodtuhs" target="_blank" rel="noreferrer">@_nwodtuhs</a></p></div><p>The following piece of C code is a simple example of DLL loader, where the DLL holds the malicious shellcode.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#include </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HMODULE hMod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoadLibrary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shellcode.dll&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (hMod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nullptr) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Failed to load shellcode.dll&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Once the payload is completed, <a href="https://github.com/hasherezade/pe-sieve" target="_blank" rel="noreferrer">pe-sieve</a> can be used to identify if it is stealthy or not.</p><p><img src="`+t+'" alt=""></p>',6)]))}const g=i(l,[["render",h]]);export{c as __pageData,g as default};