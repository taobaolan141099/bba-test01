//git

git init  
- Dùng để khởi tạo nơi lưu trữ, Chỉ cần nhập 1 lần khi mở lại working area

git add .  
- Dùng để add hết các file đã được chỉnh sửa ở lần này vào staging area

git add Tên file 
- Dùng để add 1 file cần thiết lên staging area 
    - VD: git add 00-Git-key-takeaway.md
    - VD: Nếu muốn add 1 lúc 2 file thì git add 00-Git-key-takeaway.md 01-JS-key-takeaways.md

git commit -m "name" 
- Dùng để commit code lên repo. Nên dùng thêm các loại convension để phân biệt từng commit được push lên repo. 

git status 
- Dùng để check status của các file trong repo. 
    - File màu xanh: vùng staging
    - File màu đỏ: vùng working directory

git log 
- Dùng để check các commit đã được commit lên repo trước 

//Javascript

Console.log() 
- Dùng để Print ra 1 nội dung nào đó mà mình cần

var: có thể khai báo biến mọi kiểu dữ liệu như boolean, string, number, v.v.v   
- Var cũng có thể khai báo lại nhiều lần vd: var x = 1; var x = 2;
- Phạm vi của var khi khai báo trong biến có thể log ra khi ra khỏi biến (không có block scope)

let: Có thể cập nhật lại giá trị của biến chứ không cho phép tái khái báo lại biến đó. 
- Phạm vi của var khi khai báo trong biến khi ra khỏi biến thì sẽ không log được (không dùng được ngoài block {})
- Nên dùng let khi cần chắc chắn gán lại giá trị nào đó

Const: dùng để khai báo các giá trị không có nhu cầu thay đổi hoặc giá trị chỉ dùng một lần     
- Nên mặc định dùng const - giúp code an toàn hơn, dễ đọc hơn

Các kiểu dữ liệu 
    Number
    Boolean
    String
    Undefined
    Null
    Symbol
    BigInt

Các toán tử 
    + - * / > < >= <=

    ! //khác
    
    ==  //Dữ liệu sẽ tự chuyển đổi kiểu dữ liệu để so sánh
    
    === //Dữ liệu không thể tự chuyển đổi kiểu dữ liệu để so sánh
    
    && và
    
    || hoặc
    
    ++x; tăng trước rồi mới log
    
    x++; log trước r mới tăng

