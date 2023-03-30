import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRECT_KEY, {
    apiVersion: '2022-11-15',
    appInfo: {
        name:  'Ignite Shop',
    }
})