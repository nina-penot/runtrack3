const myinputs = easy_class_get("timer_input");
const my_inp_groups = easy_class_get("timer_group");

const start_btn = easy_id_get("start_btn");

//let test = easy_find_child(my_inp_groups[1], "button");

//Setup buttons for each input and makes them accept only numbers
for (i = 0; i < my_inp_groups.length; i++) {

    //get buttons
    let buttons = easy_find_child(my_inp_groups[i], "button");
    //separate buttons
    let up_btn = buttons[0];
    let down_btn = buttons[1];

    //get input target
    let target_input = easy_find_child(my_inp_groups[i], "input", 0);

    target_input.addEventListener("input", (e) => {

        if (!parseInt(e.data) && e.data != null && e.data != 0) {
            console.log(e.data)
            let index = target_input.value.indexOf(e.data);
            console.log(index)
            let test = target_input.value.slice(0, index) + target_input.value.slice(index + 1);
            target_input.value = test;
        }

        if (parseInt(target_input.value) > target_input.max) {
            target_input.value = target_input.max;
        }
        if (parseInt(target_input.value) < target_input.min) {
            target_input.value = target_input.min;
        }
    })

    //functions used for buttons
    function increment_time() {
        if (!target_input.value) {
            target_input.value = 1;
        } else {
            if (Number(target_input.value) < target_input.max) {
                let num = Number(target_input.value);
                num += 1;
                target_input.value = num;
            }
        }
    }

    function decrement_time() {
        if (!target_input.value) {
            target_input.value = target_input.max;
        } else {
            if (Number(target_input.value) > target_input.min) {
                let num = Number(target_input.value);
                num -= 1;
                target_input.value = num;
            }
        }
    }

    //makes up button increment time
    up_btn.addEventListener("click", increment_time)

    up_btn.addEventListener("mousedown", (e) => {

        let timeout, interval;

        timeout = setTimeout(function () {
            interval = setInterval(function () {
                increment_time();
            }, 50);
        }, 300);

        up_btn.addEventListener('mouseup', clearTimers);
        up_btn.addEventListener('mouseleave', clearTimers);

        function clearTimers() {
            clearTimeout(timeout);
            clearInterval(interval);
        }

    });

    //Makes down button lower time
    down_btn.addEventListener("click", decrement_time);

    down_btn.addEventListener("mousedown", (e) => {

        let timeout, interval;

        timeout = setTimeout(function () {
            interval = setInterval(function () {
                decrement_time();
            }, 50);
        }, 300);

        down_btn.addEventListener('mouseup', clearTimers);
        down_btn.addEventListener('mouseleave', clearTimers);

        function clearTimers() {
            clearTimeout(timeout);
            clearInterval(interval);
        }

    });
}

//Setup start button

start_btn.addEventListener("click", (e) => {
    //get the values
    const inp_values = {
        hour: parseInt(myinputs[0].value),
        minute: parseInt(myinputs[1].value),
        second: parseInt(myinputs[2].value)
    }
    let starttime = (Date.now()) / 1000;
    //create a result element
    let id_value = save_timer(inp_values.hour, inp_values.minute, inp_values.second, starttime);
    //have a delete button next to it
    const del_btn = easy_quick_create("button", ["btn btn-danger"], "Supprimer");
    //save it to localstorage
    //append the result element to body
    //add an interval every seconds decrementing time
    //when reaches 0, delete interval
    //might need timeout instead? for page change
});