module.exports = (function(){
	if(process.env.PLATFORM){
		return {
			PORT : process.env.PORT
		}
	}else{
		return {
			PORT : 3002
		}
	}
})()
