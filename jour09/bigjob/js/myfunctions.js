function verify_email(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function verify_platform(email) {
    return email.endsWith("@laplateforme.io");
}