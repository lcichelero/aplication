//A Variavel myApp foi criada no arquivo myApp.js
myApp.controller('MeuController', function($scope) {
	
	$scope.pessoa = {}; //Instancia o objeto newPessoa

	$scope.dados = [{
		id : 1,
		nome : 'Leandro Cichelero',
		telefone : '(46) 1111-7989',
		email : 'lcichelero@ciss.com.br'
	},{
		id : 2,
		nome : 'Kelly Meurer',
		telefone : '(46) 2222-73349',
		email : 'kelly@ciss.com.br'
	},{
		id : 3,
		nome : 'Pedro Lucas M. Cichelero',
		telefone : '(46) 3333-73349',
		email : 'pedro@gmail.com.br'
	},{
		id : 4,
		nome : 'Sandrinha',
		telefone : '(46) 4444-73349',
		email : 'sandrinha@gmail.com.br'
	}];

	$scope.enviaDados = function( pessoa ){

	var newPessoa = angular.copy(pessoa);
	$scope.dados.push(newPessoa);
	$scope.pessoa = {};

	}

})
