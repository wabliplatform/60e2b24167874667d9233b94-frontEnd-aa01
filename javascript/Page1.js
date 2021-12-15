let apiBlogApi = new TempApi.BlogApi();import TempApi from '../src/index';window.onload = () => {apiBlogApi.getAllblog((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("i0g5s").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements);
      }
    });
    [...subDataElements].forEach((element,index) => {if(index > data.length) subDataElements[index].remove()})}});};