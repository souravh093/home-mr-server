import prisma from "../DB/db.config.js";

export const createOrder = async (req, res) => {
  const { amount, deleveryTime, gigsId, categoryId, customerId } = req.body;

    try {
        const newOrder = await prisma.order.create({
        data: {
            amount,
            deleveryTime,
            gigsId,
            categoryId,
            customerId,
        },
        });
    
        return res.json({
        status: 200,
        data: newOrder,
        message: "Order Created Successfully",
        });
    } catch (error) {
        console.log("Error creating the order", error);
        return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        });
    }
};


