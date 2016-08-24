module.exports = (function(){
	if(process.env.PLATFORM){
		return {
			PORT : proces.env.PORT
		}
	}else{
		return {
			PORT : 3002
		}
	}
})()
