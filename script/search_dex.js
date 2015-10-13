console.log('search_dex.js');

var options = {
    item: '<li><h4 class="name"><a href=link>Vino</a></h4></li>'
};

var values = [
    { name: 'Dragonite', link: 'pages/Dragonite.html' }
];

var pokemonList = new List('pokemon-list', options, values);

//functions for filtering
$('#dex_search').change(function () {
	var filterStr = $('#dex_search').val();
	pokemonList.filter(function(item) {
	if (item.values().name.indexOf(filterStr) > -1) {
		return true;
	} else {
		return false;
	}
}); // Only items that contains filterStr are shown
})