 const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const num = '0123456789';
 const symbols = '!@#$%^&*()_+-=<>?'
 export const createPassword = (length, hasNumbers, hasSymbols ) => {
     let chars = alpha;
     chars += hasNumbers? num: '';
     chars += hasSymbols? symbols: '';

     let password = '';

     for(let i=0; i<length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
     }
     
     return password;
 }