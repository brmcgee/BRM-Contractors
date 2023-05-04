/* <script src="https://www.brmcontractors.net/js/brmData.js" type="text/javascript"></script>  */

// document.addEventListener("DOMContentLoaded", () => {
//   records = data;
// });

const renderRecordToDisplayCard = function (index) {
  let blog = records[index];
  let blogImage1 = blog.img1;
  let blogImage2 = blog.img2;

  (!blog.img1.includes("http")) ? blogImage1 = `https://www.brmcontractors.net/${blog.img1}` : blogImage1 = blog.img1;
  (!blog.img2.includes("http")) ? blogImage2 = `https://www.brmcontractors.net/${blog.img2}` : blogImage2 = blog.img2;

   let html = `
   
   <div class="card shadow-lg bg-light border border-dark col-sm-12 col-lg-7" style="min-width:auto; width:42rem; margin: 2rem auto;">
     <div class="flex-row-reverse row g-0">
       <div class="col-md-4 mx-auto ps-2">
         <small class="badge bg-dark text-light fs-6">Blog ID ${blog.id}</small> <br>
         <img src="${blogImage1}" class="img-fluid rounded-start mt-3" alt="${blog.title}" style="width:190px;height:200px;">
           <a href="${blogImage1}" class="btn btn-sm btn-secondary m-1">Img 1</a> <br>
         <img src="${blogImage2}" class="img-fluid rounded-start mt-3" alt="${blog.title}" style="width:190px;height:200px;">
         <a href="${blogImage2}" class="btn btn-sm btn-secondary m-1">Img 2</a>
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h3 class="card-title">${blog.title}</h3>
             <p class="fs-3 badge bg-dark text-light p-2">${blog.category}</p>
           <p class="card-text">What an awesome transformation on this house. We installed new vinyl siding, soffit and fascia, window wraps and more. This is a 2-story company house so its tall. We handle steep and tall - so give us a call.     </p>
           <p class="card-text">
           <img src="${blog.avatar}" class="img-fluid mx-auto d-block shadow-xl" alt="Profile Picture" style="width:80px;height:80px;border-radius:50%;">
             </p><p class="text-center">${blog.author}<br>
               <small>${blog.date}</small> <br>
               <small>${blog.purpose} / </small>
               <small>${blog.project}</small>               
             </p> 
         </div>
       </div>
     </div>
   </div>
   
   `;
   displayCard.innerHTML += html;
};


const getOptions = function(key, elemID) {
  let elem;
  let parent = document.getElementById(elemID);
  let valueArray = [];
  let el = document.createElement('option');

  for(let x = 0; x < records.length; x++){
    let keyValue = records[x][key].trim();
    
      el.value = ' ';
      el.innerHTML = ' ';
      parent.appendChild(el);

    if (!valueArray.includes(keyValue)) {
      let elem = document.createElement('option');
      elem.value = keyValue;
      elem.innerHTML = keyValue;
      parent.appendChild(elem);
      valueArray.push(keyValue);
    }
  };
  parent.addEventListener('input', () => {
    searchSelectedKey(elemID, key);
  })
};


const searchSelectedKey = function (elemID, key) {
  clearDisplayCard();
  let selectValue = document.getElementById(elemID).value;
  let filteredSelectValue = selectValue.toLowerCase();
  
  records.forEach((record, index) => {

      let query = record[key];
      let filteredQuery = query.toLowerCase();

      if (filteredQuery.trim() === filteredSelectValue.trim()) {
        renderRecordToDisplayCard(index);
      }
  });

   let selects = document.querySelectorAll('select')
   selects.forEach(i => {
    i.addEventListener('mousedown',clearOptions);
   })   
   
};



const clearDisplayCard = function() {
  displayCard.innerHTML = "";
};

const clearOptions = function () {
  let options = document.querySelectorAll('option');

  options.forEach(x => {
    x.remove();
  });

  loadAllSelectOptions();
}


function loadAllSelectOptions(){
  getOptions('category', 'selectCategory');
  getOptions('title', 'selectTitle');
  getOptions('author', 'selectAuthor');
  getOptions('project', 'selectProject');
  
}




// render menu select options from db 
document.addEventListener("DOMContentLoaded", loadAllSelectOptions);
