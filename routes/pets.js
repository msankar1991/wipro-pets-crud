const express = require('express');
const Joi = require('@hapi/joi');

const Pet = require('../models/pets');
const { validateBody } = require('../middlewares/route');

const router = express.Router();

router.post(
  '/',
  validateBody(Joi.object().keys({
    name: Joi.string().required().description('Pets name'),
    age: Joi.number().integer().required().description('Pets age'),
    colour: Joi.string().required().description('Pets colour'),
  }),
  {
    stripUnknown: true,
  }),
  async (req, res, next) => {
    try {
      const pet = new Pet(req.body);
      await pet.save();
      res.status(201).json(pet);
    } catch (e) {
      next(e);
    }
  }
);

router.get('/:id',
  async (req, res, next) => {
    try {
      let response = await Pet.findById(req.query);
      res.status(201).json(pet);
    } catch (e) {
      next(e);
    }
});

router.delete('/:id',
  async (req, res, next) => {
    try {
      let response = await Pet.findByIdAndDelete(req.query);
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  }
);

module.exports = router;