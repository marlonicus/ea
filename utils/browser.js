export const fetch = typeof window !== "undefined" ? window.fetch : () => {};

export const postJson = async (url, obj) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  });

  return res.json();
};
