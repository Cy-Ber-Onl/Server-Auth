import * as jwt from 'jose'

const post = async (req, res) => {
    const { token } = req.body;
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
        const user = await db.query('SELECT * FROM users WHERE id = ?', [verified.id]);
        if (user.length > 0) {
            const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * 7 });
            return res.status(200).json({ message: 'User verified' }, token);
        }
    } else {
        return res.status(401).json({ message: 'User not verified' });
    }
}

export default post;