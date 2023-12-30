import prisma from "../DB/db.config.js";

export const createContact = async (req, res) => {
  const { name, email, mediaLink, message, exampleData } = req.body;
  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        mediaLink,
        message,
        ExampleDesign: {
          create: exampleData.map((example) => ({
            title: example.title,
            image: example.image,
          })),
        },
      },
      include: {
        ExampleDesign: true,
      },
    });

    return res.json({
      status: 200,
      data: newContact,
      message: `Contact Created Successfully`,
    });
  } catch {
    console.log(`Error creating the contact`, error);
    return res.status(500).json({
      status: 500,
      message: `Internal Server Error`,
    });
  }
};
