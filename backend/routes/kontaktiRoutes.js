import express from 'express';

const router = express.Router();

import Kontakti from '../models/Kontakti';

router.route('/kontakti').get(function(request, response){
    Kontakti.find(function (error, kontakti){
        if(error){
            console.log(error);
        }else{
            response.json(kontakti);
        }
    });
});

router.route('/kontakti/:id').get(function(request, response){
    Kontakti.findById(request.params.id, function (error, kontakti){
        if(error){
            console.log(error);
        }else{
            response.json(kontakti);
        }
    });
});

router.route('/kontakti/dodaj').post(function (request, response){
    let kontakti = new Kontakti(request.body);
    kontakti.save()
        .then(function (kontakti){
            response.status(200).json({'kontakti': 'Uspješno dodano!'});
        })
        .catch(function (error){
            response.status(400).send('Greška prilikom dodavanju novog kontakta!');
        })
});

router.route('/kontakti/izmjeni/:id').post(function (request, response){
    Kontakti.findById(request.params.id, function (error, kontakti){
        if(!kontakti){
            return next(new Error ('Nije moguće ućitati dokument!'));
        }else{
            kontakti.knTip = request.body.knTip;
            kontakti.knInformacija = request.body.knInformacija;
            kontakti.knKlientID = request.body.knKlientID;

            kontakti.save()
                .then(function(kontakti){
                    response.json('Kontakt uspješno izmjenjen!');
                })
                .catch(function (error){
                    response.status(400).send('Greška pri izmjeni kontakta!');
                });
        }
    });
});

router.route('/kontakti/ukloni/:id').get(function (request, response){
    Kontakti.findByIdAndRemove({_id: request.params.id}, function (error, kontakti){
        if(error){
            response.json(error);
        }else{
            response.json('Kontakt uklonjen!');
        }
    });
});

module.exports = router;