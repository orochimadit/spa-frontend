import store from "./store";

let currentAuth;
function listener(){
    //nilai variabel previousAuth dan berikan currentAUth sebagai nilai
    let previousAuth = currentAuth;
    //update nilai currentAUth dari nilai state terbaru
    currentAuth = store.getState().auth;

    if(currentAuth !== previousAuth){

        //jika berubah simpan ke local storage
        localStorage.setItem('auth',JSON.stringify(currentAuth));
    }
}
function listen(){

    store.subscribe(listener);
}

export {listen}