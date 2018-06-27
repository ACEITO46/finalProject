var dinner = [];
var overall = 100;
 

		function split(){
				return {
					name: document.getElementById('friends').value,
					percentage: document.getElementById('percentage').value,
					total: document.getElementById('AmmountDue').value,
				}
			};

		function saveData(){
			if (overall > 0) {
				dinner.push( split() );
				// alert(dinner[dinner.length - 1].name + " has been added!");
				displaytotal();
				mathtime();
				overall -= document.getElementById('percentage').value;
				document.getElementById('friends').value = " ";
				document.getElementById('percentage').value = 0;
			}
		};
				
		function displaytotal(){
				document.getElementById('display').innerHTML = '';
				
				for(var i=0; i<dinner.length; i++){
					document.getElementById('display').innerHTML += '<li>' +  dinner[i].name + ' owes you $' +
					mathtime(dinner[i].percentage,dinner[i].total) + '</li>';
				}
		};
			
		function mathtime (percentage,total){
			return  percentage / 100 * total;
			
		};
			
			
		
