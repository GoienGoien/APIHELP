//Agregar Usuario
function submit(formData) {
    // Enviar la solicitud AJAX
    $.ajax({
        url: postUser_route,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
            console.table(response)
            
            if (response.Success) {
                // Obtener el valor de la cookie
                console.log("Se ha creado un nuevo usuario")
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Manejar cualquier error que ocurra durante la solicitud AJAX
            console.error('Error:', textStatus, errorThrown);
        }
    });        
}
//MOSTRAR TODOS LOS USUARIOS
function getAllUsers() {
    $.ajax({
        url: allUsers_route,
        method: 'GET',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            users = response;
            ul = document.querySelector('.users');
            ul.innerHTML = ""; //TODOS LOS USUARIOS SE MOSTRARAN COMO ELEMENTOS LI EN UNA LISTA
            response.forEach(user => {
                ul.innerHTML += '<li><strong>Id_User:</strong>'+ user.Id_User +'<br>' +
                '<strong>Fullname:</strong>' + user.Fullname + '<br>' +
                '<strong>Title:</strong>' + user.Title + '<br>' +
                '<strong>Location:</strong>' + user.Location + '<br>' +
                '<strong>Description:</strong>' + user.Description + '<br>' +
                '<strong>Availability:</strong>' + user.Availability + 
            '</li>'
            })
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Manejar cualquier error que ocurra durante la solicitud AJAX
            console.error('Error:', textStatus, errorThrown);
        }
    });   
}

//EL EDITUSER FUNCTION ESTA EN INDEX.HTML 