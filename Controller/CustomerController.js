import prisma from "../DB/db.config.js";

export const createCustomer = async (req, res) => {
  const {
    name,
    email,
    password,
    location,
    description,
    image,
    userName,
    address,
    country,
    city,
    number,
    industryName,
  } = req.body;

  try {
    const findCustomer = await prisma.customer.findUnique({
      where: {
        email: email,
      },
    });

    if (findCustomer) {
      return res.json({
        status: 400,
        message: "Email Already Taken Please enter another email",
      });
    }

    const newCustomer = await prisma.customer.create({
      data: {
        name,
        email,
        location,
        description,
        image,
        userName,
        address,
        password,
        country,
        city,
        number,
        industryName,
      },
    });

    return res.json({
      status: 200,
      data: newCustomer,
      message: "Customer Created Successfully",
    });
  } catch (error) {
    console.log("Error creating the customer", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await prisma.customer.findMany();
    return res.json({
      status: 200,
      data: allCustomers,
      message: "All Customers",
    });
  } catch (error) {
    console.log("Error getting all customers", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const getCustomerById = async (req, res) => {
  const id = req.params;
  try {
    const customerById = await prisma.customer.findUnique({
      where: {
        id: id,
      },
    });
    return res.json({
      status: 200,
      data: customerById,
      message: "Customer By Id",
    });
  } catch (error) {
    console.log("Error getting customer by id", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const deleteCustomerById = async (req, res) => {
  const id = req.params;
  try {
    const deleteCustomer = await prisma.customer.delete({
      where: {
        id: id,
      },
    });
    return res.json({
      status: 200,
      data: deleteCustomer,
      message: "Customer Deleted Successfully",
    });
  } catch (error) {
    console.log("Error deleting customer by id", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

export const updateCustomerById = async (req, res) => {
  const id = req.params;
  const {
    name,
    email,
    password,
    location,
    description,
    image,
    userName,
    address,
    country,
    city,
    number,
    industryName,
  } = req.body;
  try {
    const updateCustomer = await prisma.customer.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
        password,
        location,
        description,
        image,
        userName,
        address,
        country,
        city,
        number,
        industryName,
      },
    });
    return res.json({
      status: 200,
      data: updateCustomer,
      message: "Customer Updated Successfully",
    });
  } catch (error) {
    console.log("Error updating customer by id", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
