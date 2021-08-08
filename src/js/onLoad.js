import { changeHeader } from "./headerNav"
import { debounce } from 'throttle-debounce';
import { consts } from "./consts";
import { onSearchBoxChange, onSearchBoxFocus } from "./searchBox"
import { onWatchedButtonClick, onQueueButtonClick } from "./libraryButtons"
import { onSearchButtonClick } from "./searchButton"

// функция по загрузке
export const onLoad = refs => {
    changeHeader('HOME', refs.headerDivToChange)
}


export const loadListnersForHome = (refs) => {
  //добавление обработчика событий инпута
    refs.searchBox.addEventListener('input',
        debounce(consts.DEBOUNCE_DELAY, (e) => {
        onSearchBoxChange(e); //from "./js/searchBox" все что происходит во время ввода + debounce
    }))
  
    refs.searchBox.addEventListener('focus', e => {
        onSearchBoxFocus(e); //from "./js/searchBox" все что происходит во время получения фокуса
    });
    
    //добавление обработчика событий кнопки поиска
    refs.searchButton.addEventListener('click', e => {
        e.preventDefault;
        onSearchButtonClick(e); //from "./js/searchButton" все что происходит во время клика по кнопке поиск
    });
}

export const removeListnersForHome = (refs) => {
  //удаление обработчика событий с инпута
    if (refs.searchBox) {
        refs.searchBox.removeEventListener('input',
            debounce(consts.DEBOUNCE_DELAY, (e) => {
                onSearchBoxChange(e);
            }))
        
        refs.searchBox.removeEventListener('focus', e => {
              onSearchBoxFocus(e); 
        });
                console.log("удаление3");
    }
        //удаление обработчика событий кнопки поиска
    console.log(refs.searchButton);
    if (refs.searchButton) {
        refs.searchButton.removeEventListener('click', e => {
            e.preventDefault;
            onSearchButtonClick(e);
        });
                console.log("удаление4");
    }
}

export const loadListnersForMyLibrary = (refs) => {
      // добавление обработчиков на кнопки WATCHED и QUEUE
        refs.watchedBtn.addEventListener('click', e => {
            e.preventDefault;
            onWatchedButtonClick(e);
        });
        refs.queueBtn.addEventListener('click', e => {
            e.preventDefault;
            onQueueButtonClick(e);
        });
}

export const removeListnersForMyLibrary = (refs) => {
      //удаление обработчиков на кнопки WATCHED и QUEUE
    if (refs.watchedBtn) {
        refs.watchedBtn.removeEventListener('click', e => {
            e.preventDefault;
            onWatchedButtonClick(e);
        });
        refs.queueBtn.removeEventListener('click', e => {
            e.preventDefault;
            onQueueButtonClick(e);
        });
    }
}