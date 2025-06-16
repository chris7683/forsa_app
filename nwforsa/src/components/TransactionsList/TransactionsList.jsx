import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { filterTransactions } from '../../utils/financialCalculations';
import styles from './TransactionsListStyles';

const TransactionsList = ({ transactions = [], searchText, activeFilter }) => {
  const [expandedTransactionId, setExpandedTransactionId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedTransactionId(expandedTransactionId === id ? null : id);
  };

  const filteredTransactions = filterTransactions(transactions, searchText, activeFilter);

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

export default TransactionsList; 