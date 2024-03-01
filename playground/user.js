const fs = require('fs');

const getUserData = () => {
    const userData = fs.readFileSync('playground/user.json', 'utf8');
    return JSON.parse(userData);
};

const saveUserData = (userData) => {
    fs.writeFileSync('playground/user.json', JSON.stringify(userData, null, 2));
};

const addLanguage = (title, level) => {
    const userData = getUserData();
    const newLanguage = { title, level };
    userData.languages.push(newLanguage);
    saveUserData(userData);
    console.log(`Language "${title}" added successfully.`);
};

const removeLanguage = (title) => {
    const userData = getUserData();
    userData.languages = userData.languages.filter(lang => lang.title !== title);
    saveUserData(userData);
    console.log(`Language "${title}" removed successfully.`);
};

const listLanguages = () => {
    const userData = getUserData();
    console.log('User Languages:');
    userData.languages.forEach(lang => {
        console.log(`- ${lang.title} (${lang.level})`);
    });
};

const readLanguage = (title) => {
    const userData = getUserData();
    const language = userData.languages.find(lang => lang.title === title);
    if (language) {
        console.log(`Language "${title}": ${language.level}`);
    } else {
        console.log(`Language "${title}" not found.`);
    }
};

module.exports = { addLanguage, removeLanguage, listLanguages, readLanguage };
