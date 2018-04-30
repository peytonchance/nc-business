window.businesses = {
    params: {}
};

function fetchData() {
  // Added business01 to url to make it work
    $.get("/business01/api/" + $.param(window.businesses.params))
        .done(function(data) {
            $('#raw-json').text(JSON.stringify(data, null, '  '));
            // Add data to global container
            window.businesses.data = data;

            // Re-render the bar chart
            // window.businesses.bar.render();
        })
        .fail(function(){
            console.log("Could not load data");
            alert("Could not load data");
        });
}

function init(){
    function updateSelections() {
        // var params = window.businesses.params || {};
        fetchData();

    }


    updateSelections();
    // Initialize bar chart

    initBar(window.businesses);
}

// Call init on DOMReady
$(init);
