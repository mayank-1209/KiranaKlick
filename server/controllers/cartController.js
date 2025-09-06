import User from "../models/User.js"

// Update User CartData : /api/cart/update

// export const updateCart = async (req, res) => {
//     try {
//         const { userId, cartItems } = req.body
//         await User.findByIdAndUpdate(userId, {cartItems})
//         res.json({success: true, message: "Cart Updated"})
//     } catch (error) {
//         console.log(error.message);
//         res.json({ success: false, message: error.message});
//     }
// }



export const updateCart = async (req, res) => {
    try {
        const { userId, cartItems } = req.body;

        if (!userId) {
            return res.json({ success: false, message: "UserId is required" });
        }

        if (!cartItems) {
            return res.json({ success: false, message: "Cart items are required" });
        }

        await User.findByIdAndUpdate(userId, { cartItems }, { new: true });

        res.json({ success: true, message: "Cart Updated" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};
