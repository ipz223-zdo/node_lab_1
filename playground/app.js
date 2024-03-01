const user = require('./user');

const command = process.argv[2];

switch (command) {
    case 'add':
        const addArgs = process.argv.slice(3);
        const addLanguageData = {};
        addArgs.forEach(arg => {
            const [key, value] = arg.split('=');
            addLanguageData[key.substring(2)] = value;
        });
        user.addLanguage(addLanguageData.title, addLanguageData.level);
        break;

    case 'remove':
        const removeArgs = process.argv.slice(3);
        const removeLanguageData = {};
        removeArgs.forEach(arg => {
            const [key, value] = arg.split('=');
            removeLanguageData[key.substring(2)] = value;
        });
        user.removeLanguage(removeLanguageData.title);
        break;

    case 'list':
        user.listLanguages();
        break;

    case 'read':
        const readArgs = process.argv.slice(3);
        const readLanguageData = {};
        readArgs.forEach(arg => {
            const [key, value] = arg.split('=');
            readLanguageData[key.substring(2)] = value;
        });
        user.readLanguage(readLanguageData.title);
        break;

    default:
        console.log('Invalid command. Use "add", "remove", "list", or "read".');
}

// node playground\app.js add --title="" --level=""
// node playground\app.js remove --title=""
// node playground\app.js list
// node playground\app.js read --title=""