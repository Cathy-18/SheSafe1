const SUPABASE_URL = "https://enuumdnfebipvlvplfce.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_x8_7gxicTfwWGrKN_ap13A_J1xG3-fE";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);async function loadProfile() {

    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("userEmail").innerText =
        "Email: " + data.user.email;
}

loadProfile();