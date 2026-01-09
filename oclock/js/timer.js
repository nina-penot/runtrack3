const myinputs = easy_class_get("timer_input");
const my_inp_groups = easy_class_get("timer_group");

const start_btn = easy_id_get("start_btn");

//let test = easy_find_child(my_inp_groups[1], "button");

for (i = 0; i < my_inp_groups.length; i++) {

    //get buttons
    let buttons = easy_find_child(my_inp_groups[i], "button");
    //separate buttons
    let up_btn = buttons[0];
    let down_btn = buttons[1];

    //get input target
    let target_input = easy_find_child(my_inp_groups[i], "input", 0);

    target_input.addEventListener("input", (e) => {
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
        console.log(e)

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
        console.log(e)

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