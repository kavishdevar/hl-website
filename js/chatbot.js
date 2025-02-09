
        const botAvatar = "/assets/chatbot/bot.png"; 

        let userAvatar = "/assets/chatbot/user.png";

        function sendMessage() {
            let inputField = document.getElementById("user-input");
            let chatBox = document.getElementById("chat-box");
            let userText = inputField.value.trim();
            if (userText === "") return;

            let user_msg_cont = document.createElement("div");
            user_msg_cont.classList.add("message-container");

            let userPfp = document.createElement("img");
            userPfp.src = userAvatar;
            userPfp.classList.add("pfp");

            let user_msg = document.createElement("div");
            user_msg.classList.add("message", "user-message");
            user_msg.textContent = userText;

            user_msg_cont.appendChild(user_msg);
            user_msg_cont.appendChild(userPfp);
            chatBox.appendChild(user_msg_cont);

            let bot_msg = getbot_msg(userText);
            let bot_msg_cont = document.createElement("div");
            bot_msg_cont.classList.add("message-container");

            let botPfp = document.createElement("img");
            botPfp.src = botAvatar;
            botPfp.classList.add("pfp");

            let botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot-message");
            botMessage.textContent = bot_msg;

            bot_msg_cont.appendChild(botPfp);
            bot_msg_cont.appendChild(botMessage);
            chatBox.appendChild(bot_msg_cont);

            inputField.value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function enterSend(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        }

        function getbot_msg(input) {
            let responses = {
                "hello": "Hi there! How can I help you?",
                "hi": "Hi there! How can I help you?",
                "hey": "Hi there! How can I help you?",
                "how are you": "I'm just a bot, but I'm doing great!",
                "who are you": "I'm a simple chatbot!",
                "sup": "Hey! How can I help you today?",
                "what's up": "Hey! How can I help you today?",
                "good morning": "Good morning! How can I assist you?",
                "good afternoon": "Good afternoon! How can I assist you?",
                "good evening": "Good evening! How can I assist you?",
                "good night": "Good night! Have a great sleep!",
                "thank": "You're welcome! Feel free to ask me anything!",
                "bye": "Goodbye! Have a great day!",
                "see ya": "See ya later! Take care!",
                "cya": "See ya later! Take care!",
                "see you": "See ya later! Take care!",
                "help": "I'm here to help! What do you need assistance with?",
                "assistance": "I'm here to help! What do you need assistance with?",
                "support": "I'm here to help! What do you need assistance with?",
                "problem": "I'm here to help! What seems to be the problem?",
                "your name":"I'm blummy!",
                "what is hacklumina":"Hacklumina is a hackathon in Delhi/NCR in summer 2025!",
                "what is hacklumina'25":"Hacklumina is a hackathon in Delhi/NCR in summer 2025!"
                

            };
            

            input = input.toLowerCase();
            for (let key in responses) {
                if (input.includes(key)) {
                    return responses[key];
                }
            }
            return "I'm not sure how to respond to that.";
        }