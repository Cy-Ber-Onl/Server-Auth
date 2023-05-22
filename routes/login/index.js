import {query} from '../../modules/db/index.js';
import bcrypt from 'bcrypt';
import * as jwt from 'jose'


const post = async (req, res) => {
    const { username, password } = req.body;
    const user = await query('SELECT * FROM users WHERE username = ?', [username]);
    if (user.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const match = await bcrypt.compare(password, user[0].password);
    if (!match) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn:  60 * 60 * 24 * 7 });
    return res.status(200).json({ message: 'Login successful', token });
}

export default post;
