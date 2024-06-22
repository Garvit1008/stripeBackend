const { createCheckoutSession, handleWebhook } = require('../services/paymentService');
const Plan = require('../models/Plan');
exports.checkout = async (req, res) => {
    const { planId } = req.body;
    const plan = await Plan.findByPk(planId);
    const sessionId = await createCheckoutSession(plan);
    res.json({ sessionId });
};

exports.webhook = (req, res) => {
    handleWebhook(req, res);
};
