const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// {
//     uid: -1,
//     gid: -1,
//     username: 'SY',
//     homedir: 'C:\\Users\\SY',
//     shell: null
// }


// method returns the system uptime in seconds

console.log(`uptime of system is ${os.uptime()}s`);

// uptime of system is 7873.109s

const currentOS = {
    name: os.type(),
    release: os.release(),
    total_memory: os.totalmem(),
    free_memory: os.freemem()
}

console.log(currentOS);

// {
//     name: 'Windows_NT',
//     release: '10.0.22631',
//     total_memory: 16893382656,
//     free_memory: 4682801152
// }

