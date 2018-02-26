export interface mainState{
	data: any;
	isLoading: boolean;
	productDetailsData: any;
}

export const main_app_state : mainState = {
	data : [],
	isLoading: true,
	productDetailsData: {}
}