import prisma from "../DB/db.config.js";

export const createCart = async (req, res) => {
  const { customerEmail, gigsId } = req.body;

  try {
    const newCart = await prisma.cart.create({
      data: {
        customerEmail,
        gigsId,
      },
    });

    return res.json({
      status: 200,
      data: newCart,
      message: "Cart Created Successfully",
    });
  } catch (error) {
    console.log("Error creating cart", error);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getAllGigsInCart = async (req, res) => {
  const { customerEmail } = req.body;

  try {
    const cartGigs = await prisma.cart.findMany({
      where: {
        customerEmail: customerEmail,
      },
      include: {
        gig: {
          include: {
            Category: {
              include: {
                SubCategory: true,
              },
            },
          },
        },
      },
    });

    return res.json({
      status: 200,
      data: cartGigs,
      message: "Cart Gigs Fetched Successfully",
    });
  } catch (error) {
    console.log("Error fetching cart gigs", error);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const updateCartIsSelected = async (req, res) => {
  const id = req.params.id;
  const { customerEmail } = req.body;

  try {
    const updatedCart = await prisma.cart.update({
      where: {
        id: id,
        customerEmail: customerEmail,
      },
      data: {
        isSelected: true,
      },
    });

    return res.json({
      status: 200,
      data: updatedCart,
      message: "Cart Selected Successfully",
    });
  } catch (error) {
    console.log("Error updating cart", error);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getSelectedCartGigs = async (req, res) => {
  const email = req.params.email;

  try {
    const selectedCartGigs = await prisma.cart.findMany({
      where: {
        customerEmail: email,
        isSelected: true,
      },
      include: {
        gig: {
          include: {
            Category: {
              include: {
                SubCategory: true,
              },
            },
          },
        },
      },
    });

    return res.json({
      status: 200,
      data: selectedCartGigs,
      message: "Selected Cart Gigs Fetched Successfully",
    });
  } catch (error) {
    console.log("Error fetching selected cart gigs", error);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const deleteGigFromCart = async (req, res) => {
  const cartItemId = req.params.id;

  try {
    const deletedGig = await prisma.cart.delete({
      where: {
        id: cartItemId,
      },
    });

    return res.json({
      status: 200,
      data: deletedGig,
      message: "Gig Deleted Successfully",
    });
  } catch (error) {
    console.log("Error deleting gig", error);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
