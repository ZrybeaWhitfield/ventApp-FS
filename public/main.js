var trash = document.getElementsByClassName("fa-trash");



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const _id = this.parentNode.parentNode.getAttribute("data-ventID")
        console.log(_id);
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "_id": _id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const date = this.parentNode.parentNode.childNodes[1].innerText
//         const vent = this.parentNode.parentNode.childNodes[3].innerText
//         const moood = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'date': date,
//             'vent': vent,
//             'mood': mood
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
