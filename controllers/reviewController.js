const Review = require('../models/Review');

exports.addReview = async (req, res) => {
    const { rating, comment } = req.body;
    const bookId = req.params.id;
    const userId = req.user.id;

    try {
        const existing = await Review.findOne({ book: bookId, user: userId });
        if (existing) return res.status(400).json({ error: 'You already reviewed this book' });

        const review = new Review({ rating, comment, book: bookId, user: userId });
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateReview = async (req, res) => {
    const reviewId = req.params.id;
    try {
        const review = await Review.findOneAndUpdate({ _id: reviewId, user: req.user.id }, req.body, { new: true });
        if (!review) return res.status(404).json({ error: 'Review not found or unauthorized' });
        res.json(review);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        if (!review) return res.status(404).json({ error: 'Review not found or unauthorized' });
        res.json({ message: 'Review deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
