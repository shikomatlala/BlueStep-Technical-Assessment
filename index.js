
class UserHelper {

    constructor(data) {
        this.userData = data;
        console.log(this.userData)
    }

    create() {
        if (!this.userData.valid) {
            return {
                message: "User Data is invalid",
                result: false
            }
        }
        return {
            message: "Created successfully",
            result: true
        }

    }

    save() {
        if (!this.userData.valid) {
            return {
                message: "cannot save invalid user data",
                result: false
            }
        }

        // var http = new XMLHttpRequest();
        // var url = "myfunapi.fake/user/signup";
        // http.open("POST", url, true);
        // http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // http.send(data);

        console.log("User Data Saved", this.userData);
        return {
            message: "saved successfully",
            result: true
        }
    }
}



const colorForInvalidInput = "red";
const colorForValidInput = "green";
const userSignupForm = {};
const userFormValid = {
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    dateOfBirth: false,
    emergencyContactFullName: false,
    emergencyContactPhone: false,
    addressInformationLine1: false,
    addressInformationCity: false,
    addressInformationState: false,
    addressInformationZip: false,
    addressInformationCountry: false,
    emergencyContactRelationship: false
}

function validateFirstName() {
    const firstNameHelpBlock = document.getElementById("firstNameHelpBlock");
    const firstName = document.getElementById("firstName").value;

    if (!validateTextInput(firstName)) {
        firstNameHelpBlock.style.color = colorForInvalidInput;
        firstNameHelpBlock.innerHTML = "Invalid First Name";
    }
    else {
        userSignupForm.firstName = firstName;
        userFormValid.firstName = true;
        firstNameHelpBlock.style.color = colorForValidInput;
        firstNameHelpBlock.innerHTML = "Good";
    }
}

function validateLastName() {
    const lastNameHelpBlock = document.getElementById("lastNameHelpBlock");
    const lastName = document.getElementById("lastName").value;
    if (!validateTextInput(lastName)) {
        lastNameHelpBlock.style.color = colorForInvalidInput;
        lastNameHelpBlock.innerHTML = "Invalid Last Name";
    }
    else {
        userSignupForm.lastName = lastName;
        userFormValid.lastName = true;
        lastNameHelpBlock.style.color = colorForValidInput;
        lastNameHelpBlock.innerHTML = "Good";
    }
}

function validateEmail() {
    const emailHelpBlock = document.getElementById("emailHelpBlock");
    const email = document.getElementById("email").value;

    if (!validateTextInput(email)) {
        emailHelpBlock.style.color = colorForInvalidInput;
        emailHelpBlock.innerHTML = "Invalid Email";
    }
    else {
        userSignupForm.email = email;
        userFormValid.email = true;
        emailHelpBlock.style.color = colorForValidInput;
        emailHelpBlock.innerHTML = "Good";
    }
}

function validatePhone() {

    const phoneHelpBlock = document.getElementById("phoneHelpBlock");
    const validPhonePattern = /[0-9]/
    const phone = document.getElementById("phone").value;
    if (!validateTextInput(phone)) {
        phoneHelpBlock.style.color = colorForInvalidInput;
        phoneHelpBlock.innerHTML = "Invalid Phone";
    }
    else {
        if (!validPhonePattern.test(phone)) {
            phoneHelpBlock.style.color = colorForInvalidInput;
            phoneHelpBlock.innerHTML = "Invalid Phone";
        }
        else {
            userSignupForm.phone = phone;
            userFormValid.phone = true;
            phoneHelpBlock.style.color = colorForValidInput;
            phoneHelpBlock.innerHTML = "Good";
        }

    }
}

function validateAge() {
    const ageHelpBlock = document.getElementById("ageHelpBlock");
    const dateOfBirthHelpBlock = document.getElementById("dateOfBirthHelpBlock");
    const age = document.getElementById("age").value;
    const yearOfBirthAccordingToAge = (new Date().getFullYear()) - age;
    const dateOfBirth = new Date(document.getElementById("dateOfBirth").value);

    if (age.length < 2 || age.length > 3 || age > 199) {
        ageHelpBlock.style.color = colorForInvalidInput;
        ageHelpBlock.innerHTML = "Invalid Age";
    }
    else {
        if (dateOfBirth.getFullYear() != yearOfBirthAccordingToAge) {
            ageHelpBlock.style.color = colorForInvalidInput;
            ageHelpBlock.innerHTML = "Age does not match your date of birth";
            userSignupForm.age = age;
            userFormValid.age = true;
        }
        else {
            userSignupForm.age = age;
            userFormValid.age = true;
            ageHelpBlock.style.color = colorForValidInput;
            ageHelpBlock.innerHTML = "Good";
            dateOfBirthHelpBlock.style.color = colorForValidInput;
            dateOfBirthHelpBlock.innerHTML = "Good";
        }

    }
}

