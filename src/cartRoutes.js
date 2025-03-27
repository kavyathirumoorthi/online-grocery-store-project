router.post("/add-item", async (req, res) => {
    try {
      const { name, image, price, quantity } = req.body;
      const newCartItem = new Cart({ name, image, price, quantity });
      await newCartItem.save();
      res.status(201).json({ message: "Item added to cart!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to add item" });
    }
  });
  