let xhr = new XMLHttpRequest();
let url = "https://tonyspizzafactory.herokuapp.com/api/pizzas";
xhr.open("GET", url, true);
xhr.onreadystatechange= function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
    console.log(json)

        name.push("nummer1");
        console.log(nummer1);
        var todoList = [];
        function rememberTo(task) {
            todoList.push(task);
        }



}
xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
xhr.send(null);}