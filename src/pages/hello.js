import React from 'react'
import {observer} from 'mobx-react'

import store from '../store'

const Hello = () => {
	const {getState,update,dispatch} = store
	const state = getState()
	const {hello} = state
	const {name} = hello

	const handleChange = () => {
		update({
			name: 'hello',
			payload: {
				name: '刘玮'
			}
		})
	}

	const handleEffect = () => {
		dispatch({
			type: 'hello/ceshi',
			payload: {
				name: 'lw'
			}
		})
	}
	return (
		<div>
			{name}
			hello world
			<button onClick={handleChange}>add</button>
			<div>
				<button onClick={handleEffect}>测试effects</button>
			</div>
		</div>
	)
}

export default observer(Hello)
