const {events} = require("./data.json");
 
export default function handler(req, res) {
  if(req.method === 'GET') {
  const evt = events.filter(e => e.slug === req.query.slug);    
  res.status(200).json(evt);
  }
  else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${request.method} is not allowed`});
  }
}