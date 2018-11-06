export const createJob = async ({ title, description, loggedInUser }) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-ea-auth": loggedInUser.signInUserSession.accessToken.jwtToken
    },
    body: JSON.stringify({ title, description })
  });

  return res;
};

export default 1;
