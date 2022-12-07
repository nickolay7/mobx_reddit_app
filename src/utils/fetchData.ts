export const fetchData = async (url: string, config?: {}) => {
  const res = await fetch(url, config);
  return res.json();
}