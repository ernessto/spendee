import Backendless from 'backendless';

const api = Backendless;
const APP_ID = 'FAE97082-AB1C-54D6-FF15-ABFB960BFD00';
const API_KEY = 'CB2B3C33-4B35-4185-FFFC-410668BA8E00';
api.serverURL = 'https://api.backendless.com';
api.initApp(APP_ID, API_KEY);

export default api;