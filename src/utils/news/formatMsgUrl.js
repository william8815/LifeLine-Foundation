/**
 * 將訊息中的 URL 轉換為可點擊的連結
 * @param {string} message - 貼文訊息
 * @returns {string} 格式化後的訊息（含 HTML）
 */
export function formatMessageWithLinks(message) {
  if (!message) return "";

  // URL 正則表達式（匹配 http, https, www 開頭的網址）
  const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;

  // 將 URL 替換為 <a> 標籤
  let formattedMessage = message.replace(urlRegex, (url) => {
    // 如果是 www 開頭，加上 https://
    const href = url.startsWith("www") ? `https://${url}` : url;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-foundation-blue hover:text-foundation-lightblue underline">${url}</a>`;
  });

  // 移除 hashtag（因為已經在 tags 屬性中單獨提取）
  const tagRegex = /#[\u4e00-\u9fa5a-zA-Z0-9_]+/g;
  formattedMessage = formattedMessage.replace(tagRegex, "");

  // 保留換行符號
  formattedMessage = formattedMessage.replace(/\n/g, "<br>");

  return formattedMessage;
}
