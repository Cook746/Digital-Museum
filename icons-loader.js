/* ==========================================================================
   icons-loader.js — Font Awesome CDN 就绪检测
   --------------------------------------------------------------------------
   背景：本机/离线环境下 CDN 不可达，图标由 icons-shim.css 的 SVG mask 兜底渲染。
   机制：探测一个隐藏的 .fa-solid 元素，若其计算字体为 "Font Awesome 6 Free"
        （说明 CDN 字体真正可用），才给 <body> 加 fa-cdn-ready，
        由 icons-shim.css 隐藏兜底层、切换为官方字体渲染。
   若超时仍未就绪，则保留 SVG 兜底，保证图标始终可见。
   本脚本不依赖任何业务逻辑，也不触碰 ECharts / 数据 / 弹窗逻辑。
   ========================================================================== */
(function () {
    'use strict';

    if (window.__faLoaderStarted) { return; }
    window.__faLoaderStarted = true;

    var CHECK_INTERVAL = 250;
    var TIMEOUT = 6000;
    var startTime = Date.now();

    function probeFontReady() {
        if (document.body.classList.contains('fa-cdn-ready')) { return true; }

        var el = document.getElementById('__fa-probe');
        if (!el) {
            el = document.createElement('i');
            el.id = '__fa-probe';
            el.className = 'fa-solid fa-house';
            el.setAttribute('aria-hidden', 'true');
            el.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1em;height:1em;visibility:hidden;';
            (document.body || document.documentElement).appendChild(el);
        }

        var family = '';
        try {
            family = (window.getComputedStyle(el).fontFamily || '').toLowerCase();
        } catch (e) { family = ''; }

        if (family.indexOf('font awesome 6 free') !== -1) {
            document.body.classList.add('fa-cdn-ready');
            if (el.parentNode) { el.parentNode.removeChild(el); }
            return true;
        }
        return false;
    }

    function tick() {
        if (probeFontReady()) { return; }
        if (Date.now() - startTime >= TIMEOUT) { return; } // 保留 SVG 兜底
        setTimeout(tick, CHECK_INTERVAL);
    }

    function init() {
        tick();
        // 若 CDN 样式表稍后才到达，字体就绪后再复查一次
        var links = document.querySelectorAll('link[href*="font-awesome"]');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('load', function () {
                startTime = Date.now();
                setTimeout(tick, CHECK_INTERVAL);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
