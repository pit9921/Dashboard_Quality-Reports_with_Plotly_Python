/* Parameters for percentageBars renderer:
1.string: square as default or round for a rounded bar.
2.string: A hex color for the text.
3.string: A hex color for the bar.
5.string: A hex color for the background.
6.integer: A number used to round the value.
7.string: A border style, default=ridge (solid, outset, groove, ridge)
*/

$(document).ready(function() {
  // DataTable initialization
  var table = $('table.dataframe.dataframe').DataTable({
    "dom": '<"dt-buttons"Bf><"clear">lirtp',
    "paging": true,
    "autoWidth": true,
    "initComplete": function(settings, json) {
      // Change the placeholder of the search input
      $('.dataTables_filter input').attr('placeholder', 'Enter search criteria.');
    },
    "language": {
      "search": "<span class='blue-text'>Search:</span>", // Apply the blue-text class
      "paginate": {
        "previous": "previous", // Translate "Previous"
        "next": "next",
      },
      "info": "<span class='blue-text'>Showing _START_ to _END_ of _TOTAL_ entries</span>", // Apply the blue-text class
      "lengthMenu": "<span class='blue-text'>Show _MENU_ Entries</span>", // Apply the blue-text class

    },
    "columnDefs": [
      {
        "targets": [2, 6, 7, 8, 9, 10, 11], // Hide all columns except 1, 2, and 3
        "visible": false
      }
    ],
    
    "buttons": [
      {
        extend: 'colvis',
        text: 'Manage columns',
        className: 'custom-button-color'
      },
      {
        text: 'Show all columns',
        action: function(e, dt, node, config) {
          dt.columns().visible(true);
        },
        className: 'custom-button-color'
      },
      {
        extend: 'copyHtml5',
        text: 'Copy',
        className: 'custom-button-color'
      },
      {
        extend: 'csvHtml5',
        text: 'Export CSV',
        className: 'custom-button-color'
      },
      {
        extend: 'excelHtml5',
        text: 'Export Excel',
        className: 'custom-button-color'
      },
      {
        extend: 'pdfHtml5',
        text: 'Export PDF',
        className: 'custom-button-color'
      },
      {
        extend: 'print',
        text: 'Print',
        className: 'custom-button-color'
      },
      {
        text: 'Filter modules in the table',
        action: function(e, dt, node, config) {
          dt.column(5).search('Module').draw();
        },
        className: 'custom-button-color female-button bg-B00020 text-white'
      }
    ]
  });
  
});



