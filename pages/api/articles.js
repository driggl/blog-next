import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const url = req.url.replace("/api/", "https://api.sourcerio.com/v1/blogs/driggl/");
  const newres = await fetch(url);
  const data = await newres.json();
  res.json(data);
};
