import slugify from "slugify";
import Category from "../models/Category.js";

export const categoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({
        message: "No name",
      });
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Duplicate",
      });
    }

    const category = await new Category({ name, slug: slugify(name) }).save();
    res.status(201).send({
      success: true,
      message: "New Category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};

// Update

export const updateCategoryController = async(req,res) => {
  try {

    const {name} = req.body
    const {id} = req.params
    const category = await Category.findByIdAndUpdate(id, {name, slug:slugify(name)}, {new:true})
    res.status(200).send({
      success:true,
      message:'Category Updated',
      category
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating",
    });
  }
}

export const getAllCategory = async(req,res) => {
  try {
   const category = await Category.find({})
   res.status(200).send({
    success:true,
    message:'All Categories',
    category
   })
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
}

export const getCategory = async (req,res) => {
  try {

    const category = await Category.findOne({slug:req.params.slug})
    res.status(200).send({
      success:true,
      message:'Single Category',
      category
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting a category",
    });
  }
}

export const deleteCategory = async (req,res) => {
  try {
    const {id} = req.params
    await Category.findByIdAndDelete(id)
    res.status(200).send({
      success:true,
      message:'Deleted'
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while deleting a category",
    });
  }
}