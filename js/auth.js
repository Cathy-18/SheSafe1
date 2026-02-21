// REGISTER
async function registerUser(email, password) {

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        alert(error.message);
        return;
    }

    alert("Registration successful!");
    window.location.href = "dashboard.html";
}

// LOGIN
async function loginUser(email, password) {

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert(error.message);
        return;
    }

    window.location.href = "dashboard.html";
}

// LOGOUT
async function logoutUser() {
    await supabase.auth.signOut();
    window.location.href = "index.html";
}