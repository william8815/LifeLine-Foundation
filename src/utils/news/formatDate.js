/**
 * 格式化日期為 年-月-日 格式
 * @param {string} dateString - ISO 8601 格式的日期字串
 * @returns {string} 格式化後的日期 (YYYY-MM-DD)
 */
export function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
