const API = {
    getDeals: function(){
        return $.ajax({
            url: "api/deals/",
            method: "GET"
        })
    },
    getDealByID: function(dealID){
        return $.ajax({
            url: "api/deals/" + dealID,
            method: "GET"
        })
    },
    postNoteByID: function(dealID, note){
        return $.ajax({
            url: "api/notes/" + dealID,
            method: "POST",
            data: note
        })
    }
}


// **************************************************
// EXECUTIONS
// **************************************************

// Listening to click of list to display Notes
$(document).on("click", "#display-note", function(){
    console.log('clicked')
    $('#notes').empty();
    var thisID = $(this).data('id');
    // Get deal by id then create a note
    API.getDealByID(thisID).then(function(data){
        // console.log(data)
        // The title of the article
        $("#notes").append("<h2>" + data.title + "</h2>");
        // An input to enter a new title
        $("#notes").append("<input id='titleinput' name='title' placeholder='Note Title'>");
        // A textarea to add a new note body
        $("#notes").append("<textarea id='bodyinput' name='body' placeholder='Note Body'></textarea>");
        // A button to submit a new note, with the id of the article saved to it
        $("#notes").append("<button data-id='" + data._id + "' id='save-note'>Save Note</button>");

        // If there's a note in the article
        if (data.note) {
        // Place the title of the note in the title input
        $("#titleinput").val(data.note.title);
        // Place the body of the note in the body textarea
        $("#bodyinput").val(data.note.body);
      }
    })
})

// Listening to click of saving note to database
$(document).on('click', '#save-note', function(){
    var thisID = $(this).data('id');
    var note = {
        // Value taken from title input
        title: $("#titleinput").val(),
        // Value taken from note textarea
        body: $("#bodyinput").val()
    }
    // console.log(note)
    // Post the change to note based on the form
    API.postNoteByID(thisID, note).then(function(data){
        $('#notes').empty();
    });

    // Also, remove the values entered in the input and textarea for note entry
    $("#titleinput").val("");
    $("#bodyinput").val("");
})