function valiDateDateOfBirth() {
    const dateOfBirthHelpBlock = document.getElementById("dateOfBirthHelpBlock");
    const dateOfBirth = new Date(document.getElementById("dateOfBirth").value);
    const ageHelpBlock = document.getElementById("ageHelpBlock");
    const age = document.getElementById("age").value;
    const yearOfBirthAccordingToAge = (new Date().getFullYear()) - age;
    if (dateOfBirth.getFullYear() != yearOfBirthAccordingToAge) {
        dateOfBirthHelpBlock.style.color = colorForInvalidInput;
        dateOfBirthHelpBlock.innerHTML = "Date of birth does not match your age"
    }
    else {

        userSignupForm.dateOfBirth = dateOfBirth.getFullYear() + "/" + dateOfBirth.getMonth() + "/" + dateOfBirth.getDate();
        ageHelpBlock.style.color = colorForValidInput;
        userFormValid.dateOfBirth = true;
        ageHelpBlock.innerHTML = "Good";
        dateOfBirthHelpBlock.style.color = colorForValidInput;
        dateOfBirthHelpBlock.innerHTML = "Good";
    }
}

function validateEmergencyContactFullName() {
    const emergencyContactFullNameHelpBlock = document.getElementById("emergencyContactFullNameHelpBlock");
    const emergencyContactFullName = document.getElementById("emergencyContactFullName").value;
    if (!validateTextInput(emergencyContactFullName)) {
        emergencyContactFullNameHelpBlock.style.color = colorForInvalidInput;
        emergencyContactFullNameHelpBlock.innerHTML = "Invalid Emergency Contact Full Name";
    }
    else {
        emergencyContactFullNameHelpBlock.style.color = colorForValidInput;
        emergencyContactFullNameHelpBlock.innerHTML = "Good";
        userSignupForm.emergencyContactFullName = emergencyContactFullName;
        userFormValid.emergencyContactFullName = true;

    }
}

function validateEmergencyContactPhone() {
    const emergencyContactPhoneHelpBlock = document.getElementById("emergencyContactPhoneHelpBlock");
    const emergencyContactPhone = document.getElementById("emergencyContactPhone").value;
    if (!validateTextInput(emergencyContactPhone)) {
        emergencyContactPhoneHelpBlock.style.color = colorForInvalidInput;
        emergencyContactPhoneHelpBlock.innerHTML = "Invalid Emergency Contact Phone";
    }
    else {
        emergencyContactPhoneHelpBlock.style.color = colorForValidInput;
        emergencyContactPhoneHelpBlock.innerHTML = "Good";
        userSignupForm.emergencyContactPhone = emergencyContactPhone;
        userFormValid.emergencyContactPhone = true;
    }
}

function validateEmergencyContactRelationship(selectedOption) {
    const emergencyContactRelationshipHelpBlock = document.getElementById("emergencyContactRelationshipHelpBlock");
    const emergencyContactRelationship = selectedOption.value;
    switch (emergencyContactRelationship) 
    {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
            userFormValid.emergencyContactRelationship = true;
        break;
        default:
            userFormValid.emergencyContactRelationship = false;
    }
    
    if(userFormValid.emergencyContactRelationship)
    {
        emergencyContactRelationshipHelpBlock.style.color = colorForValidInput;
        emergencyContactRelationshipHelpBlock.innerHTML = "Good";
        userSignupForm.emergencyContactRelationship = emergencyContactRelationship;
        userFormValid.emergencyContactRelationship = true;

    }
    else
    {
        emergencyContactRelationshipHelpBlock.style.color = colorForInvalidInput;
        emergencyContactRelationshipHelpBlock.innerHTML = "This field is required";
    }

}

function validateAddressInformationLine1() {
    const addressInformationLine1HelpBlock = document.getElementById("addressInformationLine1HelpBlock");
    const addressInformationLine1 = document.getElementById("addressInformationLine1").value;
    if (!validateTextInput(addressInformationLine1)) {
        addressInformationLine1HelpBlock.style.color = colorForInvalidInput;
        addressInformationLine1HelpBlock.innerHTML = "Invalid Address Line 1";
    }
    else {
        addressInformationLine1HelpBlock.style.color = colorForValidInput;
        addressInformationLine1HelpBlock.innerHTML = "Good";
        userSignupForm.addressInformationLine1 = addressInformationLine1;
        userFormValid.addressInformationLine1 = true;


    }
}


