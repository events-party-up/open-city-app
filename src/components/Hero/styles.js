import { StyleSheet } from 'react-native';
import { TEXT_SMALL_HEADLINE, FONT_NORMAL, TEXT_LARGE_HEADLINE } from './../../styles/text';
import { BRAND_LIGHT_ONE, WHITE } from './../../styles/common';

const styles = StyleSheet.create({
  heroWrapper: {
    alignContent: 'flex-start',
    flexDirection: 'column',
  },
  heroImage: {
    width: undefined,
    height: 250,
  },
  heroDecoration: {
    width: '100%',
    height: 30,
    backgroundColor: WHITE,
  },
  heroOverlay: {
    backgroundColor: BRAND_LIGHT_ONE,
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  heroHeadline: TEXT_LARGE_HEADLINE,
  heroPlace: TEXT_SMALL_HEADLINE,
  heroDate: TEXT_SMALL_HEADLINE
});

export default styles