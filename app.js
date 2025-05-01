let students = []
let srNo = 1;

let saveBtn = document.querySelector('.saveBtn')
let resetBtn = document.querySelector('.resetBtn')
    
const displayStudents =(student = null)=>{
    let tbody = document.querySelector('.studentList') 
    if(student){
        console.log('if chal raha he ')
        let row= document.createElement('tr');
        let data1 = document.createElement('td')
        data1.textContent =student.srNo
        row.appendChild(data1)
        let data2 = document.createElement('td')
        data2.textContent = student.fullName
        row.appendChild(data2)
        let data3= document.createElement('td')
        data3.textContent = student.rollNo
        row.appendChild(data3)
        let data4 = document.createElement('td')
        data4.textContent = student.address
        row.appendChild(data4)
        let data5 = document.createElement('td')
        data5.textContent = student.birthDate
        row.appendChild(data5)
        let data6 = document.createElement('td')
        data6.textContent = student.email
        row.appendChild(data6)
        let data7 = document.createElement('td')
        data7.textContent = student.mobile
        row.appendChild(data7)
        let data8= document.createElement('td')
        data8.textContent = student.gender
        row.appendChild(data8)
        tbody.append(row)
    }
    else{
        console.log(' if nahi ')
        tbody.innerHTML = "";
        if (students.length=== 0 ) {
            let row = document.createElement('tr')
            let msgData = document.createElement('td')
            msgData.colSpan =8 
            msgData.textContent ='No Data Found'
            msgData.style.textAlign= 'center'
            row.appendChild(msgData)
            tbody.appendChild(row);
    }  else {
        for(let i =0 ; i <students.length; i++){
            let  student=students[i];
    let row= document.createElement('tr');
     let data1 = document.createElement('td')
     data1.textContent =student.srNo
     row.appendChild(data1)
     let data2 = document.createElement('td')
     data2.textContent = student.fullName
     row.appendChild(data2)
     let data3= document.createElement('td')
     data3.textContent = student.rollNo
     row.appendChild(data3)
     let data4 = document.createElement('td')
     data4.textContent = student.address
     row.appendChild(data4)
     let data5 = document.createElement('td')
     data5.textContent = student.birthDate
     row.appendChild(data5)
     let data6 = document.createElement('td')
     data6.textContent = student.email
     row.appendChild(data6)
     let data7 = document.createElement('td')
     data7.textContent = student.mobile
     row.appendChild(data7)
     let data8= document.createElement('td')
     data8.textContent = student.gender
     row.appendChild(data8)
     tbody.append(row)
     }
    }
}
}

const saveInfo = ()=>{
let fullName = document.querySelector("#name").value
let rollNo = document.querySelector('#rollNo').value
let address = document.querySelector('#address').value
let birthDate = document.querySelector('#birthDate').value
let email = document.querySelector('#email').value
let mobile= document.querySelector('#mobile').value
    let genders = document.querySelectorAll('input[name="gender"]')
    let gender = ""
     genders.forEach(input =>{
        if(input.checked){
        gender = input.value
        }
     })
    if (fullName=="" ||  rollNo == "" || address =="" ||birthDate=="" ){
        alert('Please fill all the required field !')
    } if (!email.includes("@")){
        alert('Please enter a valid email ID !')
    } if (mobile.length !==10){
        alert('Please enter a valid 10-digit mobile !')
    } if(gender == ""){
        alert('Please select a gender')
    }
    
     let student = {
        srNo,fullName, rollNo, address,birthDate, email,mobile,gender
    }
    students.push(student) 
    srNo++;

   let tbody = document.querySelector('.studentList')
   if(tbody.innerHTML.includes('No Data Found')){
    tbody.innerHTML=""
   }
    displayStudents();
   
   resetForm();
alert('Data added')
}
const resetForm =()=>{
document.querySelector("#name").value = ""
document.querySelector('#rollNo').value =""
document.querySelector('#address').value=""
document.querySelector('#birthDate').value=""
document.querySelector('#email').value=""
document.querySelector('#mobile').value=""
document.querySelector('input[name="gender"][value="Male"]').checked =true;
}
saveBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    saveInfo();
        
})
resetBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    resetForm();
})

document.addEventListener('DOMContentLoaded', ()=>{
    displayStudents();
})