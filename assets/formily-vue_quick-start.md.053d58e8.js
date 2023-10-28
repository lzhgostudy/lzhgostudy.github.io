import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.2d37aa7a.js";const p="/formily-vue/quick-start/1.png",d=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"formily-vue/quick-start.md","filePath":"formily-vue/quick-start.md"}'),o={name:"formily-vue/quick-start.md"},e=l('<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>vue3:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@formily/core</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@formily/vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@formily/core</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@formily/vue</span></span></code></pre></div><p>vue2:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@formily/core</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@formily/vue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@vue/composition-api</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@formily/core</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@formily/vue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@vue/composition-api</span></span></code></pre></div><h2 id="🌰-vue-2-element-ui" tabindex="-1">🌰 Vue 2 + element-ui <a class="header-anchor" href="#🌰-vue-2-element-ui" aria-label="Permalink to &quot;🌰 Vue 2 + element-ui&quot;">​</a></h2><p><img src="'+p+`" alt=""></p><h3 id="template-开发模式" tabindex="-1">Template 开发模式 <a class="header-anchor" href="#template-开发模式" aria-label="Permalink to &quot;Template 开发模式&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wvuAt" id="tab-b9wiV8s" checked="checked"><label for="tab-b9wiV8s">template.vue</label><input type="radio" name="group-wvuAt" id="tab-laBwj99"><label for="tab-laBwj99">transform-component.ts</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Input </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> _Input, FormItem </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> _FormItem } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;element-ui&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createForm } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@formily/core&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">  FormProvider, </span></span>
<span class="line"><span style="color:#E1E4E8;">  FormConsumer,</span></span>
<span class="line"><span style="color:#E1E4E8;">  Field,</span></span>
<span class="line"><span style="color:#E1E4E8;">  connect,</span></span>
<span class="line"><span style="color:#E1E4E8;">  mapProps,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@formily/vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { transformComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./transform-component&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为适配 Formily 接口规范，先对 el-input 进行转换</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TransformInput</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transformComponent</span><span style="color:#E1E4E8;">(_Input);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 通过 formily-vue 这层胶水把 el-input 桥接上</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Input</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  TransformInput,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mapProps</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      readOnly: </span><span style="color:#9ECBFF;">&#39;readonly&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// el-form-item 如此类推，绑定 Field 模型中需要消费的属性：required, title</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FormItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  _FormItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mapProps</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;label&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> Vue.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    FormProvider,</span></span>
<span class="line"><span style="color:#E1E4E8;">    FormConsumer,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Field,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">form</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createForm</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      form,</span></span>
<span class="line"><span style="color:#E1E4E8;">      Input,</span></span>
<span class="line"><span style="color:#E1E4E8;">      FormItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">FormProvider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:form</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;form&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">ElForm</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100px&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">Field</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;username&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;用户名&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">required</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:decorator</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[FormItem]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:component</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[Input, { placeholder: &#39;请输入用户名&#39; }]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Field</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">Field</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;password&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;密码&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">required</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:decorator</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[FormItem]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:component</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[Input, { type: &#39;password&#39;, placeholder: &#39;请输入密码&#39; }]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Field</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">Field</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;confirm_password&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;确认密码&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">required</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:decorator</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[FormItem]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:component</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[Input, { type: &#39;password&#39;, placeholder: &#39;请输入密码&#39; }]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Field</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">ElForm</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">FormConsumer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ form }</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;white-space: pre&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ JSON.stringify(form.values, null, 2) }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">FormConsumer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">FormProvider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Input </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> _Input, FormItem </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> _FormItem } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;element-ui&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createForm } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@formily/core&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span></span>
<span class="line"><span style="color:#24292E;">  FormProvider, </span></span>
<span class="line"><span style="color:#24292E;">  FormConsumer,</span></span>
<span class="line"><span style="color:#24292E;">  Field,</span></span>
<span class="line"><span style="color:#24292E;">  connect,</span></span>
<span class="line"><span style="color:#24292E;">  mapProps,</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@formily/vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { transformComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./transform-component&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为适配 Formily 接口规范，先对 el-input 进行转换</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TransformInput</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transformComponent</span><span style="color:#24292E;">(_Input);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 通过 formily-vue 这层胶水把 el-input 桥接上</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Input</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  TransformInput,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mapProps</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      readOnly: </span><span style="color:#032F62;">&#39;readonly&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// el-form-item 如此类推，绑定 Field 模型中需要消费的属性：required, title</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FormItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  _FormItem,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mapProps</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      title: </span><span style="color:#032F62;">&#39;label&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> Vue.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    FormProvider,</span></span>
<span class="line"><span style="color:#24292E;">    FormConsumer,</span></span>
<span class="line"><span style="color:#24292E;">    Field,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">form</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createForm</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      form,</span></span>
<span class="line"><span style="color:#24292E;">      Input,</span></span>
<span class="line"><span style="color:#24292E;">      FormItem,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">FormProvider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:form</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;form&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">ElForm</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100px&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;small&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">Field</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;username&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;用户名&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">required</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:decorator</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[FormItem]&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:component</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[Input, { placeholder: &#39;请输入用户名&#39; }]&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">Field</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">Field</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;password&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;密码&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">required</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:decorator</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[FormItem]&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:component</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[Input, { type: &#39;password&#39;, placeholder: &#39;请输入密码&#39; }]&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">Field</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">Field</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;confirm_password&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;确认密码&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">required</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:decorator</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[FormItem]&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:component</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[Input, { type: &#39;password&#39;, placeholder: &#39;请输入密码&#39; }]&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">Field</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">ElForm</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">FormConsumer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{ form }</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;white-space: pre&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {{ JSON.stringify(form.values, null, 2) }}</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">FormConsumer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">FormProvider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * el-input 是基于 value 和input 事件来实现双向绑定，</span></span>
<span class="line"><span style="color:#6A737D;"> * formily-vue里 reactive-field 目前默认绑定change，不支持 input，需要做适配</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@URL</span><span style="color:#6A737D;"> https://github.com/alibaba/formily/issues/1583</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue, { </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> Component } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transformComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Record</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt;&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">tag</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Vue.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        attrs: { </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$attrs },</span></span>
<span class="line"><span style="color:#E1E4E8;">        on: { </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$listeners },</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      data.on.input </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$listeners.change;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(tag, data, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$slots.default)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * el-input 是基于 value 和input 事件来实现双向绑定，</span></span>
<span class="line"><span style="color:#6A737D;"> * formily-vue里 reactive-field 目前默认绑定change，不支持 input，需要做适配</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@URL</span><span style="color:#6A737D;"> https://github.com/alibaba/formily/issues/1583</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue, { </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> Component } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transformComponent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> &lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Record</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">&gt;&gt;(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">tag</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Vue.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">h</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        attrs: { </span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$attrs },</span></span>
<span class="line"><span style="color:#24292E;">        on: { </span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$listeners },</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      data.on.input </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$listeners.change;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(tag, data, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$slots.default)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h3 id="json-schema-开发模式" tabindex="-1">JSON Schema 开发模式 <a class="header-anchor" href="#json-schema-开发模式" aria-label="Permalink to &quot;JSON Schema 开发模式&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-mfuxW" id="tab-zUh6l1M" checked="checked"><label for="tab-zUh6l1M">json-schema.vue</label><input type="radio" name="group-mfuxW" id="tab-J8j0HHm"><label for="tab-J8j0HHm">transform-component.ts</label><input type="radio" name="group-mfuxW" id="tab-duMpVBw"><label for="tab-duMpVBw">Input.ts</label><input type="radio" name="group-mfuxW" id="tab-M9j_FVN"><label for="tab-M9j_FVN">FormItem.ts</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> FormItem </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./FormItem&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Input </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./Input&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createForm } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@formily/core&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">  createSchemaField, </span></span>
<span class="line"><span style="color:#E1E4E8;">  FormProvider,</span></span>
<span class="line"><span style="color:#E1E4E8;">  FormConsumer</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@formily/vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">SchemaField</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createSchemaField</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    FormItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Input,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> Vue.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    SchemaField,</span></span>
<span class="line"><span style="color:#E1E4E8;">    FormProvider,</span></span>
<span class="line"><span style="color:#E1E4E8;">    FormConsumer</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      form: </span><span style="color:#B392F0;">createForm</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      schema: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;object&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        properties: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          username: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&#39;用户名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;x-component&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;x-decorator&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;FormItem&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;x-component-props&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              placeholder: </span><span style="color:#9ECBFF;">&#39;请输入用户名&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          password: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&#39;密码&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;x-component&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;x-decorator&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;FormItem&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;x-component-props&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              type: </span><span style="color:#9ECBFF;">&#39;password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              placeholder: </span><span style="color:#9ECBFF;">&#39;请输入密码&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          confirm_password: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&#39;确认密码&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;x-component&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;x-decorator&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;FormItem&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;x-component-props&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              type: </span><span style="color:#9ECBFF;">&#39;password&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              placeholder: </span><span style="color:#9ECBFF;">&#39;请输入密码&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">FormProvider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:form</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;form&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">ElForm</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100px&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">SchemaField</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:schema</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;schema&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">SchemaField</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">ElForm</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">FormConsumer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ form }</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;white-space: pre&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ JSON.stringify(form.values, null, 2) }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">FormConsumer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">FormProvider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> FormItem </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./FormItem&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Input </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./Input&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createForm } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@formily/core&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span></span>
<span class="line"><span style="color:#24292E;">  createSchemaField, </span></span>
<span class="line"><span style="color:#24292E;">  FormProvider,</span></span>
<span class="line"><span style="color:#24292E;">  FormConsumer</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@formily/vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">SchemaField</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createSchemaField</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    FormItem,</span></span>
<span class="line"><span style="color:#24292E;">    Input,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> Vue.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    SchemaField,</span></span>
<span class="line"><span style="color:#24292E;">    FormProvider,</span></span>
<span class="line"><span style="color:#24292E;">    FormConsumer</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      form: </span><span style="color:#6F42C1;">createForm</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">      schema: {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&quot;object&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        properties: {</span></span>
<span class="line"><span style="color:#24292E;">          username: {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&#39;用户名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;x-component&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Input&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;x-decorator&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;FormItem&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;x-component-props&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">              placeholder: </span><span style="color:#032F62;">&#39;请输入用户名&#39;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          password: {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&#39;密码&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;x-component&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Input&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;x-decorator&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;FormItem&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;x-component-props&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">              type: </span><span style="color:#032F62;">&#39;password&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              placeholder: </span><span style="color:#032F62;">&#39;请输入密码&#39;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          confirm_password: {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&#39;确认密码&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;x-component&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Input&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;x-decorator&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;FormItem&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;x-component-props&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">              type: </span><span style="color:#032F62;">&#39;password&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              placeholder: </span><span style="color:#032F62;">&#39;请输入密码&#39;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">FormProvider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:form</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;form&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">ElForm</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100px&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;small&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">SchemaField</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:schema</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;schema&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">SchemaField</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">ElForm</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">FormConsumer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{ form }</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;white-space: pre&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {{ JSON.stringify(form.values, null, 2) }}</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">FormConsumer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">FormProvider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * el-input 是基于 value 和input 事件来实现双向绑定，</span></span>
<span class="line"><span style="color:#6A737D;"> * formily-vue里 reactive-field 目前默认绑定change，不支持 input，需要做适配</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@URL</span><span style="color:#6A737D;"> https://github.com/alibaba/formily/issues/1583</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue, { </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> Component } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transformComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Record</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt;&gt;(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">tag</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Vue.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        attrs: { </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$attrs },</span></span>
<span class="line"><span style="color:#E1E4E8;">        on: { </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$listeners },</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      data.on.input </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$listeners.change;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(tag, data, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$slots.default)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * el-input 是基于 value 和input 事件来实现双向绑定，</span></span>
<span class="line"><span style="color:#6A737D;"> * formily-vue里 reactive-field 目前默认绑定change，不支持 input，需要做适配</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@URL</span><span style="color:#6A737D;"> https://github.com/alibaba/formily/issues/1583</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue, { </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> Component } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transformComponent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> &lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Record</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">&gt;&gt;(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">tag</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Vue.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">h</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        attrs: { </span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$attrs },</span></span>
<span class="line"><span style="color:#24292E;">        on: { </span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$listeners },</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      data.on.input </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$listeners.change;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(tag, data, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$slots.default)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { connect, mapProps } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@formily/vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Input </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> ElInput } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;element-ui&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { transformComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./transform-component&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transformInput</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transformComponent</span><span style="color:#E1E4E8;">(ElInput);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Input</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  transformInput,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mapProps</span><span style="color:#E1E4E8;">({ readOnly: </span><span style="color:#9ECBFF;">&quot;readonly&quot;</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> Input;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { connect, mapProps } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@formily/vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Input </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> ElInput } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;element-ui&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { transformComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./transform-component&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transformInput</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transformComponent</span><span style="color:#24292E;">(ElInput);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Input</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  transformInput,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mapProps</span><span style="color:#24292E;">({ readOnly: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;"> }),</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> Input;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {  connect, mapProps } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@formily/vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FormItem </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> ElFormItem } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;element-ui&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FormItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  ElFormItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mapProps</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;label&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> FormItem;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {  connect, mapProps } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@formily/vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { FormItem </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> ElFormItem } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;element-ui&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FormItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  ElFormItem,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mapProps</span><span style="color:#24292E;">({ </span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;label&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }),</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> FormItem;</span></span></code></pre></div></div></div>`,12),t=[e];function c(r,E,y,i,F,u){return a(),n("div",null,t)}const C=s(o,[["render",c]]);export{d as __pageData,C as default};
