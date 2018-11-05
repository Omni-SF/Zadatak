import express from 'express';

const router = express.Router();

import Proizvodi from '../models/Proizvodi';

router.route('/proizvodi').get(function(request, response){
    Proizvodi.find(function (error, proizvodi){
        if(error){
            console.log(error);
        }else{
            response.json(proizvodi);
        }
    });
});

router.route('/proizvodi/:id').get(function(request, response){
    Proizvodi.findById(request.params.id, function (error, proizvodi){
        if(error){
            console.log(error);
        }else{
            response.json(proizvodi);
        }
    });
});

router.route('/proizvodi/dodaj').post(function (request, response){
    let proizvodi = new Proizvodi(request.body);
    proizvodi.save()
        .then(function (proizvodi){
            response.status(200).json({'proizvodi': 'Uspješno dodano!'});
        })
        .catch(function (error){
            response.status(400).send('Greška prilikom dodavanju novog proizvoda!');
        })
});

router.route('/proizvodi/izmjeni/:id').post(function (request, response){
    Proizvodi.findById(request.params.id, function (error, proizvodi){
        if(!proizvodi){
            return next(new Error ('Nije moguće ućitati dokument!'));
        }else{
            proizvodi.prNaziv = request.body.prNaziv;
            proizvodi.prTip = request.body.prTip;
            proizvodi.prKlientID = request.body.prKlientID;

            proizvodi.save()
                .then(function(proizvodi){
                    response.json('Proizvod uspješno izmjenjen!');
                })
                .catch(function (error){
                    response.status(400).send('Greška pri izmjeni proizvoda!');
                });
        }
    });
});

router.route('/proizvodi/ukloni/:id').get(function (request, response){
    Proizvodi.findByIdAndRemove({_id: request.params.id}, function (error, proizvodi){
        if(error){
            response.json(error);
        }else{
            response.json('Proizvod uklonjen!');
        }
    });
});

module.exports = router;