const initialUserState = {
    userID: "",
    username: "",
    imageURI: ""
}

export const UserDataReducer = (state = initialUserState, action) =>{
    switch (action.type){
        case "USER_ID":
            return {...state, userID: action.payload};
            break;

        case "USER_NAME":
            return {...state, username: action.payload}
            break;

        case "IMAGE_URI":
            return {...state, imageURI: action.payload}
            break;

        default:
            return state;
    }
}



const initialSubjectState = {
    subjects: [
        {subject: 'Data Science', topics: ["Python", "SQL", "R", "Excel", "Tableu", "Big Data", "TensorFlow", "MATLAB", "Deep Learning", "Machine Learning", "Artificial Intelligence", "Statistics", "IBM"]}, 
        {subject: 'Business', topics: ["Short Guided Projects in Business", "Leadership and Management", "Finance", "Marketing", "Entrepreneurship", "Business Essentials", "Business Strategy"]}, 
        {subject:'Computer Science', topics: ["Java", "C++", "Javascript", "Blockchain", "Linux", "Agile", "IOT", "Scala", "HTML", "Data Structures"]}, 
        {subject:'Information Technology', topics: ["Cybersecurity", "AWS", "SAP", "Google Cloud", "Google"]}, 
        {subject:'Language Learning', topics: ["Learning English", "Other Languages"]}, 
        {subject:'Health', topics: ["Animal Health", "Basic Science", "Health Informatics", "Healthcare Management", "Nutrition", "Patient Care", "Public Health", "Research", "Psychology"]}, 
        {subject:'Personal Development', topics: []}, 
        {subject:'Physical Science and Engineering', topics: ["Electrical Engineering", "Mechanical Engineering", "Chemistry", "Environmental Science and Sustainability", "Physics and Astronomy", "Research Methods"]}, 
        {subject:'Social Sciences', topics: ["Economics", "Education", "Law", "Governance and Society"]}, 
        {subject:'Arts and Humanities', topics: ["History", "Music and Arts", "Philosophy"]}, 
        {subject:'Math and Logic', topics: []}
    ]
}

export const SubjectDataReducer = (state=initialSubjectState, action) =>{
    switch(action.type){
        default:
            return state;
    }
}