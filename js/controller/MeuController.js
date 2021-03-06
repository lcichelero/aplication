//A Variavel myApp foi criada no arquivo myApp.js
myApp.controller('MeuController', function($scope) {
	
	$scope.pessoa = {}; //Instancia o objeto newPessoa
	$scope.caption = 'Enviar';


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


	//Salvar dados
	$scope.enviaDados = function( pessoa ){
		if ($scope.caption == 'Enviar'){
			var newPessoa = angular.copy(pessoa);
			$scope.dados.push(newPessoa);
			delete $scope.pessoa;

		}else{
			var newPessoa = angular.copy(pessoa);
			$scope.dados[ $scope.idx ] = newPessoa;
			delete $scope.pessoa;
			$scope.caption = 'Enviar';			
		}
	}

	//Excluir dados
	$scope.excluirDados = function(item){

		$scope.dados.splice(item,1);
		delete $scope.pessoa;
		$scope.caption = 'Enviar';
	}

	$scope.editarDados = function( item ){
		$scope.idx = item ;
		$scope.caption = 'Atualizar';
		$scope.pessoa = angular.copy( $scope.dados[ item ] );
		
	}
	
    
})
