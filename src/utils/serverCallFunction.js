import axios from 'axios';

export async function serverCallHandler(method, route, data) {
	switch (method) {
		case 'GET':
			try {
				const res = await axios.get(route);
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		case 'POST':
			try {
				const res = await axios.post(route, data);
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		case 'PUT':
			try {
				const res = await axios.put(route, data);
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		case 'DELETE':
			try {
				const res = await axios.delete(route, data);
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		default:
			return 'Invalid method Input';
	}
}

export async function serverCallWithAuthorizationHeaders(method, route, token, data) {
	switch (method) {
		case 'GET':
			try {
				const res = await axios.get(route, {
					headers: {
						Authorization: token,
					},
				});
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		case 'POST':
			try {
				const res = await axios.post(route, data, {
					headers: {
						Authorization: token,
					},
				});
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		case 'DELETE':
			try {
				const res = await axios.delete(route, {
					headers: {
						Authorization: token,
					},
					data,
				});
				return { response: res.data, success: true };
			} catch (err) {
				return { response: err.message, success: false };
			}
		default:
			return 'Wrong method input';
	}
}
