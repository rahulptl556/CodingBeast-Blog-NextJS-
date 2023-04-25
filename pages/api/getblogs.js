// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';

function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json` , 'utf-8' , (err,data) => {
    if(err){
      res.status(500).json({error : "Blog Not Found"})
    }
    res.status(200).json(JSON.parse(data))
  })
}

export default handler;
