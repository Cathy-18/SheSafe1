async function checkUser() {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        window.location.href = "login.html";
    }
}

checkUser();