let apiBlogApi = new TempApi.BlogApi();import TempApi from '../src/index';window.onload = () => {apiBlogApi.getAllblog((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("iohtd").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'title']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[i].title;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'stext']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[i].stext;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'deletepost']");
        if(insideSubDataElement !== null){
          insideSubDataElement.undefined = data[i].deletepost;
        }
       } catch (e) { console.log(e) };
      }
    });
    [...subDataElements].forEach((element,index) => {if(index > data.length) subDataElements[index].remove()})}});};document.getElementById('idmz4').onclick = () => {let blogId = window.location.pathname.replace('/Page3/','');apiBlogApi.deleteblog( blogId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};