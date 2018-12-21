var color; 
// size n and m for height and width 
var n; 
var m;
// starts the event
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    n = $('#inputHeight').val();
    m = $('#inputWeight').val();
    color = $('#colorPicker').val();
    makeGrid(n, m);
})
// create the grid with loop
function makeGrid(n, m) {
    $('tr').remove();
    for (var i=0; i<n; i++) {
        $('#pixelCanvas').append('<tr></tr>');
        for (var j=0; j<m; j++) {
            $('tr').last().append('<td></td>');
        }

    }
    $('table').on('click','td',function(){
        color = $('#colorPicker').val();
          $(this).css('background-color',color);
      });
      $("button").click(function(){
        $("#box").animate({height: "300px"});
    });
    $('tr, td').animate({width: '1em', height: '1em', speed: 'milliseconds'}
    );
      
    }

