let apiBlogApi = new TempApi.BlogApi();import TempApi from '../src/index';window.onload = () => {apiBlogApi.getAllblog((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("itsog").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'image']");
        if(insideSubDataElement !== null){
          insideSubDataElement.undefined = data[i].image;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'date']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[i].date;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'title']");
        if(insideSubDataElement !== null){
          insideSubDataElement.undefined = data[i].title;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'stext']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[i].stext;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'getapost']");
        if(insideSubDataElement !== null){
          insideSubDataElement.undefined = data[i].getapost;
        }
       } catch (e) { console.log(e) };
      }
    });
    [...subDataElements].forEach((element,index) => {if(index > data.length) subDataElements[index].remove()})}});};document.getElementById('ifg92').onclick = () => {{ location.href= '/Page2';}};window.onload = () => {let blogId = window.location.pathname.replace('/Page1/','');apiBlogApi.getblog( blogId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = date]').textContent = response.body.query.date ;document.querySelector('[annotationname = stext]').textContent = response.body.query.stext ;}});};document.getElementById('i1zgq').onclick = () => {{ location.href= '/Page2';}};window.onload = () => {let blogId = window.location.pathname.replace('/Page1/','');apiBlogApi.getblog( blogId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = date]').textContent = response.body.query.date ;document.querySelector('[annotationname = stext]').textContent = response.body.query.stext ;}});};document.getElementById('ieznf').onclick = () => {{ location.href= '/Page2';}};window.onload = () => {let blogId = window.location.pathname.replace('/Page1/','');apiBlogApi.getblog( blogId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = date]').textContent = response.body.query.date ;document.querySelector('[annotationname = stext]').textContent = response.body.query.stext ;}});};document.getElementById('itdix').onclick = () => {{ location.href= '/Page2';}};window.onload = () => {let blogId = window.location.pathname.replace('/Page1/','');apiBlogApi.getblog( blogId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = date]').textContent = response.body.query.date ;document.querySelector('[annotationname = stext]').textContent = response.body.query.stext ;}});};document.getElementById('iwghm').onclick = () => {{ location.href= '/Page2';}};window.onload = () => {let blogId = window.location.pathname.replace('/Page1/','');apiBlogApi.getblog( blogId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = date]').textContent = response.body.query.date ;document.querySelector('[annotationname = stext]').textContent = response.body.query.stext ;}});};