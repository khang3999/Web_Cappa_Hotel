import axios from 'axios';
window.axios = axios;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
