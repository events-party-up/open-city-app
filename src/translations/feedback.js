import LocalizedStrings from 'react-native-localization';

export default new LocalizedStrings({
  en:{
    feedbackViewTitle: 'Give feedback',
    category: 'Category',
    inputTitlePlaceholder: 'Title',
    inputContentPlaceholder: 'Feedback (minimum of 10 characters)',
    imagePickerTitle: '',
    imagePickerPictureButton: 'Take picture',
    imagePickerLibraryButton: 'Choose picture from library',
    imagePickerCancelButton: 'Cancel',
    feedbackSent: 'Your feedback has been sent, thank you'
  },
  fi: {
    feedbackViewTitle: 'Uusi palaute',
    category: 'Kategoria',
    inputTitlePlaceholder: 'Otsikko',
    inputContentPlaceholder: 'Anna kaupungille kehitysehdotus tai palaute (vähintään 10 merkkiä)',
    imagePickerTitle: '',
    imagePickerPictureButton: 'Ota kuva',
    imagePickerLibraryButton: 'Valitse kuva kirjastosta',
    imagePickerCancelButton: 'Peruuta',
    feedbackSent: 'Palaute lähetetty onnistuneesti, kiitos'
  }
});
