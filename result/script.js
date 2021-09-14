//HTML ELEMENTS SELECTION
let submitBtn = document.querySelector("#submit-btn");
let displayResult = document.querySelector("#display-result");
let displayTotalMarks = document.querySelector("#total-marks");
let displayGrade = document.querySelector("#Grade");

//ADD EVENT LISTNER WITH CLICK
submitBtn.addEventListener("click", function(e){
  e.preventDefault();

  // COLLECT VALUES FROM INPUTS
  let bangla = parseInt(document.querySelector("#bangla").value);
  let english = parseInt(document.querySelector("#english").value);
  let math = parseInt(document.querySelector("#math").value);
  let science = parseInt(document.querySelector("#science").value);
  let religion = parseInt(document.querySelector("#religion").value);

  // CHECK IF ANY VALUE IS INVALID
  if(isNaN(bangla) || isNaN(english) || isNaN(math) || isNaN(science) || isNaN(religion)){
    alert(`Please fill all the fields.`)
  }
  else{
    //CHECK NUMBER BETWEEN 0 - 100
    let checkInv=(number)=>{
      if(number>100 || number<0){
        alert("Invalid number. Please enter number between 0-100.");
      }else{
        return number;
      }
    }
    //CHECK ALL THE SUBJECT VALUE AND STORE IT IN A NEW VARIABLE
    let mBangla = checkInv(bangla);
    let mEnglish = checkInv(english);
    let mMath = checkInv(math);
    let mScience = checkInv(science);
    let mReligion = checkInv(religion);

    //CREATE ARRAYS 
    let allSubject = [mBangla, mEnglish, mMath, mScience, mReligion];
    let SubjectsName = ["Bangla", "English", "Math", "Science", "Religion"];

    //CHECK GRADE 
    var checkGrade = (num)=>{
      if(num>=80){
        return "A+";
      }else if(num>=70){
      return "A"
      }
      else if(num>=60){
      return "A-"
      }
      else if(num>=50){
        return "B"
      }
      else if(num>=40){
        return "C"
      }
      else if(num>=33){
        return "D"
      }else{
        return "Fail"
      }
    }

    //CHECK GRADE AND STORE IN A NEW VARIABLES 
    let rBangla = checkGrade(mBangla);
    let rEnglish = checkGrade(mEnglish);
    let rMath = checkGrade(mMath);
    let rScience = checkGrade(mScience);
    let rReligion = checkGrade(mReligion);

    let subjectGrades = [rBangla, rEnglish, rMath, rScience, rReligion]

    // CREATE TABLE, TABLE ELEMENTS AND PUSH VALUE
    for(i=0;i<allSubject.length;i++){

      let tableRow = document.createElement("tr");

      let subjectsName  = document.createElement("td");
      subjectsName.innerHTML= SubjectsName[i];
      tableRow.appendChild(subjectsName);

      let subjectMarks  = document.createElement("td");
      subjectMarks.innerHTML= allSubject[i];
      tableRow.appendChild(subjectMarks);

      let subjectGrade  = document.createElement("td");
      subjectGrade.innerHTML= subjectGrades[i];
      tableRow.appendChild(subjectGrade);

      displayResult.appendChild(tableRow);

      //CALCULATE TOTAL MARKS
      totalMarks = mBangla + mEnglish + mMath + mScience + mReligion;
      displayTotalMarks.innerHTML= totalMarks;
      
      //CALCULATE AVERAGE
      let avgMarks = totalMarks/allSubject.length;
      
      //CHECK FINAL RESULT
      if(mBangla<33 || mEnglish<33 || mMath<33 || mScience<33 || mReligion<33 ){
        var grade = "Fail";
      }else{
        grade = checkGrade(avgMarks);
      }
    
      displayGrade.innerHTML= grade;
    }
  }

})

