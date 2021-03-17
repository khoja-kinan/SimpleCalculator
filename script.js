function insert(num){
    document.form.textView.value = document.form.textView.value + num;
}

function clean (){
    document.form.textView.value = "";
}

function equal() {
    let val = document.form.textView.value;
    if(val){
        document.form.textView.value = eval(document.form.textView.value);
    }
}

function del(){
    let val = document.form.textView.value;
    document.form.textView.value = val.substring(0,val.length-1);
}