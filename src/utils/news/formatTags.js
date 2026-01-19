/**
 * 提取訊息中的 hashtag 標籤
 * @param {string} message - 貼文訊息
 * @returns {Array} 標籤陣列
 */
export function extractTags(message) {
  if (!message) return [];

  // 使用正則表達式匹配 # 開頭的標籤
  const tagRegex = /#[\u4e00-\u9fa5a-zA-Z0-9_]+/g;
  const matches = message.match(tagRegex);

  if (!matches) return [];

  // 去除重複的標籤並移除 # 符號
  return [...new Set(matches)].map((tag) => tag.substring(1));
}
