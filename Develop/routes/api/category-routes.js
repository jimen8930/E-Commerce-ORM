const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories =await Category.findAll({
      include:[{model: Product}],
    });
    res.status(200).json(allCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category =await Category.findByPk(req.params.id,{
      include: [{model: Product}],
    });
    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory= await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
    const updateCategory= await Category.update(req.body,{
      
  where: {
    id: req.params.id,
  },
  }).catch((error) => res.json(error));
  res.json(updateCategory);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
try {
  const deletedCategory= await Category.destroy ({
    where: {
      id: req.params.id,
    }
  })
  res.json(deletedCategory);
} catch (error) {
  res.json(err)
}

  
});

module.exports = router;
