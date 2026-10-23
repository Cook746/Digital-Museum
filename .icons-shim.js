// 生成 icons-shim.css：Font Awesome 6 的本地兜底实现（CSS mask + 内联 SVG，不需要网络）
// 图标绘制为 24x24 网格的简化几何图形，风格统一、可离线渲染。
// 开关：<body> 上有 .fa-cdn-ready 时（Font Awesome CDN 字体加载成功），兜底层自动隐藏。
const fs = require('fs');

const I = {
    'anchor': '<path d="M12 2a3 3 0 0 1 3 3 3 3 0 0 1-2 2.83V10h4v2h-4v7.9A7 7 0 0 0 19.7 13h2A9 9 0 0 1 3 13h2A7 7 0 0 0 11 19.9V12H7v-2h4V7.83A3 3 0 0 1 9 5a3 3 0 0 1 3-3z"/>',
    'arrow-left': '<path d="M10.6 3.8 2.4 12l8.2 8.2 1.4-1.4-5.8-5.8H22v-2H6.2l5.8-5.8z"/>',
    'arrow-right': '<path d="M13.4 3.8 11.99 5.2l5.8 5.8H2v2h15.8l-5.8 5.8 1.42 1.4L21.6 12z"/>',
    'arrow-up-right-from-square': '<path d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14zM4 5h6V3H2v19h19v-8h-2v6H4z"/>',
    'arrows-to-dot': '<path d="M11 2h2v6h4l-5 5-5-5h4zM11 22h2v-6h4l-5-5-5 5h4zM2 11v2h6v4l5-5-5-5v4zM22 11v2h-6v4l-5-5 5-5v4z"/>',
    'book': '<path d="M4 2h13a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>',
    'book-open': '<path d="M12 4.2C10 3 7.4 2.6 4.6 2.9a1 1 0 0 0-.9 1v14.9c0 .6.6 1.1 1.2 1 2.5-.3 4.8.1 6.5 1.2V6.2C10.5 5.2 9 4.6 7 4.6v12"/><path d="M12 4.2C14 3 16.6 2.6 19.4 2.9a1 1 0 0 1 .9 1v14.9c0 .6-.6 1.1-1.2 1-2.5-.3-4.8.1-6.5 1.2V6.2c.9-1 2.4-1.6 4.4-1.6v12"/>',
    'bookmark': '<path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4.6L5 22V3a1 1 0 0 1 1-1z"/>',
    'bullhorn': '<path d="M2 9h3l3-3 4 2 5-3v14l-5-3-4 2-3-3H2zM20 8h2v8h-2z"/>',
    'bullseye': '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>',
    'calendar-days': '<path d="M7 2h2v3h6V2h2v3h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2zm12 8H5v10h14z"/>',
    'camera-retro': '<path d="M9 3h6l2 3h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3zM12 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>',
    'car': '<path d="M6 5h12a2 2 0 0 1 1.9 1.4L22 11v8h-2v-2H4v2H2v-8l2.1-4.6A2 2 0 0 1 6 5zm1.2 3L5.6 11h12.8l-1.6-3zM6 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm12 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>',
    'caret-down': '<path d="M3 8h18l-9 11z"/>',
    'champagne-glasses': '<path d="M3 2h6l-1 6a3 3 0 0 1-2 2.6V17l3 2v2H2v-2l3-2V10.6A3 3 0 0 1 3 8zM15 2h6l-1 6a3 3 0 0 1-2 2.6V17l3 2v2h-7v-2l3-2V10.6a3 3 0 0 1-2-2.6z"/>',
    'chart-simple': '<path d="M3 3h2v16h16v2H3zM7 13h3v5H7zM12 8h3v10h-3zM17 4h3v14h-3z"/>',
    'check': '<path d="M9.5 17.6 4 12.1l1.9-1.9 3.6 3.6L18.1 5l1.9 1.9z"/>',
    'circle-check': '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.2 14.6-4-4 1.6-1.6 2.4 2.4 5-5L17.4 10z"/>',
    'circle-info': '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-6h2zm0-8h-2V7h2z"/>',
    'circle-question': '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2zm.4-4.2c-.6.4-.8.8-.8 1.6h-2c0-1.6.5-2.4 1.6-3.1.8-.5 1-1 1-1.6 0-.8-.6-1.3-1.4-1.3-.8 0-1.4.5-1.5 1.3L7.3 9c.3-2 1.9-3.3 4-3.3 2.2 0 3.8 1.3 3.8 3.3 0 1.3-.6 2.1-1.7 2.8z"/>',
    'circle-xmark': '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.5 13.1-1.4 1.4L12 14.4l-2.1 2.1-1.4-1.4 2.1-2.1-2.1-2.1 1.4-1.4L12 11.6l2.1-2.1 1.4 1.4-2.1 2.1z"/>',
    'clipboard-list': '<path d="M9 2h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a1 1 0 0 1 1-1zm-1 8v2h2v-2zm0 4v2h2v-2zm4-4v2h6v-2zm0 4v2h6v-2z"/>',
    'comment-dots': '<path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-6 5V5a2 2 0 0 1 2-2zm4 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>',
    'comments': '<path d="M7 3h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3v-6a2 2 0 0 0-2-2H7zM4 7h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6l-3 3V8a1 1 0 0 1 1-1z"/>',
    'crown': '<path d="m2 6 4.5 4L12 3l5.5 7L22 6l-2 12H4z"/>',
    'desktop': '<path d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-7v2h4v2H6v-2h4v-2H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm2 2v9h14V6z"/>',
    'dove': '<path d="M4 6.5c1.5.8 2.7.8 4 .1L11 4l1.6 2.6c1.6-1.3 3.6-1.7 6.4-1.1-1.7 1.2-2.6 2.6-2.9 4.3-.5 3.3-2.9 5.6-6.4 6.1L8 19l-.6-3.2C5.6 14.4 4.2 12 4 8.5z"/>',
    'envelope-open-text': '<path d="M12 2 2 8.5V21h20V8.5zm0 2.3 7.4 4.9-7.4 4.7-7.4-4.7zM7 15h5v2H7zm0-4h10v2H7z"/>',
    'file-lines': '<path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V9h5.5zM7 12h10v2H7zm0 4h10v2H7z"/>',
    'file-pen': '<path d="M6 2h8l6 6v5l-2 2v-5h-6V4H6v16h6l2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm11.5 11.5 3 3L14 23h-3v-3z"/>',
    'film': '<path d="M2 4h20v16H2zm2 2v2h3V6zm0 4v2h3v-2zm0 4v2h3v-2zm0 4h3v-2H4zm5 1h10V6H9zm12-9h-3v2h3zm0 4h-3v2h3zm0 4h-3v2h3z"/>',
    'fire': '<path d="M12 2c1 4 6 6 6 11a6 6 0 0 1-12 0c0-2 1-3.5 2-5 .3 1.5 1 2.5 2 3 0-3 1-6 2-9z"/>',
    'flag': '<path d="M4 2h2v20H4zm4 1h12l-2.5 4.5L20 12H8z"/>',
    'floppy-disk': '<path d="M4 2h12l4 4v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2 2v6h9V4zm4 11a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>',
    'folder-open': '<path d="M2 5a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v3H7.5a2 2 0 0 0-1.9 1.4L2 19zm4.6 7h17L19 21H2z"/>',
    'gamepad': '<path d="M6 7h12a4 4 0 0 1 4 4v4a3 3 0 0 1-5.4 1.8L15.4 15H8.6l-1.2 1.8A3 3 0 0 1 2 15v-4a4 4 0 0 1 4-4zm1 3v2H5v2h2v2h2v-2h2v-2H9v-2zm9.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>',
    'gear': '<path d="m10.3 2h3.4l.5 2.4 2 1 2.2-1 1.7 1.7-1 2.2 1 2 2.4.5v3.4l-2.4.5-1 2 1 2.2-1.7 1.7-2.2-1-2 1-.5 2.4h-3.4l-.5-2.4-2-1-2.2 1L5 18.9l1-2.2-1-2-2.4-.5v-3.4l2.4-.5 1-2-1-2.2L6.7 4.4l2.2 1 2-1zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>',
    'globe': '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2c1.7 0 3.2 2.7 3.6 6H8.4C8.8 6.7 10.3 4 12 4zM4.2 10h3.9c0 1.4.2 2.7.4 4H4.9A8 8 0 0 1 4.2 10zm0 6h3.9c.5 2 1.4 3.6 2.5 4.4A8 8 0 0 1 4.2 16zm15.6 0a8 8 0 0 1-6.4 4.4c1.1-.8 2-2.4 2.5-4.4zm.3-6a8 8 0 0 1-.7 4h-3.6c.2-1.3.4-2.6.4-4z"/>',
    'graduation-cap': '<path d="m12 3 11 4.5-11 4.5L4 8.8V15H2V7.5zM6 11.6l6 2.4 6-2.4V16c0 1.7-2.7 3-6 3s-6-1.3-6-3z"/>',
    'hand': '<path d="M7 3h2v6h1V2h2v7h1V3h2v6h1V5h2v8a7 7 0 0 1-7 7H8a6 6 0 0 1-6-6V9h2v4h1z"/>',
    'hand-point-right': '<path d="M9 2h2v7h10l-2 2 2 2-2 2 2 2-2 2H9a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM3 10h2v6H3z"/>',
    'handshake': '<path d="M2 8h5l3-3 3 3h2l3-3 4 4-6 6-2-2-3 3-3-3-2 2z"/>',
    'headphones': '<path d="M12 2a9 9 0 0 1 9 9v6a3 3 0 0 1-3 3h-2v-8h4v-1a8 8 0 0 0-16 0v1h4v8H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 9-9z"/>',
    'hourglass-half': '<path d="M5 2h14v4l-5 6 5 6v4H5v-4l5-6-5-6zm3 2v1.2L12 10l4-4.8V4z"/>',
    'house': '<path d="M12 2 2 11h3v10h6v-6h2v6h6V11h3z"/>',
    'khanda': '<path d="m12 2 2 5 4-2-1.5 4.5L21 11l-4 2 1 4-3.5-2L12 22l-2.5-7-3.5 2 1-4L3 11l4.5-1.5L6 5l4 2z"/>',
    'landmark': '<path d="M12 2 2 7v2h20V7zM4 11h3v8H4zm6.5 0h3v8h-3zM17 11h3v8h-3zM2 21h20v2H2z"/>',
    'leaf': '<path d="M20 3C9 3 3 8 3 15a6 6 0 0 0 6 6c7 0 12-6 11-18zM6 19c1-5 4-8 9-10-4 3-6 6-7 10z"/>',
    'lightbulb': '<path d="M12 2a7 7 0 0 1 4.6 12.3c-.7.6-1.1 1.2-1.2 2.2h-6.8c-.1-1-.5-1.6-1.2-2.2A7 7 0 0 1 12 2zM9 18h6v2H9zm1 4h4v-1h-4z"/>',
    'location-dot': '<path d="M12 2a8 8 0 0 1 8 8c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 8-8zm0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>',
    'magnifying-glass': '<path d="M10 2a8 8 0 0 1 6.3 12.9l5.4 5.4-1.4 1.4-5.4-5.4A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/>',
    'map-location-dot': '<path d="m9 2 6 2 6-2v18l-6 2-6-2-6 2V4zm-4 2.8v13.4l4-1.3V3.5zm6 .9v13.4l4 1.3V4.9zM13 6a4 4 0 0 1 4 4c0 2.6-4 6-4 6s-4-3.4-4-6a4 4 0 0 1 4-4zm0 2.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>',
    'masks-theater': '<path d="M2 3h9v9a4.5 4.5 0 0 1-9 0zm2 3v2h1.5V6zm3.5 0v2H9V6zM13 8h9v9a4.5 4.5 0 0 1-9 0zm2 3v2h1.5v-2zm3.5 0v2H20v-2z"/>',
    'medal': '<path d="m8 2 4 6 4-6h4l-5 7.5a6 6 0 1 0-6 0L4 2zm4 10a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>',
    'mountain': '<path d="m8 4 9 16H2zm8 6 6 10h-9z"/>',
    'mountain-sun': '<path d="m8 5 8 14H2zm9 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm2 9 3 5h-6z"/>',
    'newspaper': '<path d="M2 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 2v12h14V6zM6 8h8v2H6zm0 4h4v4H6zm6 0h2v1.5h-2zm3 0h2v1.5h-2zm-3 2.5h2V16h-2zm3 0h2V16h-2z"/>',
    'palette': '<path d="M12 2a10 10 0 0 0 0 20c1.7 0 2-1.2 1.2-2.2-.9-1.1-.2-2.8 1.4-2.8H17a5 5 0 0 0 5-5c0-5.5-4.5-10-10-10zM7 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>',
    'paper-plane': '<path d="M22 2 2 10l7 3 3 8zM10.5 13.5 21 3 9 14z"/>',
    'paperclip': '<path d="M17 3a4 4 0 0 1 3 6.7l-8.5 8.5a2.5 2.5 0 0 1-3.5-3.5L16 6.7a1 1 0 0 1 1.4 1.4l-8 8a.5.5 0 0 0 .7.7l8.5-8.5A2 2 0 0 0 15.4 5l-9 9a4 4 0 0 0 5.7 5.7l8.2-8.3A4 4 0 0 0 17 3z"/>',
    'record-vinyl': '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>',
    'right-from-bracket': '<path d="M10 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-8v-2h8V4h-8zm-.6 5.2L14.2 12l-4.8 4.8-1.4-1.4 3.4-3.4H2v-2h9.4L8 6.6z"/>',
    'robot': '<path d="M11 2h2v2h3a3 3 0 0 1 3 3v2h2v4h-2v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5H3v-4h2V7a3 3 0 0 1 3-3h3zM8.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM8 16h8v2H8z"/>',
    'sailboat': '<path d="M12 2v13h7zM10 4 4 15h6zM2 17h20l-2 4H4z"/>',
    'scroll': '<path d="M5 2h11a2 2 0 0 1 2 2v14a2 2 0 0 0 2 2h1v2h-3a2 2 0 0 1-2-2V4H8v14a2 2 0 0 1-2 2H3v-2h1V4a2 2 0 0 1 2-2z"/>',
    'star': '<path d="m12 2 3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 18l-6.4 3.6 1.4-7.1-5.3-5 7.2-.9z"/>',
    'stopwatch': '<path d="M9 1h6v2H9zm3 3a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm1 3h-2v6h5v-2h-3z"/>',
    'tag': '<path d="M2 2h9l11 11-9 9L2 11zm4 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>',
    'tent': '<path d="M12 3 2 21h6l4-7 4 7h6z"/>',
    'thumbtack': '<path d="M14 2 22 10l-2 2-1-1-4 4 1 4-2 2-4-4-5 5-1-1 5-5-4-4 2-2 4 1 4-4-1-1z"/>',
    'trophy': '<path d="M6 3h12v3h3v3a4 4 0 0 1-4 4h-.6A6 6 0 0 1 13 15.9V18h3v3H8v-3h3v-2.1A6 6 0 0 1 7.6 13H7a4 4 0 0 1-4-4V6h3zM4 8v1a2 2 0 0 0 2 2V8zm16 0h-2v3a2 2 0 0 0 2-2z"/>',
    'upload': '<path d="M12 2 6 9h4v6h4V9h4zM4 17h16v2H4zm0-1V9h2v7zm14 0V9h2v7z"/>',
    'user': '<path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 12c4.4 0 8 2.5 8 5.5V22H4v-2.5C4 16.5 7.6 14 12 14z"/>',
    'user-tie': '<path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm1 11-1 2-1-2c-4 .4-7 2.7-7 5.5V22h16v-3.5c0-2.8-3-5.1-7-5.5z"/>',
    'users': '<path d="M8 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm8 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM1 21v-2c0-3 3-5 7-5s7 2 7 5v2zm14.5-8c3 .3 5.5 2.1 5.5 4.5V21h-5v-2c0-1.9-.8-3.5-2-4.7z"/>',
    'wand-magic-sparkles': '<path d="m3 17 10-10 4 4L7 21zm12-14 1.2 2.8L19 7l-2.8 1.2L15 11l-1.2-2.8L11 7l2.8-1.2zM19 15l.8 1.7L21.5 18l-1.7.8L19 20.5l-.8-1.7L16.5 18l1.7-.8z"/>'
};

