import { StyleSheet } from 'react-native';
import { customColors } from '../../constants/colors';

const AppScreenStyles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  headerContainerScrollable: {},
  headerContent: {},
  keyIconDynamic: {},
  headerTextContainer: {},
  headerGreetingText: {},
  headerNameText: {},
  headerIconsDynamic: {},
  headerIconCircleDynamic: {},
  cardSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: customColors.cardGreen,
    padding: 20,
    borderRadius: 10,
  },
   cardHeader: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 10,
   },
   cardIcon: {
     marginRight: 10,
   },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  activeStatus: {
    backgroundColor: '#30a07b',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  activeStatusText: {
    fontSize: 12,
    color: '#fff',
  },
  cardNumber: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  cardLimits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardLimitLabel: {
    fontSize: 14,
    color: '#fff',
  },
  limitValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLimitValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 5,
  },
  expiryContainer: {
  },
  expiryText: {
    fontSize: 14,
    color: '#fff',
  },
  expiryDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  bnplContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2e4a8e',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  bnplLabel: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  bnplValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  whiteBackgroundContainer: {
    backgroundColor: '#fff',
    marginTop: -15,
    paddingTop: 20,
    flex: 1,
  },

  quickActionsSectionWhiteBackground: {
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 0,
  },
  quickActionsButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -5,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },

  cardServicesSectionWhiteBackground: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitleWhite: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  cardServiceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastCardServiceItem: {
    borderBottomWidth: 0,
  },
  serviceIcon: {
    marginRight: 15,
  },
  serviceText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
});

export default AppScreenStyles; 