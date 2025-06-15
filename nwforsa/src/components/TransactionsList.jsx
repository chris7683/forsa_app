import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TransactionsList = ({ transactions = [], searchText, activeFilter }) => {
  const [expandedTransactionId, setExpandedTransactionId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedTransactionId(expandedTransactionId === id ? null : id);
  };

  // Ensure transactions is an array before calling filter
  const safeTransactions = Array.isArray(transactions) ? transactions : [];

  const filteredTransactions = safeTransactions.filter(transaction => {
    const transactionDescription = transaction.description || ''; // Ensure description is a string
    const matchesSearch = transactionDescription.toLowerCase().includes((searchText || '').toLowerCase());
    const matchesFilter = (
      activeFilter === 'All' ||
      (activeFilter === 'Debits' && transaction.amount.startsWith('-')) ||
      (activeFilter === 'Credits' && transaction.amount.startsWith('+')) ||
      (activeFilter === 'Pending' && transaction.status === 'Pending')
    );
    return matchesSearch && matchesFilter;
  });

  return (
    <View style={styles.transactionsListContainer}>
      {filteredTransactions.map(transaction => (
        <View key={transaction.id} style={styles.transactionItem}>
          <TouchableOpacity 
            style={styles.transactionItemContent}
            onPress={() => toggleExpand(transaction.id)}
          >
            <View style={styles.transactionIconContainer}>
              <AntDesign name={transaction.icon} size={20} color="#000" />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionDescription}>{transaction.description}</Text>
              <View style={styles.transactionCategoryStatus}>
                <Text style={styles.transactionCategory}>{transaction.category}</Text>
                <View style={[styles.statusBadge, transaction.status === 'Completed' ? styles.statusCompleted : styles.statusPending]}>
                  <Text style={styles.statusText}>{transaction.status}</Text>
                </View>
              </View>
            </View>
            <View style={styles.transactionAmountDate}>
              <Text style={[styles.transactionAmount, transaction.amount.startsWith('+') ? styles.amountCredit : styles.amountDebit]}>{`${transaction.amount} ${transaction.currency}`}</Text>
              <AntDesign 
                name={expandedTransactionId === transaction.id ? 'up' : 'down'}
                size={12} 
                color="#888" 
                style={styles.dropdownIcon}
              />
              <Text style={styles.transactionDate}>{`${transaction.date} • ${transaction.time}`}</Text>
            </View>
          </TouchableOpacity>
          {expandedTransactionId === transaction.id ? (
            <View style={styles.transactionDetailsPreview}>
              <View style={styles.previewRow}>
                <AntDesign name="calendar" size={12} color="#888" style={styles.previewIcon} />
                <Text style={styles.previewLabel}>Date:</Text>
                <Text style={styles.previewValue}>{transaction.date}</Text>
              </View>
              <View style={styles.previewRow}>
                <AntDesign name="clockcircleo" size={12} color="#888" style={styles.previewIcon} />
                <Text style={styles.previewLabel}>Time:</Text>
                <Text style={styles.previewValue}>{transaction.time}</Text>
              </View>
              <View style={styles.previewRow}>
                <AntDesign name="tagso" size={12} color="#888" style={styles.previewIcon} />
                <Text style={styles.previewLabel}>Category:</Text>
                <Text style={styles.previewValue}>{transaction.category}</Text>
              </View>
              <View style={styles.previewRow}>
                <AntDesign name="enviromento" size={12} color="#888" style={styles.previewIcon} />
                <Text style={styles.previewLabel}>Location:</Text>
                <Text style={styles.previewValue}>{transaction.location}</Text>
              </View>
              <View style={styles.previewRow}>
                <AntDesign name="qrcode" size={12} color="#888" style={styles.previewIcon} />
                <Text style={styles.previewLabel}>Transaction ID:</Text>
                <Text style={styles.previewValue}>{transaction.transactionId}</Text>
              </View>
              <View style={styles.previewRow}>
                <AntDesign name="filetext1" size={12} color="#888" style={styles.previewIcon} />
                <Text style={styles.previewLabel}>Reference Number:</Text>
                <Text style={styles.previewValue}>{transaction.referenceNumber}</Text>
              </View>
              <View style={styles.previewRow}>
                <AntDesign name="key" size={12} color="#888" style={styles.previewIcon} />
                <Text style={styles.previewLabel}>Authorization Code:</Text>
                <Text style={styles.previewValue}>{transaction.authorizationCode}</Text>
              </View>
              <View style={styles.previewRow}>
                <AntDesign name="file1" size={12} color="#888" style={styles.previewIcon} />
                <Text style={styles.previewLabel}>Description:</Text>
                <Text style={styles.previewValue}>{transaction.previewDescription}</Text>
              </View>
              <View style={styles.previewRow}>
                <AntDesign name="creditcard" size={12} color="#888" style={styles.previewIcon} />
                <Text style={styles.previewLabel}>Fees:</Text>
                <Text style={styles.previewValue}>{transaction.fees}</Text>
              </View>
              <View style={[styles.previewRow, styles.balanceAfterRow]}>
                <AntDesign name="wallet" size={12} color="#000" style={styles.previewIcon} />
                <Text style={styles.previewLabel}>Balance After:</Text>
                <Text style={styles.previewValue}>{transaction.balanceAfter}</Text>
              </View>
            </View>
          ) : null}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsListContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
  },
  transactionItem: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
  },
  transactionItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  transactionCategoryStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  transactionCategory: {
    fontSize: 12,
    color: '#777',
    marginRight: 5,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 15,
  },
  statusCompleted: {
    backgroundColor: '#e6ffe6', // Light green
  },
  statusPending: {
    backgroundColor: '#fff0e6', // Light orange
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#00c853', // Green
  },
  transactionAmountDate: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amountCredit: {
    color: '#00c853', // Green for credits
  },
  amountDebit: {
    color: '#d32f2f', // Red for debits
  },
  dropdownIcon: {
    marginTop: 5,
  },
  transactionDate: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  transactionDetailsPreview: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 10,
  },
  previewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  previewIcon: {
    marginRight: 10,
  },
  previewLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#555',
    width: 120, // Adjust as needed
  },
  previewValue: {
    fontSize: 13,
    color: '#333',
    flex: 1,
  },
  balanceAfterRow: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
});

export default TransactionsList; 