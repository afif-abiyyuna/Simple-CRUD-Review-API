function uploadGambar(req,res,next){
    if(req.file.filename){
        res.status(201).json({message:"Gambar Berhasil Diunggah", url: req.file.filename});
    } else {
        throw next;
    }
}

module.exports = {uploadGambar : uploadGambar}