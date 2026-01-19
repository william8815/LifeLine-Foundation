/**
 * 整理媒體附件資料
 * @param {Object} attachments - FB 貼文的 attachments 物件
 * @returns {Array} 整理後的媒體陣列
 */
export function formatMediaAttachments(attachments) {
  if (!attachments || !attachments.data || !Array.isArray(attachments.data)) {
    return [];
  }

  return attachments.data.map((attachment) => {
    const mediaType = attachment.media_type;
    const media = attachment.media || {};

    // 根據媒體類型整理資料
    switch (mediaType) {
      case "photo":
        return {
          type: "photo",
          src: media.image?.src || "",
          width: media.image?.width || 0,
          height: media.image?.height || 0,
          url: attachment.url || "",
          loaded: false, // 用於前端圖片載入狀態
        };

      case "video":
        return {
          type: "video",
          thumbnail: media.image?.src || "",
          source: media.source || "",
          width: media.image?.width || 0,
          height: media.image?.height || 0,
          url: attachment.url || "",
          loaded: false,
        };

      default:
        return {
          type: mediaType || "unknown",
          url: attachment.url || "",
          loaded: false,
        };
    }
  });
}
