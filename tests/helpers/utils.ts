
const MailosaurClient = require("mailosaur");
import * as fs from 'fs';
import * as path from 'path';


export function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function generateMobileNumber(): string {
    return '9' + Math.floor(100000000 + Math.random() * 900000000).toString(); // Ensures a 10-digit number starting with 9
}

export async function generateRandomName(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return  await result;
}

export async function genrateCreds(){
     const mailosaur = new MailosaurClient("NNt5I6KE4csjktCTgobhj0ZDCXUFOg8V");
    // const message = await mailosaur.messages.get('8fbyp3hq', {
    //     sentTo: 'my-test@SERVER_ID.mailosaur.net'
    //   });

    const emailAddress = await mailosaur.servers.generateEmailAddress("8fbyp3hq");
    const password = generateRandomString(12);

    const credentials = {
        email: emailAddress,
        password: password
    };

    // const filePath = path.join(__dirname, 'credentials.json');
    const filePath = path.join(process.cwd(), 'credentials.json');
    fs.writeFileSync(filePath, JSON.stringify(credentials, null, 2));
    console.log(`Credentials saved to ${filePath}`);   
}