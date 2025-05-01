
let tbody = document.querySelector('.studentList')

let students = []
let srNo = 1;

let saveBtn = document.querySelector('.saveBtn')
let resetBtn = document.querySelector('.resetBtn')
    

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

    let row= document.createElement('tr');

     let data1 = document.createElement('td')
     data1.textContent = srNo
     row.appendChild(data1)
     let data2 = document.createElement('td')
     data2.textContent = fullName
     row.appendChild(data2)
     let data3= document.createElement('td')
     data3.textContent = rollNo
     row.appendChild(data3)
     let data4 = document.createElement('td')
     data4.textContent = address
     row.appendChild(data4)
     let data5 = document.createElement('td')
     data5.textContent = birthDate
     row.appendChild(data5)
     let data6 = document.createElement('td')
     data6.textContent = email
     row.appendChild(data6)
     let data7 = document.createElement('td')
     data7.textContent = mobile
     row.appendChild(data7)
     let data8= document.createElement('td')
     data8.textContent = gender
     row.appendChild(data8)
     
    tbody.append(row)
    srNo++;

    
     
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
    document.querySelector("#name").value = ""
    document.querySelector('#rollNo').value =""
    document.querySelector('#address').value=""
    document.querySelector('#birthDate').value=""
    document.querySelector('#email').value=""
    document.querySelector('#mobile').value=""
        
})
resetBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    resetForm();
})

