const login = require("facebook-chat-api");
const sql = require('mssql');
const SqlString = require('sqlstring');
const wordcut = require('wordcut');

wordcut.init();

const getResponse = async (message) => {
    try {
        let messageSplit = wordcut.cut(message).split('|');
        console.log(messageSplit);

            //.input("name", sql.NVarChar, "Woram")
            //.query("select * from Customers where cus_name like '%' + @name + '%'");

        messageSplit.forEach(function(item, index, object) {
            if (item.trim() === '') {
                object.splice(index, 1);
            }
        });
        let strQuery = 'SELECT Res_Message FROM ChatResponse';
        messageSplit.forEach((result, index) => {
            if(index > 0) 
                strQuery += ` OR Message = ?`;
            else 
                strQuery += ` WHERE Message = ?`;
        });
        console.log(strQuery);
        let pool = await sql.connect('mssql://admin:password@localhost/Facebook');
        let result1 = await pool.request().query(SqlString.format(strQuery, messageSplit));
        console.dir(result1);
        pool.close();
    }
    catch(err) {
        console.log("Error: " + err);
    }
}

getResponse("สวัสดี eiei");

/*login({email: "emailll", password: "passwordd"}, (err, api) => {
    if(err) return console.error(err);

    var hours = new Date().getHours();

    api.listen((err, message) => {

        getResponse(message);

        if(message.body.indexOf("เชนสุดหล่อ") >= 0) {
            api.sendMessage("พูดจาได้ดี", message.threadID);
        }
        else if(message.body.indexOf("เชน")) {
            api.sendMessage("จ๋าาาาาาา", message.threadID);
        }
        else if(hours >= 9 && hour <= 13 && hours >= 14 && hours <= 18) {
            api.sendMessage("เชนนั่งทำงานหัวไหม้อยู่จ้า พักเมื่อไหร่เดียวตอบกลับนะ ^^", message.threadID);
        }
        else {
            api.sendMessage("ไม่เข้าใจ รอเชนกลับมาก่อนนะ", message.threadID);
        }*
        console.log(message);
        console.log(api);
    });
});*/