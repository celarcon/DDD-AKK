import cleanNonSet from '../utils/cleanNonSet'

export type JSONRecord = Record<string, unknown>
export type responseFetch = any

export default class Fetch {
	static async get(
		baseUrl: string,
		queryParams?: Record<string, string>,
	): Promise<responseFetch> {
		const endpoint: Endpoint = new Endpoint(baseUrl)
		endpoint.setQuery(queryParams)
		return await Fetch.call('GET', endpoint.toUrl())
	}

	static async post(
		baseUrl: string,
		payload: JSONRecord,
	): Promise<responseFetch> {
		const endpoint: Endpoint = new Endpoint(baseUrl)
		return await Fetch.call('POST', endpoint.toUrl(), payload)
	}

	static async put(
		baseUrl: string,
		payload: JSONRecord,
	): Promise<responseFetch> {
		const endpoint: Endpoint = new Endpoint(baseUrl)
		await Fetch.call('PUT', endpoint.toUrl(), payload)
	}

	static async delete(baseUrl: string): Promise<responseFetch> {
		const endpoint: Endpoint = new Endpoint(baseUrl)
		return await Fetch.call('DELETE', endpoint.toUrl())
	}

	private static async call(
		method: string,
		endpoint: string,
		body?: JSONRecord,
	): Promise<responseFetch> {
		const response: Response = await fetch(
			endpoint,
			Fetch.requestOptions(method, body),
		)
		return response
	}

	private static requestOptions(method: string, body?: JSONRecord): JSONRecord {
		const options: JSONRecord = {
			method,
			headers: Fetch.headers(),
			body: JSON.stringify(body),
		}
		return cleanNonSet(options)
	}

	private static headers(): Record<string, string> {
		const headers: Record<string, string> = {
			'content-type': 'application/json;charset=UTF-8',
		}
		return headers
	}
}

class Endpoint {
	private readonly QUERY_SYMBOL: string = '?'
	private readonly QUERY_SEPARATOR: string = '&'
	private readonly baseUrl: string = import.meta.env.VITE_REACT_APP_API
	private route: string = ''
	private query: string = ''

	constructor(route: string) {
		this.route = route
	}

	setQuery(params?: Record<string, string>): void {
		let result: string = ''
		result += this.QUERY_SYMBOL
		for (const param in params) {
			result += `${param}=${params[param]}`
			result += this.QUERY_SEPARATOR
		}
		result = result.slice(0, -1)
		this.query = result
	}

	toUrl(): string {
		return encodeURI(this.baseUrl + this.route + this.query)
	}
}
