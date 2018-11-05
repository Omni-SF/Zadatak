import express from 'express';

const router = express.Router();

import Klienti from '../models/Klienti';

router.route('/klienti').get(function(request, response){
    Klienti.find(function (error, klienti){
        if(error){
            console.log(error);
        }else{
            response.json(klienti);
        }
    });
});

router.route('/klienti/:id').get(function(request, response){
    Klienti.findById(request.params.id, function (error, klienti){
        if(error){
            console.log(error);
        }else{
            response.json(klienti);
        }
    });
});

router.route('/klienti/dodaj').post(function (request, response){
    let klienti = new Klienti(request.body);
    klienti.save()
        .then(function (klienti){
            response.status(200).json({'klienti': 'Uspješno dodano!'});
        })
        .catch(function (error){
            response.status(400).send('Greška prilikom dodavanju novog klienta!');
        })
});

router.route('/klienti/izmjeni/:id').post(function (request, response){
    Klienti.findById(request.params.id, function (error, klienti){
        if(!klienti){
            return next(new Error ('Nije moguće ućitati dokument!'));
        }else{
            klienti.klNaziv = request.body.klNaziv;
            klienti.klAdresa = request.body.klAdresa;
            klienti.klVlasnikID = request.body.klVlasnikID;

            klienti.save()
                .then(function(klienti){
                    response.json('Klient uspješno izmjenjen!');
                })
                .catch(function (error){
                    response.status(400).send('Greška pri izmjeni klienta!');
                });
        }
    });
});

router.route('/klienti/ukloni/:id').get(function (request, response){
    Klienti.findByIdAndRemove({_id: request.params.id}, function (error, klienti){
        if(error){
            response.json(error);
        }else{
            response.json('Klient uklonjen!');
        }
    });
});

module.exports = router;