var product = [     		{ 	name:candle;
								id:305;
								size:5;
								color:blue;
							},
							{

								name:candle;
								id:305;
								size:5;
								color:blue;
							},
							
							{
								name:books;

								id:400;
								size:5;
								color:blue;	



							}	,
							{


								name:books;
								id:401;
								size:;
								color:green;
							},

							{

								name: shoes;
								id:500;
								size:10;
								color:grey;	



							}

];

var search_input= document.GetElementById("searchbar");

function sEarch {

var search = _.where(product, {name: search_input});
document.GetElementById("list").innerHTML= search;

}

