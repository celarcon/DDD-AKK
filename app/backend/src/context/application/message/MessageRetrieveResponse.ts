import { SortByCriteria } from '../../shared/domain/types/CriterialRequest'
import { PagerResponse } from '../../shared/domain/types/PagerResponse'

export interface MessageRetrieve {
	id: string
	name: string
	text: string
}

export type MessageRetrieveResponse = {
	data: Array<MessageRetrieve>
	pager: PagerResponse
	sortedBy: SortByCriteria
	error?: string
}
