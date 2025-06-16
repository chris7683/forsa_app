import { mockTransactions, mockCards } from '../data/mockData';

/**
 * Calculate BNPL limit status
 * @returns {Object} Object containing BNPL limit information
 */
export const calculateBNPLLimitStatus = () => {
  // In a real app, this would come from an API
  const totalLimit = 50000; // Total BNPL limit
  const usedLimit = mockTransactions
    .filter(transaction => transaction.type === 'bnpl')
    .reduce((sum, transaction) => sum + Math.abs(parseFloat(transaction.amount)), 0);
  
  const availableLimit = totalLimit - usedLimit;

  return {
    totalLimit,
    usedLimit,
    availableLimit,
    percentageUsed: (usedLimit / totalLimit) * 100
  };
};

/**
 * Calculate current balance and monthly expenses
 * @returns {Object} Object containing balance and expense information
 */
export const calculateBalanceAndExpenses = () => {
  // Get current balance from primary card
  const primaryCard = mockCards.find(card => card.isPrimary);
  const currentBalance = primaryCard ? primaryCard.balance : 0;

  // Calculate this month's expenses from transactions
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get all transactions for the current month
  const monthlyTransactions = mockTransactions.filter(transaction => {
    const transactionDate = new Date(transaction.date);
    return transactionDate.getMonth() === currentMonth &&
           transactionDate.getFullYear() === currentYear;
  });

  // Calculate total expenses (negative amounts) and income (positive amounts)
  const monthlyExpenses = monthlyTransactions
    .filter(transaction => transaction.amount.startsWith('-'))
    .reduce((sum, transaction) => sum + Math.abs(parseFloat(transaction.amount)), 0);

  const monthlyIncome = monthlyTransactions
    .filter(transaction => transaction.amount.startsWith('+'))
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);

  // Calculate net change for the month
  const netMonthlyChange = monthlyIncome - monthlyExpenses;

  return {
    currentBalance,
    monthlyExpenses,
    monthlyIncome,
    netMonthlyChange,
    transactionCount: monthlyTransactions.length
  };
};

/**
 * Filter and process transactions based on search term and category filter
 * @param {Array} transactions - Array of transactions to filter
 * @param {string} searchTerm - Search term to filter by
 * @param {string} activeFilter - Category filter ('All', 'Debits', 'Credits', 'Pending')
 * @returns {Array} Filtered and processed transactions
 */
export const filterTransactions = (transactions, searchTerm = '', activeFilter = 'All') => {
  if (!Array.isArray(transactions)) return [];

  return transactions.filter(transaction => {
    // Search term filtering
    const searchFields = [
      transaction.description,
      transaction.merchant,
      transaction.category,
      transaction.location
    ];
    const matchesSearch = searchFields.some(field => 
      field?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Category filtering
    const matchesFilter = (
      activeFilter === 'All' ||
      (activeFilter === 'Debits' && transaction.amount.startsWith('-')) ||
      (activeFilter === 'Credits' && transaction.amount.startsWith('+')) ||
      (activeFilter === 'Pending' && transaction.status === 'Pending')
    );

    return matchesSearch && matchesFilter;
  });
};

/**
 * Get transaction statistics
 * @param {Array} transactions - Array of transactions to analyze
 * @returns {Object} Transaction statistics
 */
export const getTransactionStats = (transactions) => {
  if (!Array.isArray(transactions)) return {};

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthlyTransactions = transactions.filter(transaction => {
    const transactionDate = new Date(transaction.date);
    return transactionDate.getMonth() === currentMonth &&
           transactionDate.getFullYear() === currentYear;
  });

  const stats = {
    totalTransactions: monthlyTransactions.length,
    totalDebits: 0,
    totalCredits: 0,
    pendingTransactions: 0,
    categoryBreakdown: {},
    averageTransactionAmount: 0
  };

  monthlyTransactions.forEach(transaction => {
    const amount = Math.abs(parseFloat(transaction.amount));
    
    if (transaction.amount.startsWith('-')) {
      stats.totalDebits += amount;
    } else {
      stats.totalCredits += amount;
    }

    if (transaction.status === 'Pending') {
      stats.pendingTransactions++;
    }

    // Category breakdown
    if (!stats.categoryBreakdown[transaction.category]) {
      stats.categoryBreakdown[transaction.category] = {
        count: 0,
        total: 0
      };
    }
    stats.categoryBreakdown[transaction.category].count++;
    stats.categoryBreakdown[transaction.category].total += amount;
  });

  // Calculate average transaction amount
  const totalAmount = stats.totalDebits + stats.totalCredits;
  stats.averageTransactionAmount = stats.totalTransactions > 0 
    ? totalAmount / stats.totalTransactions 
    : 0;

  return stats;
}; 