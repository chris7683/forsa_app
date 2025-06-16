import { StyleSheet } from 'react-native';
import { customColors } from '../../constants/colors';

const styles = StyleSheet.create({
  headerContainerScrollable: {
    backgroundColor: customColors.backgroundBlue,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  keyIconDynamic: {
    marginRight: 15,
  },
  headerTextContainer: {
    flexDirection: 'column',
    marginLeft: 0,
    flex: 1,
  },
  headerGreetingText: {
    fontSize: 16,
    color: '#fff',
  },
  headerNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIconsDynamic: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
  },
  headerIconCircleDynamic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});

export default styles; 