function submitCustomerForm(){

    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');
    
    let brmFormData = {
        'fname' : fname.value,
        'lname' : lname.value,
        'email' : email.value,
        'phone' : phone.value,
        'message' : message.value
    }
    fname.value='';lname.value='';email.value='';phone.value='';message.value='';
    
    
    handleSubmitCustomerForm(brmFormData);
}

let contactModalBodyElem = document.getElementById('contactModalBody');

async function handleSubmitCustomerForm(brmFormData) {
    const url = `${host}/brm-contact-form`
    
    var xhr = $.post(url, brmFormData, function(){
        console.log('connecting to brm messaging');
        document.getElementById('brmContactBtnSubmit').innerHTML = `
        
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Loading...</span>
        `
    })
        xhr.done(function(data){
            contactModalBodyElem.innerHTML = htmlFormBody();
            brmToast('Your message has been sent! Someone will be with you shortly.')
        })
        xhr.fail(function(error){
            console.log(error.statusText)
            brmToast('Oops! Something happened and your message was not sent. Please try again!')
        })
}


function brmToast(message){
    let d = new Date();
    let date = ((d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear());
    let hour = d.getHours();
    let ap = 'AM'; 
    let fHour;
    if (hour > 12) { fHour = hour - 12; ap = 'PM'  }

    let edittedTime = `${fHour}:${d.getMinutes()}${ap}`;
    let html = `
    
        <div class="toast-container top-50 start-50 translate-middle bg-light rounded mt-1">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="/favicon.ico" class="rounded me-2" alt="BRM" width="40">
                <strong class="me-auto">BRM</strong>
                <small>${date} @ ${edittedTime}</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
        </div> 
    
    `;

    document.getElementById('bottom').innerHTML += html;
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
}
function htmlFormBody(){
    return `
     
          <div class="container-fluid p-3 bg-light-main rounded shadow mx-auto">
            

              <div class="contact-image text-center w-100 bg-main rounded p-2">
                <img src="assets/images/logos/brm-logo-wide.png" alt="brm" width="135" class="img-fluid rounded"/>
                <h3 class="mt-2 text-light">Drop Us a Message</h3>
              </div>
              
              <form action="/contact-brm">

                <div class="row mt-3">
                  <div class="form-group col-12 col-sm-6">
                    <label for="fname">First Name</label>
                    <input type="fname" class="form-control" id="fname" name="fname">
                  </div>
    
                  <div class="form-group col-12 col-sm-6">
                    <label for="lname">Last Name</label>
                    <input type="lname" class="form-control" id="lname" name="lname">
                  </div>
                </div>

                <div class="row">
                  <div class="form-group col-12 col-sm-6">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email">
                  </div>
    
                  <div class="form-group col-12 col-sm-6">
                    <label for="phone">Phone</label>
                    <input type="phone" class="form-control" id="phone" name="phone">
                  </div>
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea class="form-control" id="message" rows="4"></textarea>
                </div>

              </form>
 

          </div>

        </div>
    `
}
