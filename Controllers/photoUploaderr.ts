import multer from 'multer'
import photoModel from '../Models/photoModel';
const photoUploader = async (req:any, res:any):Promise<any> =>{

    const Storage=multer.diskStorage({
        destination:'uploads',
        filename:(req:any,file:any,cb:any)=>{
            cb(null,file.originalname)
        }
    })

    const upload=multer({
        storage:Storage
    }).single('testImage')
    upload(req,res,
        (err:any)=>{
if(err){
console.log(err)
}
else{
    const newImage=new photoModel({
        name:req.body.name,
        image:{
        data:req.file.filename,
        contentType:'image/png'
        }
    })
    newImage.save()
    .then(()=>res.send("successfuly uploaded"))
    .catch(err=>{
        console.log(err)
    })
}
    })
   
};
export default photoUploader