function validateAddressInformationLine2() {
    const addressInformationLine2 = document.getElementById("addressInformationLine2").value;
    userSignupForm.addressInformationLine2 = addressInformationLine2;
}


function validateAddressInformationCity() {
    const addressInformationCityHelpBlock = document.getElementById("addressInformationCityHelpBlock");
    const addressInformationCity = document.getElementById("addressInformationCity").value;
    if (!validateTextInput(addressInformationCity)) {
        addressInformationCityHelpBlock.style.color = colorForInvalidInput;
        addressInformationCityHelpBlock.innerHTML = "Invalid City";
    }
    else {
        addressInformationCityHelpBlock.style.color = colorForValidInput;
        addressInformationCityHelpBlock.innerHTML = "Good";
        userSignupForm.addressInformationCity = addressInformationCity;
        userFormValid.addressInformationCity = true;


    }
}

function validateAddressInformationState() {
    const addressInformationStateHelpBlock = document.getElementById("addressInformationStateHelpBlock");
    const addressInformationState = document.getElementById("addressInformationState").value;
    if (!validateTextInput(addressInformationState)) {
        addressInformationStateHelpBlock.style.color = colorForInvalidInput;
        addressInformationStateHelpBlock.innerHTML = "Invalid State";
    }
    else {
        addressInformationStateHelpBlock.style.color = colorForValidInput;
        addressInformationStateHelpBlock.innerHTML = "Good";
        userSignupForm.addressInformationState = addressInformationState;
        userFormValid.addressInformationState = true;


    }
}

function validateAddressInformationZip() {
    const addressInformationZipStateHelpBlock = document.getElementById("addressInformationZipStateHelpBlock");
    const addressInformationZip = document.getElementById("addressInformationZip").value;
    if (!validateTextInput(addressInformationZip)) {
        addressInformationZipStateHelpBlock.style.color = colorForInvalidInput;
        addressInformationZipStateHelpBlock.innerHTML = "Invalid ZIP code";
    }
    else {
        addressInformationZipStateHelpBlock.style.color = colorForValidInput;
        addressInformationZipStateHelpBlock.innerHTML = "Good";
        userSignupForm.addressInformationZip = addressInformationZip;
        userFormValid.addressInformationZip = true;


    }
}

function validateAddressInformationCountry() {
    const addressInformationCountryStateHelpBlock = document.getElementById("addressInformationCountryStateHelpBlock");
    const addressInformationCountry = document.getElementById("addressInformationCountry").value;
    if (!validateTextInput(addressInformationCountry)) {
        addressInformationCountryStateHelpBlock.style.color = colorForInvalidInput;
        addressInformationCountryStateHelpBlock.innerHTML = "Invalid Country";
    }
    else {
        addressInformationCountryStateHelpBlock.style.color = colorForValidInput;
        addressInformationCountryStateHelpBlock.innerHTML = "Good";
        userSignupForm.addressInformationCountry = addressInformationCountry;
        userFormValid.addressInformationCountry = true;
    }
}

function validateTextInput(textInput) {
    if (textInput.length >= 3) {
        return true;
    }
    return false;
}

