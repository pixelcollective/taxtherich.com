import axios from 'axios';

let data;

axios.get('https://wp-stasis-tax-the-rich.sfo2.cdn.digitaloceanspaces.com/app-tax-the-rich.json')
.then(response => data = response.data)
.catch(error => data = error);

export default data;