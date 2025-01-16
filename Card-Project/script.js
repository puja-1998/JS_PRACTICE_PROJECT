const takeDataFromUser = ()=>{
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    if(firstName == null || lastName == null || country == null || isNaN(phoneNumber) || state == null || city == null || village == null){
        alert('Invalid Input')
    }else{
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('country', country);
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('state', state);
        localStorage.setItem('city', city);
        localStorage.setItem('village',village);
        alert('Data Saved Successfully');
    }
}

const renderData = ()=>{
    const arr = ['firstName','lastName','country','phoneNumber','state','city','village'];

    const infoList = document.querySelectorAll('.info');
    infoList.forEach((value, index)=>{
        value.innerHTML = localStorage.getItem(arr[index]);
    })
}

if(!localStorage.getItem('firstName')){
    takeDataFromUser();
}

renderData();
