import { extractTags } from "./news/formatTags";
import { formatMessageWithLinks } from "./news/formatMsgUrl";
import { formatDate } from "./news/formatDate";
import { formatMediaAttachments } from "./news/formatMedia";

/**
 * 格式化 Facebook 貼文資料
 * @param {Array} data - FB News JSON 的 data 陣列
 * @returns {Array} 格式化後的貼文陣列
 */
export function formatFBNews(data) {
  if (!Array.isArray(data)) return [];

  return (
    data
      // 1. 過濾掉 message 為空的貼文
      .filter((item) => item.message && item.message.trim() !== "")
      // 2. 過濾掉 status_type === 'shared_story' 的貼文
      .filter((item) => item.status_type !== "shared_story")
      // 3. 整理資料格式
      .map((item) => {
        const tags = extractTags(item.message);
        const formattedMessage = formatMessageWithLinks(item.message);

        return {
          id: item.id,
          message: item.message, // 原始訊息
          formattedMessage, // 格式化後的訊息（含 HTML）
          tags, // 提取的標籤陣列
          created_time: formatDate(item.created_time),
          permalink_url: item.permalink_url || "",
          full_picture: item.full_picture || "",
          status_type: item.status_type || "",
          // 整理媒體附件
          media: formatMediaAttachments(item.attachments),
          // extra
          imageLoaded: false,
        };
      })
  );
}
