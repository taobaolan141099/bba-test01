//Js

- var là biến toàn cục (không có block scope)
- let cũng là biến toàn cục (có block scope)
- function (có block scope)

- Hoisting: Js sẽ tự di chuyển các khai báo biến lên đầu phạm vi của biến để thực thi trước

- continue: bỏ qua vòng lặp và bỏ qua cả đoạn code ở phía dưới sau đó chạy tới vòng lặp tiếp theo.

- break: khi gặp break sẽ trực tiếp dừng vòng lặp và không chạy nữa.

- ternary operator: 1 cách viết ngắn gọn cho if.. else.
    VD: let status = (age >= 18) ? "người lớn" : "trẻ em";
        trong () là điều kiện, 
        "" đầu tiên là giá trị khi điều kiện đúng
        "" thứ 2 là giá trị khi điều kiện sai 

switch case:
VD: 
switch ()
{
    case 1: 
        console.log();
        break;
    case 2:
        console.log();
        break;
}
- Thì switch () () này sẽ điền giá trị cần để check ở đây
- nếu đúng giá trị ở case 1 thì sẽ log ra và dừng vòng lặp ngay lặp tức.
- nếu đúng giá trị ở case 2 thì sẽ log ra và dừng vòng lặp ngay lặp tức.

for...in 
- Thường dùng cho object
let xyz = {
    "A": 20,
    "B": 10,
    "C": 5,
};
for(let abc in xyz ) {
    console.log(abc);
}
- abc ở đây sẽ là thuộc tính đầu tiên của object xyz
    VD: khi log ra sẽ là A B C

for(let abc in xyz ) {
    console.log(abc);
    console.log(xyz.abc);
}
- đối với trường hợp này js sẽ hiểu là mình đang tạo thêm thuộc tính mới cho object
    VD: khi log ra sẽ như sau A B C xyz

Để có thể xuất ra giá trị của object khi dùng for..in thì sẽ như sau
for(let abc in xyz ) {
    console.log(xyz[abc]);
}


for...of
- thường dùng cho arr cú pháp tương tự for...in

forEach
- Không thể dùng break hay continue
- forEach này sẽ lặp qua từng phần tử có trong mảng
const arr = ["1","2","3","4",];
arr.forEach(value, index) => {
    console.log(value);
    console.log(index);
}
- output value sẽ là giá trị trong mảng 
    VD: 1 2 3 4 
- output index sẽ là thứ tự các giá trị trong mảng
    VD: 0 1 2 3

Utils func:
1 số các Utils thường dùng
- trim(): cắt khoảng trắng 2 đầu
    trimStart(): cắt khoảng trắng bên trái
    trimEnd(): cắt khoảng trắng bên phải
    
- toLowerCase(): Chuyển chuỗi thành chữ thường
    
- toUpperCase(): Chuyển chuỗi thành chữ hoa
    
- include(<substring>): Dùng để kiểm tra xem chuỗi cha có trước chuỗi con không. Sẽ trả về true false
    VD: let name = "Tôi là Lân";
        console.log(name.include("L")) => có L nên nó sẽ báo là true
    
- replace(); sẽ thay thế giá trị cũ bằng giá trị mới
    
- split(); tách chuỗi 
    
- substring(Start End): sẽ lấy các giá trị từ start là thứ tự bắt đầu đến end là thứ tự kết thúc
    VD: let name = "Tôi là Lân";
        console.log(name.substring(0, 6)); nó sẽ in ra "Tôi là"
    Có thể ghi như sau console.log(name.substring(6)); nó sẽ in ra từ vị trí thứ 6 tới hết
    
- indexOf(): Tìm vị trí của chuỗi con mình cần tìm

- map: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài
    VD: const numbers = ["1","2","3","4",];
    const double = numbers.map(num => num * 2); //num sẽ được xem như là khai báo 1 biến  

    console.log(double); //sẽ tạo ra mảng mới có kết quả của numbers *2
    console.log(numbers); //sẽ trả ra kết quả ban đầu vì không bị thay đổi

    VD: const students = ['An','Bình'];
    const studentLists = students.map((name, index) => ({
        id: index + 1,
        name: name,
        code: `SV00${index+1}`    
    }));
    
    console.log(studentLists);
    // [
        {id: 1, name: 'An', code: `SV001` },
        {id: 2, name: 'Bình', code: `SV002` },
    ]

- filter: Tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện trong hàm callback. Trả về mảng đã được lọc. Cú pháp tương tự với map

- find: Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện. Trả về undefined nếu không tìm thấy. Cú pháp tương tự với map

- reduce: Duyệt qua mảng và tích lũy các phần tử thành một giá trị duy nhất (số, chuỗi, object...) dựa trên hàm callback
let numbers = [1,2,3,4];
let sum = numbers.reduce((total,num) => total + num, 0); //số 0 là giá trị khởi tạo cho total. vd nếu là 1 thì total = 1
console.log (sum); 

- some: Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện hay không. Trả về true/false.
let numbers = [1,2,3,4];
const hasEven = numbers.some(num => {
    console.log(`Checking: ${num}`);
    return num % 2 === 0;
})
//checking: 1
//checking: 2. chia hết cho 2 => True. Dừng không kiểm tra nữa.

- every: Kiểm tra xem tất cả phần tử trong mảng có thỏa mãn điều kiện hay không. Trả về true/false.

- sort: Sắp xếp các phần tử trong mảng theo thứ tự (mặc định là alphabet/tăng dần). Thay đổi mảng gốc.
    compare function: trả về 
        số âm: a đứng trước b
        số 0: giữ nguyên vị trí
        số dương: b đứng trước a


- push: Thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng gốc và trả về độ dài mới.

- pop: Xóa và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc và làm giảm độ dài.

- shift: Xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc và làm giảm độ dài.

- unshift: Thêm một hoặc nhiều phần tử vào đầu mảng. Thay đổi mảng gốc và trả về độ dài mới của mảng.
