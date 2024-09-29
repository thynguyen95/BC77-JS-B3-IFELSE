let number1 = 5;
let number2 = 10;
let number3 = "5";

// typeof: để kiểm tra kiểu dữ liệu

// ==: chỉ so sánh giá trị
// ===: so sánh giá trị và kiểu dữ liệu
console.log("number1 == number2", number1 == number2); //false
console.log("number1 == number3", number1 == number3);
console.log("number1 === number3", number1 === number3);

// !=
// !==
console.log("number1 != number2", number1 != number2); //true
console.log("number1 != number3", number1 != number3);
console.log("number1 !== number3", number1 !== number3);

// >, >=, <, <=
console.log("number1 > number2", number1 > number2); // false
console.log("number1 > number3", number1 > number3);

// so sánh chuỗi
let user1 = "Tien";
let user2 = "Tiennn";
console.log("user1 === user2", user1 === user2);
console.log("user1 > user2", user1 > user2);
console.log("user1 < user2", user1 < user2);

// Toán tử phủ định
let isLogin = false;
console.log("isLogin: ", isLogin);
console.log("isLogin: ", !isLogin);
console.log("isLogin: ", !!isLogin);

// toán tử và: && , hoặc: ||
// &&: tất cả các điều kiện đều đúng thì mới trả về true, chỉ cần 1 điều kiện false => false
// ||: chỉ cần 1 điều kiện true => true
let HL = 7.5;
let HK = "tot";
console.log(HL > 8 && HK === "tot");
// false  &&   true => false
console.log(HL > 8 || HK === "tot");
// false  || true => true

// Cấu trúc điều kiện if
/*
    if (biểu thức điều kiện) {
        nếu mà biểu thức điều đúng thì sẽ thực hiện code bên trong này
    }
*/
let age = 16;
if (age > 16) {
  console.log("Bạn đủ tuổi để xem bộ phim này ");
}

document.querySelector("#kiemTraSoDuong").onclick = function () {
  let number = +document.querySelector("#number").value;
  let result = document.querySelector("#result");

  if (number > 0) {
    result.innerHTML = "Đây là số dương";
  }
};

// cấu trúc if else - else if
/*
  if (biểu thức điều kiện) {
    nếu biểu thức điều kiện đúng chạy code trong này 
  } else {
    nếu biểu thức điều kiện sai chạy code trong này 
  }

  if (biểu thức điều kiện 1) {
    nếu biểu thức điều kiện 1 đúng chạy code trong này 
  } else if(biểu thức điều kiện 2) {
    nếu biểu thức điều kiện 1 sai và biểu thức điều kiện 2 đúng chạy code trong này 
  } else {
    nếu các biểu thức điều kiện bên trên sai thì chạy code trong này
  }
*/

document.querySelector("#kiemTraDiemSo").onclick = function () {
  let diemSo = +document.querySelector("#diemSo").value;
  let result = document.querySelector("#result2");

  if (diemSo >= 8) {
    result.innerHTML = "giỏi";
  } else if (diemSo >= 6.5) {
    result.innerHTML = "khá";
  } else if (diemSo >= 5) {
    result.innerHTML = "trung bình";
  } else {
    result.innerHTML = "yếu";
  }
};

// Toán tử 3 ngôi
/*
  biểu thức điều kiện ? hành động 1 : hành động 2
  hành động 1: là code sẽ được thực thi khi biểu thức đúng
  hành động 2: là code sẽ được thực thi khi biểu thức sai
*/
let isRegister = true;

let isCheckRegister = isRegister
  ? "Người dùng đã đăng ký"
  : "Người dùng chưa đăng ký";
console.log("isCheckRegister: ", isCheckRegister);

// cấu trúc điều kiện switch case
/*
  switch case chỉ sử dụng với so sánh bằng(===) và những trường hợp biết trước
  switch(giá trị truyền vào để so sánh) {
    case tenCase:
      Nội dung xử lý khi case thỏa điều kiện
      break;
    case tenCase:
      Nội dung xử lý khi case thỏa điều kiện
      break;
    case tenCase:
      Nội dung xử lý khi case thỏa điều kiện
      break;
    default:
      nội dung xử lý khi những case trên ko thỏa đk => tương ứng với else cuối cùng trong if else

    sau mỗi case phải có break 
    break có tác dụng thoát khỏi switch khi thỏa điều kiện
  }
*/

let day = "thứ hai";
// "thứ hai" === "thứ hai" => true
switch (day) {
  case "thứ hai":
    console.log("Thứ hai");
    break;
  case "thứ ba":
    console.log("Thứ ba");
    break;
  case "thứ tư":
    console.log("Thứ tư");
    break;
  default:
    console.log("bạn nhập sai");
    break;
}

let month = "4";
// "4" === 4 => false
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 9:
  case 11:
    console.log("31 ngày");
    break;
  case 2:
    console.log("28");
    break;
  case 4:
  case 6:
  case 8:
  case 10:
  case 12:
    console.log("30 ngày");
    break;
  default:
    console.log("bạn nhập sai");
    break;
}