const svgToUrl = (body) =>
    'url("data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' + body + '</svg>') + '")';

const out = [];
const p = (s) => out.push(s);

p('/* ==========================================================================');
p('   本地图标兜底层 icons-shim.css');
p('   --------------------------------------------------------------------------');
p('   1. Font Awesome 6 通过 CDN 加载（见 index.html <head>），可用时就是官方字体图标；');
p('   2. CDN 不可达（离线 / 内网 / 被墙）时，下面用 ::before + SVG mask 兜底渲染，');
p('      图标仍然完整可见，不会出现空白方框。');
p('   3. 由生成脚本产出，如需增删图标请改脚本后重跑，不要直接手改本文件。');
p('   ========================================================================== */');
p('');
p('.fa-solid, .fa-regular, .fa-brands {');
p('    display: inline-block;');
p('    width: 1em;');
p('    height: 1em;');
p('    line-height: 1;');
p('    text-align: center;');
p('    vertical-align: -0.125em;');
p('    flex-shrink: 0;');
p('    font-style: normal;');
p('    font-weight: 900;');
p('    -webkit-font-smoothing: antialiased;');
p('}');
p('');
p('/* mask 兜底渲染 */');
p('.fa-solid::before, .fa-regular::before {');
p('    content: "";');
p('    display: block;');
p('    width: 1em;');
p('    height: 1em;');
p('    background-color: currentColor;');
p('    -webkit-mask-image: var(--fa-svg);');
p('    mask-image: var(--fa-svg);');
p('    -webkit-mask-repeat: no-repeat;');
p('    mask-repeat: no-repeat;');
p('    -webkit-mask-position: center;');
p('    mask-position: center;');
p('    -webkit-mask-size: contain;');
p('    mask-size: contain;');
p('}');
p('');
p('/* 空心（regular）风格：用描边对比度弱一点表达“未选中” */');
p('.fa-regular::before {');
p('    opacity: 0.45;');
p('}');
p('');
p('/* CDN 字体就绪后隐藏兜底层（body 由 icons-loader 加上该 class） */');
p('body.fa-cdn-ready .fa-solid::before,');
p('body.fa-cdn-ready .fa-regular::before {');
p('    display: none;');
p('    content: none;');
p('}');
p('');
p('body.fa-cdn-ready .fa-solid,');
p('body.fa-cdn-ready .fa-regular {');
p('    font-family: "Font Awesome 6 Free";');
p('}');
p('');
p('/* ------------------------------------------------------------------ */');
p('/* 图标路径（24x24 网格，简化绘制，保持同一视觉重量）                    */');
p('/* ------------------------------------------------------------------ */');
for (const [name, body] of Object.entries(I)) {
    p('.fa-' + name + ' { --fa-svg: ' + svgToUrl(body) + '; }');
}
p('');

fs.writeFileSync('icons-shim.css', out.join('\n'), 'utf8');
console.log('icons-shim.css written: ' + Object.keys(I).length + ' icons, ' + out.length + ' lines');
