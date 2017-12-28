import * as types from '../constants'

export function fetchPostionSearchTextAction(text,input,output) {
	return {
		type: types.SEARCHTEXT.SUCCESS,
		payload: function(){
			var searchText = ''
			var arrayPosition = []
			for(var i = 0; i <text.length; i++){
				if(text[i].toUpperCase() === input[0].toUpperCase()){
					searchText= '';
					for(var j = i; j < i + input.length; j++){
						if(j<text.length){
							searchText+=text[j]
						}
					}
					if(searchText.toUpperCase() === input.toUpperCase()){
						arrayPosition.push(i+1);
						i = i + input.length - 1;
					}
				}
			}

			if(arrayPosition.length<=0){
				output = "<no matches>"
				return output
			}
			output = arrayPosition.join()
			return output
		}
	}
}