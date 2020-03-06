import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const url = req.url.replace('/api/images', 'https://driggl-prod.s3.eu-central-1.amazonaws.com')
  const newres = await fetch(url);

  res.send(newres.body);
}
