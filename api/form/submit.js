export const config = {
  runtime: "nodejs18.x",
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  const response = await fetch(`${process.env.API_URL}/Form/AddNHIForm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  res.status(response.status).json(data);
}
