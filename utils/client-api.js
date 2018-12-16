export const createJob = async ({ fields, loggedInUser }) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-ea-auth": loggedInUser.signInUserSession.idToken.jwtToken
    },
    body: JSON.stringify(fields)
  });

  return res;
};

export default 1;
