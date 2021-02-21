const models = require('../models');

class reviewController{
    static postReview(req,res,next){
        const isi = {
            nilai: req.body.nilai,
            nama: req.body.nama,
            review: req.body.review,
            gambar: req.body.gambar,
        }
        models.Form_Review.create(isi).then(result=>{
            res.status(201).json({message:"Review Berhasil Ditambahkan", result});

        })
        .catch(next);
    }

    static showReviewId(req,res,next){
        const id = req.params.id;
        models.Form_Review.findByPk(id).then(result=>{
            if(result){
                res.status(200).json({message:"Review Berhasil Didapatkan", result});
            } else {
                res.status(404).json({message:"Review Tidak Ditemukan"});
            }
        }).catch(next);
    }

    static showAllReview(req,res,next){
        models.Form_Review.findAll().then(result=>{
            res.status(200).json({message:"Semua Review Berhasil Didapatkan", result});

        }).catch(next);
    }

    static editReview(req,res,next){
        const id = req.params.id;
        const editIsi = {
            nilai: req.body.nilai,
            nama: req.body.nama,
            review: req.body.review,
            gambar: req.body.gambar,
        }
        models.Form_Review.update(editIsi,{where:{id:id}}).then(result=>{
            res.status(200).json({message:"Review Berhasil di Edit", result:editIsi});
        }).catch(next);
    }

    static hapusReview(req,res,next){
        const id = req.params.id;
        models.Form_Review.destroy({where:{id:id}}).then(result=>{
            if(result){
                res.status(200).json({message:"Review Berhasil di Hapus"});
            } else {
                res.status(404).json({message:"Review Tidak Ditemukan"});
            }
        }).catch(next);
    }
}

module.exports = reviewController;