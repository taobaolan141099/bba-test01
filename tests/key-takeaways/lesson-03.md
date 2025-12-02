//Git

File .gititnore sẽ bỏ qua không kiểm tra khi sử dụng, không cần thiết để đưa lên Repo như các file sau
    - File tạm thời của hệ điều hành: (.DS_Store, Thumbs.db)
    - Thư mục dependencies: (node_modules/, vendor/)
    - File build và artifacts (dist/, build/, *.exe)
    - File cấu hình cá nhân (IDE settings, environment variables)
    - File nhạy cảm (API keys, passwords, certificates)
    - File log và database local
thì sẽ điền tên file hoặc folder đấy vào file .gititnore 

git commit --amend 
- Commit này được dùng để thêm xóa sửa nội dung trong commit trước đó mà không tạo thêm 1 commit mới 

git commit --amend -m "message"
- Commit này được dùng để edit lại message của commit trước đó và không làm thay đổi nội dung của commit trước đó

git restore --staged <file>
- Commit này dùng để lấy 1 hoặc nhiều file đã được đưa vào Staging area quay về working directory

git restore --staged .
- Lấy hết các file ở Staging area về working directory

git reset HEAD~1
- commit này dùng để Undo. Dễ hiểu hơn thì commit đã được push lên main thì sẽ xóa commit này và quay về working directory nhưng vẫn giữ lại các thay đổi của commit đó

git reset HEAD~n
- commit này sẽ lùi lại nhiều commit theo ý định mình cần. 
VD: commit main, 1, 2, 3, 4, 5. git reset HEAD~2 thì sẽ reset lại về commit 3 và vẫn giữ những thay đổi của commit 4, 5 

git pull origin main/main
- commit này dùng để lấy code từ main/master commit về máy mình
- Luôn luôn phải pull code trước khi tạo 1 nhánh mới

git branch
- Dùng để kiểm tra mình đang ở nhánh nào (Xem danh sách các nhánh đang có)

git branch <Name>
- Luôn luôn phải pull code trước khi tạo 1 nhánh mới
- Dùng để tạo nhánh mới

git checkout <Name> 
- Dùng để chuyển qua nhánh mình cần 
    vd: git checkout lesson-03 > Đã di chuyển qua nhánh lesson-03

git checkout -b <Name>
- Tạo 1 nhánh mới và di chuyển tới nhánh đó

git branch -D <Name>
- Dùng để xóa 1 nhánh 
- Nên di chuyển qua nhánh khác trước khi xóa nhánh mình cần
    VD: có 4 nhánh. Master, 1, 2, 3. Cần xóa nhánh 2 thì phải di chuyển qua 1 trong 3 nhánh còn lại là Master, 1, 3 sau đó mới xóa nhánh 2


//Javascript

các Convensions khi đặt tên file:
- snake_case: chưa dùng
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class    

let T1 = "text";
let t2 = 
{
    x1: "text"  ,
    x2:
    {
        y3: "text123",
        y4: "text456"
    }
}

các cách để print ở Js:
- console.log("text");
- console.log(`text`);
- console.log('text');
- console.log(`text: ${T1}`);
- console.log(T1);
- console.log(t2.x1);
- console.log(t2.x1.y3);
- console.log(t2["x1"]);
- console.log(t2["x1"]["y4"]);