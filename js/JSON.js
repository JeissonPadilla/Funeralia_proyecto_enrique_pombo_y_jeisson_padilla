$(document).ready(function() {
    const temp = [{
        "id": "europa",
        "name": "europa"
      },
      {
        "id": "asia",
        "name": "asia"
      },
      {
        "id": "norteamerica",
        "name": "norteamerica"
      },
      {
        "id": "suramerica",
        "name": "suramerica"
      },
      
    ];
    var $select = $('#estados');

    //alert(options);
    $.each(temp, function(id, name) {
      $select.append('<option value=' + name.id + '>' + name.name + '</option>');
    });
  }); 