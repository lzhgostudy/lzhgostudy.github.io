import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.2d37aa7a.js";const v=JSON.parse('{"title":".sync 使用指南","description":"","frontmatter":{},"headers":[],"relativePath":"vue/sync.md","filePath":"vue/sync.md"}'),p={name:"vue/sync.md"},o=l(`<h1 id="sync-使用指南" tabindex="-1"><code>.sync</code> 使用指南 <a class="header-anchor" href="#sync-使用指南" aria-label="Permalink to &quot;\`.sync\` 使用指南&quot;">​</a></h1><p>vue的子组件不能直接使用父组件的数据，所以我们需要用到prop传递数据，但是，子组件能不能直接修改父组件的数据呢？</p><p>按照官方文档的示例：<a href="https://v2.cn.vuejs.org/v2/guide/components.html#%E7%9B%91%E5%90%AC%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BA%8B%E4%BB%B6" target="_blank" rel="noreferrer">监听子组件事件</a> 我们得知vue通过自定义事件系统来帮助我们修改父组件上的数据。</p><p>通过 api <code>$emit</code> 我们可以在子组件上面修改父组件上面的数据，例如，在子组件上触发一个自定义事件，并传递一个自定义事件：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$emit(&#39;something&#39;)&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$emit(&#39;something&#39;)&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>在父组件的子组件器上使用 <code>v-on</code> 监听这个自定义事件</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:num</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;num&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-on:something</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;num += 1&#39;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">child</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:num</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;num&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-on:something</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;num += 1&#39;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>通过以上方式可以让子组件修改父组件上的数据。</p><p>我们接下来分析<code>$emit</code>这个api</p><h2 id="emit" tabindex="-1"><code>$emit</code> <a class="header-anchor" href="#emit" aria-label="Permalink to &quot;\`$emit\`&quot;">​</a></h2><p><code>$emit</code> 共接收2个参数</p><ol><li><code>eventName</code> 触发当前实例上的事件名称</li><li><code>[...args]</code> 附加参数都会传给监听器回调</li></ol><p>我们需要在子组件上调用<code>$emit</code>，然后在父组件上监听这个自定义事件，<code>$emit</code> 的附加参数，可在事件回调函数里获取到</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-nnqsF" id="tab-WU8fOKv" checked="checked"><label for="tab-WU8fOKv">child.vue</label><input type="radio" name="group-nnqsF" id="tab-24-IkvI"><label for="tab-24-IkvI">parent.vue</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    visible: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$emit(&#39;update:visible&#39;, !visible)&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ visible ? &#39;显示&#39; : &#39;隐藏&#39; }}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    visible: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$emit(&#39;update:visible&#39;, !visible)&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  {{ visible ? &#39;显示&#39; : &#39;隐藏&#39; }}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">    show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:visible</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;show&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-on:update:visible</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;show = $event&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">    show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">child</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:visible</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;show&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-on:update:visible</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;show = $event&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div></div><h2 id="简写-sync" tabindex="-1">简写：<code>.sync</code> <a class="header-anchor" href="#简写-sync" aria-label="Permalink to &quot;简写：\`.sync\`&quot;">​</a></h2><p>上面的代码一共进行了两个步骤：</p><ol><li><p>父组件上的字组件监听自定义事件并让 <code>show</code> 等于传递过来的 <code>$event</code></p><p>👉🏻 <code>v-on:update:visible=&quot;show = $event&quot;</code></p></li><li><p>子组件内的代码点击后触发自定义事件并传递一个参数，参数为 <code>!visible</code></p><p>👉🏻 <code>@click=&quot;$emit(&#39;update:visible&#39;, !visible)&quot;</code></p></li></ol><div class="tip custom-block"><p class="custom-block-title">提问</p><p>Q: <strong>那么，我们可以不可以简化代码呢？</strong></p><p>A: vue很贴心地为我们做了相关工作，那就是<code>.sync</code>修饰符</p></div><p>在父组件上告诉子组件传递过去的 <code>visible</code> 跟父组件上的 <code>show</code> 保持同步，相当于 <code>show</code> 允许被修改</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:visible.sync</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;show&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">child</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:visible.sync</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;show&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">重要</p><p>使用<code>.sync</code>后写法需要注意的是：<code>eventName</code>只能采用 <strong>update:传递过来的prop属性</strong> 的方式才行。</p></div>`,21),e=[o];function t(c,r,E,i,y,d){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{v as __pageData,h as default};