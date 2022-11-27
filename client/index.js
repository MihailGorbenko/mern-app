const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const registerButton = document.querySelector('#registerButton')


registerButton.addEventListener('click', async () => {
    const email = emailInput.value 
    const password = passwordInput.value

    let user = {
        email : email,
        password: password
    }

    
       let response = await fetch('/api/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

    })
