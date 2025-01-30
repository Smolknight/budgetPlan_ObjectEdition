let expense={
    totalIncome:0,
    rentExpense:0,
    totalExpense:0,
    utilitiesExpense:0,
    groceriesExpense:0,
    transportExpense:0,
    entertainmentExpense:0,
    miscExpense:0,
    monthSavingGoal:0,

    get getTotal(){
        return this.totalIncome
    },
    get getRent(){
        return this.rentExpense
    },
    get getUtil(){
        return this.utilitiesExpense
    },
    get getGroceries(){
        return this.groceriesExpense
    },
    get getTransport(){
        return this.transportExpense
    },
    get getEntertain(){
        return this.entertainmentExpense
    },
    get getMisc(){
        return this.miscExpense
    },


    set getTotal(value){
        return this.totalIncome=value
    },
    set getRent(value){
        return this.rentExpense=value
    },
    set getUtil(value){
        return this.utilitiesExpense=value
    },
    set getGroceries(value){
        return this.groceriesExpense=value
    },
    set getTransport(value){
        return this.transportExpense=value
    },
    set getEntertain(value){
        return this.entertainmentExpense=value
    },
    set getMisc(value){
        return this.miscExpense=value
    }
}



function addSalary(){
    let salary=document.getElementById('salaryInput')
        if(salary.value>0){
            expense.getTotal=salary.value
            updateSum()
            salary.value=''
        }
}

function addRent(){
    let rent=document.getElementById('rentInput')
    let util=document.getElementById('utilitiesInput')

    if(rent.value>0){
        expense.getRent=rent.value
        updateSum()
        rent.value=''
    }
}

function addUtilities(){
    let util=document.getElementById('utilitiesInput')

    if(util.value>0){
        expense.getUtil=util.value
        updateSum()
        util.value=""
    }
}

function addGroceries(){
    let grocer=document.getElementById('groceriesInput')

    if(grocer.value>0){
        expense.getGroceries=grocer.value
        updateSum()
        grocer.value=""
    }
}

function addTransport(){
    let transport=document.getElementById('transportInput')

    if(transport.value>0){
        expense.getTransport=transport.value
        updateSum()
        transport.value=""
    }
}

function setSavingsGoal(){
    let saving=document.getElementById('savingsInput')

    if(saving.value>0){
        expense.monthSavingGoal=saving.value
        updateSum()
        saving.value=""
    }
}



function updateSum(){
    document.getElementById('totalIncome').innerHTML=expense.getTotal

    document.getElementById('housingExpenses').innerHTML=Number(expense.getRent) + Number(expense.getUtil)

    document.getElementById('livingExpenses').innerHTML=Number(expense.getGroceries)+Number(expense.getTransport)

    document.getElementById('savingsGoal').innerHTML=expense.monthSavingGoal

    document.getElementById('actualSavings').innerHTML=(Number(expense.totalIncome)-)-Number(expense.monthSavingGoal)
}
