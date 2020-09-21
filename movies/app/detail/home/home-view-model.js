const Observable = require("data/observable").Observable;
const ObservableArray = require("data/observable-array").ObservableArray;
const fetchModule = require("fetch");
const host = "https://qnamakerns.azurewebsites.net/qnamaker";

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;

  return strTime;
}

function createViewModel() {
  const viewModel = new Observable();
  viewModel.userMsg = "";
  viewModel.chats = new ObservableArray([]);
  viewModel.listView = null;

  viewModel.onChat = function () {
    if (viewModel.userMsg.trim() == "html") {
      const botReply = {
        "who": "bot",
        "image": "https://raw.githubusercontent.com/shiv19/nativescript-rivescript-demo/master/app/assets/bot.png",
        "message": "Good Job",
        "timestamp": formatAMPM(new Date())
      };
      botReply.message = "<b><i>bold text</i></b>";
      viewModel.chats.push(botReply);
      const count = viewModel.listView.items.length;
      viewModel.listView.scrollToIndex(count - 1);

    } else if (viewModel.userMsg.trim() !== "") {
      viewModel.chats.push({
        "who": "user",
        "image": "https://raw.githubusercontent.com/shiv19/nativescript-rivescript-demo/master/app/assets/user.png",
        "message": viewModel.userMsg,
        "timestamp": formatAMPM(new Date())
      });
      fetchModule.fetch(host + "/knowledgebases/5590c377-70a6-4d6a-9712-142eb6f42b05/generateAnswer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": "958b87b6-4d91-4678-b4d4-d33be14a38ee",
        },
        body: JSON.stringify({
          "question": viewModel.userMsg
        })
      })
        .then((response) => {
          if (!response.ok) {
            if (!responseObj.error) {
              responseObj.error = "Something went wrong!";
            }
            return 'test';
          }
          return response.json();
        })
        .then((response) => {
          const botReply = {
            "who": "bot",
            "image": "https://raw.githubusercontent.com/shiv19/nativescript-rivescript-demo/master/app/assets/bot.png",
            "message": "",
            "timestamp": formatAMPM(new Date())
          };
          if (response.error) {
            console.log("couldn't talk to bot");
            botReply.message = "Something went wrong";
          }
          else {
            botReply.message = response.answers[0].answer;
          }
          console.log(response.answers[0].answer);
          //console.log("onChat response: ", response);
          viewModel.chats.push(botReply);
          const count = viewModel.listView.items.length;
          viewModel.listView.scrollToIndex(count - 1);
        });
      viewModel.set("userMsg", "");
    }
  };

  return viewModel;
}

exports.createViewModel = createViewModel;