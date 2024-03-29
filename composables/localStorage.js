import DICTIONARY from '../dictionaries/dictionary'

export const useLocalStorage = (language) => {
  localStorage.setItem('currentLanguage', language)
  if (!localStorage.getItem(`dictionary-${language}`)) {
    localStorage.setItem(`dictionary-${language}`, JSON.stringify(DICTIONARY[language]))
  }
}
