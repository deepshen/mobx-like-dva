

export default {
	namespace: 'hello',
	state: {
		name: 'lw'
	},
	effects:{
		async ceshi(payload,{get,update,dispatch}){
			const data = await new Promise((resove,reject) => {
				setTimeout(() => {
					resove('刘玮')
				},1000)
			})
			update({
				name: 'hello',
				payload: {
					name: data
				}
			})
		}
	}
}
