//it will normalize the data
function processTransactions(data) {
    let trans_arr = []
    let check_arr = []
    data.forEach(element => {
        if (element.hasOwnProperty("user") && element.hasOwnProperty("type") && element.hasOwnProperty("amount")) {
            let user_name = element.user.toLowerCase().trim()
            let type_name = element.type.toLowerCase().trim()
            let amount_value = Number(element.amount)
            if (!user_name || !type_name || isNaN(amount_value)) return;
            let temp_obj = { user: user_name, type: type_name, amount: amount_value }
            if (!check_arr.includes(user_name + type_name + amount_value)) {
                trans_arr.push(temp_obj)
                check_arr.push(user_name + type_name + amount_value)
            }
        }
    });
    return trans_arr;
}

//It will takes data which went through processTransactions
function final_transaction(data) {
    let check_user = []
    let final_trans_list = []
    data.forEach((element) => {
        if (!check_user.includes(element.user)) {
            if (element.type == "credit") {
                let obj = { user: element.user, amount: element.amount };
                final_trans_list.push(obj)
                check_user.push(element.user)
            }
            else if (element.type == "debit") {
                let obj = { user: element.user, amount: -(element.amount) };
                final_trans_list.push(obj)
                check_user.push(element.user)
            }
            else {
                return;
            }
        }
        else if (check_user.includes(element.user)) {
            if (element.type == "credit") {
                let index = final_trans_list.findIndex(obj => obj.user == element.user)
                final_trans_list[index].amount += element.amount;
            }
            else if (element.type == "debit") {
                let index = final_trans_list.findIndex(obj => obj.user == element.user)
                final_trans_list[index].amount -= element.amount;
            }

        }
    })
    return final_trans_list;
}

//user data
let transactions = [
    { user: "Kirten", type: "credit", amount: "5000" },
    { user: "Kirten", type: "debit", amount: "2000" },
    { user: "Anu", type: "credit", amount: "abc" },
    { user: "Kirten", type: "credit", amount: "3000" },
    { user: "Anu", type: "debit", amount: "1000" },
    { user: "Bob", type: "credit", amount: "7000" }
]

//Application
let normalized_data = processTransactions(transactions)
let final_trans_data = final_transaction(normalized_data)
console.log(final_trans_data)