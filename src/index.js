document.addEventListener("DOMContentLoaded", () => {
 
  let description = document.getElementById('new-task-description')
  let btn = document.querySelector('#create-task-form')

  btn.addEventListener('submit', function(event){
    event.preventDefault()
    let ul = document.getElementById('tasks')
    let li = document.createElement('li')
      ul.appendChild(li)
      li.innerText = description.value

      // let colors = ["high", "medium", "low"]

  //Create and append select list
  let selectList = document.createElement("select");
  selectList.id = "mySelect";
  li.appendChild(selectList);

  //Create and append the options
  let option = document.createElement("option");
  option.value = 'high'
  option.id = 'red'
  option.text = 'high'
  selectList.appendChild(option)

  let option1 = document.createElement("option");
  option1.value = 'medium'
  option1.id = 'yellow'
  option1.text = 'medium'
  selectList.appendChild(option1)

  let option2 = document.createElement("option");
  option2.value = 'low'
  option2.id = 'green'
  option2.text = 'low'
  selectList.appendChild(option2)

//   for (let i = 0; i < 3; i++) {
//     let option = document.createElement("option");
//     option.value = colors[i];
//     option.text = colors[i];
//     selectList.appendChild(option);
// }
// let color1 = document.querySelectorAll('option')[0]
// let color2 = document.querySelectorAll('option')[1]
// let color3 = document.querySelectorAll('option')[2]
// color1.style.color = "red"
// color2.style.color = "yellow"
// color3.style.color = "green"

    let btn1 = document.createElement('button')
    li.appendChild(btn1)
    btn1.innerText = "x"

    btn1.addEventListener('click', function(event){
      event.preventDefault()
      ul.removeChild(li)
  });
    
  });

});