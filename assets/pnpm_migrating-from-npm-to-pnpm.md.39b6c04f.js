import{_ as e,c as a,o as n,Q as s}from"./chunks/framework.2d37aa7a.js";const u=JSON.parse('{"title":"Migrating from NPM to PNPM","description":"","frontmatter":{},"headers":[],"relativePath":"pnpm/migrating-from-npm-to-pnpm.md","filePath":"pnpm/migrating-from-npm-to-pnpm.md"}'),o={name:"pnpm/migrating-from-npm-to-pnpm.md"},t=s(`<h1 id="migrating-from-npm-to-pnpm" tabindex="-1">Migrating from NPM to PNPM <a class="header-anchor" href="#migrating-from-npm-to-pnpm" aria-label="Permalink to &quot;Migrating from NPM to PNPM&quot;">​</a></h1><h2 id="preface" tabindex="-1">Preface <a class="header-anchor" href="#preface" aria-label="Permalink to &quot;Preface&quot;">​</a></h2><p>I tested this on a project which build with storybook that is still in the alpha phase of development and therefore could afford any potential downtime from errors or other issues.</p><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><ul><li><p>Installation guide for PNPM can be found <a href="https://pnpm.io/installation" target="_blank" rel="noreferrer">here</a>. The simplest approach for JS folks is probably to run: <code>npm install -g pnpm</code>.</p></li><li><p>In the project which you want to convert to PNPM, find the node_modules directory and delete it.</p></li><li><p>Add the following code to your project&#39;s <code>package.json</code>. This will prevent people from installing packages with any other package managers.</p></li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: { </span><span style="color:#79B8FF;">&quot;preinstall&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;npx only-allow pnpm&quot;</span><span style="color:#E1E4E8;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;scripts&quot;</span><span style="color:#24292E;">: { </span><span style="color:#005CC5;">&quot;preinstall&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;npx only-allow pnpm&quot;</span><span style="color:#24292E;"> }</span></span></code></pre></div><ul><li>In directory root, create a file named <code>pnpm-workspace.yaml</code> and add the following:</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">packages</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># include packages in subfolders(change as required)</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">apps/**</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">packages/**</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># if required, exclude directories</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#F97583;">!**/test/**</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">packages</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># include packages in subfolders(change as required)</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">apps/**</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">packages/**</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># if required, exclude directories</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#D73A49;">!**/test/**</span></span></code></pre></div><ul><li><p>In terminal, run <code>pnpm import</code>. This will create a <code>pnpm-lock.yaml</code> file based on the current <code>yarn.lock</code> or <code>package-lock.json</code>.</p></li><li><p>Delete <code>yarn.lock</code> or <code>package-lock.json</code> file.</p></li><li><p>Install dependencies using <strong>PNPM</strong> by running <code>pnpm i</code> or <code>pnpm</code> install.</p></li><li><p>If you have scripts in package.json that use <code>npm run</code> prefix, this will need to be replaced with <code>pnpm</code> e.g. <code>pnpm test</code> instead of <code>npm run test</code>.</p></li></ul><h3 id="important-note" tabindex="-1">Important note <a class="header-anchor" href="#important-note" aria-label="Permalink to &quot;Important note&quot;">​</a></h3><p>When installing dependencies with NPM or YARN, a &#39;flat&#39; node_modules directory is created. This means that source code has access to dependencies that are not added as dependencies to the project. <strong>PNPM</strong> works differently in that is uses symlinks to add only the direct dependencies of the project into the root of the modules directory.</p><h2 id="working-with-pnpm" tabindex="-1">Working with PNPM <a class="header-anchor" href="#working-with-pnpm" aria-label="Permalink to &quot;Working with PNPM&quot;">​</a></h2><p>When you first run <code>pnpm install</code> you will see a progress graphic in the terminal like the one in the image below:</p><p><img src="https://britishgeologicalsurvey.github.io/assets/images/2022-11-17-migrate-npm/pnpm-clean.PNG" alt=""></p><p>Note that the &#39;reused&#39; count stays at 0 on the first install. This is because we haven&#39;t yet created a cache that <strong>PNPM</strong> can reference.</p><p>Once all the dependencies have been installed, if you run <code>pnpm install</code> again or add a new package <code>pnpm add some-new-package -w</code>, you will see that the &#39;reused&#39; counter is now going up.</p><p><img src="https://britishgeologicalsurvey.github.io/assets/images/2022-11-17-migrate-npm/pnpm-cached.PNG" alt=""></p><p>This caching speeds up the installation process quite drastically, as it avoids re-downloading packages that have already been fetched. Packages are also downloaded concurrently instead of one-by-one.</p><p><strong>&quot;In pnpm, packages are always reused if they are already installed for another project saving a log of disk space which makes it faster and more efficient than npm.&quot;</strong></p><div class="tip custom-block"><p class="custom-block-title">References</p><p><a href="https://britishgeologicalsurvey.github.io/development/migrating-from-npm-to-pnpm/" target="_blank" rel="noreferrer">Migrating from NPM to PNPM</a></p><p><a href="https://lyh543.github.io/posts/2022-04-18-migrate-npm-multirepo-to-pnpm-monorepo.html" target="_blank" rel="noreferrer">将 npm 项目迁移到 pnpm + monorepo</a></p><p><a href="https://juejin.cn/post/7129552750446116878" target="_blank" rel="noreferrer">如何将 npm / yarn 项目迁移到 pnpm？</a></p><p><a href="https://juejin.cn/post/7063740466738511879" target="_blank" rel="noreferrer">pnpm切换指南</a></p></div>`,20),p=[t];function l(r,i,c,d,h,m){return n(),a("div",null,p)}const y=e(o,[["render",l]]);export{u as __pageData,y as default};
