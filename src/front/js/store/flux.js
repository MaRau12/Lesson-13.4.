const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			customers: [{id:1, email:"jaja@email.com"}],
			products: [],
			categories: []
		},
		actions: {
			addNewCustomer: (email) => {
				const customers = getStore().customers;
				let newId = 0;
				for(let x = 0; x < customers.length; x++) {
					if (customers[x].id > newId) {
						newId = customers[x].id;
					}
				}
				let newCustomer = { id: newId + 1, email: email }
				setStore({ customers: [...customers, newCustomer] })
			},

			getAllCustomers: async () => {
				const response = await fetch(process.env.BACKEND_URL + "/api/customer");
				const data = await response.json();
				setStore({ customers: data.customers })
				return data;
			  },

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading data", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
