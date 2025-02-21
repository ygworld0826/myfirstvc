// ✅ 1. DOM에서 필요한 요소 가져오기
const usernameInput = document.getElementById("username");
const successMessage = document.querySelector(".success-message");
const failureMessage = document.querySelector(".failure-message");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const mismatchMessage = document.querySelector(".mismatch-message");
const submitBtn = document.getElementById("submit-btn");

// ✅ 2. 아이디 길이 4 이상 검사 함수
function isMoreThan4Length(value) {
  return value.length >= 4;
}

// ✅ 3. 두 개의 비밀번호 값 일치 여부 검사 함수
function isMatch(password1, password2) {
  return password1 === password2;
}

// ✅ 4. 아이디 입력 시 유효성 검사
usernameInput.addEventListener("keyup", function () {
  if (isMoreThan4Length(usernameInput.value)) {
    successMessage.classList.remove("hide");
    failureMessage.classList.add("hide");
  } else {
    successMessage.classList.add("hide");
    failureMessage.classList.remove("hide");
  }
});

// ✅ 5. 비밀번호 확인 입력 시 유효성 검사
passwordConfirmInput.addEventListener("keyup", function () {
  if (isMatch(passwordInput.value, passwordConfirmInput.value)) {
    mismatchMessage.classList.add("hide"); // ✅ 비밀번호 일치 → 메시지 숨김
  } else {
    mismatchMessage.classList.remove("hide"); // ❌ 비밀번호 불일치 → 메시지 표시
  }
});

// ✅ 6. 폼 전체 유효성 검사 및 회원가입 버튼 활성화
function validateForm() {
  if (
    isMoreThan4Length(usernameInput.value) &&
    isMatch(passwordInput.value, passwordConfirmInput.value)
  ) {
    submitBtn.disabled = false; // ✅ 조건 충족 → 버튼 활성화
  } else {
    submitBtn.disabled = true; // ❌ 조건 미충족 → 버튼 비활성화
  }
}

// ✅ 7. 모든 입력 필드에서 변화가 있을 때 회원가입 버튼 활성화 검사 실행
[usernameInput, passwordInput, passwordConfirmInput].forEach(input =>
  input.addEventListener("input", validateForm)
);

