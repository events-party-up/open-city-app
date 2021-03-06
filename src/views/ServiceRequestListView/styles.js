import { StyleSheet } from 'react-native';
import Global         from '../../util/globals';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Global.COLOR.LIGHT_GREY
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Global.COLOR.LIGHT_GREY
  },
  serviceRequestContainer: {
    padding: 16,
  }
});

export default styles
