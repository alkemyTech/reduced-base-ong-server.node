const testimonialsRepo = require('../repositories/testimonials');

const getAll = async () => {
  const response = await testimonialsRepo.getAll();
  return response;
};

const getById = async (params) => {
  const { id } = params;
  const data = await testimonialsRepo.getById(id);
  if (!data) {
    const error = new Error('The testimonial does not exist.');
    throw error;
  }
  return data;
};

const create = async (body) => {
  const data = await testimonialsRepo.create(body);
  return data;
};

const update = async (params, body) => {
  const { id } = params;
  const data = await testimonialsRepo.update(id, body);
  return data;
};

const remove = async (params) => {
  const { id } = params;
  const data = await testimonialsRepo.remove(id);
  if (data === 0) {
    const error = new Error('The testimonial does not exist.');
    throw error;
  }
  return data;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};