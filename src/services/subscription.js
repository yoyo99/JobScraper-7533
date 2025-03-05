import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

export const SUBSCRIPTION_LIMITS = {
  free: {
    jobSearches: 10,
    coverLetters: 3,
    applications: 5,
  },
  pro: {
    jobSearches: 100,
    coverLetters: 50,
    applications: 50,
  },
  enterprise: {
    jobSearches: Infinity,
    coverLetters: Infinity,
    applications: Infinity,
  }
};

export const checkSubscriptionLimit = async (userId, action) => {
  const userDoc = await getDoc(doc(db, 'users', userId));
  const userData = userDoc.data();
  const limits = SUBSCRIPTION_LIMITS[userData.plan];

  switch (action) {
    case 'jobSearch':
      return userData.jobSearchCount < limits.jobSearches;
    case 'coverLetter':
      return userData.coverLetterCount < limits.coverLetters;
    case 'application':
      return userData.applicationCount < limits.applications;
    default:
      return false;
  }
};

export const incrementUsage = async (userId, action) => {
  const userRef = doc(db, 'users', userId);
  const counters = {
    jobSearch: 'jobSearchCount',
    coverLetter: 'coverLetterCount',
    application: 'applicationCount'
  };

  await updateDoc(userRef, {
    [counters[action]]: increment(1)
  });
};

export const createSubscription = async (userId, priceId) => {
  const userDoc = await getDoc(doc(db, 'users', userId));
  const user = userDoc.data();

  const session = await stripe.checkout.sessions.create({
    customer_email: user.email,
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${window.location.origin}/#/profile?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${window.location.origin}/#/profile`,
    metadata: {
      userId,
    },
  });

  return session;
};

export const handleSubscriptionChange = async (session) => {
  const { userId } = session.metadata;
  const subscription = await stripe.subscriptions.retrieve(session.subscription);
  
  const planMap = {
    'price_pro': 'pro',
    'price_enterprise': 'enterprise'
  };

  const newPlan = planMap[subscription.items.data[0].price.id] || 'free';

  await updateDoc(doc(db, 'users', userId), {
    plan: newPlan,
    subscriptionId: subscription.id,
    subscriptionStatus: subscription.status,
  });
};