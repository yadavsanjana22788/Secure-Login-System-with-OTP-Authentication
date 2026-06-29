// Store generated OTP
alert("JavaScript Loaded!");
let generatedOTP = "";
let countdown;
let timeLeft = 60;

// Generate OTP
function sendOTP() {
    const email = document.getElementById("email").value;

    if (email.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    // Generate a random 6-digit OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    // Print OTP in browser console
    console.clear();
    console.log("================================");
    console.log("Generated OTP:", generatedOTP);
    console.log("================================");

    document.getElementById("message").style.color = "lightgreen";
    document.getElementById("message").innerHTML =
        "OTP generated! Check the browser console (F12 → Console).";

    startTimer();
}

// Verify OTP
function verifyOTP() {
    const enteredOTP = document.getElementById("otpInput").value;

    if (enteredOTP === generatedOTP) {
        document.getElementById("message").style.color = "lightgreen";
        document.getElementById("message").innerHTML =
            "✅ Login Successful!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML =
            "❌ Invalid OTP!";
    }
}

// Resend timer
function startTimer() {
    clearInterval(countdown);

    timeLeft = 60;

    const resendBtn = document.getElementById("resendBtn");
    resendBtn.disabled = true;

    countdown = setInterval(function () {
        resendBtn.innerHTML = "Resend OTP (" + timeLeft + "s)";
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdown);
            resendBtn.disabled = false;
            resendBtn.innerHTML = "Resend OTP";
        }
    }, 1000);
}
