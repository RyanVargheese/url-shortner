import express from 'express';
const router =express.Router();

router.post('/',(req,res)=>{
    const {url}=req.body;
    const shortUrl=nanoid(7);//making a new Short url using nanoid
    const newUrl=new urlSchema({ //creating a new document
        full_url:url,
        short_url:shortUrl
    })

    newUrl.save();  //saving it in the database
    res.send();
})

export default router;
