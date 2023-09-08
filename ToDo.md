## Todo for CyberSecurity

- Incorporate Recaptcha into the ```homePage``` to ensure the user is not a bot
- Encrypt the quiz data using AES and and external library 
    - This will need the ```crypto``` module for javascript
    - Create a new folder called Encryption and two new files:
        - Encrypt.js
        - Decrypt.js
    - Use the module and encrypt files to create a new file: encrypedArraysQuizData in json format
        - x3 for each data file
    - When the data is retrieved use the Dycrypt file funciton in the quizQuestions.js file
- Testing: Thoroughly test your encryption and decryption processes to make sure they work as expected.
- ReCAPTCHA Integration: Ensure that your reCAPTCHA integration on the homepage is user-friendly and provides clear instructions for users to verify themselves.
    - Have a temp homeScreen render? 