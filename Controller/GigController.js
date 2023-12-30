import prisma from "../DB/db.config.js";

export const createGig = async (req, res) => {
  const {
    title,
    description,
    size,
    fileFormat,
    image,
    folder,
    subFolder,
    industry,
    design,
    wordCount,
    adminUserId,
    categoryId,
    tagsData,
  } = req.body;

  try {
    const newGig = await prisma.gigs.create({
      data: {
        title,
        description,
        size,
        fileFormat,
        image,
        folder,
        subFolder,
        industry,
        design,
        wordCount,
        adminUserId,
        categoryId,
        Tags: {
          create: tagsData.map((tag) => ({
            name: tag.name,
          })),
        },
      },
      include: {
        Tags: true,
      },
    });

    return res.json({
      status: 200,
      data: newGig,
      message: "Gig Created Successfully",
    });
  } catch (error) {
    console.log("Error creating gig", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const getAllGigs = async (req, res) => {
  try {
    const allGigs = await prisma.gigs.findMany({
      include: {
        adminUser: true,
        Tags: true,
      },
    });
    return res.json({
      status: 200,
      data: allGigs,
      message: "All Gigs",
    });
  } catch (error) {
    console.log("Error getting all gigs", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const getGigById = async (req, res) => {
  const id = req.prisma.id;
  try {
    const gig = await prisma.gigs.findUnique({
      where: {
        id: id,
      },
      include: {
        adminUser: true,
        Tags: true,
      },
    });

    if (!gig) {
      return res.json({
        status: 404,
        message: "Gig Not Found",
      });
    }

    return res.json({
      status: 200,
      data: gig,
      message: "Gig Found",
    });
  } catch {
    console.log(`Error getting gig by id`, error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const updateGigById = async (req, res) => {
  const id = req.params.id;
  const {
    title,
    description,
    size,
    fileFormat,
    image,
    folder,
    subFolder,
    industry,
    design,
    wordCount,
    adminUserId,
    categoryId,
    tagsData,
  } = req.body;

  try {
    const gig = await prisma.gigs.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
        size,
        fileFormat,
        image,
        folder,
        subFolder,
        industry,
        design,
        wordCount,
        adminUserId,
        categoryId,
        Tags: {
          create: tagsData.map((tag) => ({
            name: tag.name,
          })),
        },
      },
      include: {
        Tags: true,
      },
    });

    return res.json({
      status: 200,
      data: gig,
      message: "Gig Updated Successfully",
    });
  } catch (error) {
    console.log("Error updating gig by id", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const deleteGigById = async (req, res) => {
  const id = req.params.id;
  try {
    const gig = await prisma.gigs.delete({
      where: {
        id: id,
      },
    });

    return res.json({
      status: 200,
      data: gig,
      message: "Gig Deleted Successfully",
    });
  } catch (error) {
    console.log("Error deleting gig by id", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
