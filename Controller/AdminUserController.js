import prisma from "../DB/db.config.js";

export const createAdminUser = async (req, res) => {
  const { name, email, password, image, address, number } = req.body;
  try {
    const findAdminUser = await prisma.adminUser.findUnique({
      where: {
        email: email,
      },
    });

    if (findAdminUser) {
      return res.json({
        status: 400,
        message: "Email Already Taken Please enter another email",
      });
    }

    const newAdminUser = await prisma.adminUser.create({
      data: {
        name,
        email,
        password,
        image,
        address,
        number,
      },
    });

    return res.json({
      status: 200,
      data: newAdminUser,
      message: "Admin User Created Successfully",
    });
  } catch (error) {
    console.log("Error creating the admin user", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const getAllAdminUsers = async (req, res) => {
  try {
    const allAdminUsers = await prisma.adminUser.findMany();
    return res.json({
      status: 200,
      data: allAdminUsers,
      message: "All Admin Users",
    });
  } catch (error) {
    console.log("Error getting all admin users", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const getAdminUserById = async (req, res) => {
  const id = req.params;
  try {
    const adminUser = await prisma.adminUser.findUnique({
      where: id || undefined,
    });

    if (!adminUser) {
      return res.json({
        status: 404,
        message: "Admin User Not Found",
      });
    }

    return res.json({
      status: 200,
      data: adminUser,
      message: "Admin User Found",
    });
  } catch (error) {
    console.log("Error getting admin user by id", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const deleteAdminUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const adminUser = await prisma.adminUser.delete({
      where: {
        id: id,
      },
    });
    return res.json({
      status: 200,
      data: adminUser,
      message: "Admin User Deleted Successfully",
    });
  } catch {
    console.log("Error deleting admin user by id", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const getAdminUserByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const adminUser = await prisma.adminUser.findUnique({
      where: {
        email: email,
      },
    });

    return res.json({
      status: 200,
      data: adminUser,
      message: "Admin User Found",
    });
  } catch (error) {
    console.log("Error getting admin user by email", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const updateAdminUserByEmail = async (req, res) => {
  const email = req.params.email;
  const { name, password, image, address, number } = req.body;
  try {
    const adminUser = await prisma.adminUser.update({
      where: {
        email: email,
      },
      data: {
        name,
        password,
        image,
        address,
        number,
      },
    });

    return res.json({
      status: 200,
      data: adminUser,
      message: "Admin User Updated Successfully",
    });
  } catch (error) {
    console.log("Error updating admin user by email", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
