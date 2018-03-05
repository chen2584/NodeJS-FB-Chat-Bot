/*const login = require("facebook-chat-api");

login({email: "chainzaza@hotmail.com", password: ""}, (err, api) => {
    if(err) return console.error(err);

    var hours = new Date().getHours();

    api.listen((err, message) => {

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
        }
        console.log(message);
        console.log(api);
    });
});*/

