/**
 * 时间格式化工具函数
 */

/**
 * 格式化日期时间为指定格式
 * @param {Date|string|number} date - 日期对象、日期字符串或时间戳
 * @param {string} format - 格式化模板，默认为 'YYYY-MM-DD HH:mm:ss'
 * @returns {string} 格式化后的日期字符串
 * 
 * @example
 * formatDate(new Date(), 'YYYY-MM-DD')           // "2026-04-01"
 * formatDate(Date.now(), 'YYYY/MM/DD HH:mm')     // "2026/04/01 11:05"
 * formatDate('2026-04-01', 'MM月DD日')          // "04月01日"
 */
export function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
    const d = date instanceof Date ? date : new Date(date);
    
    if (isNaN(d.getTime())) {
        return '';
    }
    
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    
    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}

/**
 * 获取相对时间描述
 * @param {Date|string|number} date - 日期对象、日期字符串或时间戳
 * @param {string} locale - 语言设置，默认为 'zh-CN'
 * @returns {string} 相对时间描述
 * 
 * @example
 * getRelativeTime(new Date() - 60000)     // "刚刚"
 * getRelativeTime(new Date() - 3600000)   // "1小时前"
 */
export function getRelativeTime(date, locale = 'zh-CN') {
    const d = date instanceof Date ? date : new Date(date);
    const now = Date.now();
    const diff = now - d.getTime();
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (locale === 'zh-CN') {
        if (seconds < 60) return '刚刚';
        if (minutes < 60) return `${minutes}分钟前`;
        if (hours < 24) return `${hours}小时前`;
        if (days < 7) return `${days}天前`;
        return formatDate(d, 'YYYY-MM-DD');
    }
    
    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 7) return `${days} days ago`;
    return formatDate(d, 'YYYY-MM-DD');
}

/**
 * 获取中文友好格式的时间
 * @param {Date|string|number} date - 日期对象、日期字符串或时间戳
 * @returns {string} 中文友好格式的时间
 * 
 * @example
 * getFriendlyDate(new Date())           // "今天 11:05"
 * getFriendlyDate(Date.now() - 86400000) // "昨天 11:05"
 */
export function getFriendlyDate(date) {
    const d = date instanceof Date ? date : new Date(date);
    const now = new Date();
    
    const isToday = d.toDateString() === now.toDateString();
    
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = d.toDateString() === yesterday.toDateString();
    
    const time = formatDate(d, 'HH:mm');
    
    if (isToday) {
        return `今天 ${time}`;
    }
    if (isYesterday) {
        return `昨天 ${time}`;
    }
    
    return formatDate(d, 'MM月DD日 HH:mm');
}
