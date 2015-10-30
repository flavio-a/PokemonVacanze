console.log('search_dex.js');

var pokemonList;

//read the list from a file
$.getJSON("../resources/dexList.json", function(json) {
    pokemonList = new List('pokemon-list', options, json);
});

var options = {
    item: '<li><span class="element"></a></li>'
};

//functions for filtering
$('#dex_search').keyup(function () {
	var filterStr = $('#dex_search').val().toLowerCase();
	pokemonList.filter(function(item) {
	if (item.values().name.toLowerCase().indexOf(filterStr) > -1) {
		return true;
	} else {
		return false;
	}
}); // Only items that contains filterStr are shown
})