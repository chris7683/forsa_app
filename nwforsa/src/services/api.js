import { mockUser, mockTransactions, mockFAQs, mockInstallmentPlans } from '../data/mockData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// User related endpoints
export const getUserProfile = async () => {
  await delay(500); // Simulate network delay
  return mockUser;
};

export const updateUserProfile = async (data) => {
  await delay(500);
  return { ...mockUser, ...data };
};

// Card related endpoints
export const activateCard = async (cardNumber, otp) => {
  await delay(1000);
  if (otp === '123456') {
    return { success: true, message: 'Card activated successfully' };
  }
  throw new Error('Invalid OTP');
};

export const changePIN = async (oldPin, newPin) => {
  await delay(800);
  if (oldPin === '1234') {
    return { success: true, message: 'PIN changed successfully' };
  }
  throw new Error('Invalid PIN');
};

export const lockCard = async () => {
  await delay(500);
  return { success: true, message: 'Card locked successfully' };
};

export const unlockCard = async () => {
  await delay(500);
  return { success: true, message: 'Card unlocked successfully' };
};

export const terminateCard = async (reason) => {
  await delay(1000);
  return { success: true, message: 'Card terminated successfully' };
};

// Transaction related endpoints
export const getTransactions = async (filters = {}) => {
  await delay(800);
  return [...mockTransactions];
};

// BNPL related endpoints
export const getBNPLPlans = async (amount) => {
  await delay(600);
  return mockInstallmentPlans.map(plan => ({
    ...plan,
    totalAmount: amount,
    totalPayment: amount * (1 + plan.interestRate / 100),
  }));
};

export const applyBNPL = async (amount, planId) => {
  await delay(1000);
  const plan = mockInstallmentPlans.find(p => p.id === planId);
  if (!plan) {
    throw new Error('Invalid plan selected');
  }
  return {
    success: true,
    message: 'BNPL application successful',
    plan: {
      ...plan,
      totalAmount: amount,
      totalPayment: amount * (1 + plan.interestRate / 100),
    },
  };
};

// FAQ related endpoints
export const getFAQs = async (category = 'All') => {
  await delay(500);
  if (category === 'All') {
    return mockFAQs;
  }
  return mockFAQs.filter(faq => faq.category === category);
};

// Error handling utility
export const handleApiError = (error) => {
  console.error('API Error:', error);
  throw new Error(error.message || 'Something went wrong');
}; 