import prisma from "../DB/db.config.js";

export const createCategory = async (req, res) => {
  const {
    title,
    image,
    folder,
    subCategoryData = [],
    adminUserId,
    bulletPoints = [],
  } = req.body;
  try {
    const newCategory = await prisma.category.create({
      data: {
        title,
        image,
        adminUserId,
        folder,
        SubCategory: {
          create: subCategoryData.map((subCategory) => ({
            title: subCategory.title,
            amount: subCategory.amount,
            deleveryTime: subCategory.deleveryTime,
            FastDelivery: {
              create: subCategory.fastDelivery
                ? subCategory.fastDelivery.map((fastDelivery) => ({
                    amount: fastDelivery.amount,
                    deleveryTime: fastDelivery.deleveryTime,
                  }))
                : [],
            },
          })),
        },
        bulletPoint: {
          create: bulletPoints.map((bullet) => ({
            itemOne: bullet.itemOne,
            itemTwo: bullet.itemTwo,
            itemThree: bullet.itemThree,
          })),
        },
      },

      include: {
        SubCategory: {
          include: {
            FastDelivery: true,
          },
        },
        bulletPoint: true,
      },
    });

    return res.json({
      status: 200,
      data: newCategory,
      message: "Category Created Successfully",
    });
  } catch (error) {
    console.log("Error creating category", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const allCategories = await prisma.category.findMany({
      skip: 0,
      take: 5,
      include: {
        Gigs: {
          include: {
            adminUser: true,
            Tags: true,
          },
        },
        SubCategory: {
          include: {
            FastDelivery: true,
          },
        },
        bulletPoint: true,
      },
    });
    return res.json({
      status: 200,
      data: allCategories,
      message: "All Categories",
    });
  } catch (error) {
    console.log("Error getting all categories", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const getCategoryById = async (req, res) => {
  const id = req.params;
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: id,
      },
      include: {
        SubCategory: {
          include: {
            FastDelivery: true,
            bulletPoint: true,
          },
        },
      },
    });

    if (!category) {
      return res.json({
        status: 400,
        message: "Category Not Found",
      });
    }

    return res.json({
      status: 200,
      data: category,
      message: "Category Found",
    });
  } catch (error) {
    console.log("Error getting category by id", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const updateCategory = async (req, res) => {
  const id = req.params;
  const { title, image } = req.body;
  try {
    const findCategory = await prisma.category.findUnique({
      where: {
        id: id,
      },
    });

    if (!findCategory) {
      return res.json({
        status: 400,
        message: "Category Not Found",
      });
    }

    const updatedCategory = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        title,
        image,
      },
    });

    return res.json({
      status: 200,
      data: updatedCategory,
      message: "Category Updated Successfully",
    });
  } catch (error) {
    console.log("Error updating category", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const deleteCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await prisma.category.delete({
      where: {
        id: id,
      },
    });
    return res.json({
      status: 200,
      data: category,
      message: "Category Deleted Successfully",
    });
  } catch {
    console.log("Error deleting category by id", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
