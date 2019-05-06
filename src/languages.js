export const languages = [
    {
       "value":"en",
       "text":"Английский"
    },
    {
      "value":"ru",
      "text":"Русский"
    },
    {
       "value":"ar",
       "text":"Арабский" 
    },
    {
       "value":"es",
       "text":"Испанский" 
    },
    {
       "value":"kk",
       "text":"Казахский" 
    },
    {
       "value":"zh",
       "text":"Китайский" 
    },
    {
       "value":"ko",
       "text":"Корейский" 
    },
    {
       "value":"de",
       "text":"Немецкий" 
    },
    {
       "value":"pl",
       "text":"Польский" 
    },
    {
       "value":"pt",
       "text":"Португальский" 
    },
    {
       "value":"tr",
       "text":"Турецкий" 
    },
    {
       "value":"uk",
       "text":"Украинский" 
    },
    {
       "value":"fr",
       "text":"Французский" 
    },
    {
       "value":"hi",
       "text":"Хинди" 
    },
    {
       "value":"ja",
       "text":"Японский"
    }
 ]

export function checkLanguageAvailability(lang) {
   let flag = false
   for (let i = 0; i < languages.length; i++) {
      if (languages[i].value === lang) {
         flag = true
         break
      }
   }
   return flag
}
