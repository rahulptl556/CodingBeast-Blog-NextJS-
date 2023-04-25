// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';

function handler(req, res) {
  fs.readdir("blogdata" , (err,data) => {
    console.log("data")
    res.status(200).json(data)
  })
}

export default handler;
