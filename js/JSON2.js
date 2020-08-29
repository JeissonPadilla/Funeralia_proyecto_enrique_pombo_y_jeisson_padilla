$(document).ready(function() {
    const temp = [{
        "id": "soltero",
        "name": "soltero"
      },
      {
        "id": "casado",
        "name": "casado"
      },
      {
        "id": "viudo",
        "name": "viudo"
      },
      {
        "id": "union libre",
        "name": "union libre"
      },
      
    ];
    var $select = $('#estado');

    //alert(options);
    $.each(temp, function(id, name) {
      $select.append('<option value=' + name.id + '>' + name.name + '</option>');
    });
  }); 

  $(document).ready(function() {
    const temp = [{
        "id": "1",
        "name": "1"
      },
      {
        "id": "2",
        "name": "2"
      },
      {
        "id": "3",
        "name": "3"
      },
      {
        "id": "4",
        "name": "4"
      },
      
    ];
    var $select = $('#estrato');

    //alert(options);
    $.each(temp, function(id, name) {
      $select.append('<option value=' + name.id + '>' + name.name + '</option>');
    });
  }); 