function isFormValid() {
    var returnResult = true;
    if (!userFormValid.firstName) {
        const firstNameHelpBlock = document.getElementById("firstNameHelpBlock");
        firstNameHelpBlock.style.color = colorForInvalidInput;
        firstNameHelpBlock.innerHTML = "First name is required";
        returnResult = false;
    }
    if (!userFormValid.lastName) {
        const lastNameHelpBlock = document.getElementById("lastNameHelpBlock");
        lastNameHelpBlock.style.color = colorForInvalidInput;
        lastNameHelpBlock.innerHTML = "Last name is required";
        returnResult = false;
    }
    if (!userFormValid.email) {
        const emailHelpBlock = document.getElementById("emailHelpBlock");
        emailHelpBlock.style.color = colorForInvalidInput;
        emailHelpBlock.innerHTML = "Email is required";
        returnResult = false;
    }
    if (!userFormValid.phone) {
        const phoneHelpBlock = document.getElementById("phoneHelpBlock");
        phoneHelpBlock.style.color = colorForInvalidInput;
        phoneHelpBlock.innerHTML = "Phone is required";
        returnResult = false;
    }
    if (!userFormValid.age) {
        const ageHelpBlock = document.getElementById("ageHelpBlock");
        ageHelpBlock.style.color = colorForInvalidInput;
        ageHelpBlock.innerHTML = "Age is required";
        returnResult = false;
    }
    if (!userFormValid.dateOfBirth) {
        const dateOfBirthHelpBlock = document.getElementById("dateOfBirthHelpBlock");
        dateOfBirthHelpBlock.style.color = colorForInvalidInput;
        dateOfBirthHelpBlock.innerHTML = "Date of birth is required";
        returnResult = false;
    }
    if (!userFormValid.emergencyContactFullName) {
        const emergencyContactFullNameHelpBlock = document.getElementById("emergencyContactFullNameHelpBlock");
        emergencyContactFullNameHelpBlock.style.color = colorForInvalidInput;
        emergencyContactFullNameHelpBlock.innerHTML = "Emergency contact full name is required";
        returnResult = false;
    }
    if (!userFormValid.emergencyContactPhone) {
        const emergencyContactPhoneHelpBlock = document.getElementById("emergencyContactPhoneHelpBlock");
        emergencyContactPhoneHelpBlock.style.color = colorForInvalidInput;
        emergencyContactPhoneHelpBlock.innerHTML = "Emergency Contact Phone is required";
        returnResult = false;
    }
    if(!userFormValid.emergencyContactRelationship)
    {
        const emergencyContactRelationshipHelpBlock = document.getElementById("emergencyContactRelationshipHelpBlock");
        emergencyContactRelationshipHelpBlock.style.color = colorForInvalidInput;
        emergencyContactRelationshipHelpBlock.innerHTML = "This field is required";
        returnResult = false;
    }
    if (!userFormValid.addressInformationLine1) {
        const addressInformationLine1HelpBlock = document.getElementById("addressInformationLine1HelpBlock");
        addressInformationLine1HelpBlock.style.color = colorForInvalidInput;
        addressInformationLine1HelpBlock.innerHTML = "Address Line 1 is required";
        returnResult = false;
    }
    if (!userFormValid.addressInformationCity) {
        const addressInformationCityHelpBlock = document.getElementById("addressInformationCityHelpBlock");
        addressInformationCityHelpBlock.style.color = colorForInvalidInput;
        addressInformationCityHelpBlock.innerHTML = "City is required";
        returnResult = false;
    }
    if (!userFormValid.addressInformationState) {
        const addressInformationStateHelpBlock = document.getElementById("addressInformationStateHelpBlock");
        addressInformationStateHelpBlock.style.color = colorForInvalidInput;
        addressInformationStateHelpBlock.innerHTML = "State is required";
        returnResult = false;
    }
    if (!userFormValid.addressInformationZip) {
        const addressInformationZipStateHelpBlock = document.getElementById("addressInformationZipStateHelpBlock");
        addressInformationZipStateHelpBlock.style.color = colorForInvalidInput;
        addressInformationZipStateHelpBlock.innerHTML = "ZIP code is required";
        returnResult = false;
    }
    if (!userFormValid.addressInformationCountry) {
        const addressInformationCountryStateHelpBlock = document.getElementById("addressInformationCountryStateHelpBlock");
        addressInformationCountryStateHelpBlock.style.color = colorForInvalidInput;
        addressInformationCountryStateHelpBlock.innerHTML = "Country is required";
        returnResult = false;
    }
    return returnResult;
}

function submitForm() {
    /**
     * During reading form the assessment guide I could not fully understand how to implement this part.
     * The following points explain what I am attempting to do here.
     * (1) Declare and Instantiate a class called UserHelper 
     *      (a) The class receives a userSignupForm on declaration
     * (2) Use the create() method, a member of the UserHelper class to create userSignup
     *      (a) The create method returns a result set with message (string) and result (boolean)
     *      (b) User the result set to determine whether we can save the data to the database
     * (3) User the save() method to save the data to the database
     */
    if (!isFormValid()) {
        alert("Please fill all required fields");
    }
    else {
        //Now I need to get the members information from the database and I have to take that information and paste it to this table.
        userSignupForm.valid = true;
        const userHelper = new UserHelper(userSignupForm);
        const createResult = userHelper.create();
        if (!createResult.result) {
            alert(createResult.message);
        }
        else {
            let saveResult = userHelper.save();
            alert(saveResult.message);

        }
    }
}
