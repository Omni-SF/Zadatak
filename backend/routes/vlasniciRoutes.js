import express from 'express';

const router = express.Router();

import Vlasnici from '../models/Vlasnici';

router.route('/vlasnici').get(function(request, response){
    Vlasnici.find(function (error, vlasnici){
        if(error){
            console.log(error);
        }else{
            response.json(vlasnici);
        }
    });
});

router.route('/vlasnici/:id').get(function(request, response){
    Vlasnici.findById(request.params.id, function (error, vlasnici){
        if(error){
            console.log(error);
        }else{
            response.json(vlasnici);
        }
    });
});

router.route('/vlasnici/dodaj').post(function (request, response){
    let vlasnici = new Vlasnici(request.body);
    vlasnici.save()
        .then(function (vlasnici){
            response.status(200).json({'vlasnici': 'Uspješno dodano!'});
        })
        .catch(function (error){
            response.status(400).send('Greška prilikom dodavanju novog vlasnika!');
        })
});

router.route('/vlasnici/izmjeni/:id').post(function (request, response){
    Vlasnici.findById(request.params.id, function (error, vlasnici){
        if(!vlasnici){
            return next(new Error ('Nije moguće ućitati dokument!'));
        }else{
            vlasnici.vlIme = request.body.vlIme;
            vlasnici.vlPrezime = request.body.vlPrezime;

            vlasnici.save()
                .then(function(vlasnici){
                    response.json('Vlasnik uspješno izmjenjen!');
                })
                .catch(function (error){
                    response.status(400).send('Greška pri izmjeni vlasnika!');
                });
        }
    });
});

router.route('/vlasnici/ukloni/:id').get(function (request, response){
    Vlasnici.findByIdAndRemove({_id: request.params.id}, function (error, vlasnici){
        if(error){
            response.json(error);
        }else{
            response.json('Vlasnik uklonjen!');
        }
    });
});

module.exports = router;