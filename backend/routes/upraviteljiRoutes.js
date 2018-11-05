import express from 'express';

const router = express.Router();

import Upravitelji from '../models/Upravitelji';

router.route('/upravitelji').get(function(request, response){
    Upravitelji.find(function (error, upravitelji){
        if(error){
            console.log(error);
        }else{
            response.json(upravitelji);
        }
    });
});

router.route('/upravitelji/:id').get(function(request, response){
    Upravitelji.findById(request.params.id, function (error, upravitelji){
        if(error){
            console.log(error);
        }else{
            response.json(upravitelji);
        }
    });
});

router.route('/upravitelji/dodaj').post(function (request, response){
    let upravitelji = new Upravitelji(request.body);
    upravitelji.save()
        .then(function (upravitelji){
            response.status(200).json({'upravitelji': 'Uspješno dodano!'});
        })
        .catch(function (error){
            response.status(400).send('Greška prilikom dodavanju novog upravitelja!');
        })
});

router.route('/upravitelji/izmjeni/:id').post(function (request, response){
    Upravitelji.findById(request.params.id, function (error, upravitelji){
        if(!upravitelji){
            return next(new Error ('Nije moguće ućitati dokument!'));
        }else{
            upravitelji.prNaziv = request.body.prNaziv;
            upravitelji.prTip = request.body.prTip;
            upravitelji.prKlientID = request.body.prKlientID;

            upravitelji.save()
                .then(function(upravitelji){
                    response.json('Upravitelj uspješno izmjenjen!');
                })
                .catch(function (error){
                    response.status(400).send('Greška pri izmjeni upravitelja!');
                });
        }
    });
});

router.route('/upravitelji/ukloni/:id').get(function (request, response){
    Upravitelji.findByIdAndRemove({_id: request.params.id}, function (error, upravitelji){
        if(error){
            response.json(error);
        }else{
            response.json('Upravitelj uklonjen!');
        }
    });
});

module.exports = router;