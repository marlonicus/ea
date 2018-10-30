export const fetch = typeof window !== "undefined" ? window.fetch : () => {};

export const postJson = (url, obj) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      });

      const json = await res.json();
      resolve(json);
    } catch (err) {
      reject(err);
    }
  });
