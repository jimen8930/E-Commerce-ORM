const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async  (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [{
        model: Product,
        through: ProductTag
      }],
    });
    res.status(200).json(allTags);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag =await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
        }
      ],
    });
    res.status(200).json(tag);
    // if(!tag) {
    //   res.status(404).json({message: 'No tag found with this id'})
    //   return;
    // }
  } catch (error) {
    console.log(error);
    res.status(500).json(error) 
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag= await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedTag);
    // if (!updatedTag[0]) {
    //   res.status(404).json({ message: 'No tag found with this id' });
    //   return;
    // }
    res.status(200).json(updatedTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag= await Tag.destroy ({
      where: {
        id: req.params.id,
      }
    })
    res.json(deletedTag);
  } catch (error) {
    res.json(error)
  }
  
});

module.exports = router;
