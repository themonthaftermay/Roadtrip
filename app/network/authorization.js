export const authorize = (type, email, password) => {
    console.log("ass");
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLM1JnNX9bUvOqf2l5gemhgjw5Ywc8NZk',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        if(!response.ok){
            throw new Error('Error');
        }

        console.log(response);

        const authData = await response.json();
        dispatch({type: type});
    }
} 

export const bitch = () => {
    console.log("butch");
}