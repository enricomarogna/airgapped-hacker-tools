import{_ as r,c as a,a5 as s,o as t}from"./chunks/framework.B5CpDqM0.js";const m=JSON.parse('{"title":"Error messages","description":"","frontmatter":{"authors":"ShutdownRepo"},"headers":[],"relativePath":"web/recon/error-messages.md","filePath":"web/recon/error-messages.md","lastUpdated":1724982529000}'),o={name:"web/recon/error-messages.md"};function i(n,e,c,l,h,d){return t(),a("div",null,e[0]||(e[0]=[s('<h1 id="error-messages" tabindex="-1">Error messages <a class="header-anchor" href="#error-messages" aria-label="Permalink to &quot;Error messages&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>It is common to browse websites that leak information regarding the technologies they use in various error messages. Attackers can try to willfully raise errors to find those information and have a better understanding of the attack surface.</p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><p>Raising error pages and messages can be done manually when browsing the website by doing the following actions</p><ul><li>requesting a page that doesn&#39;t exist (status code 404)</li><li>requesting a page without the proper rights (access control raising status code 403)</li><li>supplying garbage (special chars or wrong syntax) in user inputs (parameters, forms, headers) to raise syntax of filter errors.</li></ul>',6)]))}const p=r(o,[["render",i]]);export{m as __pageData,p as default};